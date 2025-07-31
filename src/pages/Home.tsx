import { Link } from 'react-router-dom'
import { SplineHero } from '../components/SplineHero'

const Home = () => {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Innovation Strategy',
      description: 'Develop cutting-edge strategies to disrupt markets and create sustainable competitive advantages.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Funding Support',
      description: 'Connect with investors and secure the capital needed to scale your startup to new heights.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Team Building',
      description: 'Build high-performing teams with the right talent and culture to execute your vision.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Market Analysis',
      description: 'Deep market insights and competitive analysis to position your startup for success.'
    }
  ]

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

      {/* Features Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-boomerang-black mb-4">
              Why Choose Boomerang Startups?
            </h2>
            <p className="text-xl text-boomerang-black max-w-3xl mx-auto">
              We provide comprehensive support at every stage of your startup journey, 
              from ideation to scale and beyond.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-boomerang-silver rounded-lg flex items-center justify-center mx-auto mb-4 text-boomerang-blue">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-boomerang-black mb-3">
                  {feature.title}
                </h3>
                <p className="text-boomerang-black">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-boomerang-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Launch Your Startup?
          </h2>
          <p className="text-xl text-boomerang-silver mb-8 max-w-2xl mx-auto">
            Join hundreds of successful entrepreneurs who have transformed their ideas 
            into thriving businesses with our support.
          </p>
          <Link to="/contact" className="btn-primary bg-boomerang-blue hover:bg-boomerang-navy text-lg px-8 py-3">
            Start Your Journey Today
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home 