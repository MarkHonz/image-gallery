import { UnsplashImage } from '@/models/unsplash-image';
import Image from 'next/image';

import styles from './page.module.scss';
import { Alert } from '@/libraries/bootstrap';
import { Metadata } from 'next';

type PageProps = {
	params: { topic: string };
	// searchParams?: { [key: string]: string | string[] | undefined };
};

// revalidate is a number that indicates how often this page should be revalidated (in seconds)
export const revalidate = 432000; // revalidate every 5 days

// dynamicParams is a boolean that indicates whether this page has dynamic params
export const dynamicParams = false; // this page does not have dynamic params

// generateMetadata is a function that returns an object with metadata
export function generateMetadata({ params: { topic } }: PageProps): Metadata {
	return {
		title: 'Imaginary Topics',
		description: 'Pictures of imaginary topics',
	};
}

// generateStaticParams is a function that returns an array of objects
export async function generateStaticParams() {
	// this function is called at build time to generate static pages
	return ['camping', 'fitness', 'coding'].map((topic) => ({ topic }));
}

export default async function Page({ params: { topic } }: PageProps) {
	const response = await fetch(
		// fetch a random image from Unsplash
		`https://api.unsplash.com/photos/random?query=${topic}&count=3&client_id=${process.env.UNSPLASH_ACCESS_KEY}`,
		{
			// cache: 'no-cache', // don't cache the response (we want a new image every time)
			// next: { revalidate: 432000 }, // revalidate every 5 days
		}
	);
	const images: UnsplashImage[] = await response.json(); // parse the response as JSON

	return (
		<main>
			<Alert>
				This page uses <strong>generateStaticParams</strong> to render and cache
				static pages at build time, even though the URL has a dynamic parameter.
				Pages that are not included in generateStaticParams will be fetched and
				rendered on first access and then{' '}
				<strong>cached for subsequent request</strong> (this can be disabled).
			</Alert>

			<h1>{topic}</h1>
			{images.map((image) => {
				const description = image.description ? image.description : 'unknown';
				return (
					<Image
						key={image.urls.raw} // use the image URL as the key
						src={image.urls.raw} // use the image URL as the source
						width={250}
						height={250}
						alt={description} // use the image description as the alt text
						className={styles.image}
					/>
				);
			})}
		</main>
	);
}
