'use client'

import { useState } from 'react'
import styles from './Course-box.module.css'

interface Course {
  title: string
  description: string
  imgPath: string
  details: {
    [key: string]: string // Submenus e seus textos
  }
}

const CourseBoxes = () => {
  const courses: Record<string, Course> = {
    eletrica: {
      title: 'Elétrica',
      description: 'O curso de Engenharia Elétrica prepara você para trabalhar com sistemas de energia, eletrônica e telecomunicações.',
      imgPath: '/images/eletrica.png',
      details: {
        'O que faz?': 'O curso de Engenharia Elétrica forma profissionais capacitados para projetar, desenvolver e gerenciar sistemas elétricos e eletrônicos em diversas aplicações. Os engenheiros elétricos atuam na geração, transmissão e distribuição de energia, além de trabalhar com automação e controle, sempre buscando soluções inovadoras e sustentáveis para os desafios energéticos e tecnológicos da sociedade.',
        'O que estuda? ': `
                    - Energias Renováveis e Sustentabilidade
                    - Eletromagnetismo e Ondas
                    - Inteligência Artificial Aplicada à Engenharia Elétrica
                    - Eletrônica e Dispositivos Eletrônicos
                    - Arquitetura de Computadores
                    - Microeletrônica e Circuitos Integrados
                    - Controle e Automação
                `,
        'Áreas de atuação': `
                    - Geração de Energia
                    - Transmissão e Distribuição
                    - Automação Industrial
                    - Desenvolvimento de Eletrônicos
                    - Segurança e Monitoramento
                    - Pesquisa e Desenvolvimento
                    - Consultoria Técnica
                    - Inteligência Artificial
                `
      }
    },
    civil: {
      title: 'Civil',
      description: 'Engenharia Civil envolve construção de edifícios, estradas, pontes, barragens e projetos de infraestrutura.',
      imgPath: '/images/civil.png',
      details: {
        'O que faz?': 'O curso de Engenharia Civil forma profissionais capacitados para planejar, projetar, construir e gerenciar obras de infraestrutura, abrangendo tanto construções residenciais quanto obras públicas.',
        'O que estuda? ': `
                    - Infraestrutura Urbana
                    - Saneamento
                    - Engenharia Urbana 
                `,
        'Áreas de atuação': `
                  - Recursos hidricos!
                 `
      }
    },
    producao: {
      title: 'Produção',
      description: 'O curso aborda sistemas mecânicos, termodinâmica e materiais.',
      imgPath: '/images/producao.png',
      details: {
        'O que faz?': 'O curso de Engenharia de Produção forma profissionais capacitados para otimizar processos e operações em diversos setores industriais. Os graduados são treinados para integrar recursos humanos, materiais e tecnológicos, visando eficiência e qualidade nas produções.',
        'O que estuda? ': `
                    - Gestão da Produção e Operações
                    - Ergonomia e Segurança do Trabalho
                    - Sistemas de Qualidade e Certificações
                    - Engenharia Econômica e Financeira
                    - Inovação e Desenvolvimento de Produtos
                    - Gestão Ambiental e Sustentabilidade
                    - Engenharia de Manufatura
                    - Logística e Distribuição
                `,
        'Áreas de atuação': `
                    - Manufatura
                    - Logística
                    - Qualidade
                    - Consultoria
                    - Desenvolvimento de Produtos
                    - Sustentabilidade
                    - Segurança do Trabalho
                    - Engenharia Financeira
                    - Pesquisa e Desenvolvimento
                `
      }
    },
    computacao: {
      title: 'Computação',
      description: 'O curso trata da criação de sistemas de hardware e software, inteligência artificial e redes.',
      imgPath: '/images/computacao.png',
      details: {
        'O que faz?': 'O curso de Engenharia da Computação forma profissionais habilitados a projetar, desenvolver e gerenciar sistemas computacionais, tanto em hardware quanto em software.',
        'O que estuda? ': `
                    - Redes de Computadores
                    - Sistemas Embarcados
                    - Inteligência Artificial
                    - Computação em Nuvem e Virtualização
                    - Sistemas Distribuídos
                    - Arquitetura de Computadores
                    - Segurança da Informação
                    - Realidade Virtual e Aumentada
                    - Automação Industrial
                `,
        'Áreas de atuação': `
                    - Desenvolvimento de Software
                    - Infraestrutura de TI
                    - Sistemas Embarcados
                    - Segurança da Informação
                    - Inteligência Artificial
                    - Computação em Nuvem
                    - Automação e Controle
                    - Pesquisa e Desenvolvimento
                    - Consultoria em TI
                `
      }
    }
  }

  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)
  const [expandedDetail, setExpandedDetail] = useState<string | null>(null)

  const handleCourseClick = (courseKey: keyof typeof courses) => {
    const course = courses[courseKey]
    setSelectedCourse(course)
    setExpandedDetail(null) // Reseta o submenu expandido
  }

  const handleDetailClick = (detailKey: string) => {
    setExpandedDetail((prev) => (prev === detailKey ? null : detailKey)) // Alterna entre expandir/colapsar
  }

  return (
    <div>
      <div className={styles.container}>
        {Object.keys(courses).map((courseKey) => (
          <div key={courseKey} className={styles.box} onClick={() => handleCourseClick(courseKey as keyof typeof courses)}>
            <img src={courses[courseKey].imgPath} alt={courses[courseKey].title} className={styles.image} />
            <div className={styles.overlay}></div>
            <div className={styles.text}>{courses[courseKey].title}</div>
          </div>
        ))}
      </div>

      {selectedCourse && (
        <div className={styles.details}>
          <h2>{selectedCourse.title}</h2>
          <p>{selectedCourse.description}</p>
          <div className={styles.submenus}>
            {Object.keys(selectedCourse.details).map((detailKey) => (
              <div key={detailKey} className={styles.submenu}>
                <button className={styles.submenuButton} onClick={() => handleDetailClick(detailKey)}>
                  {detailKey}
                </button>
                {expandedDetail === detailKey && (
                  <div className={styles.detailText}>
                    {selectedCourse.details[detailKey]
                      .split('\n')
                      .filter((line) => line.trim()) // Remove linhas vazias
                      .map((line, index) => (
                        <p key={index}>{line}</p>
                      ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default CourseBoxes
