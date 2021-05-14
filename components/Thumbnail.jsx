import Image from "next/image";

const Thumbnail = ({ result }) => {
	const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";
	return (
		<div>
			<Image
				src={
					`${IMAGE_BASE_URL}${result.backdrop_path || result.poster_path}` ||
					`${IMAGE_BASE_URL}${result.poster_path}`
				}
				layout="responsive"
				height={1080}
				width={1920}
			/>
			<div className="p-2">
				<p className="truncate max-w-md">{result.overview}</p>
			</div>
		</div>
	);
};

export default Thumbnail;
