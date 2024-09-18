import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Logo from '@/public/assets/fontbolt.png'

export default function Navbar() {
	return (
		<nav className="bg-black static rounded-md top-0 left-0 right-0 z-50  text-white border-b border-black shadow-lg">
			<div className="container mx-auto py-6">
				<div className="flex justify-between items-center">
					<Link
						href="/"
						className="text-xl font-bold py-2 rounded hover:bg-white hover:bg-opacity-10 transition-colors"
					>
						<Image src={Logo} height={35} width={90} alt="logo" />
					</Link>
					<div className="flex items-center space-x-6">
						<NavLink href="/">Home</NavLink>
						<NavLink href="/products">Products</NavLink>
						<NavLink href="/gallery">Gallery</NavLink>
						<NavLink href="/contact">Contact</NavLink>
						<Button
							variant="outline"
							className="text-black border-white hover:bg-white hover:text-gray-800 transition-colors"
						>
							Login
						</Button>
					</div>
				</div>
			</div>
		</nav>
	);
}

export function NavLink({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) {
	return (
		<Link
			href={href}
			className="px-3 py-2 rounded hover:bg-white hover:bg-opacity-10 transition-colors"
		>
			{children}
		</Link>
	);
}
