/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const ask = (q) => new Promise((res) => rl.question(q, res));
const toPascalCase = (name) => name.charAt(0).toUpperCase() + name.slice(1);

const createSlice = async () => {
    const inputName = await ask('🧩 Slice name (e.g. Hero): ');
    if (!inputName) {
        console.error('❌ Slice name is required.');
        rl.close();
        return;
    }

    const pascalName = toPascalCase(inputName);
    const sliceDir = path.join('src/slices', pascalName);

    if (fs.existsSync(sliceDir)) {
        console.error(`❌ Slice "${pascalName}" already exists.`);
        rl.close();
        return;
    }

    fs.mkdirSync(sliceDir, { recursive: true });

    const primary = {};
    const addIfYes = async (prompt, key, config) => {
        const answer = (await ask(prompt)).toLowerCase();
        if (answer === 'y') primary[key] = config;
    };

    await addIfYes('➕ Add heading (y/n)? ', 'title', {
        type: 'StructuredText',
        config: { label: 'Title', single: 'heading1' },
    });

    await addIfYes('📝 Add rich text (y/n)? ', 'content', {
        type: 'StructuredText',
        config: {
            label: 'Content',
            multi: 'paragraph, strong, em, hyperlink',
        },
    });

    await addIfYes('🖼️  Add image (y/n)? ', 'image', {
        type: 'Image',
        config: { label: 'Image' },
    });

    const addCTA = (await ask('🔗 Add CTA (label + link)? (y/n) ')).toLowerCase();
    if (addCTA === 'y') {
        primary.cta_label = {
            type: 'Text',
            config: { label: 'CTA Label' },
        };
        primary.cta_link = {
            type: 'Link',
            config: { label: 'CTA Link', select: 'web' },
        };
    }

    await addIfYes('🔘 Add toggle (boolean)? (y/n) ', 'enabled', {
        type: 'Boolean',
        config: { label: 'Enabled' },
    });

    const items = {};
    const useItems = (await ask('🔁 Add repeatable items? (y/n) ')).toLowerCase();
    if (useItems === 'y') {
        const addRepeatable = async (question, key, config) => {
            const answer = (await ask(question)).toLowerCase();
            if (answer === 'y') items[key] = config;
        };

        await addRepeatable('  ➕ Add item title? (y/n) ', 'item_title', {
            type: 'Text',
            config: { label: 'Item Title' },
        });

        await addRepeatable('  🖼️  Add item image? (y/n) ', 'item_image', {
            type: 'Image',
            config: { label: 'Item Image' },
        });

        await addRepeatable('  📝 Add item text? (y/n) ', 'item_text', {
            type: 'StructuredText',
            config: {
                label: 'Item Text',
                multi: 'paragraph, strong, em',
            },
        });
    }

    rl.close();

    // Write model.json
    const model = {
        type: 'Slice',
        name: pascalName,
        variation: 'default',
        display: pascalName,
        description: `Slice for ${pascalName}`,
        icon: 'image',
        primary,
        items,
    };

    fs.writeFileSync(
        path.join(sliceDir, 'model.json'),
        JSON.stringify(model, null, 2)
    );

    // Write index.tsx
    const component = `import { SliceComponentProps } from '@prismicio/react';
import { Content } from '@/.slicemachine/prismicio-types';
import styles from './${pascalName}.module.css';

export type ${pascalName}Props = SliceComponentProps<Content.${pascalName}Slice>;

export const ${pascalName}Slice = ({ slice }: ${pascalName}Props) => {
  return (
    <section className={styles.wrapper}>
      {/* TODO: Render slice content */}
      {slice.primary.title && <h1>{slice.primary.title}</h1>}
      {slice.primary.content && <p>{slice.primary.content}</p>}
      {slice.items?.length > 0 && (
        <ul>
          {slice.items.map((item, i) => (
            <li key={i}>{item.item_title}</li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default ${pascalName}Slice;
`;

    fs.writeFileSync(path.join(sliceDir, 'index.tsx'), component);

    // Write CSS
    const styles = `.wrapper {
  padding: 2rem;
  background-color: var(--color-bg-alt);
}
`;
    fs.writeFileSync(path.join(sliceDir, `${pascalName}.module.css`), styles);

    console.log(`✅ Slice "${pascalName}" created at src/slices/${pascalName}`);

    // Slice registry update (optional)
    const centralIndexPath = path.join('src/slices', 'index.ts');

    const variationId = pascalName
        .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
        .toLowerCase();

    const importLine = `import { ${pascalName}Slice } from './${pascalName}';`;
    const exportLine = `  '${variationId}': ${pascalName}Slice,`;

    let centralIndex = '';

    if (fs.existsSync(centralIndexPath)) {
        centralIndex = fs.readFileSync(centralIndexPath, 'utf8');
    } else {
        centralIndex = `// Auto-generated slice registry\n\n`;
        centralIndex += `// Individual slice imports\n\n`;
        centralIndex += `\nexport const components = {\n};\n`;
    }

    if (!centralIndex.includes(importLine)) {
        centralIndex = centralIndex.replace(
            '// Individual slice imports',
            `// Individual slice imports\n${importLine}`
        );
    }

    if (!centralIndex.includes(exportLine)) {
        centralIndex = centralIndex.replace(
            'export const components = {',
            `export const components = {\n${exportLine}`
        );
    }

    fs.writeFileSync(centralIndexPath, centralIndex, 'utf8');
    console.log(`🔗 Registered "${pascalName}" in src/slices/index.ts`);

    // Final tip
    console.log(`💡 Tip: Open Slice Machine UI and click "Save to filesystem" to sync this slice + regenerate types.`);
};

createSlice();
