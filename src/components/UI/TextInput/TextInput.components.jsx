import React, { useState } from 'react';

import './TextInput.styles.scss';

const TextInput = ({ id, label, type = 'text', valid, validityMessage, handleChange, value, children = null }) => {
	const [touched, setTouched] = useState(false);

	return (
		<div className="form-control">
			<label htmlFor={id}> {label} </label>
			{type === 'select' ? (
				<select id={id} name={id} value={value} onChange={handleChange}>
					{children}
				</select>
			) : (
				<input
					type={type}
					className={!valid && touched ? 'invalid' : null}
					id={id}
					name={id}
					value={value}
					onChange={handleChange}
					onBlur={() => setTouched(true)}
				/>
			)}
			{validityMessage && !valid && touched && <p class="error-message"> {validityMessage} </p>}
		</div>
	);
};

export default TextInput;
