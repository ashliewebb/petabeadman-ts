import React from 'react';
import styles from '@/app/components/Cards/Cards.module.scss';
import stylesGlobal from "@/app/page.module.scss";

type CardsProps = {
    heading: string;
    copy?: string;
    children: React.ReactNode;
}

export const Cards = ({heading, copy, children}: CardsProps) => {
    return (
        <div className={styles.cards}>
            <h2 className={`${stylesGlobal.heading} ${stylesGlobal.heading2}`}>{heading}</h2>
            <div className={styles.cardsContent}>
                {copy && (<p>{copy}</p>)}
                {children}
            </div>
        </div>
    )
}