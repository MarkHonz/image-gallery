'use client'; // this file will be executed on the client only

import { usePathname } from 'next/navigation'; // use the next/navigation hook to get the current pathname
import Link from 'next/link'; // use the next/link component to navigate between pages
import { Container, Nav, Navbar } from 'react-bootstrap'; // use the react-bootstrap components

type NavBarProps = {}; // define the type for the NavBar component props

export default function NavBar({}: NavBarProps) {
	const pathname = usePathname(); // get the current pathname from the next/navigation hook

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
						<Nav.Link as={Link} href="/isr" active={pathname === '/isr'}>
							ISR
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
