import Image from 'next/image'

import styles from './styles.module.scss'

import logo from '@/public/assets/brand/logo.svg'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <div className={styles.logo} onClick={() => window.open('/', '_self')}>
          <Image src={logo} alt='Logo' width={210}/>
        </div>
      </div>

      <div className={styles.optionsContainer}>
        <div className={styles.button} onClick={() => window.open('/conteudos-experimentais', '_self')}>
          Conteúdos
        </div>

        <div className={styles.button}>
          Login
        </div>

        <div className={styles.button}>
          Registro
        </div>
      </div>
    </div>
  )
}

export default Navbar