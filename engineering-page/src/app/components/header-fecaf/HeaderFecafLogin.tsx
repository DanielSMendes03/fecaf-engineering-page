'use client'

import styles from './HeaderFecafLogin.module.css'

const HeaderFecafLogin = () => {
  return (
    <div className={styles.container}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      <img className={styles.img} src="https://www.unifecaf.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-unifecaf.77c64349.png&w=640&q=75" />
      <a target="_blank" className={styles.a} href="http://aluno.unifecaf.edu.br/">
        <i className="fa fa-user"></i>Acesso
      </a>
      <button
        className={styles.button}
        onClick={() => {
          window.location.href = 'https://conteudo.fecaf.com.br/processo-seletivo-inscricao-vestibular'
        }}
      >
        <i className="fa fa-graduation-cap"></i>Fazer Matricula! 
        {/* TODO: Fazer o formulario de matricula */}
      </button>
    </div>
  )
}
export default HeaderFecafLogin
