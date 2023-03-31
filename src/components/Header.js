import { useTranslation } from '@/hooks/useTranslations'
import Image from 'next/image'
import SearchInput from './SearchInput'

const headerStyles = {
  background: 'linear-gradient(93.97deg, #1A4278 30.73%, #00FFFF 164.45%)'
}

export default function ({ setSearchString }) {
  const { toogleLang, lang, t } = useTranslation()

  return (
    <header className='h-[112px] flex items-center px-10' style={headerStyles}>
      <Image src='/images/gamelab-header-logo.png' width='100' height='100' />
      <div className='ml-auto flex flex-col justify-end gap-1'>
        <div className='flex justify-between items-center'>
          <a href='https://gamelabeducation.com/en/contact/' className='text-end text-white hover:underline uppercase font-bold' target='_blank' rel='noreferrer'>{t('contactUs', 'mama')}</a>
          <button className='p-2' onClick={toogleLang}>{lang === 'es' ? '🇺🇸' : '🇪🇸'}</button>
        </div>
        <SearchInput setSearchString={setSearchString} />
      </div>
    </header>
  )
}
