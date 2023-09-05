import ContentNavbar from '@/components/ContentNavbar'

import styles from './styles.module.scss'

const Game = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <ContentNavbar />
      </div>

      <div className={styles.column}>
        <div className={styles.gameContainer}>

        </div>
      </div>
    </div>
  )
}

export default Game