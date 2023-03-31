import { useState } from 'react'
import Header from '@/components/Header'
import MainContent from '@/components/MainContent'
import Head from 'next/head'
import Footer from '@/components/Footer'
import { useTranslation } from '@/hooks/useTranslations'

export default function Home () {
  const [searchString, setSearchString] = useState('')
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>Gamelab Education - {t('catalog')}</title>
        <meta name='description' content='Games and Simulators catalog by Gamelab Education' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header setSearchString={setSearchString} />
      <MainContent searchString={searchString} />
      <Footer />
    </>
  )
}
