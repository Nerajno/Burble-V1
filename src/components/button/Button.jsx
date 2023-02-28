import React from "react";
import PropTypes from "prop-types";

import "./button.scss";

const Button = (props) => {
	console.log( props, "1"); //Passing down className is broken
	return (
		<button
			className={`btn ${props.className}`}
			onClick={props.onClick ? () => props.onClick() : null}
		>
			{props.children}
		</button>
	);
};

export const OutlineButton = (props) => {

	return (
		<Button
			className={`btn-outline ${props.className}`}
			onClick={props.onClick ? () => props.onClick() : null}
		>
			{props.children}
		</Button>
	);
};

Button.propTypes = {
	onClick: PropTypes.func,
};

export default Button;


// console.log(props, "1"); || Passing down class is broken
// console.log(props, "2"); || Passing down class is broken