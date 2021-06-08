import "./login.scss";
import { useState } from "react";

const initialformObj = {
	name: "",
	type: "",
	password: "",
	email: "",
};

const initialSubmitObj = {
	textColor: "rgba(0, 0, 0, 0.7)",
	backColour: "#ededed",
};

const emailInputInfo = {
	labelColor: "rgba(0, 0, 0, 0.6)",
	borderColor: "rgba(0, 0, 0, 0.1)",
	displayError: "none",
};

const Login = () => {
	const [formInfo, setFormInfo] = useState(initialformObj);
	const [passColorValid, setPassColorValid] = useState("rgba(0, 0, 0, 0.1)");
	const [submitBtn, setSubmitBtn] = useState(initialSubmitObj);
	const [emailInputState, setEmailInputState] = useState(emailInputInfo);
	const [showPass, setShowPass] = useState({
		icon: "fa fa-eye",
		type: "password",
	});

	const passwordType = (event) => {
		event.preventDefault();
		if (showPass.icon === "fa fa-eye") {
			setShowPass({
				icon: "fa fa-eye-slash",
				type: "text",
			});
		} else {
			setShowPass({
				icon: "fa fa-eye",
				type: "password",
			});
		}
	};

	const handleChange = (event) => {
		event.preventDefault();
		setFormInfo({ ...formInfo, [event.target.name]: event.target.value });
		console.log(formInfo.type);
		if (event.target.name === "password") {
			if (event.target.value.length < 8) setPassColorValid("red");
			else setPassColorValid("rgba(0, 0, 0, 0.1)");
		}
		if (event.target.name === "email") {
			if (
				/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
					event.target.value
				)
			) {
				setEmailInputState({
					labelColor: "rgba(0, 0, 0, 0.6)",
					borderColor: "rgba(0, 0, 0, 0.1)",
					displayError: "none",
				});
			} else {
				setEmailInputState({
					labelColor: "red",
					borderColor: "red",
					displayError: "flex",
				});
			}
		}
		if (
			formInfo.name !== "" &&
			formInfo.email !== "" &&
			formInfo.type !== "" &&
			formInfo.password !== "" &&
			/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
				formInfo.email
			) &&
			formInfo.password.length >= 8
		) {
			setSubmitBtn({ textColor: "white", backColour: "#286EFA" });
		} else {
			setSubmitBtn({ textColor: "rgba(0, 0, 0, 0.7)", backColour: "#ededed" });
		}
		console.log(submitBtn);
	};

	return (
		<div className="login">
			<h5>Let's set up your account</h5>
			<p>
				Already have an account ? <span className="span">Sign in</span>
			</p>
			<form>
				<div class="floating-label-group">
					<input
						type="text"
						name="name"
						value={formInfo.name}
						onChange={handleChange}
						focus
						required
					></input>
					<label className="floating-label">Your name</label>
				</div>
				<div class="floating-label-group">
					<input
						type="email"
						name="email"
						value={formInfo.email}
						onChange={handleChange}
						focus
						required
						style={{ border: `1px solid ${emailInputState.borderColor}` }}
					></input>
					<label
						className="floating-label"
						style={{ color: emailInputState.labelColor }}
					>
						Your email
					</label>

					<div
						className="email-error"
						style={{ display: emailInputState.displayError }}
					>
						<p className="error">Please enter a valid email address</p>
					</div>
				</div>
				<div class="floating-label-group">
					<select
						type="text"
						name="type"
						value={formInfo.type}
						onChange={handleChange}
						focus
						required
					>
						<option value="" disabled></option>
						<option value="Developer">Developer</option>
						<option value="Manager">Manager</option>
						<option value="Creator">Creator</option>
					</select>
					<label className="floating-label">
						I would describe my user type as
					</label>
				</div>
				<div class="floating-label-group">
					<input
						type={showPass.type}
						name="password"
						value={formInfo.password}
						onChange={handleChange}
						focus
						required
						style={{ border: `1px solid ${passColorValid}` }}
					></input>
					<label className="floating-label">Password</label>
					<button onClick={passwordType}>
						<i className={showPass.icon} aria-hidden="true"></i>
					</button>
					<p className="pass-info">Minimum 8 characters</p>
				</div>
			</form>
			<button
				className="btn"
				type="submit"
				style={{ backgroundColor: `${submitBtn.backColour}` }}
			>
				<p style={{ color: `${submitBtn.textColor}` }}>Next</p>
			</button>
			<p className="bottom-text">
				By clicking the "Next" button, you agree to creating a free account, and
				to <span>Terms of Service</span> and
				<span> Privacy Policy</span>
			</p>
		</div>
	);
};

export default Login;
