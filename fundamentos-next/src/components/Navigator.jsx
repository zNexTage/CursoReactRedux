import Link from 'next/link';
import styles from '../styles/Navigator.module.css';

const Navigator = props => (
    <Link href={props.destination} passHref>
        <div className={styles.Navigator} style={{backgroundColor: props.color ?? 'dodgerblue' }}>
            {props.text}
        </div>
    </Link>
)

export default Navigator;