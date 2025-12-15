import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ShieldCheck, 
  LayoutGrid, 
  PlusCircle, 
  History, 
  Wallet, 
  ArrowRightLeft, 
  LifeBuoy, 
  Menu, 
  X,
  Bell,
  LogOut,
  ChevronDown,
  Facebook,
  Globe,
  Video
} from 'lucide-react';

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  path: string;
  isActive?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, label, path, isActive }) => (
  <Link 
    to={path} 
    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
      isActive 
        ? 'bg-saas-light text-saas-dark border-r-4 border-saas-primary' 
        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
    }`}
  >
    <Icon size={20} />
    <span>{label}</span>
  </Link>
);

export const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activePlatform, setActivePlatform] = useState('facebook');
  const location = useLocation();

  const menuGroups = [
    {
      title: 'إدارة الحسابات',
      items: [
        { label: 'قائمة الحسابات', path: '/dashboard', icon: LayoutGrid },
        { label: 'طلب حساب جديد', path: '/dashboard/request', icon: PlusCircle },
        { label: 'سجل المشاركة (BM)', path: '/dashboard/bm-log', icon: History },
      ]
    },
    {
      title: 'التمويل',
      items: [
        { label: 'الإيداع', path: '/dashboard/deposit', icon: Wallet },
        { label: 'سجل الإيداعات', path: '/dashboard/transactions', icon: History },
      ]
    },
    {
      title: 'ما بعد البيع',
      items: [
        { label: 'التحويلات', path: '/dashboard/transfers', icon: ArrowRightLeft },
        { label: 'الاسترداد', path: '/dashboard/refunds', icon: LifeBuoy },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-saas-surface flex font-sans">
      {/* Sidebar Mobile Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)}></div>
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:sticky top-0 right-0 h-screen w-64 bg-white border-l border-slate-200 z-50 transition-transform duration-300 ${
        isSidebarOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
      }`}>
        <div className="flex items-center gap-2 p-6 border-b border-slate-100">
          <div className="w-8 h-8 bg-saas-primary rounded-lg flex items-center justify-center text-white">
            <ShieldCheck size={20} />
          </div>
          <span className="text-xl font-bold text-slate-900">AdScale</span>
          <button className="mr-auto lg:hidden text-slate-400" onClick={() => setSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="p-4 space-y-8 overflow-y-auto h-[calc(100vh-80px)]">
          {menuGroups.map((group, idx) => (
            <div key={idx}>
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-2">
                {group.title}
              </h3>
              <div className="space-y-1">
                {group.items.map((item) => (
                  <SidebarItem 
                    key={item.path} 
                    {...item} 
                    isActive={location.pathname === item.path}
                  />
                ))}
              </div>
            </div>
          ))}
          
          <div className="pt-4 mt-4 border-t border-slate-100">
             <button className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-500 hover:bg-red-50 rounded-lg w-full transition-colors">
                <LogOut size={20} />
                <span>تسجيل الخروج</span>
             </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <button className="lg:hidden p-2 text-slate-500" onClick={() => setSidebarOpen(true)}>
              <Menu size={24} />
            </button>
            
            {/* Platform Switcher */}
            <div className="hidden md:flex bg-slate-100 p-1 rounded-lg">
                <button 
                    onClick={() => setActivePlatform('facebook')}
                    className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium transition-all ${activePlatform === 'facebook' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                    <Facebook size={16} /> Facebook
                </button>
                <button 
                    onClick={() => setActivePlatform('google')}
                    className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium transition-all ${activePlatform === 'google' ? 'bg-white text-red-500 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                    <Globe size={16} /> Google
                </button>
                <button 
                    onClick={() => setActivePlatform('tiktok')}
                    className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium transition-all ${activePlatform === 'tiktok' ? 'bg-white text-black shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                    <Video size={16} /> TikTok
                </button>
            </div>
          </div>

          <div className="flex items-center gap-6">
            {/* Balance Widget */}
            <div className="hidden sm:flex flex-col items-end mr-4">
                <span className="text-xs text-slate-500">الرصيد الحالي</span>
                <span className="font-bold text-saas-primary text-lg font-mono">$12,450.00</span>
            </div>

            <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>

            <div className="flex items-center gap-3">
                <button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors">
                    <Bell size={20} />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>
                <div className="flex items-center gap-3 cursor-pointer pl-2">
                    <div className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        MA
                    </div>
                    <div className="hidden md:block">
                        <div className="text-sm font-semibold text-slate-900">Mohamed Ahmed</div>
                        <div className="text-xs text-yellow-600 font-medium">VIP Member</div>
                    </div>
                    <ChevronDown size={16} className="text-slate-400" />
                </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 sm:p-6 lg:p-8 overflow-y-auto flex-1">
          {children}
        </main>
      </div>
    </div>
  );
};