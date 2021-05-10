import Head from "next/head";

// COMPONENTS
import Header from "../components/Header";
import Nav from "../components/Nav";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Hulu Clone</title>
			</Head>

			<Header />

			<Nav />
			{/* Results */}
		</div>
	);
}
