import styles from './HeaderFecafLogin.module.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const HeaderFecafLogin = () => {
    return (
        <div className={styles.container}>
            <img className={styles.img} src='https://www.unifecaf.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-unifecaf.77c64349.png&w=640&q=75'/>
        </div>
    )
}
export default HeaderFecafLogin;