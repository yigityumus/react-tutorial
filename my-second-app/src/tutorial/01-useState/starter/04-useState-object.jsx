import { useState } from "react";

const data = [
	{
		name: "Peter",
		age: 24,
		hobby: "Reading Book",
	},
	{
		name: "John",
		age: 21,
		hobby: "Computer Games",
	},
	{
		name: "Ashley",
		age: 22,
		hobby: "Playing Violin",
	},
	{
		name: "Alexandra",
		age: 26,
		hobby: "Playing Tennis",
	},
];

const UseStateObject = () => {
	const [index, setIndex] = useState(0);

	const handleClick = () => {
		// Increment the index to move to the next person in the data array
		setIndex((prevIndex) => (prevIndex + 1) % data.length);
	};

	const person = data[index];

	return (
		<>
			<h2>{person.name}</h2>
			<h2>{person.age}</h2>
			<h2>{person.hobby}</h2>
			<button type="button" className="btn" onClick={handleClick}>
				Show Next Person
			</button>
		</>
	);
};

export default UseStateObject;
