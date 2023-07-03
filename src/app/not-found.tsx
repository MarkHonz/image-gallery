import React from 'react';

import styles from './not-found.module.scss';

type Props = {};

export default function notFound({}: Props) {
	return (
		<main className={styles.main}>
			<h1>I got your 404 error right here!</h1>
			<p>Try looking for a page that actually exist</p>
		</main>
	);
}
