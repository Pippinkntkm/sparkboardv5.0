import { Link } from 'react-router-dom'
import { SplineHero } from '../components/SplineHero'

const Home = () => {
  const stats = [
    { number: '150+', label: 'Startups Launched' },
    { number: '$50M+', label: 'Funding Raised' },
    { number: '95%', label: 'Success Rate' },
    { number: '24/7', label: 'Support Available' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container-custom">
          <SplineHero />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-boomerang-silver">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-boomerang-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-boomerang-black font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 