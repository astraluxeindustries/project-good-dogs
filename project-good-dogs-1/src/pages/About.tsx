import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
                Our <span className="text-gold-dark">Story</span>
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Project Good Dogs started with a simple mission: to provide the best possible life for our canine companions.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We realized that most commercial treats were filled with additives and fillers that compromised our dogs' health. So, we decided to make our own. What started as a small kitchen experiment has grown into a passion for providing high-quality, single-ingredient treats and expert training to dogs everywhere.
              </p>
              <Link to="/contact">
                <Button size="lg">Get in Touch</Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gold/20 rounded-2xl transform -rotate-3" />
              <img
                src="https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=2062&auto=format&fit=crop"
                alt="Founder with dog"
                className="relative rounded-2xl shadow-xl w-full h-[600px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-16">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Integrity', description: 'We never compromise on quality. What you see is what you get.' },
              { title: 'Passion', description: 'We love dogs, and it shows in everything we do.' },
              { title: 'Community', description: 'We strive to build a supportive community of responsible dog owners.' },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-2xl font-bold mb-4 text-gold-dark">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
