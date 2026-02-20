import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const features = [
  { title: 'No Additives', description: 'Pure ingredients only.' },
  { title: 'No Preservatives', description: 'Freshly dehydrated.' },
  { title: 'No Dyes', description: 'Natural colors.' },
  { title: 'No Fillers', description: '100% Meat.' },
];

const products = [
  {
    id: 1,
    name: 'Beef Liver',
    description: 'High-value training treat, rich in iron and vitamins.',
    price: '$12.00',
    image: 'https://images.unsplash.com/photo-1612531386530-97286d74c2ea?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Chicken Breast',
    description: 'Lean protein, perfect for everyday rewards.',
    price: '$10.00',
    image: 'https://images.unsplash.com/photo-1589927986089-394e273efdcc?q=80&w=2072&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Sweet Potato Chews',
    description: 'Great for digestion and a chewy texture dogs love.',
    price: '$8.00',
    image: 'https://images.unsplash.com/photo-1596097635121-14b63b8166bc?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Turkey Jerky',
    description: 'Hypoallergenic option for sensitive stomachs.',
    price: '$14.00',
    image: 'https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?q=80&w=1925&auto=format&fit=crop',
  },
];

export default function Treats() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gold-light py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6 text-gray-900"
          >
            100% Single Source <span className="text-gold-dark">Treats</span>
          </motion.h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            We don't do nonsense. Just pure, healthy, dehydrated raw treats for your best friend.
          </p>
        </div>
      </section>

      {/* The "No" List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <X className="text-red-500 w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-500">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1518364538800-6bae3c2ea0f2?q=80&w=2071&auto=format&fit=crop"
                alt="Raw ingredients"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif font-bold mb-6">Minimal Processing, Maximum Nutrition</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our treats are dehydrated raw. Dehydration is a safe and effective method of preserving food that has been used since 10,000 BC.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                The process takes longer than most big companies are willing to spend, but we think you and your pup are worth it.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Check className="text-gold-dark w-5 h-5 mr-3" />
                  <span>Retains natural enzymes and vitamins</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-gold-dark w-5 h-5 mr-3" />
                  <span>Easy to digest</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-gold-dark w-5 h-5 mr-3" />
                  <span>Intense flavor dogs crave</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-16">Shop Our Collection</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button className="bg-white text-black hover:bg-gold">Quick View</Button>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-2">{product.description}</p>
                <p className="text-gold-dark font-bold text-lg">{product.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
