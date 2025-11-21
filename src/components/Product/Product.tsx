import React from 'react';
import styles from './Product.module.scss';
import Link from "next/link";

type ProductProps = {
    title: string;
    description: React.ReactNode;
    image?: string;
    imageAlt?: string;
    imageWidth?: number;
    imageHeight?: number;
    price: string;
    shipping?: string;
    linkUrl: string;
    linkLabel: string;
    mostPopular?: boolean;
}

export const Product = ({title, description, image, imageAlt, imageWidth, imageHeight, price, shipping, linkUrl, linkLabel, mostPopular}: ProductProps) => {
    return (
        <div className={`${styles.product} ${mostPopular ? styles.productMostPopular : ''}`}>
            {image && (
                <img className={styles.productImage} src={image} alt={imageAlt} width={imageWidth} height={imageHeight}/>
            )}
            <h3>{title}</h3>
            {description && <div className={styles.productDesc}>{description}</div>}
            {price && <p className={styles.productPrice}>{price}<span className={styles.productCurrency}>AUD</span></p>}
            {shipping ? <p className={styles.productShipping}>{shipping}</p> : <p>&nbsp;</p>}
            <Link className={`buttonPrimary`} href={linkUrl} target={'_blank'}>{linkLabel}</Link>
        </div>
    )
}
