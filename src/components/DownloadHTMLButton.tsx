import React, { useState } from 'react';
import { Download, Check, FileCode, Sparkles, ExternalLink, X } from 'lucide-react';
import { Language } from '../types/index.ts';

interface DownloadHTMLButtonProps {
  language: Language;
  variant?: 'navbar' | 'hero' | 'banner' | 'floating';
}

export const DownloadHTMLButton: React.FC<DownloadHTMLButtonProps> = ({ 
  language, 
  variant = 'navbar' 
}) => {
  const isMr = language === 'mr';
  const [downloaded, setDownloaded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleDownload = () => {
    // Create an invisible anchor tag to trigger instant download
    const link = document.createElement('a');
    link.href = './standalone_website.html';
    link.download = 'new_shree_swami_samarth_transport.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloaded(true);
    setShowModal(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <>
      {/* 1. NAVBAR VARIANT */}
      {variant === 'navbar' && (
        <button
          onClick={handleDownload}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-linear-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold text-xs shadow-md transition-all cursor-pointer transform hover:scale-105 active:scale-95 border border-emerald-300"
          title={isMr ? 'संपूर्ण वेबसाईटची HTML फाईल डाऊनलोड करा' : 'Download Complete Website HTML File'}
        >
          {downloaded ? <Check className="w-3.5 h-3.5 text-white" /> : <Download className="w-3.5 h-3.5 text-white" />}
          <span>{downloaded ? (isMr ? 'डाऊनलोड सुरू!' : 'Downloading!') : (isMr ? '📥 HTML डाऊनलोड' : '📥 Download HTML')}</span>
        </button>
      )}

      {/* 2. HERO VARIANT */}
      {variant === 'hero' && (
        <button
          onClick={handleDownload}
          className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-linear-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-black text-xs sm:text-sm shadow-xl transition-all cursor-pointer transform hover:-translate-y-0.5 active:scale-95 border-2 border-emerald-300"
        >
          <Download className="w-4 h-4 text-amber-300" />
          <span>{isMr ? '📥 HTML फाईल डाऊनलोड करा (Single File)' : '📥 Download Website HTML'}</span>
          <span className="px-1.5 py-0.5 bg-black/30 rounded text-[10px] uppercase font-mono text-emerald-200">
            .HTML
          </span>
        </button>
      )}

      {/* 3. FULL BANNER VARIANT */}
      {variant === 'banner' && (
        <div className="bg-linear-to-r from-teal-900/40 via-[#102b55] to-emerald-900/40 border-y-2 border-emerald-400/50 py-3.5 px-4 text-white">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
            <div className="flex items-center gap-2.5">
              <FileCode className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <strong className="text-amber-300">
                  {isMr ? 'वेबसाईटची सिंगल HTML फाईल हवी आहे का?' : 'Need the standalone Website HTML file?'}
                </strong>{' '}
                <span className="text-slate-200">
                  {isMr 
                    ? 'कोणत्याही सर्व्हरशिवाय थेट कॉम्प्युटर किंवा फोनवर चालवणारी पूर्ण HTML फाईल एका क्लिकमध्ये डाऊनलोड करा.' 
                    : 'Download the self-contained HTML file to open directly in any browser.'}
                </span>
              </div>
            </div>

            <button
              onClick={handleDownload}
              className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-xl text-xs sm:text-sm shadow-lg transition-all cursor-pointer flex items-center gap-2 shrink-0 active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>{isMr ? '📥 आत्ताच HTML डाऊनलोड करा' : '📥 Download HTML Now'}</span>
            </button>
          </div>
        </div>
      )}

      {/* 4. SUCCESS / INSTRUCTION MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-fadeIn">
          <div className="fixed inset-0" onClick={() => setShowModal(false)} />

          <div className="relative z-10 w-full max-w-md bg-slate-900 border-2 border-emerald-400 rounded-3xl p-6 sm:p-8 shadow-2xl text-white">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-5">
              <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-3 border border-emerald-400/40">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-black text-emerald-300 font-serif">
                {isMr ? '✅ HTML फाईल डाऊनलोड झाली आहे!' : '✅ HTML File Downloaded!'}
              </h3>
              <p className="text-xs text-slate-300 mt-1 font-mono">
                new_shree_swami_samarth_transport.html
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-4 text-xs text-slate-300 space-y-2 mb-5">
              <div className="font-bold text-amber-300 flex items-center gap-1.5 text-xs">
                <Sparkles className="w-4 h-4" />
                <span>{isMr ? 'या HTML फाईलचा कसा वापर करावा?' : 'How to use this file?'}</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-200">
                <li>
                  {isMr 
                    ? 'ही फाईल तुमच्या कॉम्प्युटर किंवा मोबाईलच्या Downloads फोल्डरमध्ये सेव्ह झाली आहे.' 
                    : 'The file is saved in your device Downloads folder.'}
                </li>
                <li>
                  {isMr 
                    ? 'या फाईलवर डबल-क्लिक करून तुम्ही ती कोणत्याही ब्राऊझरमध्ये (Chrome, Safari, Edge) थेट उघडू शकता.' 
                    : 'Double click the file to open it in Chrome, Safari, Edge or any browser.'}
                </li>
                <li>
                  {isMr 
                    ? 'ही फाईल तुम्ही cPanel, Hostinger किंवा इतर कोणत्याही होस्टिंगवर थेट अपलोड करू शकता.' 
                    : 'You can directly upload this file to any web hosting.'}
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5">
              <a
                href="./standalone_website.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl text-center border border-slate-600 transition-colors flex items-center justify-center gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                <span>{isMr ? 'नवीन टॅबमध्ये उघडून पहा' : 'Preview in New Tab'}</span>
              </a>

              <button
                onClick={() => setShowModal(false)}
                className="flex-1 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs rounded-xl transition-colors cursor-pointer text-center"
              >
                {isMr ? 'समजले / ओके' : 'OK / Got it'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
