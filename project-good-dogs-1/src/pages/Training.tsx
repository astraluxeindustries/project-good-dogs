import { motion } from 'motion/react';
import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Puppy Foundations',
    description: 'Start off on the right paw. Socialization, potty training, and basic commands.',
    price: '$150 / session',
    features: ['Potty Training', 'Crate Training', 'Socialization', 'Basic Commands'],
  },
  {
    title: 'Obedience Training',
    description: 'Master the basics and beyond. Sit, stay, recall, and loose-leash walking.',
    price: '$200 / session',
    features: ['Recall', 'Leash Manners', 'Impulse Control', 'Public Access'],
  },
  {
    title: 'Behavior Modification',
    description: 'Address complex issues like reactivity, anxiety, and aggression.',
    price: '$250 / session',
    features: ['Reactivity', 'Separation Anxiety', 'Resource Guarding', 'Confidence Building'],
  },
];

export default function Training() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop"
            alt="Dog training"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6"
          >
            Unlock Your Dog's <span className="text-gold italic">Potential</span>
          </motion.h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Professional training based on positive reinforcement and scientific methods.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gold text-black hover:bg-white">
              Book a Consultation
            </Button>
          </Link>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-6">Our Philosophy</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe in building a relationship based on trust and respect, not fear. Our methods are rooted in positive reinforcement, ensuring your dog learns happily and effectively.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Positive Reinforcement', icon: <Star className="w-8 h-8 text-gold" />, text: 'We reward good behavior to encourage it to happen again.' },
              { title: 'Science-Based', icon: <Check className="w-8 h-8 text-gold" />, text: 'Our techniques are backed by the latest animal behavioral science.' },
              { title: 'Customized Plans', icon: <Check className="w-8 h-8 text-gold" />, text: 'Every dog is unique. We tailor our approach to your specific needs.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-gray-50 rounded-2xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-16">Training Packages</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-gold transition-colors"
              >
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gold text-xl font-serif italic mb-6">{service.price}</p>
                <p className="text-gray-400 mb-8">{service.description}</p>
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-gold mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button className="w-full bg-transparent border border-gold text-gold hover:bg-gold hover:text-black">
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
