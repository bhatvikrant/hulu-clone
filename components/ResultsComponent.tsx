import Thumbnail from "./Thumbnail";

// INTERFACES
import { Results } from "../pages";


interface Props {
	results: Results[]
}

const ResultsComponent: React.FC<Props> = ({ results }) => {
	return (
		<div>
			{results.map(result => (
				<Thumbnail result={result} key={result.id} />
			))}
		</div>
	);
};

export default ResultsComponent;
