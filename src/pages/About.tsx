import { Link } from 'react-router-dom'

const About = () => {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      bio: 'Former startup founder with 15+ years of experience in scaling businesses.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      bio: 'Tech veteran with expertise in building scalable software solutions.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      bio: 'Operations expert specializing in process optimization and team scaling.'
    },
    {
      name: 'David Kim',
      role: 'Head of Marketing',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      bio: 'Marketing strategist with a track record of building successful brands.'
    }
  ]

  const values = [
    {
      title: 'Innovation First',
      description: 'We believe in pushing boundaries and embracing new technologies to solve complex problems.',
      icon: '🚀'
    },
    {
      title: 'Entrepreneur Focused',
      description: 'Every decision we make is centered around helping entrepreneurs succeed and grow their businesses.',
      icon: '💡'
    },
    {
      title: 'Data-Driven',
      description: 'We use analytics and market research to make informed decisions and optimize strategies.',
      icon: '📊'
    },
    {
      title: 'Community Building',
      description: 'We foster a supportive ecosystem where entrepreneurs can connect, learn, and grow together.',
      icon: '🤝'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Boomerang Startups
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We're a team of passionate entrepreneurs, investors, and industry experts 
            dedicated to helping startups succeed in today's competitive landscape.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Boomerang Startups, we believe that every great idea deserves the 
                opportunity to become a successful business. Our mission is to provide 
                entrepreneurs with the resources, guidance, and support they need to 
                turn their vision into reality.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Since our founding in 2018, we've helped over 150 startups launch and 
                scale their businesses, collectively raising more than $50 million in 
                funding and creating thousands of jobs.
              </p>
              <Link to="/contact" className="btn-primary">
                Get in Touch
              </Link>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                    150+
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Startups Launched</div>
                    <div className="text-gray-600">Successfully launched and scaled</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold">
                    $50M+
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Funding Raised</div>
                    <div className="text-gray-600">Collective funding secured</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                    95%
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Success Rate</div>
                    <div className="text-gray-600">Startups still operating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we work with our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced team brings together diverse expertise in entrepreneurship, 
              technology, marketing, and operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you build and scale your startup to new heights.
          </p>
          <Link to="/contact" className="btn-primary bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About 