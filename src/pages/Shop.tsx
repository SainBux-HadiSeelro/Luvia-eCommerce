import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, categories } from '@/data/products';
import { ProductCard } from '@/components/shop/ProductCard';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Search, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('Newest');

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) setSelectedCategory(category);
  }, [searchParams]);

  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-20 px-6 md:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-6 mb-16">
          <span className="text-[10px] tracking-[0.5em] font-black uppercase text-muted-foreground">The Catalogue</span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h1 className="font-display italic font-black text-6xl md:text-8xl tracking-tighter leading-[0.8] mb-0">
              ESSENTIAL<br/>
              <span className="opacity-50">OBJECTS</span>
            </h1>
            <div className="flex items-center gap-2 text-muted-foreground uppercase text-[10px] tracking-widest font-black">
              <span className="text-primary font-bold">{filteredProducts.length}</span> Objects available
            </div>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          <div className="flex items-center gap-3 overflow-x-auto pb-4 md:pb-0 scrollbar-hide w-full md:w-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full whitespace-nowrap font-display font-bold text-sm tracking-tight transition-all
                  ${selectedCategory === category 
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105' 
                    : 'bg-muted/50 text-muted-foreground hover:bg-muted'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search collection..." 
                className="rounded-full pl-10 h-12 bg-muted/30 border-none shadow-none focus-visible:ring-1"
              />
            </div>
            <Button variant="outline" className="rounded-full h-12 gap-2 border-muted/50 hidden sm:flex">
              <SlidersHorizontal className="h-4 w-4" />
              Filter
            </Button>
            <div className="relative group hidden sm:block">
              <Button variant="outline" className="rounded-full h-12 gap-2 border-muted/50">
                {sortBy}
                <ChevronDown className="h-4 w-4" />
              </Button>
               {/* Sort Dropdown would go here */}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="py-40 text-center animate-in fade-in zoom-in duration-500">
            <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
               <Search className="h-8 w-8 text-muted-foreground opacity-30" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-2">No Objects Found</h3>
            <p className="text-muted-foreground">Adjust your filters or try a different search term.</p>
            <Button 
              variant="outline" 
              className="mt-8 rounded-full"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
            >
              Clear all filters
            </Button>
          </div>
        )}

        {/* Load More/Pagination */}
        {filteredProducts.length > 0 && (
          <div className="mt-24 flex justify-center">
            <Button variant="outline" size="lg" className="rounded-full px-12 h-16 glass font-display font-bold text-lg border-muted/30">
              Load more pieces
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
