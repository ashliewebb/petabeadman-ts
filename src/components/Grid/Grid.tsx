import React from 'react';
import '@/styles/globals.css';
import styles from './Grid.module.scss';

type GridProps = {
    bgColour?: string;
    heading?: string;
    copy?: React.ReactNode;
    gridCountWide?: string | '3';
    gridCountMed?: string | '2';
    children: React.ReactNode;
}

export const Grid = ({bgColour, heading, copy, gridCountWide, gridCountMed, children}: GridProps) => {
    const gridWide = (gridCountWide === '2'
        ? `${styles.gridWide2}`
        : gridCountWide === '3'
            ? `${styles.gridWide3}`
            : gridCountWide === '4'
                ? `${styles.gridWide4}`
                : "")

    const gridMed = (gridCountMed === '2'
        ? `${styles.gridWide2}`
        : gridCountWide === "3"
            ? `${styles.gridWide3}`
            : "")

    return (
        <div className={`section`} style={{ backgroundColor: bgColour }}>
            {heading && (
                <div className={`sectionInner ${styles.cards}`}>
                    {heading && <h2 className={`heading heading2`}>{heading}</h2>}
                    {copy && <div className={styles.gridIntro}>{copy}</div>}
                </div>
            )}
            <div className={`${styles.gridContent} ${gridWide} ${gridMed}`}>
                {children}
            </div>
        </div>
    )
}
