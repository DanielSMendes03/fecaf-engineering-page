'use client'

import { useState, useRef, useEffect } from 'react'
import styles from './HeaderMenu.module.css'

const HeaderMenu = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const overlayRef = useRef<HTMLDivElement | null>(null)

  const handleMenuClick = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && overlayRef.current && !overlayRef.current.contains(event.target as Node)) {
        setOpenMenu(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <nav className={styles.nav}>
      <div ref={overlayRef} className={`${styles.menuOverlay} ${openMenu ? styles.active : ''}`} onClick={() => setOpenMenu(null)}></div>
      <ul className={styles.menu} ref={menuRef}>
        <li className={styles.menuItem}>
          <button className={styles.menuButton} onClick={() => handleMenuClick('graduacao')}>
            Graduação
            <span className={`${styles.arrow} ${openMenu === 'graduacao' ? styles.open : ''}`}></span>
          </button>
          {openMenu === 'graduacao' && (
            <ul className={styles.submenu}>
              <li>
                <a href="https://www.unifecaf.com.br/graduacao-presencial">Graduação Presencial</a>
              </li>
              <li>
                <a href="https://www.unifecaf.com.br/graduacao-ead">Graduação EAD</a>
              </li>
              <li>
                <a href="https://www.unifecaf.com.br/graduacao">Todos os cursos</a>
              </li>
              <li>
                <a href="https://www.unifecaf.com.br/formas-de-ingresso">Formas de Ingresso</a>
              </li>
            </ul>
          )}
        </li>
        <li className={styles.menuItem}>
          <button className={styles.menuButton} onClick={() => handleMenuClick('pos-graduacao')}>
          <a href="https://www.unifecafdigital.com.br/">Pós-Graduação</a>
            <span className={`${openMenu === 'pos-graduacao' ? styles.open : ''}`}></span>
          </button>
        </li>
        <li className={styles.menuItem}>
          <button className={styles.menuButton} onClick={() => handleMenuClick('extensao')}>
            Extensão
            <span className={`${openMenu === 'extensao' ? styles.open : ''}`}></span>
          </button>
        </li>
        <li className={styles.menuItem}>
          <button className={styles.menuButton} onClick={() => handleMenuClick('aluno')}>
            Já sou Aluno
            <span className={`${styles.arrow} ${openMenu === 'aluno' ? styles.open : ''}`}></span>
          </button>
          {openMenu === 'aluno' && (
            <ul className={styles.submenu}>
              <li>
                <a href="https://www.unifecaf.com.br/egresso">Egresso</a>
              </li>
              <li>
                <a href="https://www.unifecaf.com.br/editais">Editais</a>
              </li>
              <li>
                <a href="https://aluno.unifecaf.edu.br/">Portal do Aluno</a>
              </li>
            </ul>
          )}
        </li>
        <li className={styles.menuItem}>
          <button className={styles.menuButton} onClick={() => handleMenuClick('institucional')}>
            Institucional
            <span className={`${styles.arrow} ${openMenu === 'institucional' ? styles.open : ''}`}></span>
          </button>
          {openMenu === 'institucional' && (
            <ul className={styles.submenu}>
              <li><a href="https://www.unifecaf.com.br/atendimento-comunidade">Atendimento à Comunidade</a></li>
              <li><a href="https://www.unifecaf.com.br/biblioteca">Biblioteca</a></li>
              <li><a href="https://www.unifecaf.com.br/cpa">Comissão Própria de Avaliação</a></li>
              <li><a href="https://www.unifecaf.com.br/contratos-e-documentos-institucionais">Contratos e Documentos Institucionais</a></li>
              <li><a href="https://www.unifecaf.com.br/enade">ENADE</a></li>
              <li><a href="https://www.unifecaf.com.br/in-company">InCompany - Parcerias</a></li>
              <li><a href="https://www.unifecaf.com.br/modelo-academico">Modelo Acadêmico</a></li>
              <li><a href="https://www.unifecaf.com.br/nossa-historia">Nossa História</a></li>
              <li><a href="https://www.unifecaf.com.br/politicas-e-regulamentos">Políticas e Regulamentos</a></li>
              <li><a href="https://www.unifecaf.com.br/programa-de-monitoria">Programa de Monitoria</a></li>
            </ul>
          )}
        </li>
        <li className={styles.menuItem}>
          <button className={styles.menuButton} onClick={() => handleMenuClick('polos')}>
            Polos
            <span className={`${styles.arrow} ${openMenu === 'polos' ? styles.open : ''}`}></span>
          </button>
          {openMenu === 'polos' && (
            <ul className={styles.submenu}>
              <li><a href="https://www.unifecaf.com.br/polos">Todos os polos</a></li>
              <li><a href="https://www.unifecaf.com.br/seja-um-polo">Seja um polo UniFECAF</a></li>
            </ul>
          )}
        </li>
        <li className={styles.menuItem}>
          <button className={styles.menuButton}><a href="https://www.unifecaf.com.br/blog">Blog</a></button>
        </li>
        <li className={styles.menuItem}>
          <button className={styles.menuButton}><a href="https://www.unifecaf.com.br/contato">Contato</a></button>
        </li>
      </ul>
    </nav>
  )
}

export default HeaderMenu
