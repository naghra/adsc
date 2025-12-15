import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, BarChart3, PieChart, TrendingUp, Facebook, Globe, Lock } from 'lucide-react';
import { Button } from '../components/Button';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Right Side - Form (RTL: appears on Right) */}
      <div className="w-full md:w-1/2 lg:w-5/12 flex items-center justify-center p-8 lg:p-16 bg-white">
        <div className="w-full max-w-md">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-saas-primary rounded-lg flex items-center justify-center text-white">
              <ShieldCheck size={24} />
            </div>
            <span className="text-2xl font-bold text-slate-900">AdScale</span>
          </div>

          <h1 className="text-3xl font-bold text-slate-900 mb-2">مرحباً بعودتك</h1>
          <p className="text-slate-500 mb-8">سجل الدخول لإدارة حساباتك الإعلانية</p>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">اسم المستخدم أو البريد الإلكتروني</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-saas-primary focus:border-saas-primary outline-none transition-all"
                placeholder="name@company.com"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">كلمة المرور</label>
              <input 
                type="password" 
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-saas-primary focus:border-saas-primary outline-none transition-all"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 text-saas-primary rounded border-slate-300 focus:ring-saas-primary" />
                <span className="text-sm text-slate-600">تذكرني</span>
              </label>
              <a href="#" className="text-sm text-saas-primary hover:text-saas-dark font-medium">نسيت كلمة المرور؟</a>
            </div>

            <button 
              type="submit"
              className="w-full bg-saas-primary hover:bg-saas-dark text-white font-bold py-3 px-4 rounded-lg shadow-lg shadow-green-500/20 transition-all duration-200"
            >
              تسجيل الدخول
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-slate-500">
            ليس لديك حساب بعد؟ <a href="/#/apply" className="text-saas-primary font-bold">قدم طلب انضمام</a>
          </p>
        </div>
      </div>

      {/* Left Side - Visuals (RTL: appears on Left) */}
      <div className="hidden md:flex md:w-1/2 lg:w-7/12 bg-slate-900 relative overflow-hidden items-center justify-center p-12">
        {/* Abstract Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        </div>

        {/* Floating Cards */}
        <div className="relative z-10 w-full max-w-lg">
          {/* Main Card */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                  <Facebook size={20} />
                </div>
                <div>
                  <div className="text-white font-semibold">Ad Account #8821</div>
                  <div className="text-blue-200 text-xs">Active • High Tier</div>
                </div>
              </div>
              <span className="text-green-400 font-bold">+24.5%</span>
            </div>
            <div className="h-24 flex items-end justify-between gap-1">
              {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                <div key={i} style={{ height: `${h}%` }} className="w-full bg-gradient-to-t from-green-500/80 to-green-300 rounded-t-sm"></div>
              ))}
            </div>
          </div>

          {/* Secondary Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl">
              <div className="text-slate-400 text-xs mb-1">Monthly Spend</div>
              <div className="text-white text-xl font-bold">$124,500</div>
              <div className="flex items-center text-green-400 text-xs mt-2">
                <TrendingUp size={12} className="mr-1" /> Increasing
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl">
              <div className="text-slate-400 text-xs mb-1">Platforms</div>
              <div className="flex gap-2 mt-2">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white"><Facebook size={16} /></div>
                <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white"><Globe size={16} /></div>
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white font-bold text-xs">TK</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};