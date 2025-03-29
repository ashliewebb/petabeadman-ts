import React from 'react';
import styles from '@/app/components/Cards/Card.module.scss';

type CardProps = {
    title: string;
    description: string;
    image?: string;
    imageAlt?: string;
    imageWidth?: number;
    imageHeight?: number;
}

export const Card = ({title, description, image, imageAlt, imageWidth, imageHeight}: CardProps) => {
    return (
        <div className={styles.card}>
            {image && (
                <img className={styles.cardImage} src={image} alt={imageAlt} width={imageWidth} height={imageHeight}/>
                )}
            <h3>{title}</h3>
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
    )
}