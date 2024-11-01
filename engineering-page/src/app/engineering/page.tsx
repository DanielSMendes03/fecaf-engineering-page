import Image from 'next/image';
import styles from './engineering.module.css';
import HeaderFecafLogin from "@/app/components/header-fecaf/HeaderFecafLogin";
import Header from '../components/header/Header'
import CourseBoxes from "@/app/components/course-box/CourseBoxes";
import Footer from "@/app/components/footer/Footer";
const Engineering = () => {
    return (
        <main>
            <HeaderFecafLogin/>
            <Header/>
            <CourseBoxes/>
            <Footer/>
        </main>
    );
};

export default Engineering;