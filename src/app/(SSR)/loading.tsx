import { Spinner } from '@/libraries/bootstrap';

import styles from './loading.module.scss';

type Props = {};

export default function loading({}: Props) {
	return (
		<div className={styles.container}>
			<Spinner animation="border" />
			<p>Loading...</p>
		</div>
	);
}
