import Input from "./input/Input.component";
import "./login.scss";

const Login = () => {
	return (
		<div className="login">
			<h5>Let's set up your account</h5>
			<p>
				Already have an account ? <span className="span">Sign in</span>
			</p>
			<Input name="name" label="Your name" />
			<Input name="email" label="Email address" />
			<Input
				name="type"
				label="I would describe my user type as"
				icon="fa-eye"
			/>
			<Input name="password" label="Password" icon="fa-angle-down" />
			<p className="pass-info">Minimum 8 characters</p>
			<button className="btn">
				<p>Next</p>
			</button>
			<p className="bottom-text" type="submit">
				By clicking the "Next" button, you agree to creating a free account, and
				to <span>Terms of Service</span> and
				<span> Privacy Policy</span>
			</p>
		</div>
	);
};

export default Login;
