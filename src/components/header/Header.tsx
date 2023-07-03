import styles from './header.module.scss';

type Props = {};

export default function Header({}: Props) {
	return (
		<header className={styles.header}>
			<h1>Header Love</h1>
		</header>
	);
}
