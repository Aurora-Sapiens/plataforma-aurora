import Image from 'next/image'

import Navbar from '../Navbar'

import styles from './styles.module.scss'

const ExperimentalContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Navbar />
      </div>

      <div className={styles.experimentalContentContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.section}>
            <div className={styles.title}>Games</div>

            <div className={styles.gamesContainer}>
              <div className={styles.gameCard} onClick={() => window.open('/game1', '_self')}>
                <div className={styles.thumb}>
                  {/*<Image src={} alt='Thumbnail' />*/}
                </div>

                <div className={styles.title}>Game Experimental</div>
              </div>

              <div className={styles.gameCard}>
                <div className={styles.thumb}>
                  {/*<Image src={} alt='Thumbnail' />*/}
                </div>

                <div className={styles.title}>Game Experimental</div>
              </div>

              <div className={styles.gameCard}>
                <div className={styles.thumb}>
                  {/*<Image src={} alt='Thumbnail' />*/}
                </div>

                <div className={styles.title}>Game Experimental</div>
              </div>

              <div className={styles.gameCard}>
                <div className={styles.thumb}>
                  {/*<Image src={} alt='Thumbnail' />*/}
                </div>

                <div className={styles.title}>Game Experimental</div>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.title}>Vídeos</div>

            <div className={styles.videosContainer}>
              <div className={styles.videoCard}>
                <div className={styles.thumb}>
                  {/*<Image src={} alt='Thumbnail' />*/}
                </div>

                <div className={styles.title}>Aula Empreendedorismo</div>
              </div>

              <div className={styles.videoCard}>
                <div className={styles.thumb}>
                  {/*<Image src={} alt='Thumbnail' />*/}
                </div>

                <div className={styles.title}>Aula Experimental</div>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.title}>Artigos</div>

            <div className={styles.articlesContainer}>
              <div className={styles.articleCard}>
                <div className={styles.thumb}>
                  {/*<Image src={} alt='Thumbnail' />*/}
                </div>

                <div className={styles.title}>Dopamina e Educação</div>
              </div>

              <div className={styles.articleCard}>
                <div className={styles.thumb}>
                  {/*<Image src={} alt='Thumbnail' />*/}
                </div>

                <div className={styles.title}>Artigo Experimental</div>
              </div>

              <div className={styles.articleCard}>
                <div className={styles.thumb}>
                  {/*<Image src={} alt='Thumbnail' />*/}
                </div>

                <div className={styles.title}>Artigo Experimental</div>
              </div>

              <div className={styles.articleCard}>
                <div className={styles.thumb}>
                  {/*<Image src={} alt='Thumbnail' />*/}
                </div>

                <div className={styles.title}>Artigo Experimental</div>
              </div>

              <div className={styles.articleCard}>
                <div className={styles.thumb}>
                  {/*<Image src={} alt='Thumbnail' />*/}
                </div>

                <div className={styles.title}>Artigo Experimental</div>
              </div>

              <div className={styles.articleCard}>
                <div className={styles.thumb}>
                  {/*<Image src={} alt='Thumbnail' />*/}
                </div>

                <div className={styles.title}>Artigo Experimental</div>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.title}>Podcasts</div>

            <div className={styles.podcastsContainer}>
              <div className={styles.podcastCard}>
                <div className={styles.thumb}>
                  {/*<Image src={} alt='Thumbnail' />*/}
                </div>

                <div className={styles.title}>Vencendo a Procrastinação</div>
              </div>

              <div className={styles.podcastCard}>
                <div className={styles.thumb}>
                  {/*<Image src={} alt='Thumbnail' />*/}
                </div>

                <div className={styles.title}>Podcast Experimental</div>
              </div>

              <div className={styles.podcastCard}>
                <div className={styles.thumb}>
                  {/*<Image src={} alt='Thumbnail' />*/}
                </div>

                <div className={styles.title}>Podcast Experimental</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperimentalContent