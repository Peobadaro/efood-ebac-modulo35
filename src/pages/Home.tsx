import Hero from '../components/Hero'
import RestaurantList from '../components/RestaurantList'
import { restaurantes } from '../data/restaurantes'

const Home = () => (
  <>
    <Hero />
    <RestaurantList restaurantes={restaurantes} />
  </>
)

export default Home
