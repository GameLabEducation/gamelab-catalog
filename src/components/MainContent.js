import { useTranslation } from '@/hooks/useTranslations'
import GameCard from './GameCard'
import HelpCard from './HelpCard'

const games = [
  { title: 'Sodapop Game', transKey: 'sodapopDescription', gameSiteUrl: 'https://sp-beta.gamelab.cl', imageUrl: '/images/sodapop.png' },
  { title: 'Winegame  ', transKey: 'wineGameDescription', gameSiteUrl: 'https://wine-beta.gamelab.cl', imageUrl: '/images/winegame.png' },
  { title: 'Startup Journey Game', transKey: 'sjgDescription', gameSiteUrl: 'https://sjg-beta.gamelab.cl', imageUrl: '/images/sjg.png' },
  { title: 'Warehouse Game', transKey: 'warehouseDescription', gameSiteUrl: 'https://wg-beta.gamelab.cl', imageUrl: '/images/warehouse.png' },
  { title: 'Negotiation Game', transKey: 'negotiationDescription', gameSiteUrl: 'https://ng-beta.gamelab.cl', imageUrl: '/images/negotiation.png' },
  { title: 'Pricingame', transKey: 'pricinDescription', gameSiteUrl: 'https://pg-beta.gamelab.cl', imageUrl: '/images/pricin.png' },
  { title: 'Balanced Scorecard Game', transKey: 'balancedDescription', gameSiteUrl: 'https://bsc-beta.gamelab.cl', imageUrl: '/images/balanced.png' }
]

export default function ({ searchString }) {
  const { t } = useTranslation()
  return (
    <div className='my-20'>
      <div className='px-4'>
        <h1 className='text-center text-4xl mb-2'>{t('productCatalogue')}</h1>
        <p className='text-center text-xl mb-8'>{t('clickToAccess')}</p>
      </div>
      <div className='flex justify-center flex-wrap gap-20 px-3'>
        {
          games
            .filter(game => game.title.toLowerCase().includes(searchString.toLowerCase()))
            .map(game => {
              const description = t(game.transKey)
              return <GameCard key={game.title} {...game} description={description} />
            })
        }
        <HelpCard />
      </div>
    </div>
  )
}
