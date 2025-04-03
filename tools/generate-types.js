const { generateTypes } = require('@slicemachine/adapter-next/dist/commands/sm/index');

generateTypes().then(() => {
    console.log("✅ Prismic types generated successfully.");
}).catch((error) => {
    console.error("❌ Failed to generate Prismic types:");
    console.error(error);
    process.exit(1);
});
