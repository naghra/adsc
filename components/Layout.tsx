import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShieldCheck, ChevronLeft } from 'lucide-react';
import { Button } from './Button';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'خدماتنا', path: '/#services' },
    { name: 'لماذا نحن', path: '/#why-us' },
    { name: 'القطاعات', path: '/#verticals' },
  ];

  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled || !isHome ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-meta-blue rounded-lg flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
                <ShieldCheck size={24} />
              </div>
              <span className={`text-2xl font-bold tracking-tight ${isScrolled || !isHome ? 'text-slate-900' : 'text-slate-900 lg:text-white'}`}>
                AdScale
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.path}
                  className={`text-sm font-medium transition-colors hover:text-meta-blue ${
                    isScrolled || !isHome ? 'text-slate-600' : 'text-slate-200'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <Link to="/apply">
                <Button variant={isScrolled || !isHome ? 'primary' : 'secondary'} className="py-2 px-4 text-sm">
                  انضم إلينا
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-md ${isScrolled || !isHome ? 'text-slate-900' : 'text-white'}`}
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-meta-blue hover:bg-blue-50 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <Link to="/apply" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button fullWidth>انضم إلينا الآن</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4 text-white">
                <ShieldCheck size={28} className="text-meta-blue" />
                <span className="text-2xl font-bold">AdScale</span>
              </div>
              <p className="text-sm leading-relaxed opacity-80">
                شريكك الاستراتيجي في الإعلانات الرقمية. نوفر بنية تحتية إعلانية صلبة تساعدك على التوسع بأمان وموثوقية.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">روابط سريعة</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-white transition-colors">الرئيسية</Link></li>
                <li><a href="#services" className="hover:text-white transition-colors">الخدمات</a></li>
                <li><Link to="/apply" className="hover:text-white transition-colors">طلب انضمام</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">قانوني</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/privacy" className="hover:text-white transition-colors">سياسة الخصوصية</Link></li>
                <li><Link to="/terms" className="hover:text-white transition-colors">الشروط والأحكام</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">تنويه هام</h3>
              <p className="text-xs leading-relaxed opacity-70">
                نحن وكالة تسويق رقمي مستقلة. نحن نتعاون مع المنصات الإعلانية كشركاء معتمدين ولكننا لا نمثل شركة Meta (Facebook) بشكل مباشر. جميع الحقوق التجارية مملوكة لأصحابها.
              </p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs opacity-60">
            &copy; {new Date().getFullYear()} AdScale. جميع الحقوق محفوظة.
          </div>
        </div>
      </footer>
    </div>
  );
};