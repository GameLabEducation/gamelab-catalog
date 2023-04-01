import { useState } from 'react'
import Header from '@/components/Header'
import MainContent from '@/components/MainContent'
import Head from 'next/head'
import Footer from '@/components/Footer'
const { basePath } = require('../../next.config')

const iconHref = basePath + '/favicon.ico'

export default function Home () {
  const [searchString, setSearchString] = useState('')

  return (
    <>
      <Head>
        <title>Gamelab Education catalog</title>
        <meta name='description' content='Games and Simulators catalog by Gamelab Education' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href={iconHref} />
      </Head>
      <Header setSearchString={setSearchString} />
      <MainContent searchString={searchString} />
      <Footer />
    </>
  )
}
