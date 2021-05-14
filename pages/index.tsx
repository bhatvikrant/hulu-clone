import Head from "next/head";
import { GetServerSideProps } from 'next'


// COMPONENTS
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/ResultsComponent";

// UTIL
import requests from "../utils/requests";

export interface Result {
	vote_average: number;
	overview: string;
	release_date: string;
	id: number;
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	vote_count: number;
	original_language: string;
	original_title: string;
	poster_path: string;
	title: string;
	video: boolean;
	popularity: number;
	media_type: string;
	name: string;
	first_air_date: string;
	original_name: string;
	origin_country: string[];
}


export const getServerSideProps: GetServerSideProps = async (context) => {
	const genre = context.query.genre as string;

	const request = await fetch(
		`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url
		}`,
	).then(res => res.json());

	const results: Result[] = request.results

	return {
		props: {
			results
		},
	};
}

const Home: React.FC<{ results: Result[] }> = ({ results }) => {

	return (
		<div>
			<Head>
				<title>Hulu Clone</title>
			</Head>

			<Header />

			<Nav />

			<Results results={results} />
		</div>
	);
}


export default Home