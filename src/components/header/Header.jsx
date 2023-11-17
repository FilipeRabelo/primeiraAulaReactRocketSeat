import styles from './Header.module.css'  // PRECISO CRIAR UMA VARIEAVEL - STYLES E CHAMAR ELA NA CLASSNAME

import igniterLogo from '/src/assets/igniter-logo.svg'

console.log(igniterLogo)

export function Header(){

  return(
      <header className={styles.header}>
        <img  src={igniterLogo} alt="Logotipo"/>
        {/*<strong>Developer Feed</strong >*/}
        <a className={styles.logo} href={'http://localhost:5173'} target={'_blank'}>Developer Feed</a>
      </header>
  )

}