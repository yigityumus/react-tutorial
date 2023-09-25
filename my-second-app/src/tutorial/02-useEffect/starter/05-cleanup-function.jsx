import { useEffect, useState } from "react";

const CleanupFunction = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<div>
			<h2>cleanup function</h2>
			<button className="btn" onClick={() => setToggle(!toggle)}>
				Toggle
			</button>
			{toggle && <RandomComponent />}
		</div>
	);
};

const RandomComponent = () => {
	useEffect(() => {
		console.log("hmm, this is interesting");
		const intID = setInterval(() => {
			console.log("hello from interval");
		}, 1000);
		return () => {
			clearInterval(intID);
		};
	}, []);
	return <h1>Hello There</h1>;
};

export default CleanupFunction;
