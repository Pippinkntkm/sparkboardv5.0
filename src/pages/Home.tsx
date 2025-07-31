import { Link } from 'react-router-dom'
import { SplineHero } from '../components/SplineHero'

const Home = () => {
  return (
    <div className="h-screen">
      {/* Hero Section with integrated stats */}
      <SplineHero />
    </div>
  )
}

export default Home 