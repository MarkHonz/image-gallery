'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Container, Nav, Navbar } from 'react-bootstrap';

type NavBarProps = {};

export default function NavBar({}: NavBarProps) {
	const pathname = usePathname();

	return (
		<Navbar
			bg="primary"
			variant="dark"
			sticky="top"
			expand="sm"
			collapseOnSelect
		>
			<Container>
				<Navbar.Brand as={Link} href="/">
					Imagination Gallery
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="main navbar" />
				<Navbar.Collapse id="main navbar">
					<Nav>
						<Nav.Link as={Link} href="/static" active={pathname === '/static'}>
							Static
						</Nav.Link>
						<Nav.Link
							as={Link}
							href="/dynamic"
							active={pathname === '/dynamic'}
						>
							Dynamic
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}