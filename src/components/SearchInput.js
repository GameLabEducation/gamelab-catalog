import SearchIcon from './svg/SearchIcon'

export default function ({ setSearchString, ...props }) {
  return (
    <div className='relative' {...props}>
      <input onChange={({ target }) => setSearchString(target.value)} className='ml-auto rounded-s-2xl h-[44px] w-52 p-2 pr-11' />
      <SearchIcon className='absolute top-1/2 right-3 -translate-y-1/2' />
    </div>
  )
}
