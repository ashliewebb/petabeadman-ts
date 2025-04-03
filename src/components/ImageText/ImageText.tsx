import React from 'react';
import '@/styles/globals.css';
import styles from './ImageText.module.scss';

type ImageTextProps = {
    image: string;
    imageAlt: string;
    copy: React.ReactNode;
    imageDirection?: 'Left' | 'Right';
    imageRounded?: boolean;
    bgColour?: string;
}

export const ImageText = ({image, imageAlt, copy, imageDirection, imageRounded, bgColour}: ImageTextProps) => {
    return (
        <div className={`section`} style={{ backgroundColor: bgColour }}>
            <div className={`sectionInner ${styles.imageText} ${styles.imageTextImage + imageDirection}`}>
                <img className={`${styles.imageTextImage__img} ${imageRounded ? styles.imageTextImageRounded : ''}`} src={image} alt={imageAlt} width="300" />
                <div className={styles.imageTextCopy}>{copy}</div>
            </div>
        </div>
    )
}
