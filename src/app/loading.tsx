import { Spinner } from '@/libraries/bootstrap';
import styles from './loading.module.scss';

type Props = {
	children?: React.ReactNode;
};

export default function loading({}: Props) {
	return <Spinner animation="border" className="d-block m-auto" />;
}
