import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '@/data/products';
import { ProductCard } from '@/components/shop/ProductCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShoppingBag, Sparkles, ShieldCheck, Truck } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';

const Home = () => {
  const featuredProducts = products.filter(p => p.isFeatured);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center px-6 md:px-12 pt-32 pb-20">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-10"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-[10px] font-black tracking-[0.3em] uppercase text-primary/80 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <Sparkles className="h-3 w-3" /> Season 01 / SS24
              </div>
              
              <h1 className="font-display font-black italic text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter text-foreground">
                Purity in<br/>
                <span className="opacity-50">Form.</span>
              </h1>
              
              <p className="max-w-md text-lg text-muted-foreground leading-relaxed">
                Exploring the intersection of raw materiality and ethereal design. 
                Hand-crafted objects for the modern sanctuary.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                render={<Link to="/shop" />} 
                nativeButton={false} 
                size="lg" 
                className="rounded-full px-12 h-16 bg-foreground text-background hover:bg-primary hover:text-primary-foreground font-bold text-base transition-all hover:scale-105"
              >
                Explore Catalogue
              </Button>
            </div>
          </motion.div>

          <div className="hidden lg:grid lg:col-span-7 grid-cols-2 gap-6 h-[600px]">
            <GlassCard className="p-0 overflow-hidden relative group rounded-[2.5rem]">
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1 }}
                src="https://picsum.photos/seed/frosted/800/1200" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-10 left-10 z-20">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Featured Object</p>
                <h3 className="text-3xl font-black tracking-tighter">Void Vase No. 4</h3>
                <p className="text-primary font-mono font-bold mt-4">$240.00</p>
              </div>
            </GlassCard>

            <div className="flex flex-col gap-6">
              <GlassCard className="flex-1 flex flex-col justify-center p-12 rounded-[2.5rem] relative overflow-hidden group">
                 <div className="relative z-10">
                    <h4 className="text-2xl font-black tracking-tight">Member Access</h4>
                    <p className="text-muted-foreground text-sm mt-4 max-w-[200px] leading-relaxed">
                      Join our circle for early access and exclusive pieces.
                    </p>
                    <button className="mt-8 text-[10px] font-black tracking-[0.3em] text-primary uppercase border-b border-primary/20 pb-2">
                      Apply Now
                    </button>
                 </div>
                 <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors" />
              </GlassCard>
              
              <GlassCard className="flex-1 flex flex-col justify-between p-12 rounded-[2.5rem]">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-black tracking-[0.3em] uppercase text-muted-foreground">Curated List</span>
                  <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-2xl font-black tracking-tight mb-4">The Fragrance Kit</h4>
                  <div className="flex gap-2">
                    <div className="h-4 w-4 rounded-full bg-primary" />
                    <div className="h-4 w-4 rounded-full bg-muted" />
                    <div className="h-4 w-4 rounded-full bg-accent" />
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-32 px-6 md:px-12 bg-white/30 dark:bg-black/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 px-4">
            <div className="space-y-4">
              <h2 className="font-display text-5xl md:text-6xl font-black tracking-tighter">
                FEATURED<br/>OBJECTS
              </h2>
              <p className="text-muted-foreground max-w-sm">
                A curated selection of our most iconic pieces, designed for the modern minimal enthusiast.
              </p>
            </div>
            <Link to="/shop" className="group flex items-center gap-3 font-display font-bold text-lg uppercase tracking-widest">
              View All Shop
              <span className="h-12 w-12 rounded-full glass flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <ArrowRight className="h-5 w-5" />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories / Intentional Grid */}
      <section className="py-32 px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 group relative aspect-[16/9] md:aspect-auto md:h-[600px] rounded-[2.5rem] overflow-hidden bg-muted">
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1.2 }}
              src="https://picsum.photos/seed/tech/1200/800" 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 flex flex-col justify-end p-12">
              <span className="text-[10px] tracking-[0.4em] uppercase text-white/70 font-black mb-4">The Future is Here</span>
              <h3 className="text-white font-display text-5xl font-black tracking-tighter leading-tight mb-6">
                PREMIUM TECH<br/>ESSENTIALS
              </h3>
              <Button 
                render={<Link to="/shop?category=Tech" />} 
                nativeButton={false} 
                className="w-fit rounded-full glass bg-white/10 hover:bg-white hover:text-primary border-none"
              >
                Explore Collection
              </Button>
            </div>
          </div>
          
          <div className="md:col-span-4 grid grid-rows-2 gap-6">
            <div className="group relative rounded-[2.5rem] overflow-hidden bg-muted">
               <motion.img 
                  whileHover={{ scale: 1.05 }}
                  src="https://picsum.photos/seed/modern/800/800" 
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex flex-col items-center justify-center text-center p-6">
                  <h4 className="text-white font-display text-2xl font-bold tracking-tight mb-2">Interior Decor</h4>
                  <p className="text-white/70 text-sm mb-4">Sculptural pieces for living</p>
                  <Link to="/shop?category=Decor" className="text-white text-xs font-black uppercase tracking-widest underline underline-offset-8">Shop Now</Link>
                </div>
            </div>
            <div className="group relative rounded-[2.5rem] overflow-hidden bg-accent/20 flex flex-col items-center justify-center p-12 text-center">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="h-24 w-24 rounded-full border border-primary/20 flex items-center justify-center mb-6"
              >
                <div className="h-16 w-16 rounded-full border border-primary/50 flex items-center justify-center">
                   <ShoppingBag className="h-6 w-6 text-primary" />
                </div>
              </motion.div>
              <h4 className="font-display text-2xl font-black tracking-tighter mb-2">CURATED BUNDLES</h4>
              <p className="text-muted-foreground text-sm mb-6">Ready-to-use sets for your workspace and home.</p>
              <Button className="rounded-full px-8">Coming Soon</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20 px-6 md:px-12 border-y border-muted/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: <Truck className="h-6 w-6" />, title: "Global Shipping", desc: "Premium courier services to 50+ countries with white-glove handling." },
            { icon: <ShieldCheck className="h-6 w-6" />, title: "Lifetime Warranty", desc: "Our commitment to quality means your objects are built to last generations." },
            { icon: <ShoppingBag className="h-6 w-6" />, title: "Seamless Returns", desc: "30-day hassle-free return policy for ultimate piece of mind." }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center gap-4">
              <div className="h-14 w-14 rounded-2xl glass flex items-center justify-center text-primary">
                {item.icon}
              </div>
              <h4 className="font-display font-bold text-xl">{item.title}</h4>
              <p className="text-muted-foreground text-sm max-w-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 px-6 md:px-12">
        <GlassCard className="max-w-5xl mx-auto rounded-[3rem] p-12 md:p-24 text-center space-y-8 overflow-hidden relative border-white/10 dark:border-white/5">
           <div className="absolute top-0 right-0 h-64 w-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
           <div className="absolute bottom-0 left-0 h-64 w-64 bg-accent/10 rounded-full blur-3xl -ml-32 -mb-32" />
           
           <h2 className="font-display text-4xl md:text-6xl font-black tracking-tighter leading-tight relative z-10">
             JOIN THE INSIDER<br/>COLLECTIVE
           </h2>
           <p className="text-muted-foreground max-w-lg mx-auto relative z-10">
             Be the first to access limited edition drops, exclusive collaborations, and architectural insights.
           </p>
           <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3 relative z-10">
             <input 
               type="email" 
               placeholder="Enter your email address" 
               className="flex-1 rounded-full px-6 py-4 bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary/20"
             />
             <Button className="rounded-full px-8 py-4 h-auto">Sign Up</Button>
           </div>
           <p className="text-[10px] text-muted-foreground/60 uppercase tracking-widest relative z-10">
             You may unsubscribe at any time. View our <Link to="/" className="underline">Privacy Policy</Link>.
           </p>
        </GlassCard>
      </section>
    </div>
  );
};

export default Home;
