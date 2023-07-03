import Image from 'next/image'; // use the next/image component to display images
import Link from 'next/link'; // use the next/link component to navigate between pages

import { Alert } from '@/libraries/bootstrap'; // use the bootstrap components from the library
import { UnsplashImage } from '@/models/unsplash-image'; // import the UnsplashImage type from the models

// export const revalidate = 0; // no revalidation needed for this page (it's dynamic)

export const metadata = {
	// metadata for this page (will be used by the <Head />)
	title: 'Dynamic Page',
};

type PageProps = {}; // define the type for the Page component props

export default async function Page({}: PageProps) {
	const response = await fetch(
		// fetch a random image from Unsplash
		`https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_ACCESS_KEY}`,
		{
			// cache: 'no-cache', // don't cache the response (we want a new image every time)
			next: { revalidate: 0 }, // no revalidation needed for this page (it's dynamic)
		}
	);
	const image: UnsplashImage = await response.json(); // parse the response as JSON

	const width = Math.min(500, image.width); // limit the width to 500px
	const height = (width / image.width) * image.height; // calculate the height based on the width
	const description = image.description ? image.description : 'unknown'; // use 'unknown' if there is no description

	return (
		<main className="d-flex flex-column align-items-center">
			<Alert>
				This page is <strong>dynamically</strong> rendered on the server and
				then hydrated on the client.
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
			<h6>{description}</h6>
		</main>
	);
}
