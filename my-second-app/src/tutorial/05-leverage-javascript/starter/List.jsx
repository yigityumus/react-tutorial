import { Person } from "./Person";
import { people } from "../../../data";

const List = () => {
	return (
		<div>
			<ul>
				{people.map((person) => {
					return <Person key={person.id} {...person} />;
				})}
			</ul>
		</div>
	);
};
export default List;
