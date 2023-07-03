'use client';

import { Button } from 'react-bootstrap';
import styles from './error.module.scss';

interface Props {
	error: Error;
	reset: () => void;
}

export default function Error({ error, reset }: Props) {
	return (
		<main className={styles.main}>
			<section>
				<h1>🔥 You Done Fucked Up Now! 🔥</h1>
				<Button onClick={reset} className={styles.button}>
					Try Again
				</Button>
			</section>
		</main>
	);
}
