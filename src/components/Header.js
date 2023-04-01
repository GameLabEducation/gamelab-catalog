import { useTranslation } from '@/hooks/useTranslations'
import Image from 'next/image'
import SearchInput from './SearchInput'
import gamelabLogo from '../../public/images/gamelab-header-logo.png'

const headerStyles = {
  background: 'linear-gradient(93.97deg, #1A4278 30.73%, #00FFFF 164.45%)'
}

export default function ({ setSearchString }) {
  const { toogleLang, lang, t } = useTranslation()

  const helpUrl = lang === 'es'
    ? 'https://gamelabeducation.com/contact/'
    : 'https://gamelabeducation.com/en/contact/'

  return (
    <header className='flex items-center px-20 py-8' style={headerStyles}>
      <a href='https://gamelabeducation.com/'>
        <Image src={gamelabLogo} width='100' height='100' alt='Gamelab logo' />
      </a>
      <div className='ml-auto  flex-col justify-end gap-1 hidden sm:flex'>
        <div className='flex justify-between items-center'>
          <a href={helpUrl} className='text-end text-white hover:underline uppercase font-bold' target='_blank' rel='noreferrer'>{t('contactUs', 'mama')}</a>
          <button className='p-2' onClick={toogleLang}>{lang === 'es' ? '🇺🇸' : '🇪🇸'}</button>
        </div>
        <SearchInput setSearchString={setSearchString} />
      </div>
    </header>
  )
}
