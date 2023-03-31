import GameCard from './GameCard'
import HelpCard from './HelpCard'

const games = [
  { title: 'Sodapop Game', description: 'Operations, inventory and capacity management simulator, ideal for putting knowledge into practice in a realistic and controlled environment.', gameSiteUrl: 'https://sp-beta.gamelab.cl', imageUrl: '/images/sodapop.png' },
  { title: 'Winegame  ', description: 'Operations, inventory and capacity management simulator, ideal for putting knowledge into practice in a realistic and controlled environment.', gameSiteUrl: 'https://sp-beta.gamelab.cl', imageUrl: '/images/winegame.png' },
  { title: 'Startup Journey Game', description: 'Operations, inventory and capacity management simulator, ideal for putting knowledge into practice in a realistic and controlled environment.', gameSiteUrl: 'https://sp-beta.gamelab.cl', imageUrl: '/images/sjg.png' },
  { title: 'Warehouse Game', description: 'Operations, inventory and capacity management simulator, ideal for putting knowledge into practice in a realistic and controlled environment.', gameSiteUrl: 'https://sp-beta.gamelab.cl', imageUrl: '/images/warehouse.png' },
  { title: 'Negotiation Game', description: 'Operations, inventory and capacity management simulator, ideal for putting knowledge into practice in a realistic and controlled environment.', gameSiteUrl: 'https://sp-beta.gamelab.cl', imageUrl: '/images/negotiation.png' },
  { title: 'Pricingame', description: 'Operations, inventory and capacity management simulator, ideal for putting knowledge into practice in a realistic and controlled environment.', gameSiteUrl: 'https://sp-beta.gamelab.cl', imageUrl: '/images/pricin.png' },
  { title: 'Balanced Scorecard Game', description: 'Operations, inventory and capacity management simulator, ideal for putting knowledge into practice in a realistic and controlled environment.', gameSiteUrl: 'https://sp-beta.gamelab.cl', imageUrl: '/images/balanced.png' }
]

export default function ({ searchString }) {
  return (
    <div className='my-20'>
      <h1 className='text-center text-4xl mb-2'>Product catalogue</h1>
      <p className='text-center text-xl mb-8'>Access our simulators in just one click</p>
      <div className='flex justify-center items-center flex-wrap gap-20'>
        {
          games
            .filter(game => game.title.toLowerCase().includes(searchString.toLowerCase()))
            .map(game => <GameCard key={game.title} {...game} />)
        }
        <HelpCard />
      </div>
    </div>
  )
}
