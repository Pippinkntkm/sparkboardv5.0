import { Link } from 'react-router-dom'
import { SplineHero } from '../components/SplineHero'

const Home = () => {
  return (
    <div className="h-[calc(100vh-120px)] w-full relative z-10">
      <SplineHero />
    </div>
  )
}

export default Home 