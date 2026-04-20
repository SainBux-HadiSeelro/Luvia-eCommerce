import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { cart, totalItems, totalPrice, removeFromCart, updateQuantity } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Shop', path: '/shop' },
    { title: 'Collections', path: '/collections' },
    { title: 'About', path: '/about' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl transition-all duration-500",
      )}
    >
      <nav className={cn(
        "flex items-center justify-between px-8 py-4 rounded-full border border-white/10 backdrop-blur-xl transition-all duration-500",
        isScrolled ? "bg-white/10 dark:bg-white/5 shadow-2xl text-white" : "bg-white/5 dark:bg-transparent"
      )}>
        <Link to="/" className={cn(
          "text-2xl font-display font-black tracking-tighter transition-colors",
          isScrolled ? "text-white" : "text-foreground"
        )}>
          LUVIA.
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => cn(
                "text-xs font-bold tracking-widest uppercase transition-all",
                isActive ? (isScrolled ? "text-white" : "text-primary") : (isScrolled ? "text-white/70" : "text-muted-foreground"),
                "hover:text-white"
              )}
            >
              {link.title}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
            <Search className="h-5 w-5" />
          </Button>

          <Sheet>
            <SheetTrigger 
              render={
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingBag className="h-5 w-5" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </Button>
            } />
            <SheetContent className="w-full sm:max-w-md p-0 glass dark:glass-dark border-l border-white/10">
              <div className="flex flex-col h-full bg-white/40 dark:bg-black/20 backdrop-blur-3xl">
                <SheetHeader className="p-6">
                  <SheetTitle className="font-display text-2xl font-bold flex items-center gap-2">
                    <ShoppingBag className="h-6 w-6" />
                    Shopping Cart
                  </SheetTitle>
                </SheetHeader>
                <Separator className="bg-white/10" />
                
                <ScrollArea className="flex-1 p-6">
                  {cart.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-[60vh] text-center gap-4">
                      <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center">
                        <ShoppingBag className="h-8 w-8 text-muted-foreground opacity-50" />
                      </div>
                      <div>
                        <p className="text-lg font-medium">Your cart is empty</p>
                        <p className="text-sm text-muted-foreground">Start adding some items to your collection.</p>
                      </div>
                      <Button 
                        render={<Link to="/shop" />} 
                        nativeButton={false} 
                        variant="outline" 
                        className="mt-4 rounded-full px-8"
                      >
                        Browse Items
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {cart.map((item) => (
                        <div key={item.id} className="flex gap-4">
                          <div className="h-24 w-24 rounded-xl overflow-hidden bg-muted flex-shrink-0">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="h-full w-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <div className="flex-1 flex flex-col justify-between py-1">
                            <div>
                              <p className="font-display font-semibold line-clamp-1">{item.name}</p>
                              <p className="text-sm text-muted-foreground">{item.category}</p>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center border border-white/10 rounded-full bg-white/5">
                                <button 
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="h-7 w-7 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors"
                                >
                                  -
                                </button>
                                <span className="text-xs font-medium w-6 text-center">{item.quantity}</span>
                                <button 
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="h-7 w-7 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors"
                                >
                                  +
                                </button>
                              </div>
                              <p className="font-display font-medium text-sm underline underline-offset-4">${item.price * item.quantity}</p>
                            </div>
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="h-8 w-8 text-muted-foreground hover:text-destructive flex-shrink-0 flex items-center justify-center hover:bg-destructive/10 rounded-full transition-colors"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </ScrollArea>

                {cart.length > 0 && (
                  <div className="p-6 space-y-4 bg-white/10 dark:bg-white/5 backdrop-blur-xl border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <p className="text-muted-foreground">Subtotal</p>
                      <p className="font-display text-xl font-bold">${totalPrice}</p>
                    </div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground text-center">
                      Shipping and taxes computed at checkout
                    </p>
                    <Button className="w-full rounded-full py-6 font-display font-bold text-lg">
                      Checkout Now
                    </Button>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger 
              render={
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
            } />
            <SheetContent side="left" className="w-[300px] glass dark:glass-dark border-r border-white/10">
              <div className="flex flex-col h-full bg-white/40 dark:bg-black/20 backdrop-blur-3xl pt-12">
                <div className="px-6 mb-8">
                  <Link to="/" className="text-3xl font-display font-extrabold tracking-tighter text-primary">
                    LUVIA
                  </Link>
                </div>
                <div className="flex flex-col gap-2 p-6">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className="text-xl font-display font-medium py-3 hover:translate-x-2 transition-transform"
                    >
                      {link.title}
                    </NavLink>
                  ))}
                </div>
                <div className="mt-auto p-6 space-y-4">
                  <div className="flex gap-4">
                    {/* Socials can go here */}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};
