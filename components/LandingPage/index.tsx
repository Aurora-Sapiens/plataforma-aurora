import Image from 'next/image'

import styles from './styles.module.scss'

import Navbar from '../Navbar'

import bigLogo from '@/public/assets/brand/biglogo.svg'

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbarContainer}>
        <Navbar />
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