import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="relative z-20 px-4 py-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/images/ryuin-logo.svg"
              alt="Ryuin"
              width={120}
              height={60}
              className="h-12 w-auto"
            />
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">서비스</a>
            <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors">포트폴리오</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">가격</a>
            <a href="mailto:hyeonje103@gmail.com" className="text-amber-400 hover:text-amber-300 font-semibold transition-colors">문의하기</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Digital technology background"
            fill
            className="object-cover opacity-60"
            priority
          />
          {/* Soft dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-slate-800/80 to-gray-900/90"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-700/5 to-slate-600/5"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto text-center z-10 px-4">
          <h1 className="font-kotra text-3xl md:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            당신의 아이디어,<br />
            <span className="ml-0 md:-ml-50 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent inline-flex items-center gap-0 justify-center">
              <Image
                src="/images/lightbom.png"
                alt="아이디어 전구"
                width={220}
                height={220}
                className="inline-block drop-shadow-[0_0_80px_rgba(168,85,247,1)] brightness-150 saturate-200 contrast-150 scale-125 w-16 h-16 md:w-auto md:h-auto"
              />
              단 <span className="text-yellow-400 text-3xl md:text-6xl lg:text-8xl font-black drop-shadow-[0_0_10px_rgba(251,191,36,0.8)] animate-pulse ml-1 md:ml-4">7</span><span className="text-3xl md:text-5xl lg:text-7xl">일 만에 웹사이트로!</span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
            지금 이메일로 신청만 하면, 빠르게 상담하고 제작까지 진행해드립니다.<br />
            초기 창업자 맞춤형 웹사이트, 부담 없는 가격으로 시작하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a
              href="mailto:hyeonje103@gmail.com"
              className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white px-12 py-6 rounded-2xl text-xl font-semibold transition-all duration-500 shadow-[0_8px_32px_rgba(245,158,11,0.25)] hover:shadow-[0_12px_48px_rgba(245,158,11,0.4)] border border-amber-400/20 hover:border-amber-300/30 relative group transform hover:scale-[1.02] hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                📧 무료 상담 신청하기
              </span>
              {/* Subtle inner glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/10 to-yellow-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
          
          {/* Hero Image */}
          <div className="relative max-w-7xl mx-auto mb-16 overflow-hidden">
            <div className="flex space-x-6 py-8 animate-[slide_25s_linear_infinite]">
              {/* Card 1 */}
              <div className="flex-shrink-0 w-80 h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-gray-400/20 hover:border-gray-300/30 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.03)] hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] overflow-hidden backdrop-blur-sm">
                <div className="relative h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1553044020-8c90843adf96?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Creative workspace with lightbulb"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-lg font-medium text-gray-200/80 drop-shadow-sm tracking-wide">아이디어 구현</h3>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex-shrink-0 w-80 h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-gray-400/20 hover:border-gray-300/30 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.03)] hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] overflow-hidden backdrop-blur-sm">
                <div className="relative h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Coding and development workspace"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-lg font-medium text-gray-200/80 drop-shadow-sm tracking-wide">빠른 제작</h3>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex-shrink-0 w-80 h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-gray-400/20 hover:border-gray-300/30 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.03)] hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] overflow-hidden backdrop-blur-sm">
                <div className="relative h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Multiple devices showing responsive design"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-lg font-medium text-gray-200/80 drop-shadow-sm tracking-wide">반응형 디자인</h3>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="flex-shrink-0 w-80 h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-gray-400/20 hover:border-gray-300/30 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.03)] hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] overflow-hidden backdrop-blur-sm">
                <div className="relative h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1662974770404-468fd9660389?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Customer support and consultation"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-lg font-medium text-gray-200/80 drop-shadow-sm tracking-wide">24시간 상담</h3>
                  </div>
                </div>
              </div>

              {/* Card 5 */}
              <div className="flex-shrink-0 w-80 h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-gray-400/20 hover:border-gray-300/30 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.03)] hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] overflow-hidden backdrop-blur-sm">
                <div className="relative h-full">
                  <Image
                    src="/images/qa.jpg"
                    alt="Quality assurance and premium service"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-lg font-medium text-gray-200/80 drop-shadow-sm tracking-wide">품질 보장</h3>
                  </div>
                </div>
              </div>

              {/* Duplicate cards for seamless loop */}
              {/* Card 1 - Duplicate */}
              <div className="flex-shrink-0 w-80 h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-gray-400/20 hover:border-gray-300/30 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.03)] hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] overflow-hidden backdrop-blur-sm">
                <div className="relative h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center"
                    alt="Creative workspace with lightbulb"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-lg font-medium text-gray-200/80 drop-shadow-sm tracking-wide">아이디어 구현</h3>
                  </div>
                </div>
              </div>

              {/* Card 2 - Duplicate */}
              <div className="flex-shrink-0 w-80 h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-gray-400/20 hover:border-gray-300/30 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.03)] hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] overflow-hidden backdrop-blur-sm">
                <div className="relative h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center"
                    alt="Coding and development workspace"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-lg font-medium text-gray-200/80 drop-shadow-sm tracking-wide">빠른 제작</h3>
                  </div>
                </div>
              </div>

              {/* Card 3 - Duplicate */}
              <div className="flex-shrink-0 w-80 h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-gray-400/20 hover:border-gray-300/30 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.03)] hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] overflow-hidden backdrop-blur-sm">
                <div className="relative h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center"
                    alt="Multiple devices showing responsive design"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-lg font-medium text-gray-200/80 drop-shadow-sm tracking-wide">반응형 디자인</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Customers Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-purple-400 text-sm font-semibold uppercase">Target Customers</span>
            <h2 className="font-kotra text-4xl md:text-5xl font-bold mt-4 mb-6">
              이런 분들께 <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">추천해요</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🚀",
                title: "창업은 했지만 아직 홈페이지가 없는 분",
                desc: "비즈니스는 시작했지만 온라인 존재감이 필요한 분들",
                image: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=300&h=200&fit=crop&crop=center"
              },
              {
                icon: "📱",
                title: "인스타그램/카카오톡으로만 제품을 판매 중인 소상공인",
                desc: "SNS에서 전문적인 웹사이트로 확장하고 싶은 분들",
                image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=300&h=200&fit=crop&crop=center"
              },
              {
                icon: "💼",
                title: "명함 대신 사용할 나만의 소개 사이트가 필요한 프리랜서",
                desc: "개인 브랜딩을 위한 전문적인 포트폴리오 사이트가 필요한 분들",
                image: "https://plus.unsplash.com/premium_photo-1736652293708-ccd3ff521168?w=300&h=200&fit=crop&crop=center"
              },
              {
                icon: "💸",
                title: "너무 비싼 견적에 부담을 느끼고 있던 분",
                desc: "합리적인 가격으로 품질 좋은 웹사이트를 원하는 분들",
                image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop&crop=center"
              },
              {
                icon: "🤝",
                title: "내가 원하는 느낌 그대로 제작되고 소통이 잘 되는 곳을 찾는 분",
                desc: "디테일한 소통과 맞춤형 제작을 중요시하는 분들",
                image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop&crop=center"
              }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  <div className="absolute top-4 left-4 text-3xl">{item.icon}</div>
                </div>
                <div className="p-6 font-inter">
                  <h3 className="text-white font-semibold text-lg mb-3 leading-tight">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section id="services" className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-purple-400 text-sm font-semibold uppercase">Services</span>
            <h2 className="font-kotra text-4xl md:text-5xl font-bold mt-4 mb-6">
              전략형 웹사이트 <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">제작 서비스</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              단순한 &ldquo;홈페이지 제작&rdquo;이 아니라, 당신의 브랜드와 서비스가 잘 보이도록 돕는 전략형 웹사이트를 제작합니다.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-8 text-white">제공 내용</h3>
              <div className="space-y-4">
                {[
                  "1페이지형 랜딩 사이트 (반응형)",
                  "브랜드에 맞춘 맞춤형 디자인",
                  "기본 SEO 최적화",
                  "링크/버튼 연결 세팅",
                  "예약 폼, 신청 폼, 문의 기능 가능",
                  "모바일 최적화 100%"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl border border-purple-500/20">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700/50">
                <h3 className="font-inter text-2xl font-bold mb-6 text-white">작업 과정</h3>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-6 rounded-xl">
                    <h4 className="font-inter font-semibold text-purple-300 mb-2 text-lg">📅 제작 기간</h4>
                    <p className="font-inter text-gray-300 text-lg font-semibold">평균 5~7일</p>
                    <p className="font-inter text-gray-400 text-sm">(요구사항에 따라 다름)</p>
                  </div>
                  <div className="space-y-3">
                    {[
                      "1. 이메일 상담",
                      "2. 요구사항 정리", 
                      "3. 디자인 및 개발",
                      "4. 완성본 전달 및 수정",
                      "5. 최종 배포"
                    ].map((step, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white text-sm font-bold">
                          {index + 1}
                        </div>
                        <span className="text-gray-300">{step.split('. ')[1]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Decorative image */}
              <div className="absolute -top-10 -right-10 w-32 h-32 opacity-20">
                <Image
                  src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=200&h=200&fit=crop&crop=center"
                  alt="Creative process"
                  width={120}
                  height={120}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Examples */}
      <section id="portfolio" className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-purple-400 text-sm font-semibold uppercase">Portfolio</span>
            <h2 className="font-kotra text-4xl md:text-5xl font-bold mt-4 mb-6">
              포트폴리오 <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">예시</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "미니멀 카페 창업 소개 페이지",
                url: "demo1.example.com",
                description: "분위기 있는 이미지 + 메뉴 소개 + 위치 안내",
                color: "from-blue-600 to-cyan-600",
                image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=250&fit=crop&crop=center"
              },
              {
                title: "프리랜서 디자이너 개인 브랜딩 페이지", 
                url: "demo2.example.com",
                description: "자기소개 + 포트폴리오 링크 + SNS 연동",
                color: "from-purple-600 to-pink-600",
                image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=250&fit=crop&crop=center"
              },
              {
                title: "소규모 클래스 신청용 웹사이트",
                url: "demo3.example.com", 
                description: "일정 안내 + 신청 폼 + 후기 섹션",
                color: "from-green-600 to-emerald-600",
                image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=250&fit=crop&crop=center"
              }
            ].map((item, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={250}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                  <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                    </svg>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-semibold text-xl text-white mb-3 group-hover:text-purple-300 transition-colors leading-tight">[예시{index + 1}] {item.title}</h3>
                  <p className="text-purple-400 text-sm mb-4 font-mono">{item.url}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">→ {item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-purple-400 text-sm font-semibold uppercase">Testimonials</span>
            <h2 className="font-kotra text-4xl md:text-5xl font-bold mt-4 mb-6">
              실제 사용 <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">후기</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "인스타 링크만 달고 다니다가 홈페이지 만든 후엔 훨씬 신뢰도가 높아졌어요.",
                author: "김OO",
                role: "소형 공방 운영자",
                avatar: "https://images.unsplash.com/photo-1641573548584-ffb1c512e932?w=150&h=150&fit=crop&crop=face"
              },
              {
                text: "디자인도 빠르게 수정해주시고, 무엇보다 커뮤니케이션이 너무 잘 돼서 만족해요!",
                author: "박OO", 
                role: "프리랜서 웹디자이너",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
              },
              {
                text: "사이트 하나 생기고 나서 첫 주문이 들어왔을 때 진짜 뭉클했어요.",
                author: "이OO",
                role: "수제 소품 창업자", 
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
              }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700/50">
                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 mr-4">
                    <Image
                      src={item.avatar}
                      alt={item.author}
                      width={64}
                      height={64}
                      className="rounded-full object-cover"
                    />
                    <div className="absolute inset-0 rounded-full ring-2 ring-purple-500/30"></div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{item.author}</h4>
                    <p className="text-gray-400 text-sm">{item.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed italic mb-4">&ldquo;{item.text}&rdquo;</p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-purple-400 text-sm font-semibold uppercase">Pricing</span>
            <h2 className="font-kotra text-4xl md:text-5xl font-bold mt-4 mb-6">
              가격 및 <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">안내</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">💰 가격대</h3>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-6 rounded-2xl border border-green-500/30">
                  <h4 className="font-semibold text-green-300 text-lg mb-2">기본 1페이지형</h4>
                  <p className="text-3xl font-bold text-green-400 mb-2">25만원부터</p>
                  <p className="text-green-200/70 text-sm">랜딩 페이지 + 기본 SEO + 반응형 디자인</p>
                </div>
                <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-6 rounded-2xl border border-purple-500/30">
                  <h4 className="font-semibold text-purple-300 text-lg mb-2">폼 추가, 예약 시스템 포함</h4>
                  <p className="text-3xl font-bold text-purple-400 mb-2">35~45만원</p>
                  <p className="text-purple-200/70 text-sm">문의폼 + 예약시스템 + 고급 기능</p>
                </div>
                <p className="text-gray-400 text-sm">추가 기능은 상담 후 협의 가능</p>
              </div>
            </div>
            
            <div className="relative">
              <h3 className="text-2xl font-bold text-white mb-8">안내 사항</h3>
              <div className="space-y-4">
                {[
                  "도메인, 호스팅은 별도이지만 연결은 무료로 도와드립니다",
                  "텍스트/이미지 자료는 제공해주셔야 합니다", 
                  "완성 후 1회 무료 수정 포함"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              {/* Decorative image */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 opacity-10">
                <Image
                  src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=200&h=200&fit=crop&crop=center"
                  alt="Calculator and charts"
                  width={160}
                  height={160}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900 via-purple-800 to-pink-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        {/* Background decoration */}
        <div className="absolute top-10 left-10 w-32 h-32 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&h=200&fit=crop&crop=center"
            alt="Email and communication"
            width={120}
            height={120}
            className="rounded-full blur-sm"
          />
        </div>
        <div className="absolute bottom-10 right-10 w-40 h-40 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=200&h=200&fit=crop&crop=center"
            alt="Rocket launch"
            width={160}
            height={160}
            className="rounded-full blur-sm"
          />
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            신청 및 문의
          </h2>
          <p className="text-xl mb-12 text-purple-100 leading-relaxed">
            간단한 이메일 한 통이면 충분해요!<br />
            당신의 아이디어를 웹으로 펼쳐드릴게요.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-white">📩 신청 이메일</h3>
            <a
              href="mailto:hyeonje103@gmail.com"
              className="text-2xl font-bold text-yellow-300 hover:text-yellow-100 transition-colors duration-300 font-mono"
            >
              hyeonje103@gmail.com
            </a>
          </div>
          
          <div className="text-left max-w-2xl mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 mb-12">
            <h4 className="font-bold mb-6 text-white text-lg">✍️ 메일에 아래 내용을 적어 보내주세요:</h4>
            <ul className="space-y-3">
              {[
                "성함",
                "원하는 사이트 유형 (소개, 신청, 예약 등)",
                "참고하고 싶은 사이트 (선택사항)",
                "원하는 제작 일정"
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 flex items-center justify-center text-white text-sm font-bold">
                    {index + 1}
                  </div>
                  <span className="text-purple-100">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <p className="text-lg font-semibold text-purple-100 mb-8">
            신청 후 24시간 내 답변 드립니다.
          </p>
          
          <a
            href="mailto:hyeonje103@gmail.com"
            className="inline-block bg-white text-purple-900 px-12 py-4 rounded-full text-lg font-bold hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            지금 신청하기 →
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-purple-400 text-sm font-semibold uppercase">FAQ</span>
            <h2 className="font-kotra text-4xl md:text-5xl font-bold mt-4 mb-6">
              자주 묻는 <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">질문</span>
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "도메인이나 호스팅도 해주시나요?",
                a: "구매는 고객님이 하시지만, 연결 및 설정은 저희가 도와드립니다."
              },
              {
                q: "모바일에서도 잘 보이나요?",
                a: "네, 모든 사이트는 모바일에서도 깔끔하게 보이도록 반응형으로 제작됩니다."
              },
              {
                q: "유지보수도 해주시나요?",
                a: "1회 무료 수정 포함이며, 이후 수정은 별도 협의 가능합니다."
              },
              {
                q: "쇼핑몰도 가능한가요?",
                a: "간단한 주문폼 정도는 가능합니다. 카카오페이 연동 등은 추후 개발 예정입니다."
              }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300">
                <h3 className="font-semibold text-xl text-white mb-4">Q. {item.q}</h3>
                <p className="text-gray-300 leading-relaxed">A. {item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <Image
                  src="/images/ryuin-logo.svg"
                  alt="Ryuin"
                  width={140}
                  height={70}
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Professional Web Development Services<br />
                Fast, Reliable, and Tailored for You
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Contact Us</a></li>
                <li><a href="mailto:hyeonje103@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors font-mono">hyeonje103@gmail.com</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2025 Ryuin. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-4 md:mt-0">
              Professional web development services.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
