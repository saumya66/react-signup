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

const Login = () => {
	const [formInfo, setFormInfo] = useState(initialformObj);
	const [passColorValid, setPassColorValid] = useState("rgba(0, 0, 0, 0.1)");
	const [emailColorValid, setEmailColorValid] = useState("rgba(0, 0, 0, 0.1)");
	const [submitBtn, setSubmitBtn] = useState(initialSubmitObj);
	const [showPass, setShowPass] = useState({
		icon: "fa fa-eye",
		type: "password",
	});

	const passwordType = () => {
		console.log("hi");
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
		setFormInfo({ ...formInfo, [event.target.name]: event.target.value });
		if (event.target.name === "password") {
			if (event.target.value.length < 8) setPassColorValid("red");
			else setPassColorValid("rgba(0, 0, 0, 0.1)");
		}
		if (event.target.name === "email") {
			if (
				/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
					event.target.value
				)
			)
				setEmailColorValid("rgba(0, 0, 0, 0.1)");
			else setEmailColorValid("red");
		}
		if (
			formInfo.name !== "" &&
			formInfo.email !== "" &&
			formInfo.type !== "" &&
			formInfo.password !== "" &&
			/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
				event.target.value
			) &&
			event.target.value.length >= 8
		) {
			setSubmitBtn({ textColor: "white", backColour: "#286EFA" });
		} else {
			setSubmitBtn({ textColor: "rgba(0, 0, 0, 0.7)", backColour: "#ededed" });
		}
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
						style={{ border: `1px solid ${emailColorValid}` }}
					></input>
					<label className="floating-label">Your email</label>
				</div>
				<div class="floating-label-group">
					<input
						type="text"
						name="type"
						value={formInfo.type}
						onChange={handleChange}
						focus
						required
					></input>
					<label className="floating-label">
						I would describe my user type as
					</label>
					<button>
						<i className="fa fa-angle-down" aria-hidden="true"></i>
					</button>
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
					<label className="floating-label">I would describe my type as</label>
					<button onClick={passwordType}>
						<i className={showPass.icon} aria-hidden="true"></i>
					</button>
				</div>
			</form>
			<p className="pass-info">Minimum 8 characters</p>
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
