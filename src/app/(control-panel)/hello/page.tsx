import { type } from 'os';
import styles from './page.module.scss';

type HelloProps = {
	children?: React.ReactNode;
};

export default async function Page({}: HelloProps) {
	await new Promise((resolve) => setTimeout(resolve, 5000));
	// throw new Error('Bazzinga');
	return <main>👋 Hello 🙄</main>;
}
