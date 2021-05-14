import Thumbnail from "./Thumbnail";

// INTERFACES
import { Result } from "../pages";

interface Props {
	results: Result[]
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
