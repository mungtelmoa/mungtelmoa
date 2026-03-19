/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Dog, Hotel, Calendar, ShieldCheck, Star, ChevronRight, Apple, Play } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl overflow-hidden shadow-sm shrink-0">
              <img 
                src="https://ais-dev-fcu3fqzg6bouuuuhbzxbqr-336534051666.asia-east1.run.app/input_file_1.png" 
                alt="멍텔모아 아이콘" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900">멍텔모아</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-violet-600 transition-colors">주요 기능</a>
            <a href="#download" className="hover:text-violet-600 transition-colors">다운로드</a>
          </div>

          <button className="bg-violet-600 text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold hover:bg-violet-700 transition-all shadow-md shadow-violet-200">
            시작하기
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 -z-10 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-violet-50 rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-indigo-50 rounded-full blur-3xl opacity-60 -translate-x-1/4 translate-y-1/4"></div>

        <div className="max-w-7xl mx-auto px-5">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-[10px] md:text-xs font-bold mb-5">
                <Dog size={12} />
                <span>우리 아이를 위한 최고의 선택</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-[1.2] md:leading-[1.1] mb-6 break-keep">
                전국 애견호텔 <br className="hidden md:block" />
                <span className="text-violet-600">한눈에 모아보기</span>
              </h1>
              
              <p className="text-base md:text-lg text-slate-600 mb-8 max-w-md mx-auto md:mx-0 leading-relaxed break-keep">
                사랑하는 반려견을 믿고 맡길 수 있는 곳을 찾으시나요? 
                <span className="md:block"> 멍텔모아에서 검증된 애견호텔을 쉽고 빠르게 예약하세요.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 md:gap-4">
                <motion.a 
                  href="https://www.apple.com/kr/app-store/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-3 bg-slate-900 text-white px-6 py-3.5 rounded-2xl shadow-lg hover:bg-slate-800 transition-all"
                >
                  <Apple size={20} fill="currentColor" />
                  <div className="text-left">
                    <div className="text-[9px] opacity-70 leading-none">Download on the</div>
                    <div className="text-sm font-bold leading-tight">App Store</div>
                  </div>
                </motion.a>
                
                <motion.a 
                  href="https://play.google.com/store/games?hl=ko"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-3 bg-slate-900 text-white px-6 py-3.5 rounded-2xl shadow-lg hover:bg-slate-800 transition-all"
                >
                  <Play size={20} fill="currentColor" />
                  <div className="text-left">
                    <div className="text-[9px] opacity-70 leading-none">GET IT ON</div>
                    <div className="text-sm font-bold leading-tight">Google Play</div>
                  </div>
                </motion.a>
              </div>

              <div className="mt-8 flex flex-col items-center md:items-start gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img 
                      key={i}
                      src={`https://picsum.photos/seed/user${i}/100/100`} 
                      alt="User" 
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white shadow-sm"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <div className="text-xs md:text-sm text-slate-500">
                  <span className="font-bold text-slate-900">12,000+</span> 명의 견주님들이 이용 중
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[280px] md:max-w-[380px] mx-auto"
            >
              <div className="relative z-10 w-full aspect-[9/18.5] bg-slate-900 rounded-[2.5rem] md:rounded-[3rem] border-[6px] md:border-[8px] border-slate-800 shadow-2xl overflow-hidden">
                {/* Mockup Screen Content */}
                <div className="absolute inset-0 bg-violet-600 flex flex-col items-center justify-center p-6 md:p-8">
                  <motion.div 
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl mb-5"
                  >
                    <img 
                      src="https://ais-dev-fcu3fqzg6bouuuuhbzxbqr-336534051666.asia-east1.run.app/input_file_1.png" 
                      alt="멍텔모아 아이콘" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                  <h2 className="text-white text-2xl md:text-3xl font-black mb-1">멍텔모아</h2>
                  <p className="text-violet-100 text-xs md:text-sm text-center opacity-90">세상의 모든 애견호텔</p>
                  
                  <div className="mt-10 w-full space-y-2.5">
                    <div className="h-8 md:h-10 bg-white/20 rounded-lg md:rounded-xl w-full"></div>
                    <div className="h-8 md:h-10 bg-white/20 rounded-lg md:rounded-xl w-full"></div>
                    <div className="h-8 md:h-10 bg-white/20 rounded-lg md:rounded-xl w-3/4"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements - Adjusted for Mobile */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-2 md:-right-8 bg-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-lg flex items-center gap-2 md:gap-3 z-20"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                  <Star fill="currentColor" size={16} />
                </div>
                <div>
                  <div className="text-[10px] md:text-xs font-bold text-slate-900">평점 4.9/5.0</div>
                  <div className="text-[8px] md:text-[10px] text-slate-500">실제 이용객 만족도</div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 -left-2 md:-left-8 bg-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-lg flex items-center gap-2 md:gap-3 z-20"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <div className="text-[10px] md:text-xs font-bold text-slate-900">안심 예약 보장</div>
                  <div className="text-[8px] md:text-[10px] text-slate-500">100% 검증된 업체</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-3">왜 멍텔모아인가요?</h2>
            <p className="text-sm md:text-base text-slate-600 break-keep">반려견과 견주님 모두가 행복한 여행을 위해 준비했습니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <Hotel className="text-violet-600" size={28} />,
                title: "전국 호텔 데이터",
                desc: "전국 어디든 우리 동네부터 여행지까지 모든 애견호텔 정보를 모았습니다."
              },
              {
                icon: <Calendar className="text-violet-600" size={28} />,
                title: "간편한 실시간 예약",
                desc: "전화 문의 없이 앱에서 바로 빈 객실을 확인하고 예약할 수 있습니다."
              },
              {
                icon: <Star className="text-violet-600" size={28} />,
                title: "생생한 리얼 후기",
                desc: "직접 이용해본 견주님들의 솔직한 후기와 평점을 확인하세요."
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-7 md:p-8 rounded-[2rem] shadow-sm border border-slate-100 text-center md:text-left"
              >
                <div className="mb-5 w-14 h-14 bg-violet-50 rounded-2xl flex items-center justify-center mx-auto md:mx-0">
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2.5">{feature.title}</h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed break-keep">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="w-full md:flex-1 order-2 md:order-1">
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <img 
                  src="https://picsum.photos/seed/dog1/400/600" 
                  alt="Dog" 
                  className="rounded-2xl md:rounded-3xl shadow-md transform translate-y-6 md:translate-y-8"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://picsum.photos/seed/dog2/400/600" 
                  alt="Dog" 
                  className="rounded-2xl md:rounded-3xl shadow-md"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="w-full md:flex-1 order-1 md:order-2 text-center md:text-left">
              <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-5 leading-tight break-keep">
                우리 아이의 하루를 <br className="hidden md:block" />
                <span className="text-violet-600">실시간으로 확인하세요</span>
              </h2>
              <ul className="space-y-4 inline-block text-left">
                {[
                  "호텔 매니저와의 1:1 채팅 상담",
                  "실시간 사진 및 영상 업데이트 알림",
                  "맞춤형 케어 서비스 신청 가능",
                  "투명한 가격 정찰제 운영"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 w-4 h-4 rounded-full bg-violet-600 flex items-center justify-center text-white shrink-0">
                      <ChevronRight size={12} />
                    </div>
                    <span className="text-sm md:text-base text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <button className="inline-flex items-center gap-2 text-violet-600 font-bold hover:underline text-sm md:text-base">
                  자세히 알아보기 <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-5">
          <div className="bg-violet-600 rounded-[2.5rem] md:rounded-[3rem] p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-violet-200">
            {/* Decorative circles */}
            <div className="absolute -top-20 -left-20 w-48 h-48 md:w-64 md:h-64 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-20 -right-20 w-48 h-48 md:w-64 md:h-64 bg-white/10 rounded-full"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-5xl font-black mb-5 break-keep leading-tight">지금 바로 멍텔모아를 <br className="md:hidden" /> 만나보세요!</h2>
              <p className="text-sm md:text-lg text-violet-100 mb-10 max-w-xl mx-auto break-keep">
                첫 예약 시 5,000원 할인 쿠폰을 드립니다. <br className="hidden md:block" />
                반려견에게 행복한 휴가를 선물하세요.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
                <motion.a 
                  href="https://www.apple.com/kr/app-store/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center gap-3 bg-white text-violet-600 px-7 py-3.5 rounded-2xl font-bold shadow-lg transition-all"
                >
                  <Apple size={20} fill="currentColor" />
                  <span className="text-sm md:text-base">App Store</span>
                </motion.a>
                
                <motion.a 
                  href="https://play.google.com/store/games?hl=ko"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center gap-3 bg-white text-violet-600 px-7 py-3.5 rounded-2xl font-bold shadow-lg transition-all"
                >
                  <Play size={20} fill="currentColor" />
                  <span className="text-sm md:text-base">Google Play</span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg overflow-hidden">
                <img 
                  src="https://ais-dev-fcu3fqzg6bouuuuhbzxbqr-336534051666.asia-east1.run.app/input_file_1.png" 
                  alt="멍텔모아 아이콘" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-bold text-slate-900 text-sm">멍텔모아</span>
            </div>
            
            <div className="flex gap-6 text-xs text-slate-500">
              <a href="#" className="hover:text-violet-600">이용약관</a>
              <a href="#" className="hover:text-violet-600">개인정보처리방침</a>
              <a href="#" className="hover:text-violet-600">고객센터</a>
            </div>
            
            <div className="text-[10px] md:text-xs text-slate-400">
              © 2026 Mungtel Moa. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
