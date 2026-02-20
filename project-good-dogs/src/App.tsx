/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
type Page = 'home' | 'treats' | 'training' | 'about' | 'contact';

// --- Components ---

const Navbar = ({ currentPage, setCurrentPage }: { currentPage: Page, setCurrentPage: (p: Page) => void }) => {
  const navItems: { label: string, value: Page }[] = [
    { label: 'Home', value: 'home' },
    { label: 'Treats!', value: 'treats' },
    { label: 'Training', value: 'training' },
    { label: 'About Us', value: 'about' },
    { label: 'Contact Us', value: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand-cream/90 backdrop-blur-md border-bottom border-stone-100">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div 
          className="cursor-pointer flex flex-col items-center"
          onClick={() => setCurrentPage('home')}
        >
          <span className="font-serif text-2xl tracking-widest uppercase font-light">Project</span>
          <span className="font-serif text-sm tracking-[0.3em] uppercase -mt-1 text-brand-gold">Good Dogs</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-12">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => setCurrentPage(item.value)}
              className={`relative py-2 text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 ${
                currentPage === item.value ? 'text-brand-gold' : 'text-stone-500 hover:text-stone-900'
              }`}
            >
              {item.label}
              {currentPage === item.value && (
                <motion.div 
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 w-full h-px bg-brand-gold"
                />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-6">
          <button className="text-xs uppercase tracking-widest font-semibold text-stone-400 hover:text-stone-900 transition-colors">
            Cart (0)
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = ({ onCtaClick }: { onCtaClick: () => void }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-24">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&q=80&w=2000" 
          alt="Happy dog in nature" 
          className="w-full h-full object-cover opacity-80"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/20 via-transparent to-brand-cream"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-xs uppercase tracking-[0.4em] text-stone-600 mb-6 block">Premium Canine Care</span>
          <h1 className="text-6xl md:text-8xl font-serif font-light leading-tight mb-8">
            Wherever your <br />
            <span className="italic">adventures</span> take you.
          </h1>
          <p className="text-lg md:text-xl text-stone-600 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            A little motivation for your best friend too. Professional training and single-ingredient treats crafted with love.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={onCtaClick}
              className="premium-button bg-stone-900 text-white border-none hover:text-white"
            >
              Explore Treats
            </button>
            <button className="premium-button">
              Our Training
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TreatsSection = () => {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.4em] text-brand-gold mb-6 block">The Project Process</span>
            <h2 className="text-5xl md:text-6xl font-serif font-light mb-8 leading-tight">
              100% Single Source <br /><span className="italic">Pure Motivation</span>
            </h2>
            <div className="space-y-6 text-stone-600 leading-relaxed text-lg font-light">
              <p>
                Lots of large companies will try to cheat you out of the protein their treats are flavored after. Why? Because fillers (like grains, soy, or meat by-product) are cheaper than healthy proteins.
              </p>
              <p>
                They're all about the money, we're all about you and your <span className="text-stone-900 font-medium">Best Friend</span>.
              </p>
              <p>
                At Project Treats, we don't do any of that nonsense. If our treats say beef, that's exactly what's in the bag.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=1000" 
                alt="Dog treats" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-12 -left-12 bg-brand-yellow p-12 rounded-3xl shadow-xl hidden md:block max-w-xs">
              <p className="font-serif text-2xl italic leading-tight text-stone-900">
                "No Additives, No Preservatives, No Dyes, No Fillers."
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: "Dehydrated Raw",
              desc: "Dehydration is a safe and effective method of preserving food. Humans have been doing it since 10,000 BC. It takes longer, but your pup is worth it."
            },
            {
              title: "Designed for Training",
              desc: "Thin slices easily break in half, meaning your training session can go for as long as you need on only a handful."
            },
            {
              title: "Minimal Processing",
              desc: "We believe in minimal processing so your dog is as close to the nutrients as they can be. Shorter digestive tracts mean less time to absorb nutrients."
            }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-10 rounded-3xl border border-stone-100 hover:border-brand-gold/30 transition-colors group"
            >
              <h3 className="text-2xl font-serif mb-4 group-hover:text-brand-gold transition-colors">{feature.title}</h3>
              <p className="text-stone-500 font-light leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-32 bg-stone-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.4em] text-brand-gold mb-6 block">Happy Tails</span>
          <h2 className="text-5xl font-serif font-light">What our clients say</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Sarah & Luna", text: "The only treats Luna actually focuses for. The single ingredient quality is unmatched." },
            { name: "Mark & Cooper", text: "Training sessions have completely transformed since we started using Project Treats." },
            { name: "Elena & Bear", text: "I love knowing exactly what's in the bag. No fillers, just real food for my best friend." }
          ].map((t, i) => (
            <motion.div 
              key={i}
              className="p-12 rounded-[40px] bg-white/5 border border-white/10"
              whileHover={{ y: -10 }}
            >
              <p className="text-xl font-serif italic mb-8 leading-relaxed">"{t.text}"</p>
              <p className="text-xs uppercase tracking-widest text-brand-gold font-semibold">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <section className="py-32 px-6 bg-brand-cream">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-brand-gold mb-6 block">Get in Touch</span>
            <h2 className="text-5xl font-serif font-light mb-8 italic">We're Listening...</h2>
            <p className="text-stone-600 font-light leading-relaxed mb-12">
              Got any questions we haven't answered? What about suggestions or ideas you'd like to share? 
              Have any concerns we could address for you? Want to carry our product in your store?
              <br /><br />
              Send us a message and we'll get back to you within 48 hours.
            </p>
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-widest font-semibold">Follow us on Social</p>
              <div className="flex space-x-6">
                {['Instagram', 'Facebook', 'Twitter', 'Pinterest'].map(s => (
                  <button key={s} className="text-xs uppercase tracking-widest text-stone-400 hover:text-brand-gold transition-colors">{s}</button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-12 rounded-[40px] shadow-sm border border-stone-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Name" className="w-full bg-stone-50 border-none rounded-2xl px-6 py-4 focus:ring-1 focus:ring-brand-gold outline-none transition-all" />
                <input type="email" placeholder="Email" className="w-full bg-stone-50 border-none rounded-2xl px-6 py-4 focus:ring-1 focus:ring-brand-gold outline-none transition-all" />
              </div>
              <input type="text" placeholder="Subject" className="w-full bg-stone-50 border-none rounded-2xl px-6 py-4 focus:ring-1 focus:ring-brand-gold outline-none transition-all" />
              <textarea placeholder="Message" rows={5} className="w-full bg-stone-50 border-none rounded-2xl px-6 py-4 focus:ring-1 focus:ring-brand-gold outline-none transition-all resize-none"></textarea>
              <button type="submit" className="w-full premium-button bg-brand-yellow text-stone-900 border-none hover:bg-brand-gold transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ setCurrentPage }: { setCurrentPage: (p: Page) => void }) => {
  return (
    <footer className="bg-white border-t border-stone-100 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-1">
            <div className="flex flex-col mb-8">
              <span className="font-serif text-2xl tracking-widest uppercase font-light">Project</span>
              <span className="font-serif text-sm tracking-[0.3em] uppercase -mt-1 text-brand-gold">Good Dogs</span>
            </div>
            <p className="text-stone-500 text-sm font-light leading-relaxed">
              Premium canine care, professional training, and single-ingredient treats for your best friend.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-semibold mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Treats!', 'Training', 'About Us', 'Contact Us'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => setCurrentPage(item.toLowerCase().replace('!', '').replace(' ', '') as Page)}
                    className="text-stone-500 hover:text-brand-gold text-sm transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-semibold mb-8">Legal</h4>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'Shipping Policy', 'Refund Policy'].map((item) => (
                <li key={item}>
                  <button className="text-stone-500 hover:text-brand-gold text-sm transition-colors">{item}</button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-semibold mb-8">Newsletter</h4>
            <p className="text-stone-500 text-sm font-light mb-6">Join our mailing list for updates and training tips.</p>
            <div className="flex">
              <input type="email" placeholder="Email address" className="bg-stone-50 border-none rounded-l-2xl px-4 py-3 text-sm flex-1 outline-none" />
              <button className="bg-stone-900 text-white px-6 py-3 rounded-r-2xl text-xs uppercase tracking-widest font-semibold hover:bg-brand-gold transition-colors">Join</button>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-stone-100 flex flex-col md:row items-center justify-between gap-6">
          <p className="text-stone-400 text-xs tracking-widest">© 2026 PROJECT GOOD DOGS. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-8">
            {['Instagram', 'Facebook', 'Twitter'].map(s => (
              <button key={s} className="text-stone-400 hover:text-brand-gold text-xs tracking-widest transition-colors uppercase">{s}</button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onCtaClick={() => setCurrentPage('treats')} />
            <TreatsSection />
            <Testimonials />
            <ContactForm />
          </>
        );
      case 'treats':
        return (
          <div className="pt-24">
            <section className="py-32 px-6 bg-brand-cream text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
              >
                <span className="text-xs uppercase tracking-[0.4em] text-brand-gold mb-6 block">Our Collection</span>
                <h1 className="text-6xl font-serif font-light mb-8 italic">Project Treats</h1>
                <p className="text-xl text-stone-600 font-light leading-relaxed">
                  Single ingredient, minimal processing, maximum motivation.
                </p>
              </motion.div>
            </section>
            <TreatsSection />
            <section className="py-32 px-6 bg-stone-50">
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="aspect-square rounded-[40px] overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1589924691106-073b19f5538d?auto=format&fit=crop&q=80&w=1000" alt="Beef treats" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="flex flex-col justify-center">
                  <h2 className="text-4xl font-serif mb-6">Beef Liver Crisps</h2>
                  <p className="text-stone-600 font-light leading-relaxed mb-8">
                    Our signature treat. 100% grass-fed beef liver, dehydrated to perfection. 
                    Thin enough to snap into training-sized bites, rich enough to keep them coming back for more.
                  </p>
                  <button className="premium-button w-fit bg-stone-900 text-white border-none">Shop Now</button>
                </div>
              </div>
            </section>
          </div>
        );
      case 'training':
        return (
          <div className="pt-24">
            <section className="py-32 px-6 bg-stone-900 text-white text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
              >
                <span className="text-xs uppercase tracking-[0.4em] text-brand-gold mb-6 block">Professional Services</span>
                <h1 className="text-6xl font-serif font-light mb-8 italic">Expert Training</h1>
                <p className="text-xl text-stone-400 font-light leading-relaxed">
                  Building a language of love and respect between you and your best friend.
                </p>
              </motion.div>
            </section>
            <section className="py-32 px-6">
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                  { title: "Puppy Basics", desc: "Setting the foundation for a lifetime of good behavior. Socialization, potty training, and basic commands." },
                  { title: "Behavior Modification", desc: "Addressing complex issues like reactivity, anxiety, and resource guarding with positive reinforcement." },
                  { title: "Advanced Obedience", desc: "Off-leash reliability, distance commands, and precision work for the truly adventurous duo." }
                ].map((s, i) => (
                  <div key={i} className="p-12 rounded-[40px] border border-stone-100 bg-white shadow-sm">
                    <h3 className="text-2xl font-serif mb-6 italic">{s.title}</h3>
                    <p className="text-stone-500 font-light leading-relaxed mb-8">{s.desc}</p>
                    <button className="text-xs uppercase tracking-widest font-semibold text-brand-gold hover:text-stone-900 transition-colors">Learn More</button>
                  </div>
                ))}
              </div>
            </section>
          </div>
        );
      case 'about':
        return (
          <div className="pt-24">
             <section className="py-32 px-6 bg-brand-cream">
              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                  <div className="aspect-[3/4] rounded-[40px] overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=1000" alt="Founder and dog" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-[0.4em] text-brand-gold mb-6 block">Our Story</span>
                    <h1 className="text-5xl font-serif font-light mb-8 italic">Crafted with Love</h1>
                    <p className="text-stone-600 font-light leading-relaxed mb-6">
                      Project Good Dogs started with a simple realization: our dogs deserve better. Better food, better communication, and better adventures.
                    </p>
                    <p className="text-stone-600 font-light leading-relaxed">
                      We spent years perfecting our dehydration process to ensure every treat retains maximum nutrients. Today, we're proud to support thousands of owners in their journey to build a better bond with their best friends.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      case 'contact':
        return (
          <div className="pt-24">
            <ContactForm />
          </div>
        );
      default:
        return <Hero onCtaClick={() => setCurrentPage('treats')} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
