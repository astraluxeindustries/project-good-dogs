import { motion } from 'motion/react';
import { ArrowRight, Star, Dog, Bone } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=2070&auto=format&fit=crop"
            alt="Happy dog running"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="container relative z-10 px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight"
          >
            Motivation for your <br />
            <span className="text-gold italic">Best Friend</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-gray-200"
          >
            Premium training and single-ingredient treats designed to build a lasting bond.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/treats">
              <Button size="lg" className="min-w-[200px]">
                Shop Treats
              </Button>
            </Link>
            <Link to="/training">
              <Button variant="outline" size="lg" className="min-w-[200px] border-white text-white hover:bg-white hover:text-black">
                Explore Training
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900">
                Project <span className="text-gold-dark">Good Dogs</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe every dog deserves the best. Whether it's through positive reinforcement training or high-quality nutrition, our mission is to enhance the life of your canine companion.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-gold/20 p-3 rounded-full mr-4">
                    <Dog className="w-6 h-6 text-gold-dark" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Expert Training</h3>
                    <p className="text-gray-600">Behavioral modification and obedience training tailored to your dog's needs.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gold/20 p-3 rounded-full mr-4">
                    <Bone className="w-6 h-6 text-gold-dark" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Premium Treats</h3>
                    <p className="text-gray-600">100% single-source protein treats with zero additives or fillers.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gold/20 rounded-2xl transform rotate-3" />
              <img
                src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=2070&auto=format&fit=crop"
                alt="Dog training session"
                className="relative rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Treats Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Best Sellers</h2>
            <p className="text-lg text-gray-600">
              Hand-crafted, dehydrated raw treats made from single ingredients. Pure, simple, and delicious.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Beef Liver', image: 'https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?q=80&w=1925&auto=format&fit=crop', price: '$12.00' },
              { name: 'Chicken Breast', image: 'https://images.unsplash.com/photo-1589927986089-394e273efdcc?q=80&w=2072&auto=format&fit=crop', price: '$10.00' },
              { name: 'Sweet Potato', image: 'https://images.unsplash.com/photo-1596097635121-14b63b8166bc?q=80&w=2070&auto=format&fit=crop', price: '$8.00' },
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 text-left">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gold-dark font-medium mb-4">{product.price}</p>
                  <Button variant="outline" className="w-full group-hover:bg-gold group-hover:border-gold group-hover:text-black transition-colors">
                    Add to Cart
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12">
            <Link to="/treats">
              <Button size="lg" className="px-12">View All Treats</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Happy Pups, Happy Owners</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "The only treats my picky eater will touch! I love knowing exactly what's in them.", author: "Sarah & Max" },
              { text: "Training has been a breeze since we started working with Project Good Dogs. Highly recommend!", author: "Mike & Bella" },
              { text: "Quality you can see and smell. These treats are the real deal.", author: "Jessica & Cooper" },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl relative"
              >
                <div className="flex text-gold mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.text}"</p>
                <p className="font-bold text-gray-900">- {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gold relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5 pattern-dots" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 text-gray-900">
            Ready to spoil your pup?
          </h2>
          <p className="text-xl text-gray-800 mb-10 max-w-2xl mx-auto">
            Join thousands of happy dog owners who trust Project Good Dogs for their training and treat needs.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gray-900 text-white hover:bg-gray-800 px-12 py-6 text-xl">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
