import Thumbnail from "./Thumbnail";

const Results = ({ results }) => {
	return (
		<div>
			{results.map(result => (
				<Thumbnail result={result} key={result.id} />
			))}
		</div>
	);
};

export default Results;
