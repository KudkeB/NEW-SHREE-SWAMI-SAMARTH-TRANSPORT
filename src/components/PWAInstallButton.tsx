import React, { useState } from 'react';
import { Download, Smartphone, Share, ExternalLink, Check, Copy, X, Sparkles, PlusSquare } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall.ts';
import { Language } from '../types/index.ts';
import { ChakanLogo } from './ChakanLogo.tsx';

interface PWAInstallButtonProps {
  language: Language;
  variant?: 'navbar' | 'hero' | 'floating' | 'banner';
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({ language, variant = 'navbar' }) => {
  const isMr = language === 'mr';
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);

  // If already installed and running standalone, hide the prompt
  if (isInstalled) {
    return null;
  }

  const handleInstallClick = async () => {
    if (isInstallable) {
      const success = await install();
      if (!success) {
        setShowModal(true);
      }
    } else {
      setShowModal(true);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      {/* 1. Navbar Variant */}
      {variant === 'navbar' && (
        <button
          onClick={handleInstallClick}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-xs shadow-md transition-all cursor-pointer transform hover:scale-105 active:scale-95 border border-amber-300"
          title={isMr ? 'मोबाईल / संगणक स्क्रीनवर १-क्लिक ॲप जोडा' : 'Add 1-Click App Shortcut to Screen'}
        >
          <Smartphone className="w-3.5 h-3.5 text-slate-950" />
          <span>{isMr ? '📲 १-क्लिक ॲप जोडा' : '📲 Install App'}</span>
        </button>
      )}

      {/* 2. Hero Variant */}
      {variant === 'hero' && (
        <button
          onClick={handleInstallClick}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm shadow-xl transition-all cursor-pointer transform hover:-translate-y-0.5 active:scale-95 border-2 border-amber-200"
        >
          <Download className="w-4 h-4 text-slate-950" />
          <span>{isMr ? '📲 एका क्लिकवर अ‍ॅप उघडा / सेव्ह करा' : '📲 Open in 1-Click / Add App'}</span>
          <span className="px-1.5 py-0.5 bg-slate-900 text-amber-300 rounded-md text-[10px] uppercase font-mono">
            FREE
          </span>
        </button>
      )}

      {/* 3. Floating Quick-Access Variant */}
      {variant === 'floating' && (
        <div className="fixed bottom-20 right-4 z-40 sm:bottom-6 sm:right-6 animate-bounce">
          <button
            onClick={handleInstallClick}
            className="flex items-center gap-2 px-4 py-2.5 bg-linear-to-r from-[#102b55] to-[#1e3a8a] text-white rounded-full shadow-2xl border-2 border-amber-400 text-xs font-black cursor-pointer hover:shadow-amber-500/20"
          >
            <Smartphone className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">
              {isMr ? '१-क्लिक ॲप स्क्रीनवर जोडा' : 'Add 1-Click Shortcut'}
            </span>
            <span className="sm:hidden">{isMr ? '१-क्लिक ॲप' : 'Add App'}</span>
          </button>
        </div>
      )}

      {/* 4. Full Banner Variant */}
      {variant === 'banner' && (
        <div className="bg-linear-to-r from-amber-500/20 via-blue-900/30 to-amber-500/20 border-y border-amber-400/40 py-3 px-4 text-center">
          <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-left">
              <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <strong className="text-white block sm:inline">
                  {isMr ? 'हे पोर्टल एका क्लिकवर उघडण्यासाठी:' : 'To open this portal in 1-click:'}
                </strong>{' '}
                <span className="text-slate-300">
                  {isMr
                    ? 'आपल्या मोबाईल किंवा कॉम्प्युटरच्या होम स्क्रीनवर अ‍ॅप आयकॉन जोडा!'
                    : 'Add the app shortcut directly to your phone or desktop home screen!'}
                </span>
              </div>
            </div>

            <button
              onClick={handleInstallClick}
              className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black rounded-xl text-xs shadow-md transition-all cursor-pointer shrink-0 flex items-center gap-1.5"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>{isMr ? '📲 स्क्रीनवर जोडा (Add to Screen)' : '📲 Add Shortcut'}</span>
            </button>
          </div>
        </div>
      )}

      {/* Interactive 1-Click App Shortcut Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-fadeIn">
          <div className="fixed inset-0" onClick={() => setShowModal(false)} />

          <div className="relative z-10 w-full max-w-md bg-slate-900 border-2 border-amber-400 rounded-3xl p-6 shadow-2xl text-white overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <ChakanLogo size="sm" withContainer className="mx-auto mb-2" />
              <h3 className="text-lg sm:text-xl font-black font-serif text-amber-300">
                {isMr ? '📲 एका क्लिकवर अ‍ॅप कसे उघडावे?' : '📲 How to Open in 1-Click?'}
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                {isMr
                  ? 'न्यू श्री स्वामी समर्थ ट्रान्सपोर्ट पोर्टल आपल्या मोबाईल स्क्रीनवर सेव्ह करा:'
                  : 'Save New Shree Swami Samarth Transport app on your home screen:'}
              </p>
            </div>

            {/* Platform Instructions */}
            <div className="space-y-3 text-xs sm:text-sm">
              {/* Android / Chrome */}
              <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-4">
                <div className="flex items-center gap-2 font-bold text-amber-400 mb-1.5">
                  <Smartphone className="w-4 h-4" />
                  <span>{isMr ? '१. Android / Chrome मोबाईलवर:' : '1. On Android / Chrome:'}</span>
                </div>
                <ol className="list-decimal list-inside space-y-1 text-slate-300 text-[11px] sm:text-xs">
                  <li>
                    {isMr
                      ? 'ब्राऊझरच्या वरच्या उजव्या कोपऱ्यातील ३ डॉट्स (⋮) दाबा.'
                      : 'Tap the 3 dots menu (⋮) in the top-right corner.'}
                  </li>
                  <li>
                    <strong>{isMr ? '“Add to Home screen” किंवा “Install app”' : '“Add to Home screen” or “Install app”'}</strong>{' '}
                    {isMr ? 'पर्याय निवडा.' : 'option.'}
                  </li>
                  <li>
                    {isMr
                      ? 'स्क्रीनवर WhatsApp प्रमाणेच ट्रान्सपोर्टचा ॲप आयकॉन तयार होईल!'
                      : 'An app icon will appear directly on your phone home screen!'}
                  </li>
                </ol>
              </div>

              {/* iPhone / Safari */}
              <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-4">
                <div className="flex items-center gap-2 font-bold text-blue-400 mb-1.5">
                  <Share className="w-4 h-4" />
                  <span>{isMr ? '२. iPhone / iPad (Safari) वर:' : '2. On iPhone / Safari:'}</span>
                </div>
                <ol className="list-decimal list-inside space-y-1 text-slate-300 text-[11px] sm:text-xs">
                  <li>
                    {isMr
                      ? 'खालील Share बटण (चौरस आणि बाण ⎋) दाबा.'
                      : 'Tap the Share button (square with arrow ⎋).'}
                  </li>
                  <li>
                    <strong>{isMr ? '“Add to Home Screen” (+)' : '“Add to Home Screen” (+)'}</strong>{' '}
                    {isMr ? 'वर क्लिक करा.' : 'option.'}
                  </li>
                </ol>
              </div>

              {/* 1-Click Copy Link */}
              <div className="bg-amber-950/40 border border-amber-500/40 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-left">
                  <span className="font-bold text-amber-300 text-xs block">
                    {isMr ? 'वेबसाईट थेट लिंक कॉपी करा:' : 'Copy Direct Web Link:'}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono break-all line-clamp-1">
                    {window.location.href}
                  </span>
                </div>

                <button
                  onClick={handleCopyLink}
                  className="w-full sm:w-auto px-4 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-800" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? (isMr ? 'कॉपी झाले!' : 'Copied!') : (isMr ? 'लिंक कॉपी करा' : 'Copy Link')}</span>
                </button>
              </div>
            </div>

            {/* Direct Try Install Button if browser supports it */}
            {isInstallable && (
              <button
                onClick={async () => {
                  await install();
                  setShowModal(false);
                }}
                className="w-full mt-4 py-3 bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>{isMr ? 'आताच अ‍ॅप इन्स्टॉल करा (Install Now)' : 'Install App Now'}</span>
              </button>
            )}

            <button
              onClick={() => setShowModal(false)}
              className="w-full mt-3 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs rounded-xl transition-colors cursor-pointer"
            >
              {isMr ? 'समजले / बंद करा' : 'Got it / Close'}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
