import { useTranslation } from '@/hooks/useTranslations'

export default function () {
  const { t, lang } = useTranslation()

  const helpUrl = lang === 'es'
    ? 'https://gamelabeducation.com/contact/'
    : 'https://gamelabeducation.com/en/contact/'

  return (
    <div className='bg-[#C5DCFA] py-7 px-12 rounded-lg w-[510px] self-center'>
      <h3 className='text-2xl'>{t('needHelp')}</h3>
      <p className='text-2xl mb-3'>{t('checkOurForm')}</p>
      <a className='p-4 bg-blue-600 hover:bg-blue-900 transition-all text-white font-bold rounded-lg block w-fit uppercase text-sm' href={helpUrl} target='_blank' res='noreferrer' rel='noreferrer'>{t('takeMeToForm')}</a>
    </div>
  )
}
