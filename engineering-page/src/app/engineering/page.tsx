import Image from 'next/image';
import styles from './engineering.module.css';
import Header from '../components/header/Header'
import CourseBoxes from "@/app/components/course-box/CourseBoxes";

const Engineering = () => {
    return (
        <main>
            <Header/>
            <CourseBoxes/>
        </main>
    );
};

export default Engineering;