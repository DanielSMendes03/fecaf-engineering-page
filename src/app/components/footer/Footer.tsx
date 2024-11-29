import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.contactInfo}>
                    <h3>Entre em contato</h3>
                    <p>Email: <a href="mailto:contato@faculdade.com">contato@faculdade.com</a></p>
                    <p>Telefone: <a href="tel:+551199999999">+55 11 99999-9999</a></p>
                </div>

                <div className={styles.socialMedia}>
                    <h3>Siga-nos</h3>
                    <ul>
                        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
