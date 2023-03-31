import { useTranslation } from '@/hooks/useTranslations'
import Image from 'next/image'
import FooterHR from './FooterHR'
import { games } from './MainContent'
import Aacsb from './svg/Aacsb'

export default function () {
  const { t } = useTranslation()

  return (
    <footer className='bg-[#0362DD] py-16 px-3 text-white flex flex-wrap justify-center gap-x-[130px] gap-y-7'>
      <div>
        <Image className='mb-3' src='/images/gamelab-wide-logo.png' width='242' height='35' alt='Gamelab wide logo' />
        <div className='flex justify-center my-5 gap-x-8'>
          <a href='https://www.facebook.com/GameLabEducation/' target='_blank' rel='noreferrer'>FB</a>
          <a href='http://www.instagram.com/gamelabeducation/' target='_blank' rel='noreferrer'>IG</a>
          <a href='https://cl.linkedin.com/company/gamelab-chile' target='_blank' rel='noreferrer'>IN</a>
          <a href='https://www.youtube.com/channel/UCdzzN9-J1qFfMn_Q-NoJ5Eg' target='_blank' rel='noreferrer'>YT</a>
        </div>
        <FooterHR />
        <p className='text-lg'>{t('soponsors')}</p>
        <div className='flex justify-around my-4'>
          <Image src='/images/corfo.png' width='67' height='34' alt='Corfo logo' />
          <Image src='/images/chile.jpg' width='38' height='38' alt='Chile logo' />
        </div>
        <Image className='mx-auto' src='/images/chyrsalis.png' width='124' height='62' alt='Chyrsalis logo' />
      </div>

      <div>
        <p className='text-lg mb-3'>GameLab</p>
        <a className='footer-anchor block' href='https://gamelabeducation.com/'>Home</a>
        <a className='footer-anchor block' href='https://gamelabeducation.com/universidades/'>{t('clients')}</a>
        <FooterHR />
        <a className='footer-anchor' href='https://gamelabeducation.com/en/privacy-policy/'>{t('privacyPolicy')}</a>
        <FooterHR />
        <p className='text-lg mb-3'>{t('partOf')}</p>
        <a className='footer-anchor' href='https://www.aacsb.edu/educators/accreditation' target='_blank' rel='noreferrer'>
          <Aacsb width='89' height='28' />
        </a>
      </div>

      <div>
        <p className='text-lg mb-3'>{t('simulators')}</p>
        <ul>
          {
            games.map(({ title, webInfoUrl }) => <li key={title} className='footer-anchor my-1'><a href={webInfoUrl}>{title}</a></li>)
          }
        </ul>
      </div>

      <div>
        <p className='text-lg mb-3'>{t('news')}</p>
        <a className='footer-anchor' href='https://gamelabeducation.com/blog/' target='_blank' rel='noreferrer'>{t('aboutGamelab')}</a>
        <FooterHR />
        <p className='mb-1'>sos@gamelabeducation.com</p>
        <p>Santiago, Chile.</p>
        <FooterHR />
        <p>© {t('rightsReserved')}. GameLab Education 2022</p>
      </div>
    </footer>
  )
}
