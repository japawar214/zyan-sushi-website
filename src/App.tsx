import React, { useEffect, useState } from 'react';
import { Instagram, Phone, MapPin, Clock, Star, ChevronDown } from 'lucide-react';

// Utility function for smooth scrolling
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

// Premium Button Component
const PremiumButton: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}> = ({ children, onClick, variant = 'primary', size = 'md', className = '' }) => {
  const baseClasses = 'font-inter font-semibold transition-all duration-300 cursor-pointer inline-flex items-center justify-center rounded-lg border-2 transform hover:scale-105 active:scale-95';
  
  const variants = {
    primary: 'bg-red-600 border-red-600 text-white hover:bg-red-700 hover:border-red-700 hover:shadow-xl',
    secondary: 'bg-white border-white text-black hover:bg-gray-100 hover:shadow-xl',
    outline: 'bg-transparent border-red-600 text-red-600 hover:bg-red-600 hover:text-white hover:shadow-xl'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// Animated Card Component
const AnimatedCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = '', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div 
      className={`transform transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
};

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleRedirect = (url: string) => {
    window.open(url, '_blank');
  };
  
  return (
    <div className="min-h-screen bg-black text-white font-inter overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-lg shadow-2xl' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-red-600 shadow-lg">
              <img 
                src="./assets/images/logo/logo.jpg"
                alt="Zyan Sushi Logo"
                className="w-full h-full object-cover"
              />
              </div>
              <h1 className="text-2xl font-bold text-white tracking-tight">Zyan Sushi</h1>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['inicio', 'sobre', 'unidades', 'contato'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-white hover:text-red-400 transition-colors duration-300 font-medium capitalize tracking-wide"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video/Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url('./assets/images/gallery/hero-background.jpg')`
            }}
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <AnimatedCard delay={300}>
            <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight">
              <span className="text-white font-light">O Melhor</span>
              <br />
              <span className="text-red-600 font-black">Sushi</span>
              <span className="text-white font-light"> da Região</span>
            </h2>
          </AnimatedCard>
          
          <AnimatedCard delay={600}>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto font-light tracking-wide">
              Experimente o sabor autêntico do Japão com ingredientes frescos e técnicas tradicionais
            </p>
          </AnimatedCard>
          
          <AnimatedCard delay={900}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <PremiumButton 
                variant="primary" 
                size="lg"
                onClick={() => handleRedirect('https://drive.google.com/file/d/12UFssrVo_pXXZmGzYrOWv25vdYMWUf57/view?usp=drive_link')}
              >
                Ver Cardápio
              </PremiumButton>
              <PremiumButton 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('unidades')}
              >
                Nossas Unidades
              </PremiumButton>
            </div>
          </AnimatedCard>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-red-400" />
        </div>
      </section>
      
      {/* About Section */}
      <section id="sobre" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <AnimatedCard className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Quem</span>
              <span className="text-red-600"> Somos</span>
            </h3>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          </AnimatedCard>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedCard delay={300}>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                <img 
                  src="./assets/images/gallery/restaurant-interior.jpg"
                  alt="Interior do Restaurante"
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </AnimatedCard>
            
            <AnimatedCard delay={600}>
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Zyan Sushi é a sua parada obrigatória para o melhor da culinária japonesa. 
                  Honramos a tradição com ingredientes frescos, técnicas autênticas e um ambiente acolhedor.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Nossa missão é proporcionar uma experiência gastronômica única, 
                  onde cada prato conta uma história de sabor e qualidade.
                </p>
                
                <div className="flex items-center space-x-4 pt-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-400">Avaliação 5.0 - Excelência em sabor</span>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>
      
      {/* Locations Section */}
      <section id="unidades" className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <AnimatedCard className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Nossas</span>
              <span className="text-red-600"> Unidades</span>
            </h3>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Encontre a unidade mais próxima de você e venha nos visitar
            </p>
          </AnimatedCard>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Breu Branco',
                mapUrl: 'https://maps.app.goo.gl/JbNiSBvf8VxZKkky7',
                whatsapp: 'https://wa.me/559491705008',
                phone: '+55 94 9170-5008',
                image: './assets/images/locations/breu-branco.jpg',
                delay: 300
              },
              {
                name: 'Tucuruí',
                mapUrl: 'https://maps.app.goo.gl/Qjz6EqxfStwFLrRY7',
                whatsapp: 'https://wa.me/559492239549',
                phone: '+55 94 9223-9549',
                image: './assets/images/locations/tucurui.jpg',
                delay: 600
              },
              {
                name: 'Tailândia',
                mapUrl: 'https://maps.app.goo.gl/jHCnK59d6vtoitbk7',
                whatsapp: 'https://wa.me/559192589580',
                phone: '+55 91 9258-9580',
                image: './assets/images/locations/tailandia.jpg',
                delay: 900
              }
            ].map((location) => (
              <AnimatedCard key={location.name} delay={location.delay}>
                <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-red-500/20 transition-all duration-500 group border border-gray-800 hover:border-red-600">
                  <div className="relative overflow-hidden">
                    <img 
                      src={location.image}
                      alt={location.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <h4 className="text-2xl font-bold text-white">{location.name}</h4>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="flex items-center space-x-2 text-gray-300">
                      <Phone className="w-4 h-4 text-red-400" />
                      <span className="text-sm">{location.phone}</span>
                    </div>
                    
                    <div className="space-y-3">
                      <PremiumButton 
                        variant="outline" 
                        size="sm" 
                        className="w-full"
                        onClick={() => handleRedirect(location.mapUrl)}
                      >
                        <MapPin className="w-4 h-4 mr-2" />
                        Ver no Mapa
                      </PremiumButton>
                      <PremiumButton 
                        variant="primary" 
                        size="sm" 
                        className="w-full"
                        onClick={() => handleRedirect(location.whatsapp)}
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Peça no WhatsApp
                      </PremiumButton>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Dishes */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <AnimatedCard className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Pratos</span>
              <span className="text-red-600"> Especiais</span>
            </h3>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          </AnimatedCard>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sashimi Premium',
                image: './assets/images/menu/sashimi-premium.jpg',
                description: 'Peixes frescos cortados na perfeição'
              },
              {
                name: 'Combo Especial',
                image: './assets/images/menu/combo-especial.jpg',
                description: 'Nossa seleção mais popular'
              },
              {
                name: 'Temaki Artesanal',
                image: './assets/images/menu/temaki-artesanal.jpg',
                description: 'Feito na hora com ingredientes premium'
              }
            ].map((dish, index) => (
              <AnimatedCard key={dish.name} delay={300 * (index + 1)}>
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img 
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent group-hover:from-red-900/50 transition-all duration-500"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h4 className="text-2xl font-bold text-white mb-2">{dish.name}</h4>
                      <p className="text-gray-200 text-sm">{dish.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contato" className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedCard>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Entre em</span>
              <span className="text-red-600"> Contato</span>
            </h3>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-12"></div>
            
            <div className="flex justify-center mb-12">
              <a 
                href="https://www.instagram.com/zyansushi/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-2xl">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
              </a>
            </div>
            
            <p className="text-xl text-gray-300 mb-8">
              Siga-nos no Instagram para novidades e promoções especiais
            </p>
            
            <div className="flex items-center justify-center space-x-4 text-gray-400">
              <Clock className="w-5 h-5" />
              <span>Funcionamento: Terça a Domingo, 18h às 23h</span>
            </div>
          </AnimatedCard>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-red-600">
              <img 
                src="./assets/images/logo/logo.jpg"
                alt="Zyan Sushi"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xl font-bold text-white">Zyan Sushi</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 Zyan Sushi. Todos os direitos reservados. | Desenvolvido com ❤️
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

