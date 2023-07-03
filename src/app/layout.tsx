import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.scss';
import { Inter } from 'next/font/google';

import Header from '@/components/header/Header';
import { Container, SSRProvider } from '@/libraries/bootstrap';
import NavBar from '@/components/nav-bar/NavBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Image Gallery',
	description: 'A simple image gallery built with Next.js and Bootstrap.',
	author: 'Dragongate Web Development llc',
	url: 'https://image-gallery.dragongate.dev',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<SSRProvider>
					<NavBar />
					<Container className="py-4">{children}</Container>
				</SSRProvider>
			</body>
		</html>
	);
}
