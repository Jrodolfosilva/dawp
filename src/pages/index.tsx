import Header from '@/components/header/Header'
import Head from 'next/head'
import HomeMain from './Home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dawp</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        {
          <HomeMain/>
        }
      </main>
    </>
  )
}
