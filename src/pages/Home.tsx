import { motion } from 'framer-motion'
import { Hero } from '../components/Hero'
import { FeatureCard } from '../components/FeatureCard'
import { Zap, Shield, Globe, Rocket, Heart, Star } from 'lucide-react'

export const Home = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Built with modern technologies for optimal performance and speed.'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee.'
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Reach users worldwide with our global infrastructure.'
    },
    {
      icon: Rocket,
      title: 'Easy to Use',
      description: 'Intuitive design that gets you up and running in minutes.'
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Crafted with attention to detail and user experience in mind.'
    },
    {
      icon: Star,
      title: 'Premium Quality',
      description: 'Top-tier quality that exceeds industry standards.'
    }
  ]

  return (
    <div className="pt-16">
      <Hero title="Habito trackie saas" description="Build the UI for a responsive web application called "Habito", a habit tracker platform that uses Supabase for backend storage and authentication.

Core Requirements:

Authentication: Include sign up, login, and password reset UI. Use Supabase Auth.

Dashboard: After login, users should see a dashboard showing:

A list of their current habits

Daily/weekly progress for each habit

Quick buttons to add, edit, or delete habits

Habit Creation UI:

Form to create a habit with fields: name, description, frequency (daily/weekly), and goal (e.g., number of repetitions or days)

Habit Detail Page:

View progress, goal, and history of habit completion

Button to mark habit as completed for the day

Responsive Design: Should work smoothly on both mobile and desktop

Styling Preferences:

Clean, modern UI (suggest using Tailwind CSS or a similar utility-first framework)

Dark and light mode toggle

Deliverables:

All relevant UI components (React preferred, but can be vanilla HTML/CSS/JS if needed)

Optional: UI state examples with mock data (if Supabase isn't connected yet)

Assume Supabase is already configured and focus on UI/UX components only." />
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to succeed, all in one beautiful platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied users who have transformed their workflow with Habito trackie saas
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-lg">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}