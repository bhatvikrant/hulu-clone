import Image from "next/image";

// COMPONENTS
import HeaderItem from "./HeaderItem";

// ICONS
import {
	BadgeCheckIcon,
	CollectionIcon,
	HomeIcon,
	LightningBoltIcon,
	SearchIcon,
	UserIcon,
} from "@heroicons/react/outline";

const Header = () => {
	return (
		<header className="flex flex-col sm:flex-row m-5 justify-between items-center">
			<div className="flex flex-grow justify-evenly max-w-2xl h-auto">
				<HeaderItem title="HOME" Icon={HomeIcon} />
				<HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
				<HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
				<HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
				<HeaderItem title="SEARCH" Icon={SearchIcon} />
				<HeaderItem title="ACCOUNT" Icon={UserIcon} />
			</div>
			<Image
				src="https://links.papareact.com/ua6"
				width="200"
				height="100"
				className="object-contain"
			/>
		</header>
	);
};

export default Header;
