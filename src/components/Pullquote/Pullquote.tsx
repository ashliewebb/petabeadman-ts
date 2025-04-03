import React from 'react';
import '@/styles/globals.css';
import styles from './Pullquote.module.scss';

type PullquoteProps = {
    content: string;
    icon1: string;
    icon2: string;
}

export const Pullquote = ({content, icon1, icon2}: PullquoteProps) => {
    return (
        <div className={`${styles.pullquote} decoBorderBottom`} data-icon1={icon1} data-icon2={icon2}>
            <p>{content}</p>
        </div>
    )
}
