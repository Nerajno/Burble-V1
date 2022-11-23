import React from 'react';
import ProTypes from 'prop-types';

const Button = props => {
    return (
        <button 
        className={`btn ${props.className}`}
        onClick={props.onClick ? () => props.onClick() : null}
        >
            {ProTypes.children}
        </button>
    )
}

export const OutlineButton = props => {
    return (
        <Button
        className={`btn-outline ${props.className}`}
        onClick={props.onClick ? () => props.onClick() : null}
        >
        {props.children}
        </Button>
    )
}


Button.propTypes = {
    onClick: ProTypes.func
}

export default Button;

