import { motion } from 'framer-motion'
import { FeatureCard } from '../components/FeatureCard'
import { 
  Zap, Shield, Globe, Rocket, Heart, Star, 
  Smartphone, Cloud, Lock, Users, BarChart, Wifi 
} from 'lucide-react'

export const Features = () => {
  const mainFeatures = [
    {
      icon: Zap,
      title: 'Lightning Performance',
      description: 'Experience blazing fast speeds with our optimized infrastructure and cutting-edge technology stack.'
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Your data is protected with bank-level security, encryption, and compliance standards.'
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Seamless experience across all devices with our responsive and intuitive mobile design.'
    }
  ]

  const additionalFeatures = [
    { icon: Cloud, title: 'Cloud Integration', description: 'Connect with all your favorite cloud services and platforms.' },
    { icon: Lock, title: 'Privacy First', description: 'We respect your privacy and never share your personal data.' },
    { icon: Users, title: 'Team Collaboration', description: 'Work together seamlessly with real-time collaboration tools.' },
    { icon: BarChart, title: 'Analytics Dashboard', description: 'Get insights with comprehensive analytics and reporting.' },
    { icon: Wifi, title: 'Offline Support', description: 'Continue working even when you're offline with sync capabilities.' },
    { icon: Globe, title: 'Global CDN', description: 'Fast loading times worldwide with our global content delivery network.' }
  ]

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Powerful Features
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover all the amazing features that make our platform the perfect choice for your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mainFeatures.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">More Features</h2>
            <p className="text-xl text-gray-600">
              Everything you need and more
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience These Features?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get started today and see how these powerful features can transform your workflow.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-lg">
              Start Your Free Trial
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}