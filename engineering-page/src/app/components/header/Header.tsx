import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.overlay}>
                <h1 className={styles.title}>Engenharias</h1>
            </div>
        </header>
    );
};

export default Header;