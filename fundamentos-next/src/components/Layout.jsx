import React from 'react';
import Link from 'next/link';
import style from '../styles/Layout.module.css';
import Header from './Header';

const Layout = props => (
    <div className={style.Layout}>
        <div className={style.Header}>
            <Header title={props.title ?? 'Mais um exemplo'} />
            <Link href='/'>
                Voltar
            </Link>
        </div>
        <div className={style.Content}>
            {props.children}
        </div>
    </div>
)

export default Layout;