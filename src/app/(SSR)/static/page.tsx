import { UnsplashImage } from '@/models/unsplash-image';
import Image from 'next/image';
import Link from 'next/link';
import { Alert } from '@/libraries/bootstrap';

export const metadata = {
	title: 'Static Page',
};

type PageProps = {};

export default async function Page({}: PageProps) {
	const response = await fetch(
		`https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_ACCESS_KEY}`
	);
	const image: UnsplashImage = await response.json();

	const width = Math.min(500, image.width);
	const height = (width / image.width) * image.height;
	const description = image.description ? image.description : 'unknown';

	return (
		<main className="d-flex flex-column align-items-center">
			<Alert>
				This page fetches data at build time and is statically generated.
			</Alert>

			<Image
				src={image.urls.raw}
				width={width}
				height={height}
				alt={description}
				className="rounded shadow mw-100 h-100"
			/>
			<p>
				by&nbsp;
				<Link href={`/users/${image.user.username}`}>
					{image.user.username}
				</Link>
			</p>
			<h4>{description}</h4>
		</main>
	);
}
