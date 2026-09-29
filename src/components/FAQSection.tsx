import React, { useState } from 'react';
import { 
  HelpCircle, ChevronDown, CheckCircle2, Receipt, CreditCard, 
  Clock, ShieldCheck, Phone, MessageCircle, FileText, ArrowRight,
  Sparkles
} from 'lucide-react';
import { Language } from '../types/index.ts';
import { CONTACT_INFO } from '../data/transportData.ts';

interface FAQSectionProps {
  language: Language;
}

interface FAQItem {
  id: string;
  categoryMr: string;
  categoryEn: string;
  questionMr: string;
  questionEn: string;
  answerMr: string;
  answerEn: string;
  highlightMr?: string;
  highlightEn?: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ language }) => {
  const isMr = language === 'mr';
  const [openId, setOpenId] = useState<string>('faq-gst');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const faqs: FAQItem[] = [
    {
      id: 'faq-gst',
      categoryMr: 'बिलिंग व कागदपत्रे',
      categoryEn: 'Billing & Docs',
      icon: Receipt,
      questionMr: 'जीएसटी बिलिंग (GST Tax Invoice) व पक्की बिल्टी (LR) मिळते का?',
      questionEn: 'Do you provide official GST Tax Invoices and LR Bilty receipts?',
      answerMr: 'होय, नक्कीच! न्यू श्री स्वामी समर्थ ट्रान्सपोर्टद्वारे प्रत्येक बुकिंगसाठी अधिकृत जीएसटी टॅक्स इनव्हॉईस (GST Invoice) आणि पक्की ट्रान्सपोर्ट बिल्टी (Lorry Receipt / LR Bilty) दिली जाते. चाकण व महाराष्ट्रातील कंपन्यांसाठी इनपुट टॅक्स क्रेडिट (ITC) क्लेम करण्यासाठी ही सर्व कागदपत्रे १००% वैध व कायदेशीर असतात.',
      answerEn: 'Yes, absolutely! We provide authorized GST Tax Invoices and official Lorry Receipts (LR Bilty) for every shipment. All documentation is 100% compliant for corporate accounts to claim Input Tax Credit (ITC) effortlessly.',
      highlightMr: '१००% वैध GST बिल व अधिकृत बिल्टी (LR) वेळेवर उपलब्ध',
      highlightEn: '100% Valid GST Invoices & Consignment Notes provided on time',
    },
    {
      id: 'faq-payment',
      categoryMr: 'पेमेंट पर्याय',
      categoryEn: 'Payment Modes',
      icon: CreditCard,
      questionMr: 'पेमेंट करण्याच्या कोणत्या पद्धती उपलब्ध आहेत (Paid, To-Pay, TBB)?',
      questionEn: 'What payment terms are accepted (Paid, To-Pay, TBB)?',
      answerMr: 'ग्राहकांच्या व कंपन्यांच्या सोयीसाठी आम्ही सर्व ३ प्रमुख पेमेंट पद्धती स्वीकारतो:\n\n१) Paid (आगाऊ पेमेंट): माल पाठवताना चाकण ऑफिसमध्ये रोख, UPI (GPay/PhonePe), किंवा बँक ट्रान्सफर (NEFT/RTGS) द्वारे पेमेंट करू शकता.\n२) To-Pay (पोहोचल्यावर पेमेंट): माल ज्या शहरात किंवा पार्टीकडे पोहोचेल, तिथे डिलिव्हरीच्या वेळी पार्टी पैसे देईल.\n३) TBB (To Be Billed / कंपन्यांसाठी खाते): चाकण एमआयडीसीतील नियमित औद्योगिक व नोंदणीकृत कंपन्यांसाठी १५ ते ३० दिवसांचे मासिक क्रेडिट बिलिंग खाते उपलब्ध आहे.',
      answerEn: 'We support all 3 commercial freight payment mechanisms:\n\n1) Paid (Advance): Paid at booking via Cash, UPI (GPay/PhonePe), or Net Banking/NEFT.\n2) To-Pay (On Delivery): Consignee receiver pays the freight charges directly upon delivery.\n3) TBB (To Be Billed): Monthly 15-30 days billing accounts for contracted industrial companies in Chakan MIDC.',
      highlightMr: 'Paid • To-Pay • TBB (कंपन्यांसाठी मासिक क्रेडिट) उपलब्ध',
      highlightEn: 'Flexible: Paid, To-Pay & Monthly Corporate Credit (TBB)',
    },
    {
      id: 'faq-delivery-time',
      categoryMr: 'वेळ व डिलिव्हरी',
      categoryEn: 'Transit Time',
      icon: Clock,
      questionMr: 'माल पोहोचण्याची नेमकी वेळ (Transit Time) काय असते?',
      questionEn: 'What is the exact delivery and transit time from Chakan?',
      answerMr: 'आमच्या सर्व गाड्या चाकण गोडाऊनमधून दररोज वेळेवर सुटतात:\n• पश्चिम व उत्तर महाराष्ट्र (नाशिक, अहमदनगर, मुंबई, नवी मुंबई): १२ ते २४ तासांच्या आत.\n• मराठवाडा व खान्देश (छ. संभाजीनगर, जळगाव, धुळे, बीड, नांदेड): २४ तासांच्या आत.\n• विदर्भ (नागपूर, अमरावती, अकोला, चंद्रपूर): २४ ते ४८ तास.\n• दक्षिण महाराष्ट्र (कोल्हापूर, सांगली, सातारा, सोलापूर): २४ तासांच्या आत.\nफुल लोड डायरेक्ट गाडी असेल तर विनाविलंब नॉन-स्टॉप थेट डिलिव्हरी दिली जाते.',
      answerEn: 'Daily scheduled departures directly from Chakan:\n• Western & Northern MH (Nashik, Ahmednagar, Mumbai): Within 12-24 hours.\n• Marathwada & Khandesh (Chh. Sambhajinagar, Jalgaon, Dhule): Within 24 hours.\n• Vidarbha (Nagpur, Amravati, Akola): Within 24-48 hours.\n• Southern MH (Kolhapur, Sangli, Satara, Solapur): Within 24 hours.\nFull load dedicated vehicles travel direct non-stop to the destination site.',
      highlightMr: 'दररोज थेट गाड्या • २४ ते ४८ तासांत सुरक्षित पोहोच',
      highlightEn: 'Daily direct departures • 24 to 48 hours safe delivery',
    },
    {
      id: 'faq-safety',
      categoryMr: 'सुरक्षा हमी',
      categoryEn: 'Safety Guarantee',
      icon: ShieldCheck,
      questionMr: 'मालाची सुरक्षा हमी (Zero-Damage Policy) कशी आहे?',
      questionEn: 'How do you guarantee goods safety and zero damage?',
      answerMr: 'आमचे ध्येयच "आपला माल, आमची जबाबदारी" हे आहे! यासाठी:\n१) सुरक्षित बंद कंटेनर व हेवी ताडपत्री: पावसाळ्यात किंवा प्रवासात मालाला पाणी, धूळ किंवा ओरखडा लागत नाही.\n२) कुशल लोडिंग व अनलोडिंग: ऑटो पार्ट्स, मशिनरी आणि संवेदनशील साहित्याची अत्यंत काळजीपूर्वक हाताळणी केली जाते.\n३) अनुभवी ड्रायव्हर्स: सर्व चालकांकडे १०+ वर्षांचा हायवे ड्रायव्हिंग अनुभव व अधिकृत परवाने आहेत.\n४) मालाची काळजी: प्रत्येक बॉक्स व पॅकिंग व्यवस्थित बांधून सुरक्षितरीत्या पोहोचवले जाते.',
      answerEn: 'Living by our motto "Your Goods, Our Responsibility":\n1) Weather-sealed closed containers and heavy-duty tarpaulins protect from rain and road dust.\n2) Trained labor handles sensitive automotive parts and machinery with extreme care.\n3) Certified drivers with 10+ years of interstate & state highway experience.\n4) Complete cargo tiedown to prevent shift or transit abrasion.',
      highlightMr: 'वॉटरप्रूफ गाड्या • झिरो-डॅमेज हमी • अनुभवी चालक',
      highlightEn: 'Waterproof fleet • Zero damage policy • Skilled crew',
    },
    {
      id: 'faq-load-types',
      categoryMr: 'बुकिंग प्रकार',
      categoryEn: 'Booking Types',
      icon: FileText,
      questionMr: 'पार्ट लोड (लहान पार्सल) आणि फुल लोड (पूर्ण गाडी) दोन्ही मिळते का?',
      questionEn: 'Do you accept both Part Load (LTL) and Full Load (FTL) bookings?',
      answerMr: 'होय, दोन्ही सेवा उपलब्ध आहेत!\n• पार्ट लोड (Part Load / LTL): जर तुमचा माल लहान किंवा मध्यम असेल (उदा. १ बॉक्स, २ पोती, ५०० किलो, १ टन) तर तुम्ही फक्त तेवढ्याच मालाचे भाडे देऊन पाठवू शकता.\n• फुल लोड (Full Load / FTL): जर तुमचा मोठा माल असेल तर पिकअपपासून ते ३२ फूट कंटेनरपर्यंत पूर्ण गाडी फक्त तुमच्याच मालासाठी लावली जाते.',
      answerEn: 'Yes, we provide both:\n• Part Load (LTL): Pay only for the space and weight your consignment takes (1 box up to several tons).\n• Full Load (FTL): Dedicated direct vehicle reserved exclusively for your shipment from origin factory to delivery destination.',
      highlightMr: '५० किलोच्या पार्सलपासून ते २० टन ट्रेलरपर्यंत सर्व सोय',
      highlightEn: 'From 50kg small parcel to 20 ton dedicated trailer',
    },
    {
      id: 'faq-pickup-location',
      categoryMr: 'पिकअप व लोकेशन',
      categoryEn: 'Pickup & Factory',
      icon: HelpCircle,
      questionMr: 'गाडी थेट आमच्या फॅक्टरीतून माल भरण्यासाठी येईल का?',
      questionEn: 'Can the truck pick up cargo directly from our Chakan factory?',
      answerMr: 'होय! चाकण एमआयडीसी (फेज १, २, ३, ४), महाळुंगे, तळेगाव, खेड सिटी, मोशी व भोसरी परिसरातील कंपन्यांसाठी थेट फॅक्टरी डोअर पिकअप (Factory Door Pickup) ची सोय उपलब्ध आहे. किंवा तुम्ही स्वतः आमच्या चिंबळी, बर्गे वस्ती (पुणे-नाशिक हायवे) येथील गोडाऊनवरही माल आणून देऊ शकता.',
      answerEn: 'Yes! We offer direct factory door pickup across Chakan MIDC (Phase 1, 2, 3, 4), Mahalunge, Talegaon, Khed City, Moshi and Bhosari. You may also bring cargo directly to our Chimbali warehouse on Pune-Nashik highway.',
      highlightMr: 'चाकण एमआयडीसी व आसपास फॅक्टरी डोअर पिकअप उपलब्ध',
      highlightEn: 'Factory door pickup across all Chakan MIDC phases',
    },
    {
      id: 'faq-direct-owner',
      categoryMr: 'थेट संपर्क',
      categoryEn: 'Direct Contact',
      icon: Phone,
      questionMr: 'काही विशेष अडचण किंवा चौकशी असल्यास थेट कोणाशी बोलायचे?',
      questionEn: 'Whom should I speak with for emergency dispatch or special rates?',
      answerMr: `तुम्ही कोणत्याही मध्यस्थांशिवाय थेट आमचे प्रोप्रायटर श्री. बळीराम कुडके यांच्याशी फोनवर बोलू शकता:\n• मुख्य मोबाईल: ${CONTACT_INFO.primaryPhone}\n• पर्यायी मोबाईल: ${CONTACT_INFO.secondaryPhone}\n• व्हॉट्सअ‍ॅप: ${CONTACT_INFO.whatsappNumber}\nआम्ही २४ तास सेवेसाठी उपलब्ध आहोत.`,
      answerEn: `You can connect directly with our owner Mr. Baliram Kudke without any middleman:\n• Primary Mobile: ${CONTACT_INFO.primaryPhone}\n• Secondary Mobile: ${CONTACT_INFO.secondaryPhone}\n• WhatsApp: ${CONTACT_INFO.whatsappNumber}\nAvailable 24/7 for urgent quotes and dispatches.`,
      highlightMr: `थेट मालक श्री. बळीराम कुडके यांच्याशी संवाद: ${CONTACT_INFO.primaryPhone}`,
      highlightEn: `Direct access to owner Mr. Baliram Kudke: ${CONTACT_INFO.primaryPhone}`,
    },
  ];

  const categories = [
    { id: 'all', labelMr: 'सर्व प्रश्न (All)', labelEn: 'All Questions' },
    { id: 'billing', labelMr: 'जीएसटी व बिलिंग', labelEn: 'GST & Invoicing' },
    { id: 'payment', labelMr: 'पेमेंट पद्धती (Paid/To-Pay/TBB)', labelEn: 'Payment Terms' },
    { id: 'safety', labelMr: 'वेळ व सुरक्षा हमी', labelEn: 'Transit & Safety' },
  ];

  const filteredFaqs = faqs.filter(faq => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'billing') return faq.id.includes('gst');
    if (activeCategory === 'payment') return faq.id.includes('payment');
    if (activeCategory === 'safety') return faq.id.includes('safety') || faq.id.includes('delivery-time');
    return true;
  });

  return (
    <section id="faq" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{isMr ? 'ग्राहकांच्या मनातील शंकांचे तात्काळ निरसन' : 'Frequently Asked Questions & Trust Guide'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#10264a] font-serif tracking-tight">
            {isMr ? 'वारंवार विचारले जाणारे प्रश्न व नियम' : 'Transport Rules, GST & Payment FAQs'}
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-700 font-semibold leading-relaxed">
            {isMr 
              ? 'जीएसटी बिलिंग, पेमेंटचे पर्याय (Paid, To-Pay, TBB), मालाची पोहोच वेळ आणि सुरक्षा हमी याबाबत सर्व स्पष्ट माहिती.' 
              : 'Clear, transparent details on GST invoices, payment methods, delivery transit times, and cargo protection.'}
          </p>
        </div>

        {/* 4 HIGHLIGHT CARDS (GST, Payment, Safety, Timing) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {/* Card 1: GST Invoicing */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-3 shadow-sm">
                <Receipt className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#10264a] font-serif">
                {isMr ? 'जीएसटी बिलिंग' : 'GST Tax Invoice'}
              </h3>
              <p className="text-xs text-slate-600 font-medium mt-1 leading-relaxed">
                {isMr 
                  ? 'प्रत्येक फेऱ्यासाठी अधिकृत जीएसटी इनव्हॉईस व पक्की एल.आर. पावती. ITC क्लेमसाठी १००% योग्य.' 
                  : 'Official GST tax invoices and authorized LR Bilty receipts provided for every commercial trip.'}
              </p>
            </div>
            <div className="mt-3 pt-3 border-t border-blue-100 flex items-center text-xs font-bold text-blue-700">
              <CheckCircle2 className="w-4 h-4 mr-1.5 shrink-0" />
              <span>{isMr ? '१००% अधिकृत बिलिंग' : '100% Tax Compliant'}</span>
            </div>
          </div>

          {/* Card 2: Payment Terms */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-3 shadow-sm">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#10264a] font-serif">
                {isMr ? '३ पेमेंट पद्धती' : '3 Payment Modes'}
              </h3>
              <p className="text-xs text-slate-600 font-medium mt-1 leading-relaxed">
                {isMr 
                  ? 'Paid (आगाऊ), To-Pay (डिलिव्हरीवर) किंवा नियमित कंपन्यांसाठी TBB (मासिक खाते).' 
                  : 'Paid (Booking), To-Pay (Consignee Delivery), or TBB monthly credit billing for corporate clients.'}
              </p>
            </div>
            <div className="mt-3 pt-3 border-t border-emerald-100 flex items-center text-xs font-bold text-emerald-700">
              <CheckCircle2 className="w-4 h-4 mr-1.5 shrink-0" />
              <span>Paid • To-Pay • TBB</span>
            </div>
          </div>

          {/* Card 3: Transit Time */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-white border-2 border-amber-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center mb-3 shadow-sm">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#10264a] font-serif">
                {isMr ? 'वेळेवर पोहोच' : 'On-Time Transit'}
              </h3>
              <p className="text-xs text-slate-600 font-medium mt-1 leading-relaxed">
                {isMr 
                  ? 'नाशिक, संभाजीनगर, मुंबई २४ तासांत. विदर्भ व इतर शहरे २४ ते ४८ तासांत पोहोच.' 
                  : 'Nashik, Sambhajinagar, Mumbai within 24h. Vidarbha & border cities within 24-48h.'}
              </p>
            </div>
            <div className="mt-3 pt-3 border-t border-amber-100 flex items-center text-xs font-bold text-amber-800">
              <CheckCircle2 className="w-4 h-4 mr-1.5 shrink-0" />
              <span>{isMr ? '२४ ते ४८ तास पोहोच' : '24-48 Hrs Express'}</span>
            </div>
          </div>

          {/* Card 4: Safety Guarantee */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-red-50 to-white border-2 border-red-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#d83a2e] text-white flex items-center justify-center mb-3 shadow-sm">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#10264a] font-serif">
                {isMr ? 'सुरक्षा हमी' : 'Safety Guarantee'}
              </h3>
              <p className="text-xs text-slate-600 font-medium mt-1 leading-relaxed">
                {isMr 
                  ? 'वॉटरप्रूफ बंद कंटेनर, ताडपत्री सुरक्षा आणि कुशल लोडिंगमुळे मालाला धक्का नाही.' 
                  : 'Closed container & weatherproof tarpaulins ensure zero transit scratch or water damage.'}
              </p>
            </div>
            <div className="mt-3 pt-3 border-t border-red-100 flex items-center text-xs font-bold text-red-700">
              <CheckCircle2 className="w-4 h-4 mr-1.5 shrink-0" />
              <span>{isMr ? 'झिरो डॅमेज सुरक्षा' : 'Zero Damage Protection'}</span>
            </div>
          </div>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#10264a] text-white shadow-md'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {isMr ? cat.labelMr : cat.labelEn}
            </button>
          ))}
        </div>

        {/* ACCORDION FAQ LIST */}
        <div className="max-w-4xl mx-auto space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            const Icon = faq.icon;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen 
                    ? 'border-[#10264a] bg-slate-50/70 shadow-md ring-1 ring-[#10264a]/20' 
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? '' : faq.id)}
                  className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                      isOpen 
                        ? 'bg-[#10264a] text-white border-[#10264a]' 
                        : 'bg-amber-50 text-amber-700 border-amber-200'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <div>
                      <div className="text-[11px] font-black uppercase tracking-wider text-[#d83a2e] mb-0.5">
                        {isMr ? faq.categoryMr : faq.categoryEn}
                      </div>
                      <h4 className="text-base sm:text-lg font-black text-[#10264a] font-serif leading-snug">
                        {isMr ? faq.questionMr : faq.questionEn}
                      </h4>
                    </div>
                  </div>

                  <div className={`p-2 rounded-full transition-transform shrink-0 ${isOpen ? 'rotate-180 bg-slate-200' : 'bg-slate-100'}`}>
                    <ChevronDown className="w-4 h-4 text-slate-700" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-6 sm:pb-6 pt-1">
                    <div className="pl-12 sm:pl-14 border-l-2 border-amber-400 ml-2 sm:ml-3">
                      <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed whitespace-pre-line">
                        {isMr ? faq.answerMr : faq.answerEn}
                      </p>

                      {(faq.highlightMr || faq.highlightEn) && (
                        <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-bold">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{isMr ? faq.highlightMr : faq.highlightEn}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* BOTTOM CALL-TO-ACTION FOR EXTRA QUESTIONS */}
        <div className="mt-12 max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-[#10264a] to-[#1a3d75] p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border-2 border-amber-400">
          <div>
            <div className="text-xs font-black uppercase tracking-wider text-amber-300 mb-1">
              {isMr ? 'काही वेगळा प्रश्न किंवा विशेष कोटेशन हवे आहे?' : 'Have a custom inquiry or special route?'}
            </div>
            <h3 className="text-xl sm:text-2xl font-black font-serif text-white">
              {isMr ? 'श्री. बळीराम कुडके यांच्याशी थेट बोला' : 'Speak Directly with Mr. Baliram Kudke'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 mt-1">
              {isMr 
                ? 'नियमित फॅक्टरी कॉन्ट्रॅक्ट, हेवी लोड किंवा विशेष शहरासाठी थेट मार्गदर्शन मिळवा.' 
                : 'Get tailored quotes for factory recurring contracts, heavy machinery, or direct routes.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`tel:+91${CONTACT_INFO.primaryPhone}`}
              className="px-5 py-3 bg-[#d83a2e] hover:bg-[#b92c22] text-white font-extrabold text-sm sm:text-base rounded-xl shadow-md transition-all active:scale-95 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>{CONTACT_INFO.primaryPhone}</span>
            </a>

            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
                isMr 
                  ? 'नमस्कार, मला ट्रान्सपोर्टच्या जीएसटी बिलिंग, पेमेंट किंवा दराविषयी अधिक माहिती हवी आहे.' 
                  : 'Hello, I have questions regarding GST invoicing, payment terms, or rates.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-[#138a45] hover:bg-[#0f7239] text-white font-extrabold text-sm sm:text-base rounded-xl shadow-md transition-all active:scale-95 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>{isMr ? 'व्हॉट्सअ‍ॅपवर विचारा' : 'Ask on WhatsApp'}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
