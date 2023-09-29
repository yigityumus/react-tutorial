import { useGlobalContext } from "./context";

function App() {
	const { name } = useGlobalContext();
	console.log(name);

	return (
		<p className="read-the-docs">
			Click on the Vite and React logos to learn more
		</p>
	);
}

export default App;
