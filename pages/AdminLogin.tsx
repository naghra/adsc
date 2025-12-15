import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ShieldAlert, 
  Eye, 
  EyeOff, 
  Lock, 
  LayoutDashboard, 
  BarChart, 
  Server,
  AlertTriangle,
  CheckCircle2
} from 'lucide-react';

export const AdminLogin: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check credentials
    if (formData.username === 'bai227098@gmail.com' && formData.password === 'Hakunamatata@1') {
      console.log("Admin Login Success");
      // Navigate to the main dashboard (assuming shared dashboard for prototype, or specialized admin route)
      navigate('/dashboard'); 
    } else {
      alert('بيانات الدخول غير صحيحة. يرجى التحقق من البريد الإلكتروني وكلمة المرور.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50 font-sans">
      {/* Right Side - Login Form (RTL) */}
      <div className="w-full md:w-1/2 lg:w-5/12 flex flex-col justify-center p-8 lg:p-16 bg-white shadow-2xl z-10">
        <div className="w-full max-w-md mx-auto">
          {/* Header */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-white shadow-lg">
              <ShieldAlert size={28} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Agency Admin</h1>
              <span className="text-xs text-slate-500 font-mono tracking-wider">SECURE GATEWAY v2.4</span>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">تسجيل دخول الإدارة</h2>
            <p className="text-slate-600 flex items-center gap-2">
              <Lock size={16} className="text-slate-400" />
              الوصول مخصص لفريق الإدارة والعمليات فقط
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">معرف المسؤول / البريد الإلكتروني</label>
              <input 
                type="text" 
                value={formData.username}
                onChange={(e) => setFormData({...formData, username: e.target.value})}
                className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-slate-800 focus:border-slate-800 outline-none transition-all bg-slate-50 focus:bg-white"
                placeholder="admin@adscale.agency"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">كلمة المرور</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-slate-800 focus:border-slate-800 outline-none transition-all bg-slate-50 focus:bg-white"
                  placeholder="••••••••••••"
                  required
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input type="checkbox" className="w-4 h-4 text-slate-900 rounded border-slate-300 focus:ring-slate-900" />
                <span className="text-sm text-slate-600 font-medium">تذكر هذا الجهاز</span>
              </label>
              <a href="#" className="text-sm text-slate-700 hover:text-slate-900 font-semibold underline decoration-slate-300 underline-offset-4">
                فقدت الوصول؟
              </a>
            </div>

            <button 
              type="submit"
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-4 rounded-md shadow-lg shadow-slate-900/20 transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              <Server size={20} className="group-hover:scale-110 transition-transform" />
              تسجيل الدخول للنظام
            </button>
          </form>

          {/* Security Footer */}
          <div className="mt-10 pt-6 border-t border-slate-200">
            <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-100 rounded-md">
              <AlertTriangle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-red-800 leading-relaxed font-medium">
                تنبيه أمني: هذه اللوحة مخصصة للموظفين المصرح لهم فقط. يتم تسجيل عنوان IP وجميع محاولات الدخول لأغراض المراجعة الأمنية. أي محاولة غير مصرح بها ستعرض صاحبها للمساءلة القانونية.
              </p>
            </div>
            <div className="mt-4 text-center text-xs text-slate-400 font-mono">
              System Status: <span className="text-green-600 font-bold">Operational</span> • IP: 192.168.1.x
            </div>
          </div>
        </div>
      </div>

      {/* Left Side - Visuals (RTL) */}
      <div className="hidden md:flex md:w-1/2 lg:w-7/12 bg-slate-900 relative overflow-hidden flex-col items-center justify-center text-white p-12">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[100px]"></div>

        {/* Content */}
        <div className="relative z-10 max-w-xl w-full">
          <div className="grid grid-cols-2 gap-6 mb-12">
            {/* Stats Card 1 */}
            <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700 p-6 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">
                  <LayoutDashboard size={20} />
                </div>
                <span className="text-xs font-mono text-slate-400">Active Nodes</span>
              </div>
              <div className="text-3xl font-bold mb-1">1,248</div>
              <div className="text-xs text-slate-400">Total Ad Accounts Managed</div>
            </div>

            {/* Stats Card 2 */}
            <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700 p-6 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <BarChart size={20} />
                </div>
                <span className="text-xs font-mono text-slate-400">Total Spend</span>
              </div>
              <div className="text-3xl font-bold mb-1">$42M+</div>
              <div className="text-xs text-slate-400">YTD Managed Spend</div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold">بنية تحتية متكاملة للإدارة</h3>
            <ul className="space-y-4">
              {[
                'مراقبة فورية لأداء الحسابات (Real-time Monitoring)',
                'نظام كشف الاحتيال والمخاطر المتقدم',
                'إدارة الصلاحيات والوصول متعدد المستويات',
                'ربط مباشر مع واجهات برمجة تطبيقات الشركاء (API)'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 size={18} className="text-green-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 flex gap-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Simple visual placeholders for partner logos to maintain clean code */}
             <div className="h-8 w-24 bg-white/10 rounded flex items-center justify-center text-xs font-bold">Meta Business</div>
             <div className="h-8 w-24 bg-white/10 rounded flex items-center justify-center text-xs font-bold">Google Ads</div>
             <div className="h-8 w-24 bg-white/10 rounded flex items-center justify-center text-xs font-bold">TikTok Ads</div>
          </div>
        </div>
      </div>
    </div>
  );
};