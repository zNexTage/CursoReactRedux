import React from 'react';
import Title from './Title';

interface ILayoutProps {
    title: string;
    children: React.ReactNode
}

const Layout = (props: ILayoutProps) => (
    <div className={`
        flex flex-col w-2/3
        bg-white text-gray-800 rounded-md
    `}>
        <Title>
            {props.title}
        </Title>
        <div className={`p-6`}>
            {props.children}
        </div>
    </div>
);

export default Layout;