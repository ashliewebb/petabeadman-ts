import React from 'react';
import stylesGlobal from '@/app/page.module.scss';
import styles from './ImageText.module.scss';

type ImageTextProps = {
    image: string;
    imageAlt: string;
    copy: string;
    image_direction?: 'Left' | 'Right';
    image_rounded?: boolean;
    bg_alt?: boolean;
}

export const ImageText = ({image, imageAlt, copy, image_direction, image_rounded, bg_alt}: ImageTextProps) => {
    return (
        <div className={`${stylesGlobal.section} ${bg_alt ? stylesGlobal.sectionBgHighlight : ''}`}>
            <div className={`${stylesGlobal.sectionInner} ${styles.imageText} ${styles.imageTextImage + image_direction}`}>
                <img className={`${styles.imageTextImage__img} ${image_rounded ? styles.imageTextImageRounded : ''}`} src={image} alt={imageAlt} width="300" />
                <div className={styles.imageTextCopy} dangerouslySetInnerHTML={{ __html: copy }}></div>
            </div>
        </div>
    )
}
