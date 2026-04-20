import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ShoppingBag, 
  ChevronLeft, 
  Plus, 
  Minus, 
  Star, 
  Share2, 
  Heart,
  Truck,
  ShieldCheck,
  RefreshCcw,
  ArrowRight
} from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Separator } from '@/components/ui/separator';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const product = products.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="h-screen flex flex-col items-center justify-center gap-6">
        <h2 className="font-display text-4xl font-bold">Object not found</h2>
        <Button onClick={() => navigate('/shop')}>Back to Catalogue</Button>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 2);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <Link 
        to="/shop" 
        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mb-12"
      >
        <ChevronLeft className="h-4 w-4" /> Back to Catalogue
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
        {/* Gallery */}
        <div className="space-y-6">
          <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-muted group">
             <motion.img 
              layoutId={`product-image-${product.id}`}
              src={product.image} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
             <div className="absolute bottom-6 right-6 flex gap-3">
               <button className="h-12 w-12 glass rounded-full flex items-center justify-center hover:bg-white transition-colors">
                 <Share2 className="h-5 w-5" />
               </button>
               <button className="h-12 w-12 glass rounded-full flex items-center justify-center hover:bg-white text-red-500 transition-colors">
                 <Heart className="h-5 w-5" />
               </button>
             </div>
          </div>
          
          <div className="grid grid-cols-4 gap-4">
            {[0, 1, 2, 3].map((i) => (
              <button 
                key={i}
                className={`aspect-square rounded-2xl overflow-hidden bg-muted transition-all border-2 
                  ${activeImage === i ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-100'}`}
                onClick={() => setActiveImage(i)}
              >
                <img src={product.image} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <div className="mb-8">
            <span className="text-[10px] tracking-[0.4em] font-black uppercase text-muted-foreground mb-4 block">
              {product.category}
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-black tracking-tighter leading-tight mb-4">
              {product.name}
            </h1>
            <div className="flex items-center gap-6">
              <p className="font-display text-4xl font-black tracking-tight">${product.price}</p>
              <div className="flex items-center gap-1 bg-accent/30 px-3 py-1 rounded-full">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span className="text-sm font-bold">4.9</span>
                <span className="text-xs text-muted-foreground">(24 Reviews)</span>
              </div>
            </div>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            {product.description}
          </p>

          <div className="space-y-8 mb-12">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] tracking-[0.2em] font-black uppercase">Configuration</span>
              <div className="flex gap-3">
                {['Frost White', 'Midnight', 'Sandstone'].map((color) => (
                  <button key={color} className="flex-1 py-3 px-1 rounded-xl border border-muted hover:border-primary transition-all text-sm font-medium">
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-[10px] tracking-[0.2em] font-black uppercase">Quantity</span>
              <div className="flex items-center gap-6">
                <div className="flex items-center border border-muted rounded-full p-1 bg-muted/20">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-10 w-10 flex items-center justify-center hover:bg-white rounded-full transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="text-lg font-bold w-12 text-center">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="h-10 w-10 flex items-center justify-center hover:bg-white rounded-full transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <p className="text-sm text-muted-foreground font-medium">Free sustainable packaging included.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              onClick={() => {
                for(let i=0; i<quantity; i++) addToCart(product);
              }}
              className="flex-1 rounded-full h-16 font-display font-bold text-lg gap-3"
            >
              Add to Collection <Plus className="h-5 w-5" />
            </Button>
            <Button variant="outline" className="rounded-full h-16 px-8 glass border-muted/50 hidden sm:flex">
              <ShoppingBag className="h-6 w-6" />
            </Button>
          </div>

          <div className="space-y-6 bg-muted/20 p-8 rounded-[2rem] border border-muted/30">
            <div className="flex items-start gap-4">
              <Truck className="h-5 w-5 text-primary shrink-0 mt-1" />
              <div>
                <p className="text-sm font-bold">Fast Premium Delivery</p>
                <p className="text-xs text-muted-foreground">Estimated delivery: Apr 24 - Apr 28. Free over $200.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-1" />
              <div>
                <p className="text-sm font-bold">Craftsmanship Guarantee</p>
                <p className="text-xs text-muted-foreground">Lifetime warranty on structural integrity and materials.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details & Specs */}
      <section className="mt-32">
        <div className="flex flex-col md:flex-row gap-20">
          <div className="md:w-1/3">
            <h3 className="font-display text-4xl font-black tracking-tight mb-6">THE ESSENCE<br/>OF FORM</h3>
            <Separator className="mb-6" />
            <p className="text-muted-foreground leading-relaxed">
              Every detail has been meticulously considered to provide a seamless interaction 
              between the object and the observer.
            </p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
            {product.details.map((detail, i) => (
              <div key={i} className="flex gap-4 group">
                 <div className="h-10 w-10 glass rounded-xl flex items-center justify-center shrink-0 text-primary group-hover:scale-110 transition-transform">
                   <Plus className="h-4 w-4" />
                 </div>
                 <p className="text-sm font-medium leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="mt-40">
          <div className="flex flex-col sm:flex-row justify-between items-end gap-6 mb-12">
            <h3 className="font-display text-4xl font-black tracking-tight">YOU MAY ALSO DESIRE</h3>
            <Link to="/shop" className="text-sm font-black uppercase tracking-widest flex items-center gap-2 hover:translate-x-2 transition-transform">
              Explore All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map(p => (
              <div key={p.id} className="group">
                <GlassCard className="p-0 overflow-hidden relative border-white/5 shadow-none transition-all duration-500 hover:-translate-y-2">
                  <Link to={`/product/${p.id}`} className="block relative aspect-[4/5] overflow-hidden bg-muted">
                    <img src={p.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60" />
                  </Link>
                  <div className="p-6">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">{p.category}</p>
                    <div className="flex justify-between items-center">
                      <h4 className="font-display font-bold text-lg">{p.name}</h4>
                      <p className="font-display font-bold">${p.price}</p>
                    </div>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
