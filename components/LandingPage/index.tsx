import Image from 'next/image'

import styles from './styles.module.scss'

import logo from '@/public/assets/brand/biglogo.svg'
import bigLogo from '@/public/assets/brand/biglogo.svg'

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbarContainer}>
        <div className={styles.logoContainer}>
          <div className={styles.logo}>
            <Image src={logo} alt='Logo' width={60}/>
          </div>
        </div>

        <div className={styles.optionsContainer}>
          <div className={styles.button}>
            Lorem
          </div>

          <div className={styles.button}>
            Lorem
          </div>

          <div className={styles.button}>
            Lorem
          </div>
        </div>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.heroSection}>
          <div className={styles.centerContainer}>
            <div className={styles.imageContainer}>
              <Image className={styles.image} src={bigLogo} alt='Logo' width={600} />
            </div>

            <div className={styles.textContainer}>
              Lorem Ipsum is simply dummy text of the printing and  
              <br /> <br />
              typesetting, g software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage