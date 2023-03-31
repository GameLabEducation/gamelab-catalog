import Image from 'next/image'

const cardContainerStyles = {
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
}

export default function ({ title, description, imageUrl, gameSiteUrl }) {
  return (
    <div className='p-10 rounded-3xl w-[510px]' style={cardContainerStyles}>
      <Image src={imageUrl} alt='Sodapop factory screen' className='mb-4 h-[240px] w-[426px]' width={426} height={240} />
      <h2 className='text-4xl text-center mb-6'>{title}</h2>
      <p className='text-center mb-3'>{description}</p>
      <a className='p-4 bg-blue-600 hover:bg-blue-900 transition-all text-white font-bold rounded-lg block mx-auto w-[200px] text-center uppercase text-sm' href={gameSiteUrl} target='_blank' rel='noreferrer'>Go to the simulation</a>
    </div>
  )
}
