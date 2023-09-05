import Head from 'next/head'

import Game from '@/components/ExperimentalContent/Content/Games/Game'

export default function Home() {
  return (
    <>
      <Head>
        <title>Plataforma Aurora</title>
        <meta name="description" content="Plataforma oficial da Aurora Sapiens." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Game />
    </>
  )
}
