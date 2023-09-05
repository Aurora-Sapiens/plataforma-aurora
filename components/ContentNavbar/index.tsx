import Image from 'next/image'

import styles from './styles.module.scss'

import logo from '@/public/assets/brand/logo.svg'

const ContentNavbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.back} onClick={() => window.open('/', '_self')}>
        <Image src={logo} alt='Voltar' />
      </div>

      <div className={styles.title}>
        Game Experimental
      </div>
    </div>
  )
}

export default ContentNavbar