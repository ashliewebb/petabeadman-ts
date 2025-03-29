import React from 'react';
import stylesGlobal from '@/app/page.module.scss';
import styles from './Text.module.scss';

type TextProps = {
    copy: string;
    bg_alt?: boolean;
    no_vertical_space?: boolean;
}

export const Text = ({copy, bg_alt, no_vertical_space}: TextProps) => {
    return (
        <div className={`${no_vertical_space ? stylesGlobal.sectionNoPadding : stylesGlobal.section} ${bg_alt ? stylesGlobal.sectionBgHighlight : ''}`}>
            <div className={stylesGlobal.sectionInner}>
                <div className={styles.text} dangerouslySetInnerHTML={{ __html: copy }}></div>
            </div>
        </div>
    )
}
