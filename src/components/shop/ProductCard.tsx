import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { Plus, Heart, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <GlassCard className="p-0 overflow-hidden relative border-white/5 shadow-none transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2">
        <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden bg-muted">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {product.isFeatured && (
            <Badge className="absolute top-4 left-4 bg-white/40 backdrop-blur-md text-primary border-none font-display font-medium px-3">
              Featured
            </Badge>
          )}
          <button className="absolute top-4 right-4 h-10 w-10 glass rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:text-primary z-10">
            <Heart className="h-5 w-5" />
          </button>
        </Link>
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1 font-bold">
                {product.category}
              </p>
              <h3 className="font-display italic font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                {product.name}
              </h3>
            </div>
            <p className="font-display font-black text-xl tracking-tighter">
              ${product.price}
            </p>
          </div>
          
          <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
            <Button 
              asChild
              variant="ghost" 
              className="px-0 hover:bg-transparent font-medium group/btn"
            >
              <Link to={`/product/${product.id}`} className="flex items-center gap-2">
                Discover Details
                <motion.span 
                  className="inline-block"
                  whileHover={{ x: 5 }}
                >
                  →
                </motion.span>
              </Link>
            </Button>
            
            <motion.button
              onClick={() => addToCart(product)}
              whileTap={{ scale: 0.9 }}
              className="h-10 w-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
            >
              <Plus className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};
