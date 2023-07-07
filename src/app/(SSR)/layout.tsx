import styles from './layout.module.scss';

type SSRLayoutProps = {
	children: React.ReactNode;
};

export default function SSRLayout({ children }: SSRLayoutProps) {
	return (
		<section className={styles.container}>
			<h6>Cows come home.</h6>
			{children}
			<h6>Dishes run away.</h6>
		</section>
	);
}
