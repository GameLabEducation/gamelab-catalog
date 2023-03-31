import Image from 'next/image'
import SearchInput from './SearchInput'

const headerStyles = {
  background: 'linear-gradient(93.97deg, #1A4278 30.73%, #00FFFF 164.45%)'
}

export default function ({ setSearchString }) {
  return (
    <header className='h-[112px] flex items-center px-10' style={headerStyles}>
      <Image src='/images/gamelab-header-logo.png' width='100' height='100' />
      <SearchInput setSearchString={setSearchString} style={{ marginLeft: 'auto' }} />
    </header>
  )
}
