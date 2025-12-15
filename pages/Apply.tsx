import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from '../components/Button';
import { FormData } from '../types';

export const ApplyPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    companyName: '',
    websiteUrl: '',
    monthlySpend: '',
    vertical: '',
    contactMethod: 'email',
    contactValue: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log('Form Submitted:', formData);
    setTimeout(() => {
      setIsSubmitted(true);
      window.scrollTo(0, 0);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-20">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-lg w-full text-center">
          <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">تم استلام طلبك بنجاح!</h2>
          <p className="text-slate-600 mb-8">
            شكراً لاهتمامك بالانضمام إلى AdScale. سيقوم فريقنا بمراجعة طلبك والتواصل معك خلال 24 ساعة عمل.
          </p>
          <Button variant="outline" onClick={() => window.location.href = '/'}>
            العودة للصفحة الرئيسية
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">طلب انضمام للوكالة</h1>
          <p className="text-slate-300 text-lg">
            املأ النموذج التالي لنقوم بتقييم احتياجاتك وتوفير البنية التحتية المناسبة لعملك.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-600"></div>
          <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-6">
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">الاسم الكامل</label>
                <input
                  required
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="مثال: أحمد محمد"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">اسم الشركة / البراند</label>
                <input
                  required
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="اسم نشاطك التجاري"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">رابط الموقع أو صفحة الهبوط</label>
              <input
                required
                type="url"
                name="websiteUrl"
                value={formData.websiteUrl}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="https://example.com"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">المجال الإعلاني (Vertical)</label>
                <select
                  required
                  name="vertical"
                  value={formData.vertical}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                >
                  <option value="">اختر المجال...</option>
                  <option value="ecom">تجارة إلكترونية (E-commerce)</option>
                  <option value="dropshipping">دروبشيبينغ</option>
                  <option value="leadgen">توليد عملاء (Lead Gen)</option>
                  <option value="app">تطبيقات جوال</option>
                  <option value="crypto">عملات رقمية / فوركس (High Risk)</option>
                  <option value="nutra">مكملات غذائية (Nutra)</option>
                  <option value="other">أخرى</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">متوسط الصرف الشهري المتوقع</label>
                <select
                  required
                  name="monthlySpend"
                  value={formData.monthlySpend}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                >
                  <option value="">اختر الميزانية...</option>
                  <option value="1k-5k">$1,000 - $5,000</option>
                  <option value="5k-20k">$5,000 - $20,000</option>
                  <option value="20k-50k">$20,000 - $50,000</option>
                  <option value="50k+">$50,000+</option>
                </select>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <label className="block text-sm font-medium text-slate-700 mb-2">وسيلة التواصل المفضلة</label>
              <div className="flex gap-4 mb-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="contactMethod" 
                    value="email" 
                    checked={formData.contactMethod === 'email'}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span>بريد إلكتروني</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="contactMethod" 
                    value="telegram" 
                    checked={formData.contactMethod === 'telegram'}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span>تيليجرام</span>
                </label>
              </div>
              <input
                required
                type={formData.contactMethod === 'email' ? 'email' : 'text'}
                name="contactValue"
                value={formData.contactValue}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder={formData.contactMethod === 'email' ? 'name@example.com' : '@username'}
              />
            </div>

            <div className="pt-4">
              <Button type="submit" fullWidth className="py-4 text-lg">
                إرسال الطلب
                <Send size={20} className="mr-2 rotate-180" />
              </Button>
              <p className="text-xs text-slate-400 text-center mt-4">
                بإرسال هذا النموذج، أنت توافق على سياسة الخصوصية وتؤكد أن نشاطك التجاري قانوني.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};