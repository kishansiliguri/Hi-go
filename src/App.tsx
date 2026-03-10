import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ShoppingBag, User, Star, Clock, MapPin, ChevronRight, Menu, X, ArrowRight, Heart } from 'lucide-react';

const CATEGORIES = [
  { id: 1, name: 'Pizza', icon: '🍕' },
  { id: 2, name: 'Burger', icon: '🍔' },
  { id: 3, name: 'Sushi', icon: '🍣' },
  { id: 4, name: 'Healthy', icon: '🥗' },
  { id: 5, name: 'Desserts', icon: '🍰' },
  { id: 6, name: 'Drinks', icon: '🥤' },
  { id: 7, name: 'Asian', icon: '🍜' },
  { id: 8, name: 'Mexican', icon: '🌮' },
];

const POPULAR_FOODS = [
  {
    id: 1,
    name: 'Classic Cheeseburger',
    restaurant: 'Burger Joint',
    price: 12.99,
    rating: 4.8,
    reviews: 420,
    time: '15-25 min',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    tags: ['Burger', 'American'],
  },
  {
    id: 2,
    name: 'Margherita Pizza',
    restaurant: 'Napoli Pizzeria',
    price: 16.50,
    rating: 4.9,
    reviews: 850,
    time: '20-35 min',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80',
    tags: ['Pizza', 'Italian'],
  },
  {
    id: 3,
    name: 'Salmon Poke Bowl',
    restaurant: 'Fresh Catch',
    price: 18.00,
    rating: 4.7,
    reviews: 310,
    time: '10-20 min',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    tags: ['Healthy', 'Seafood'],
  },
  {
    id: 4,
    name: 'Spicy Tonkotsu Ramen',
    restaurant: 'Ramen House',
    price: 15.99,
    rating: 4.6,
    reviews: 520,
    time: '25-40 min',
    image: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?auto=format&fit=crop&w=800&q=80',
    tags: ['Asian', 'Soup'],
  },
  {
    id: 5,
    name: 'Chicken Tikka Masala',
    restaurant: 'Spice Route',
    price: 17.50,
    rating: 4.8,
    reviews: 640,
    time: '30-45 min',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
    tags: ['Indian', 'Curry'],
  },
  {
    id: 6,
    name: 'Avocado Toast',
    restaurant: 'Green Cafe',
    price: 9.99,
    rating: 4.5,
    reviews: 210,
    time: '10-15 min',
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=800&q=80',
    tags: ['Breakfast', 'Healthy'],
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-orange-500/30">
              F
            </div>
            <span className={`font-bold text-2xl tracking-tight ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>
              Foodie<span className="text-orange-500">Express</span>
            </span>
          </div>

          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-full leading-5 bg-white/80 backdrop-blur-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:bg-white transition-all sm:text-sm shadow-sm"
                placeholder="Search for restaurants, cuisines, or dishes..."
              />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button className="text-gray-600 hover:text-orange-500 font-medium transition-colors">Offers</button>
            <button className="text-gray-600 hover:text-orange-500 font-medium transition-colors">Help</button>
            <div className="flex items-center gap-4 border-l border-gray-200 pl-6">
              <button className="relative p-2 text-gray-600 hover:text-orange-500 transition-colors">
                <ShoppingBag className="h-6 w-6" />
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-orange-500 rounded-full">
                  3
                </span>
              </button>
              <button className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-full font-medium transition-colors">
                <User className="h-4 w-4" />
                <span>Sign In</span>
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
             <button className="relative p-2 text-gray-600">
                <ShoppingBag className="h-6 w-6" />
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-orange-500 rounded-full">
                  3
                </span>
              </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-600"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 px-4 py-4 shadow-lg overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white sm:text-sm"
                  placeholder="Search..."
                />
              </div>
              <button className="text-left font-medium text-gray-700 py-2 border-b border-gray-100">Offers</button>
              <button className="text-left font-medium text-gray-700 py-2 border-b border-gray-100">Help</button>
              <button className="flex items-center justify-center gap-2 bg-orange-500 text-white px-4 py-3 rounded-lg font-medium mt-2">
                <User className="h-5 w-5" />
                <span>Sign In / Sign Up</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-full h-full overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[80%] bg-orange-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[60%] bg-yellow-100/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100 text-orange-600 font-medium text-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              Fastest Delivery in Town
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6">
              Craving something <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
                delicious?
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              Order food from your favorite restaurants near you. Fresh, hot, and delivered to your door in minutes.
            </p>

            <div className="bg-white p-2 rounded-2xl shadow-xl shadow-gray-200/50 flex flex-col sm:flex-row gap-2 max-w-xl">
              <div className="relative flex-1 flex items-center">
                <Search className="absolute left-4 h-5 w-5 text-orange-500" />
                <input 
                  type="text" 
                  placeholder="Search food..." 
                  className="w-full pl-12 pr-4 py-3.5 bg-transparent focus:outline-none text-gray-700 font-medium placeholder-gray-400"
                />
              </div>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
                Search
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <Star className="h-4 w-4 fill-current" />
                </div>
                <span>4.9/5 Ratings</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <Clock className="h-4 w-4" />
                </div>
                <span>20 Min Delivery</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Decorative circle */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-400 to-yellow-400 rounded-full opacity-20 animate-pulse" />
              
              <img 
                src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=80" 
                alt="Delicious Burger" 
                className="absolute inset-0 w-full h-full object-cover rounded-full border-8 border-white shadow-2xl"
                referrerPolicy="no-referrer"
              />

              {/* Floating Cards */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -left-8 top-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4"
              >
                <img src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=100&q=80" alt="Pizza" className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                <div>
                  <p className="font-bold text-gray-900 text-sm">Hot Pizza</p>
                  <p className="text-xs text-gray-500">Delivered in 15m</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute -right-4 bottom-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <Star className="h-5 w-5 fill-current" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Top Rated</p>
                  <p className="text-xs text-gray-500">500+ Restaurants</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Categories = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Explore Categories</h2>
          <button className="text-orange-500 font-medium hover:text-orange-600 flex items-center gap-1">
            See All <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        
        <div className="flex overflow-x-auto pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 gap-4 sm:gap-6 hide-scrollbar">
          {CATEGORIES.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center gap-3 min-w-[80px] sm:min-w-[100px] group"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-50 group-hover:bg-orange-50 flex items-center justify-center text-3xl sm:text-4xl shadow-sm border border-gray-100 transition-colors">
                {category.icon}
              </div>
              <span className="font-medium text-gray-700 group-hover:text-orange-500 transition-colors text-sm sm:text-base">
                {category.name}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

const PopularSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Popular Near You</h2>
            <p className="text-gray-500">Explore the most ordered dishes in your area</p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-full border border-gray-200 bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors text-sm">
              Delivery
            </button>
            <button className="px-4 py-2 rounded-full border border-transparent bg-gray-100 text-gray-600 font-medium hover:bg-gray-200 transition-colors text-sm">
              Pickup
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
          {POPULAR_FOODS.map((food, index) => (
            <motion.div 
              key={food.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group flex flex-col"
            >
              <div className="relative h-32 sm:h-48 overflow-hidden shrink-0">
                <img 
                  src={food.image} 
                  alt={food.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <button className="absolute top-2 right-2 sm:top-4 sm:right-4 p-1.5 sm:p-2 rounded-full bg-white/80 backdrop-blur-sm text-gray-400 hover:text-red-500 hover:bg-white transition-colors">
                  <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
                <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 flex gap-2">
                  <span className="px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-white/90 backdrop-blur-sm text-[10px] sm:text-xs font-bold text-gray-900 flex items-center gap-1">
                    <Clock className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-orange-500" />
                    <span className="hidden sm:inline">{food.time}</span>
                    <span className="sm:hidden">{food.time.split(' ')[0]}</span>
                  </span>
                </div>
              </div>
              
              <div className="p-3 sm:p-5 flex flex-col flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 sm:mb-2 gap-1">
                  <h3 className="font-bold text-sm sm:text-lg text-gray-900 line-clamp-1">{food.name}</h3>
                  <span className="font-bold text-sm sm:text-lg text-orange-500">${food.price}</span>
                </div>
                <p className="text-gray-500 text-xs sm:text-sm mb-2 sm:mb-4 line-clamp-1">{food.restaurant}</p>
                
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold text-xs sm:text-sm text-gray-900">{food.rating}</span>
                    <span className="text-[10px] sm:text-sm text-gray-400 hidden sm:inline">({food.reviews})</span>
                  </div>
                  <button className="bg-gray-900 hover:bg-orange-500 text-white p-1.5 sm:p-2 rounded-lg sm:rounded-xl transition-colors">
                    <ShoppingBag className="h-4 w-4 sm:h-5 sm:w-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors shadow-sm">
            View All Restaurants
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      icon: <MapPin className="h-8 w-8 text-orange-500" />,
      title: "Set Location",
      description: "Enter your address to find restaurants delivering to your area."
    },
    {
      icon: <Menu className="h-8 w-8 text-orange-500" />,
      title: "Choose Food",
      description: "Browse hundreds of menus to find the food you like."
    },
    {
      icon: <ShoppingBag className="h-8 w-8 text-orange-500" />,
      title: "Pay Fast",
      description: "Fast, secure, and simple payment options available."
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-500" />,
      title: "Fast Delivery",
      description: "Food is prepared & delivered to your door swiftly."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-500 text-lg">Ordering food has never been easier. Follow these simple steps to get your favorite meals delivered.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center flex flex-col items-center group">
              <div className="w-20 h-20 rounded-2xl bg-orange-50 flex items-center justify-center mb-6 group-hover:bg-orange-100 transition-colors relative">
                {step.icon}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center font-bold text-gray-900 text-sm">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                F
              </div>
              <span className="font-bold text-xl tracking-tight">
                Foodie<span className="text-orange-500">Express</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              The fastest food delivery service in the city. We deliver your favorite meals fresh and hot.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                <span className="font-bold">fb</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                <span className="font-bold">tw</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                <span className="font-bold">ig</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Partner with us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Get the App</h4>
            <p className="text-gray-400 mb-4">Order faster and easier with our mobile app.</p>
            <div className="space-y-3">
              <button className="w-full bg-gray-800 hover:bg-gray-700 text-white px-4 py-3 rounded-xl flex items-center justify-center gap-3 transition-colors">
                <div className="text-left">
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div className="font-bold text-sm">App Store</div>
                </div>
              </button>
              <button className="w-full bg-gray-800 hover:bg-gray-700 text-white px-4 py-3 rounded-xl flex items-center justify-center gap-3 transition-colors">
                <div className="text-left">
                  <div className="text-xs text-gray-400">GET IT ON</div>
                  <div className="font-bold text-sm">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} FoodieExpress. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-orange-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <PopularSection />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}
