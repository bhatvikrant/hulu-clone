import Thumbnail from "./Thumbnail";

// REACT FLIP MOVE
import FlipMove from "react-flip-move";

// INTERFACES
import { Result } from "../pages";

interface Props {
	results: Result[]
}

const ResultsComponent: React.FC<Props> = ({ results }) => {
	return (
		<FlipMove className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
			{results.map(result => (
				<Thumbnail result={result} key={result.id} />
			))}
		</FlipMove>
	);
};

export default ResultsComponent;
