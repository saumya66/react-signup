import "./input.scss";
import { useState } from "react";

const Input = (props) => {
	const [text, setText] = useState("");
	const [stl, setStl] = useState("rgba(0, 0, 0, 0.1)");

	const handleChange = (event) => {
		setText(event.target.value);
		if (props.name === "password") {
			if (text.length < 8) setStl("red");
			else setStl("black");
		}
	};
	let inputType;
	props.name === "password" ? (inputType = "password") : (inputType = "text");
	if (props.name === "email") {
		inputType = "email";
	} else if (props.name === "password") {
		inputType = "password";
	} else inputType = "text";

	return (
		<div className="input">
			<div class="floating-label-group">
				<input
					type={inputType}
					name={props.name}
					value={text}
					onChange={handleChange}
					focus
					required
					style={{ border: `1px solid ${stl}` }}
				></input>
				<label className="floating-label">{props.label}</label>

				{props.name === "password" || props.name === "type" ? (
					<i className={`fa ${props.icon}`} aria-hidden="true"></i>
				) : null}
			</div>
		</div>
	);
};

export default Input;
