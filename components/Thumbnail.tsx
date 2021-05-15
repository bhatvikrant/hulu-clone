import { ForwardedRef, forwardRef } from 'react';
import Image from "next/image";

// ICONS
import { ThumbUpIcon } from "@heroicons/react/outline";
import { Result } from '../pages/index';

interface Props {
	result: Result
}

const Thumbnail: React.FC<Props> = forwardRef(({ result }, ref) => {
	const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";

	return (
		<div
			ref={ref as ForwardedRef<HTMLDivElement>}
			className='p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 sm:z-50'>
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

				<h2 className='mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold'>{result.title || result.original_name}</h2>

				<p className='flex items-center opacity-0 group-hover:opacity-100'>
					{result.media_type && `${result.media_type} • `}
					{result.release_date || result.first_air_date} • {' '}
					<ThumbUpIcon className='h-5 mx-2' /> {result.vote_count}
				</p>
			</div>
		</div>
	);
});

export default Thumbnail;
