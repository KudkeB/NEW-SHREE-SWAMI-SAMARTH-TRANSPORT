import React, { useState } from 'react';
import { Star, MessageCircle, ExternalLink, CheckCircle, Sparkles, Filter, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { Language, Review } from '../types/index.ts';
import { REVIEWS, CONTACT_INFO } from '../data/transportData.ts';

interface ReviewsMarqueeProps {
  language: Language;
}

export const ReviewsMarquee: React.FC<ReviewsMarqueeProps> = ({ language }) => {
  const isMr = language === 'mr';
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'slider' | 'grid'>('slider');

  const filterTags = [
    { id: 'all', label: isMr ? 'सर्व Reviews (35)' : 'All Reviews (35)' },
    { id: 'fast', label: isMr ? 'वेळेवर व वेगवान (Fast & Timely)' : 'Fast & Timely' },
    { id: 'comm', label: isMr ? 'संभाषण (Communication)' : 'Communication' },
    { id: 'staff', label: isMr ? 'कर्मचारी (Reliable Staff)' : 'Staff & Service' },
    { id: 'part', label: isMr ? 'पार्ट लोड (Part Load)' : 'Part Load' },
  ];

  const filteredReviews = REVIEWS.filter(rev => {
    if (selectedTag === 'all') return true;
    const txt = rev.text.toLowerCase();
    if (selectedTag === 'fast') return txt.includes('fast') || txt.includes('timely');
    if (selectedTag === 'comm') return txt.includes('communication');
    if (selectedTag === 'staff') return txt.includes('staff');
    if (selectedTag === 'part') return txt.includes('part load') || txt.includes('goods');
    return true;
  });

  return (
    <section id="reviews" className="py-14 bg-[#fffdf8] border-b border-[#e8dccb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Exact Header matching Screenshot 5 & 10 */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 text-amber-600 font-extrabold text-sm sm:text-base uppercase tracking-wider mb-2">
            <span className="text-xl">⭐</span>
            <span>Google Customer Reviews</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-[#10264a] font-serif tracking-tight">
            5.0 ★ • 35 Google Reviews
          </h2>

          <p className="mt-2 text-sm sm:text-base font-semibold text-slate-700">
            {isMr
              ? 'ग्राहकांचे वास्तविक Reviews आपोआप पुढे सरकतील.'
              : 'Real customer reviews slide forward automatically.'}
          </p>
        </div>

        {/* Gemini / Google AI Summary Box (Exact text from Screenshot 11) */}
        <div className="max-w-4xl mx-auto mb-8 bg-gradient-to-r from-sky-50 via-white to-amber-50/70 border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-200/80">
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                <span className="text-2xl sm:text-3xl font-black font-mono text-[#10264a]">5.0</span>
                <div className="flex text-amber-400 ml-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-500">
                (35 reviews on Google Maps)
              </span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1 bg-sky-100 text-sky-800 text-xs font-bold rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>Summarised with Google Maps</span>
            </div>
          </div>

          <p className="mt-3 text-xs sm:text-sm font-medium text-slate-700 leading-relaxed italic">
            "{isMr ? CONTACT_INFO.googleReviewSummaryMr : CONTACT_INFO.googleReviewSummary}"
          </p>
        </div>

        {/* Filter Tag Pills & View Mode */}
        <div className="max-w-4xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
            <Filter className="w-3.5 h-3.5 text-slate-500" />
            {filterTags.map((tag) => (
              <button
                key={tag.id}
                onClick={() => setSelectedTag(tag.id)}
                className={`px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                  selectedTag === tag.id
                    ? 'bg-[#10264a] text-white border-[#10264a] shadow-xs'
                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                }`}
              >
                {tag.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setViewMode(prev => prev === 'slider' ? 'grid' : 'slider')}
            className="text-xs font-bold text-[#10264a] hover:text-[#d83a2e] flex items-center gap-1 px-3 py-1 bg-white border border-slate-300 rounded-lg cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{viewMode === 'slider' ? (isMr ? 'सर्व ग्रिड स्वरूपात पहा' : 'View as Grid') : (isMr ? 'स्लायडर पहा' : 'View as Slider')}</span>
          </button>
        </div>

        {/* Continuous Auto-Sliding Marquee Track */}
        {viewMode === 'slider' ? (
          <div className="relative overflow-hidden py-3 select-none">
            <div className="flex w-max animate-marquee space-x-5">
              {[...filteredReviews, ...filteredReviews].map((rev, index) => {
                const initial = rev.author.charAt(0).toUpperCase();
                return (
                  <div
                    key={`${rev.id}-${index}`}
                    className="w-[310px] sm:w-[350px] bg-white border border-[#e8dccb] hover:border-amber-400 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between shrink-0"
                  >
                    <div>
                      {/* Top Row: Stars + Date */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex text-amber-400">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <span className="text-[11px] font-semibold text-slate-400">
                          {rev.date}
                        </span>
                      </div>

                      {/* Author Header */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-full bg-[#10264a] text-amber-300 font-bold flex items-center justify-center text-sm shadow-xs">
                          {initial}
                        </div>
                        <div>
                          <div className="font-extrabold text-sm text-[#10264a] font-serif">
                            {rev.author}
                          </div>
                          {rev.reviewCount && (
                            <div className="text-[10px] font-semibold text-slate-400">
                              {rev.reviewCount}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Original Review Text */}
                      <p className="text-xs sm:text-sm font-semibold text-slate-800 whitespace-pre-line leading-relaxed min-h-[48px]">
                        "{rev.text}"
                      </p>

                      {/* Photo indicator if applicable (e.g. Radheshyam Thakur) */}
                      {rev.hasPhoto && (
                        <div className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 border border-amber-200 rounded text-[11px] text-amber-800 font-bold">
                          <span>📸 2 Photos attached</span>
                        </div>
                      )}

                      {/* Owner Reply if available */}
                      {rev.ownerReply && (
                        <div className="mt-3 p-2.5 bg-slate-50 border-l-2 border-[#10264a] rounded-r-lg text-[11px] text-slate-600">
                          <span className="font-bold text-[#10264a] block">
                            SHREE SWAMI SAMARTH TRANSPORT • <span className="text-[10px] text-slate-400 font-normal">{rev.ownerReply.date}</span>
                          </span>
                          <span className="italic mt-0.5 block">{rev.ownerReply.text}</span>
                        </div>
                      )}
                    </div>

                    <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-emerald-700">
                      <span className="flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>Google Verified Review</span>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* Grid View for detailed reading */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredReviews.map((rev) => {
              const initial = rev.author.charAt(0).toUpperCase();
              return (
                <div
                  key={rev.id}
                  className="bg-white border border-[#e8dccb] hover:border-amber-400 rounded-2xl p-5 shadow-xs transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex text-amber-400">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-[11px] font-semibold text-slate-400">
                        {rev.date}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-full bg-[#10264a] text-amber-300 font-bold flex items-center justify-center text-sm shadow-xs">
                        {initial}
                      </div>
                      <div>
                        <div className="font-extrabold text-sm text-[#10264a] font-serif">
                          {rev.author}
                        </div>
                        {rev.reviewCount && (
                          <div className="text-[10px] font-semibold text-slate-400">
                            {rev.reviewCount}
                          </div>
                        )}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm font-semibold text-slate-800 whitespace-pre-line leading-relaxed">
                      "{rev.text}"
                    </p>

                    {rev.hasPhoto && (
                      <div className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 border border-amber-200 rounded text-[11px] text-amber-800 font-bold">
                        <span>📸 2 Photos attached</span>
                      </div>
                    )}

                    {rev.ownerReply && (
                      <div className="mt-3 p-2.5 bg-slate-50 border-l-2 border-[#10264a] rounded-r-lg text-[11px] text-slate-600">
                        <span className="font-bold text-[#10264a] block">
                          SHREE SWAMI SAMARTH TRANSPORT • <span className="text-[10px] text-slate-400 font-normal">{rev.ownerReply.date}</span>
                        </span>
                        <span className="italic mt-0.5 block">{rev.ownerReply.text}</span>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-emerald-700">
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>Google Verified Review</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* 2 Big Action Buttons matching Screenshot 5 */}
        <div className="mt-10 max-w-md mx-auto space-y-3">
          {/* Red Button: ★ Google वर सर्व Reviews पाहा */}
          <a
            href={CONTACT_INFO.googleReviewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 px-6 bg-[#d83a2e] hover:bg-[#b92c22] text-white font-black text-base sm:text-lg rounded-xl shadow-md transition-all active:scale-[0.98]"
          >
            <Star className="w-5 h-5 fill-white text-white" />
            <span>{isMr ? '★ Google वर सर्व Reviews पाहा' : '★ View All Reviews on Google'}</span>
          </a>

          {/* Green Button: ✍️ Write a Google Review */}
          <a
            href={CONTACT_INFO.writeReviewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 px-6 bg-[#138a45] hover:bg-[#0f7239] text-white font-black text-base sm:text-lg rounded-xl shadow-md transition-all active:scale-[0.98]"
          >
            <span>✍️</span>
            <span>{isMr ? 'Write a Google Review' : 'Write a Google Review'}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
