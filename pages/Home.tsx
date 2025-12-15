import React from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Shield, 
  CreditCard, 
  Headphones, 
  CheckCircle, 
  Globe, 
  Smartphone, 
  Users, 
  Zap,
  ArrowRight
} from 'lucide-react';
import { Button } from '../components/Button';

// Hero Section Component
const Hero = () => (
  <section className="relative bg-slate-900 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
    {/* Background Effect */}
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
    </div>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-700/50 text-blue-300 text-sm font-medium mb-6">
        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
        شريك معتمد لـ Meta
      </div>
      
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
        بنية تحتية إعلانية <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">للمعلنين المحترفين</span>
      </h1>
      
      <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
        نقدم لك حسابات إعلانية عالية الموثوقية (Agency Accounts) مع دعم فني متخصص وحلول دفع مرنة، لتتمكن من توسيع نطاق حملاتك دون توقف.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/apply">
          <Button className="w-full sm:w-auto text-lg py-4 px-8">
            سجل الان
          </Button>
        </Link>
        <Link to="/login">
          <Button variant="outline" className="w-full sm:w-auto text-white border-slate-600 hover:bg-slate-800 text-lg py-4 px-8">
            سجل الدخول
          </Button>
        </Link>
      </div>

      {/* Stats */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-800 pt-8 text-slate-400">
        <div>
          <div className="text-3xl font-bold text-white mb-1">+50M$</div>
          <div className="text-sm">مصروفات إعلانية مُدارة</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-white mb-1">99.9%</div>
          <div className="text-sm">نسبة استقرار الحسابات</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-white mb-1">24/7</div>
          <div className="text-sm">دعم فني متخصص</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-white mb-1">+500</div>
          <div className="text-sm">عميل سعيد</div>
        </div>
      </div>
    </div>
  </section>
);

// Services Component
const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "حسابات وكالة موثوقة",
      desc: "حسابات إعلانية قوية (Agency Ad Accounts) بحدود صرف مفتوحة، مصممة لتحمل الضغط العالي وتقليل مخاطر الحظر العشوائي."
    },
    {
      icon: CreditCard,
      title: "حلول دفع مرنة",
      desc: "خيارات متعددة للشحن، تحويل بنكي، USDT، مع إمكانية توفير خطوط ائتمان (Credit Lines) للشركاء الموثوقين."
    },
    {
      icon: TrendingUp,
      title: "إدارة التوسع (Scaling)",
      desc: "بنية تحتية تسمح لك بزيادة الميزانيات بسرعة دون القلق من تقييد الإنفاق اليومي (Daily Spend Limit)."
    },
    {
      icon: Headphones,
      title: "دعم السياسات",
      desc: "فريق مراجعة داخلي يساعدك في فحص صفحات الهبوط والإعلانات لضمان توافقها مع سياسات Meta وتجنب الرفض."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">حلول متكاملة للنمو الرقمي</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            نوفر لك الأدوات والبنية التحتية التي يحتاجها كبار المشترين الإعلاميين (Media Buyers) للنجاح في سوق المنافسة العالية.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 text-meta-blue rounded-xl flex items-center justify-center mb-6">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Verticals Component
const Verticals = () => {
  const items = [
    { name: "التجارة الإلكترونية (E-com)", icon: Globe },
    { name: "توليد العملاء (Lead Gen)", icon: Users },
    { name: "تطبيقات الجوال (Apps)", icon: Smartphone },
    { name: "الخدمات الرقمية (SaaS)", icon: Zap },
  ];

  return (
    <section id="verticals" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">قطاعات الأعمال المدعومة</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              نمتلك خبرة واسعة في دعم مختلف المجالات التجارية. سواء كنت تدير متجراً إلكترونياً ضخماً أو حملة لتوليد العملاء المحتملين، لدينا الهيكل المناسب لك.
            </p>
            <ul className="space-y-4">
              {items.map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-meta-blue">
                    <item.icon size={20} />
                  </div>
                  <span className="font-semibold text-slate-800">{item.name}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-lg text-sm text-blue-800">
              * ندعم أيضاً بعض القطاعات عالية الخطورة (High Risk) بعد مراجعة صارمة للامتثال وجودة المنتج.
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl transform rotate-3 opacity-20"></div>
            <img 
              src="https://picsum.photos/800/600" 
              alt="Dashboard Analytics" 
              className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Why Us Component
const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl">لماذا تختار AdScale؟</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
            <CheckCircle className="text-green-400 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-3">شراكة رسمية مباشرة</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              تعاملك المباشر معنا يضمن لك الوصول لأفضل الممارسات والدعم المباشر من ممثلي المنصات دون وسطاء مجهولين.
            </p>
          </div>
          
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
            <Zap className="text-yellow-400 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-3">سرعة في التنفيذ</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              تجهيز الحسابات وتسليمها يتم في غضون ساعات قليلة. نحن نقدر قيمة الوقت في عالم الإعلانات.
            </p>
          </div>
          
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
            <Shield className="text-blue-400 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-3">أمان واستمرارية</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              نظامنا مصمم لحماية أصولك الرقمية. في حال حدوث أي خطأ، لدينا بروتوكولات استعادة سريعة وفعالة.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link to="/apply">
            <Button className="py-4 px-10 text-lg shadow-blue-900/50">
              انضم لنخبة المعلنين الآن
              <ArrowRight className="mr-2 h-5 w-5 rotate-180" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <Verticals />
      <WhyUs />
    </>
  );
};