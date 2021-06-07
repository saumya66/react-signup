import "./App.scss";
import Login from "./components/login/Login.component";
function App() {
	return (
		<div className="App">
			<div className="left-col">
				<Login />
			</div>
			<div className="right-col">
				<div className="content">
					<h5>Dummy Heading</h5>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book
					</p>
				</div>
			</div>
		</div>
	);
}

export default App;
