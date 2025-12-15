import React from 'react';
import { 
  Users, 
  Wallet, 
  Edit3, 
  Share2, 
  ArrowRightLeft, 
  Search, 
  Filter, 
  MoreHorizontal,
  Plus,
  Download
} from 'lucide-react';
import { AdAccount } from '../types';

const StatCard: React.FC<{ title: string; count: number; icon: React.ElementType; color: string }> = ({ title, count, icon: Icon, color }) => (
  <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
    <div>
      <div className="text-slate-500 text-sm font-medium mb-1">{title}</div>
      <div className="text-2xl font-bold text-slate-900">{count}</div>
    </div>
    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${color} bg-opacity-10`}>
      <Icon size={24} className={color.replace('bg-', 'text-')} />
    </div>
  </div>
);

const AccountsTable = () => {
  const accounts: AdAccount[] = [
    { id: 'ACT-992102', name: 'E-com Main Q4', platform: 'Facebook', status: 'Active', type: 'Aged', balance: 4500 },
    { id: 'ACT-882193', name: 'Dropshipping Test', platform: 'Facebook', status: 'Pending', type: 'New', balance: 0 },
    { id: 'ACT-110293', name: 'Google Search Ads', platform: 'Google', status: 'Active', type: 'Aged', balance: 1200 },
    { id: 'ACT-559102', name: 'TikTok Creative 01', platform: 'TikTok', status: 'Disabled', type: 'New', balance: 50 },
    { id: 'ACT-332109', name: 'LeadGen Campaign', platform: 'Facebook', status: 'Active', type: 'Aged', balance: 8900 },
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
      <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h3 className="text-lg font-bold text-slate-900">الحسابات الإعلانية النشطة</h3>
        <div className="flex gap-2">
            <div className="relative">
                <Search size={18} className="absolute top-1/2 right-3 -translate-y-1/2 text-slate-400" />
                <input 
                    type="text" 
                    placeholder="بحث..." 
                    className="pl-4 pr-10 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-saas-primary/20 focus:border-saas-primary w-full sm:w-64"
                />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-600 text-sm hover:bg-slate-100 font-medium">
                <Filter size={16} />
                <span>تصفية</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-saas-primary text-white rounded-lg text-sm hover:bg-saas-dark shadow-sm shadow-green-500/30 font-medium">
                <Plus size={16} />
                <span>إنشاء إعلان مباشر</span>
            </button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-right">
          <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-semibold">
            <tr>
              <th className="px-6 py-4">الترخيص</th>
              <th className="px-6 py-4">رقم الحساب</th>
              <th className="px-6 py-4">اسم الحساب</th>
              <th className="px-6 py-4">المنصة</th>
              <th className="px-6 py-4">الحالة</th>
              <th className="px-6 py-4">النوع</th>
              <th className="px-6 py-4 text-left">إجراءات</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {accounts.map((acc, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-600 text-xs font-bold">
                            {idx + 1}
                        </span>
                    </td>
                    <td className="px-6 py-4 font-mono text-slate-600 text-sm select-all">{acc.id}</td>
                    <td className="px-6 py-4 font-medium text-slate-900">{acc.name}</td>
                    <td className="px-6 py-4">
                        {acc.platform === 'Facebook' && <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">FB</span>}
                        {acc.platform === 'Google' && <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-700">Google</span>}
                        {acc.platform === 'TikTok' && <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">TikTok</span>}
                    </td>
                    <td className="px-6 py-4">
                        {acc.status === 'Active' && <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>نشط</span>}
                        {acc.status === 'Pending' && <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-50 text-yellow-700"><span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>معلق</span>}
                        {acc.status === 'Disabled' && <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-700"><span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>محظور</span>}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">{acc.type === 'New' ? 'جديد' : 'قديم (Aged)'}</td>
                    <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                            <button className="p-1.5 text-slate-400 hover:text-saas-primary hover:bg-green-50 rounded transition-colors" title="إيداع رصيد">
                                <Wallet size={18} />
                            </button>
                            <button className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors" title="مشاركة BM">
                                <Share2 size={18} />
                            </button>
                            <button className="p-1.5 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded transition-colors">
                                <MoreHorizontal size={18} />
                            </button>
                        </div>
                    </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      <div className="p-4 border-t border-slate-100 flex items-center justify-between text-sm text-slate-500">
        <div>عرض 1 إلى 5 من أصل 24</div>
        <div className="flex gap-1">
            <button className="px-3 py-1 border border-slate-200 rounded hover:bg-slate-50 disabled:opacity-50">السابق</button>
            <button className="px-3 py-1 bg-saas-primary text-white rounded">1</button>
            <button className="px-3 py-1 border border-slate-200 rounded hover:bg-slate-50">2</button>
            <button className="px-3 py-1 border border-slate-200 rounded hover:bg-slate-50">3</button>
            <button className="px-3 py-1 border border-slate-200 rounded hover:bg-slate-50">التالي</button>
        </div>
      </div>
    </div>
  );
};

export const DashboardPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">نظرة عامة</h1>
        <button className="flex items-center gap-2 text-sm text-slate-500 hover:text-saas-primary transition-colors">
            <Download size={16} />
            تحميل التقرير
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <StatCard title="طلبات حسابات" count={3} icon={Users} color="text-blue-600 bg-blue-600" />
        <StatCard title="إيداعات معلقة" count={1} icon={Wallet} color="text-green-600 bg-green-600" />
        <StatCard title="تعديلات مطلوبة" count={5} icon={Edit3} color="text-yellow-600 bg-yellow-600" />
        <StatCard title="مشاركة BM" count={2} icon={Share2} color="text-purple-600 bg-purple-600" />
        <StatCard title="تحويلات / استرداد" count={0} icon={ArrowRightLeft} color="text-slate-600 bg-slate-600" />
      </div>

      {/* Main Table */}
      <AccountsTable />
    </div>
  );
};