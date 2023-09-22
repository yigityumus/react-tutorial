import { useEffect, useState } from "react";

const UseEffectBasics = () => {
	const [value, setValue] = useState(0);
	const [secondValue, setSecondValue] = useState(0);

	useEffect(() => {
		console.log("hello from first use effect");
	}, []);
	useEffect(() => {
		console.log("hello from second use effect");
	}, []);

	return (
		<div>
			<h1>Value : {value}</h1>
			<button className="btn" onClick={() => setValue(value + 1)}>
				Increase Value
			</button>
			<h1>Second Value : {secondValue}</h1>
			<button className="btn" onClick={() => setSecondValue(secondValue + 1)}>
				Increase Second Value
			</button>
		</div>
	);
};
export default UseEffectBasics;
