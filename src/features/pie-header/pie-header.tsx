import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

import { 
    fetchLinkAsync,
    selectStatus
} from './pie-headerSlice';
import styles from './pie-header.module.css';

export interface HeaderProps {
    link: string
    title: string
}


export function Header(props: HeaderProps) {
    const status = useAppSelector(selectStatus);
    const dispatch = useAppDispatch();
    return (
        <header className={styles.header}>
            <h1>
                {props.title} Status = {status}
            </h1>
            <button onClick={() => dispatch(fetchLinkAsync(props.link))}>Learn About PIE2</button>
            <button onClick={() => dispatch(fetchLinkAsync(props.link))}>Learn About USGS</button>
        </header>
    )
    
}