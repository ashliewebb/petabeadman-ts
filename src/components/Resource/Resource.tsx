import React from 'react';
import styles from './Resource.module.scss';
import Link from "next/link";

type ResourceProps = {
    title: string;
    description: string;
    linkUrl: string;
    linkLabel: string;
}

export const Resource = ({title, description, linkUrl, linkLabel}: ResourceProps) => {
    return (
        <div className={styles.resource}>
            <Link className={styles.resourceLink} href={linkUrl} target={'_blank'}>
                <h3>{title}</h3>
                {description && <p>description</p>}
                <span className={styles.resourceLinkCopy}>{linkLabel}</span>
            </Link>
        </div>
    )
}
