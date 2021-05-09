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
		<header className="">
			<div className="">
				<HeaderItem title="Home" Icon={HomeIcon} />
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
