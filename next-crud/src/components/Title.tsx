import React from 'react';

interface ITitleProps {
    children: React.ReactNode
}

const Title = (props: ITitleProps) => (
    <div className={`flex flex-col justify-center`}>
        <h1 className={`pl-7 px-5 text-2xl`}>
            {props.children}
        </h1>
        <hr className={`border-2 border-purple-500`} />
    </div>
)

export default Title