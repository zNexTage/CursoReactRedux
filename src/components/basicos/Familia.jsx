import React from 'react';
import FamiliaMembro from './FamiliaMembro';

const Familia = (props) => {
    return (
        <>
            {/* Clonando um elemento {React.cloneElement(props.children, { ...props })} */}
            {React.Children.map(props.children, element => {
                return React.cloneElement(element, props)
            })}
        </>
    )
}

export default Familia;