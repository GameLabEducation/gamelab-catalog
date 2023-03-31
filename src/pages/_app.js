import '@/styles/globals.css'
import { Lato } from 'next/font/google'

const inter = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900']
})

export default function App ({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  )
}
