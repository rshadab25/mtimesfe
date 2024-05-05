'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLinks = [
	{ id: 1, name: 'Home', path: '/' },
	{ id: 2, name: 'Blog', path: '/blog' },
	{ id: 3, name: 'About', path: '/about' },
];

const Navbar = () => {
	const pathname = usePathname();
	const isActive = (path) => path === pathname;

	return (
		<nav>
			<div className="navbar">
				<Link href="/">
					<span className="logo">Mtimes24</span>
				</Link>
				<ul>
					{NavLinks.map((link) => {
						return (
							<li key={link.id}>
								<Link
									href={link.path}
									className={isActive(link.path) ? 'active' : ''}
								>
									{link.name}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
