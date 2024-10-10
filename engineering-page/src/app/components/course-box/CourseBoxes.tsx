"use client"; // Adicione esta linha no topo do seu arquivo

import { useState } from 'react';
import styles from './Course-box.module.css';

interface Course {
    title: string;
    description: string;
    imgPath: string;
    links: Array<{ label: string; url: string }>;
}

const CourseBoxes = () => {
    const courses: Record<string, Course> = {
        eletrica: {
            title: "Elétrica",
            description: "O curso de Engenharia Elétrica prepara você para trabalhar com sistemas de energia, eletrônica e telecomunicações.",
            imgPath: "/images/eletrica.png",
            links: [
                { label: "Syllabus do curso", url: "https://example.com/syllabus-eletrica" },
                { label: "Laboratórios de Elétrica", url: "https://example.com/laboratorios-eletrica" }
            ]
        },
        civil: {
            title: "Civil",
            description: "Engenharia Civil envolve construção de edifícios, estradas, pontes, barragens e projetos de infraestrutura.",
            imgPath: "/images/civil.png",
            links: [
                { label: "Syllabus do curso", url: "https://example.com/syllabus-civil" },
                { label: "Projetos de Engenharia Civil", url: "https://example.com/projetos-civil" }
            ]
        },
        producao: {
            title: "Produção",
            description: "O curso aborda sistemas mecânicos, termodinâmica e materiais.",
            imgPath: "/images/producao.png",
            links: [
                { label: "Syllabus do curso", url: "https://example.com/syllabus-mecanica" },
                { label: "Laboratórios de Mecânica", url: "https://example.com/laboratorios-mecanica" }
            ]
        },
        computacao: {
            title: "Computação",
            description: "O curso trata da criação de sistemas de hardware e software, inteligência artificial e redes.",
            imgPath: "/images/computacao.png",
            links: [
                { label: "Syllabus do curso", url: "https://example.com/syllabus-computacao" },
                { label: "Laboratórios de Computação", url: "https://example.com/laboratorios-computacao" }
            ]
        }
    };

    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

    const handleCourseClick = (courseKey: keyof typeof courses) => {
        const course = courses[courseKey];
        setSelectedCourse(course); // Atualiza o estado com o curso selecionado
    };

    return (
        <div>
            <div className={styles.container}>
                {
                    Object.keys(courses).map((courseKey) => (
                        <div key={courseKey} className={styles.box} onClick={() => handleCourseClick(courseKey as keyof typeof courses)}>
                            <img src={courses[courseKey].imgPath} alt={courses[courseKey].title} className={styles.image} />
                            <div className={styles.overlay}></div>
                            <div className={styles.text}>{courses[courseKey].title}</div>
                        </div>
                    ))
                }
            </div>

            {selectedCourse && (
                <div className={styles.details}>
                    <h2>{selectedCourse.title}</h2>
                    <p>{selectedCourse.description}</p>
                    <h3>Links Importantes:</h3>
                    <ul>
                        {selectedCourse.links.map((link, index) => (
                            <li key={index}>
                                <a href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default CourseBoxes;
