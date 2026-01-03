import Image from "next/image";
import Navbar from "@/components/Navbar";
import CallButton from "@/components/CallButton";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#1a1a40] overflow-x-hidden">
      <Navbar />

      {/* Spacer for fixed header */}
      <div className="h-24"></div>

      {/* Hero Section */}
      <section className="h-screen w-full flex flex-col items-center justify-center bg-[linear-gradient(180deg,#1a1a40_0%,#1a1a40_70%,#000000_100%)] px-4">

        {/* Headline */}
        <h1 className="max-w-[1050px] text-center font-instrument font-medium text-[40px] md:text-[72px] leading-[1.1] md:leading-[80px] tracking-[-1px] md:tracking-[-3.6px] mb-8 bg-clip-text text-transparent bg-[linear-gradient(135deg,#FFFFFF_0%,#FFFFFF_50%,#9C99FF_100%)]">
          Transforming Ideas Into Intelligent Digital Experiences
        </h1>

        {/* Subheadline */}
        <p 
          className="max-w-[942px] text-center text-white text-[18px] md:text-[25px] leading-relaxed md:leading-[35px] mb-12"
          style={{ fontFamily: 'Aileron, sans-serif' }}
        >
          We build cutting-edge websites, mobile apps, and AI-powered automation that drive real business growth. From concept to scale, we're your complete development partner.
        </p>

        {/* Call to Action Button */}
        <CallButton />

      </section>

      {/* Projects Section */}
      <section className="w-full bg-black py-20">
        {/* Title */}
        <div className="flex justify-center items-center mt-[100px] mb-[50px]">
          <h2 className="font-instrument font-medium text-[48px] md:text-[72px] leading-[72px] tracking-[-3.6px] bg-clip-text text-transparent bg-[linear-gradient(117.11deg,#9C99FF_25.56%,#FFFFFF_30.53%,#FFFFFF_47.75%,#9C99FF_73.19%,#9C99FF_82.2%)]">
            OUR PROJECTS
          </h2>
        </div>

        {/* Projects Grid - Desktop Layout */}
        <div className="hidden lg:block relative w-full max-w-[1472px] mx-auto px-4">

          {/* Row 1 */}
          <div className="flex gap-[32px] mb-[28px]">
            {/* Box 1 */}
            <div
              className="relative bg-black rounded-[14px] border border-black shadow-[0px_0px_0px_8px_rgba(115,112,255,0.3)] hover:shadow-[0px_0px_0px_12px_rgba(115,112,255,0.4)] transition-all cursor-pointer overflow-hidden"
              style={{ width: '561px', height: '299px' }}
            >
              <Image
                src="/project3.png"
                alt="Project 1"
                fill
                sizes="561px"
                className="object-cover"
                unoptimized
              />
            </div>

            {/* Box 2 */}
            <div
              className="relative bg-black rounded-[14px] border border-black shadow-[0px_0px_0px_8px_rgba(115,112,255,0.3)] hover:shadow-[0px_0px_0px_12px_rgba(115,112,255,0.4)] transition-all cursor-pointer overflow-hidden"
              style={{ width: '764px', height: '379px' }}
            >
              <Image
                src="/project2.png"
                alt="Project 2"
                fill
                sizes="764px"
                className="object-cover"
                unoptimized
              />
            </div>
          </div>

          {/* Row 2 - Positioned absolutely to match Figma */}
          <div className="relative" style={{ height: '600px' }}>
            {/* Box 3 */}
            <div
              className="absolute bg-black rounded-[14px] border border-black shadow-[0px_0px_0px_8px_rgba(115,112,255,0.3)] hover:shadow-[0px_0px_0px_12px_rgba(115,112,255,0.4)] transition-all cursor-pointer overflow-hidden"
              style={{ width: '571px', height: '308px', top: '0px', left: '0px' }}
            >
              <Image
                src="/project1.png"
                alt="Project 3"
                fill
                sizes="571px"
                className="object-cover"
                unoptimized
              />
            </div>

            {/* Box 4 */}
            <div
              className="absolute bg-black rounded-[14px] border border-black shadow-[0px_0px_0px_8px_rgba(115,112,255,0.3)] hover:shadow-[0px_0px_0px_12px_rgba(115,112,255,0.4)] transition-all cursor-pointer overflow-hidden"
              style={{ width: '444px', height: '289px', top: '75px', left: '596px' }}
            >
              <Image
                src="/project4.png"
                alt="Project 4"
                fill
                sizes="444px"
                className="object-cover"
                unoptimized
              />
            </div>

            {/* Box 5 */}
            <div
              className="absolute bg-black rounded-[14px] border border-black shadow-[0px_0px_0px_8px_rgba(115,112,255,0.3)] hover:shadow-[0px_0px_0px_12px_rgba(115,112,255,0.4)] transition-all cursor-pointer overflow-hidden"
              style={{ width: '355px', height: '496px', top: '80px', left: '1075px' }}
            >
              <Image
                src="/project5.png"
                alt="Project 5"
                fill
                sizes="355px"
                className="object-cover object-top"
                unoptimized
              />
            </div>

            {/* Box 6 */}
            <div
              className="absolute bg-black rounded-[14px] border border-black shadow-[0px_0px_0px_8px_rgba(115,112,255,0.3)] hover:shadow-[0px_0px_0px_12px_rgba(115,112,255,0.4)] transition-all cursor-pointer overflow-hidden"
              style={{ width: '466px', height: '251px', top: '337px', left: '0px' }}
            >
              <Image
                src="/project6.jpg"
                alt="Project 6"
                fill
                sizes="466px"
                className="object-cover"
                unoptimized
              />
            </div>

            {/* Box 7 */}
            <div
              className="absolute bg-black rounded-[14px] border border-black shadow-[0px_0px_0px_8px_rgba(115,112,255,0.3)] hover:shadow-[0px_0px_0px_12px_rgba(115,112,255,0.4)] transition-all cursor-pointer"
              style={{ width: '548px', height: '195px', top: '393px', left: '494px' }}
            >
              {/* Project content here */}
            </div>
          </div>

        </div>

        {/* Mobile/Tablet Responsive Grid */}
        <div className="block lg:hidden px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4, 5, 6, 7].map((box) => (
              <div
                key={box}
                className="bg-black rounded-[14px] border border-black shadow-[0px_0px_0px_8px_rgba(115,112,255,0.3)] hover:shadow-[0px_0px_0px_12px_rgba(115,112,255,0.4)] transition-all cursor-pointer h-[250px]"
              >
                {/* Project content here */}
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Services Section */}
      <section className="w-full bg-black py-20 px-4">
        <div className="max-w-[1400px] mx-auto">

          {/* Title */}
          <h2 className="font-instrument font-medium text-[48px] leading-[48px] tracking-[-2.4px] text-white mb-12">
            Services we offer.
          </h2>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left Column - Services List */}
            <div className="space-y-8">

              {/* Website Design */}
              <div>
                <h3 className="font-inter font-semibold text-[25px] leading-[28px] text-white mb-3">
                  Website Design & Development
                </h3>
                <p className="font-inter font-normal text-[20px] leading-[24px] text-[#999999]">
                  Stunning digital storefronts that convert visitors into customers<br />
                  We craft high-performance websites that blend aesthetics with functionality. Every pixel is purposeful, every interaction intuitive. From landing pages that convert to complex web platforms, we build digital experiences that keep users engaged and drive measurable results.
                </p>
              </div>

              {/* Ecommerce */}
              <div>
                <h3 className="font-inter font-semibold text-[25px] leading-[28px] text-white mb-3">
                  E-Commerce & Web Platforms
                </h3>
                <p className="font-inter font-normal text-[20px] leading-[24px] text-[#999999]">
                  Scalable solutions that turn browsers into buyers<br />
                  From multi-vendor marketplaces to subscription platforms, we build web systems that scale. Integrated payments, real-time inventory, analytics dashboards—everything you need to run a world-class digital business. Built for growth from day one.
                </p>
              </div>

              {/* Branding */}
              <div>
                <h3 className="font-inter font-semibold text-[25px] leading-[28px] text-white mb-3">
                  Backend Development
                </h3>
                <p className="font-inter font-normal text-[20px] leading-[24px] text-[#999999]">
                  The backbone of your digital empire<br />
                  Invisible but essential. We architect APIs and databases that handle millions of requests, complex business logic, and enterprise-grade security. Our backend work ensures your application stays fast, reliable, and secure as you scale.
                </p>
              </div>

            </div>

            {/* Right Column - Image */}
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/services-image.jpg"
                alt="Services showcase"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>

          </div>

        </div>
      </section>

      {/* Why You Will Love Us Section */}
      <section className="w-full bg-black py-20 px-4">
        <div className="max-w-[1200px] mx-auto">

          {/* Title with Vector Icon */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <Image
              src="/vector-icon.png"
              alt="Vector Icon"
              width={48}
              height={48}
              className="object-contain"
            />
            <h2 className="font-instrument font-medium text-[48px] leading-[48px] tracking-[-2.4px] text-white">
              Why you'll love us
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1157px] mx-auto">

            {/* Box 1 - Unlimited Revisions */}
            <div className="bg-[rgba(255,255,255,0.01)] rounded-[14px] p-8 border border-transparent hover:border-[#7370FF] transition-all">
              <div className="inline-block border-b-2 border-[#7370FF] pb-2 mb-4">
                <h3 className="font-instrument font-medium text-[32px] leading-[36px] text-white">
                  Unlimited Revisions
                </h3>
              </div>
              <p className="font-inter font-normal text-[18px] leading-[24px] text-[#999999]">
                We refine every detail until you're completely satisfied with the result.
              </p>
            </div>

            {/* Box 2 - Fast Turnaround */}
            <div className="bg-[rgba(255,255,255,0.01)] rounded-[14px] p-8 border border-transparent hover:border-[#7370FF] transition-all">
              <div className="inline-block border-b-2 border-[#7370FF] pb-2 mb-4">
                <h3 className="font-instrument font-medium text-[32px] leading-[36px] text-white">
                  Lightning-Fast Delivery
                </h3>
              </div>
              <p className="font-inter font-normal text-[18px] leading-[24px] text-[#999999]">
                Agile processes mean you get to market quickly without compromising quality.
              </p>
            </div>

            {/* Box 3 - Fast Turnaround */}
            <div className="bg-[rgba(255,255,255,0.01)] rounded-[14px] p-8 border border-transparent hover:border-[#7370FF] transition-all">
              <div className="inline-block border-b-2 border-[#7370FF] pb-2 mb-4">
                <h3 className="font-instrument font-medium text-[32px] leading-[36px] text-white">
                  Full-Stack Expertise
                </h3>
              </div>
              <p className="font-inter font-normal text-[18px] leading-[24px] text-[#999999]">
                One team handles everything—frontend, backend, mobile, AI, automation. No handoffs.
              </p>
            </div>

            {/* Box 4 - Everything, one team */}
            <div className="bg-[rgba(255,255,255,0.01)] rounded-[14px] p-8 border border-transparent hover:border-[#7370FF] transition-all">
              <div className="inline-block border-b-2 border-[#7370FF] pb-2 mb-4">
                <h3 className="font-instrument font-medium text-[32px] leading-[36px] text-white">
                  Transparent Communication
                </h3>
              </div>
              <p className="font-inter font-normal text-[18px] leading-[24px] text-[#999999]">
                Regular updates and clear timelines keep you informed throughout the project.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full bg-black py-20 px-4">
        <div className="max-w-[1200px] mx-auto">

          {/* Title */}
          <h2 className="font-instrument font-bold text-[48px] leading-[48px] tracking-[-2.4px] text-white text-center mb-4">
            What people are saying
          </h2>

          {/* Subtitle */}
          <p className="font-inter font-normal text-[17.6px] leading-[28px] text-[#999999] text-center mb-16">
            Thousands of developers and teams love Reweb.
          </p>

          {/* Desktop Masonry Layout */}
          <div className="hidden md:block relative mx-auto" style={{ maxWidth: '1136px', height: '617px' }}>

            {/* Box 1 */}
            <div className="absolute bg-[#1a1a1a] rounded-[16px] p-6" style={{ width: '368px', height: '200px', top: '0px', left: '0px' }}>
              <p className="text-white text-[15px] leading-[22px] mb-4">
                It practically solves every issue I have with Webflow and Framer. This is so much easier to use as a developer!
              </p>
              <div className="flex items-center gap-3">
                <Image src="/avatar1.png" alt="Jaiden Lee" width={40} height={40} className="rounded-full" />
                <div>
                  <p className="text-white font-semibold text-[14px]">Jaiden Lee</p>
                  <p className="text-gray-400 text-[12px]">@buildjaiden</p>
                </div>
              </div>
            </div>

            {/* Box 2 */}
            <div className="absolute bg-[#1a1a1a] rounded-[16px] p-6" style={{ width: '368px', height: '152px', top: '0px', left: '384px' }}>
              <p className="text-white text-[15px] leading-[22px] mb-4">
                Amazing.
              </p>
              <div className="flex items-center gap-3">
                <Image src="/avatar2.png" alt="shadcn" width={40} height={40} className="rounded-full" />
                <div>
                  <p className="text-white font-semibold text-[14px]">shadcn</p>
                  <p className="text-gray-400 text-[12px]">@shadcn</p>
                </div>
              </div>
            </div>

            {/* Box 3 */}
            <div className="absolute bg-[#1a1a1a] rounded-[16px] p-6" style={{ width: '368px', height: '200px', top: '0px', left: '768px' }}>
              <p className="text-white text-[15px] leading-[22px] mb-4">
                I really have been missing this product for years. It feels like a much more natural way of working.
              </p>
              <div className="flex items-center gap-3">
                <Image src="/avatar3.png" alt="Ninjanordbo" width={40} height={40} className="rounded-full" />
                <div>
                  <p className="text-white font-semibold text-[14px]">Ninjanordbo</p>
                  <p className="text-gray-400 text-[12px]">@ninjanordbo</p>
                </div>
              </div>
            </div>

            {/* Box 4 */}
            <div className="absolute bg-[#1a1a1a] rounded-[16px] p-6" style={{ width: '368px', height: '152px', top: '220px', left: '0px' }}>
              <p className="text-white text-[15px] leading-[22px] mb-4">
                This looks really freaking cool!!
              </p>
              <div className="flex items-center gap-3">
                <Image src="/avatar4.png" alt="James Q Quick" width={40} height={40} className="rounded-full" />
                <div>
                  <p className="text-white font-semibold text-[14px]">James Q Quick</p>
                  <p className="text-gray-400 text-[12px]">@jamesqquick</p>
                </div>
              </div>
            </div>

            {/* Box 5 */}
            <div className="absolute bg-[#1a1a1a] rounded-[16px] p-6" style={{ width: '368px', height: '224px', top: '168px', left: '384px' }}>
              <p className="text-white text-[15px] leading-[22px] mb-4">
                This is awesome. Better than Framer/Wordpress as you can take the code and continue working on it instantly yourself.
              </p>
              <div className="flex items-center gap-3">
                <Image src="/avatar5.png" alt="soumya dot dev" width={40} height={40} className="rounded-full" />
                <div>
                  <p className="text-white font-semibold text-[14px]">soumya dot dev</p>
                  <p className="text-gray-400 text-[12px]">@geekysrm</p>
                </div>
              </div>
            </div>

            {/* Box 6 */}
            <div className="absolute bg-[#1a1a1a] rounded-[16px] p-6" style={{ width: '368px', height: '152px', top: '220px', left: '768px' }}>
              <p className="text-white text-[15px] leading-[22px] mb-4">
                This is so tastefully built. Loving it.
              </p>
              <div className="flex items-center gap-3">
                <Image src="/avatar6.png" alt="Kabir Asani" width={40} height={40} className="rounded-full" />
                <div>
                  <p className="text-white font-semibold text-[14px]">Kabir Asani</p>
                  <p className="text-gray-400 text-[12px]">@KabirAsani</p>
                </div>
              </div>
            </div>

            {/* Box 7 */}
            <div className="absolute bg-[#1a1a1a] rounded-[16px] p-6" style={{ width: '368px', height: '200px', top: '392px', left: '0px' }}>
              <p className="text-white text-[15px] leading-[22px] mb-4">
                Absolutely love Reweb! Such a game-changer for building beautiful landing pages effortlessly.
              </p>
              <div className="flex items-center gap-3">
                <Image src="/avatar7.png" alt="Wayne" width={40} height={40} className="rounded-full" />
                <div>
                  <p className="text-white font-semibold text-[14px]">Wayne</p>
                  <p className="text-gray-400 text-[12px]">@wayne_dev</p>
                </div>
              </div>
            </div>

            {/* Box 8 */}
            <div className="absolute bg-[#1a1a1a] rounded-[16px] p-6" style={{ width: '368px', height: '200px', top: '408px', left: '384px' }}>
              <p className="text-white text-[15px] leading-[22px] mb-4">
                This is super cool! Very easy to use, and better than trying to mock things up in Figma.
              </p>
              <div className="flex items-center gap-3">
                <Image src="/avatar8.png" alt="Mike Knapp" width={40} height={40} className="rounded-full" />
                <div>
                  <p className="text-white font-semibold text-[14px]">Mike Knapp</p>
                  <p className="text-gray-400 text-[12px]">@mikeee</p>
                </div>
              </div>
            </div>

            {/* Box 9 */}
            <div className="absolute bg-[#1a1a1a] rounded-[16px] p-6" style={{ width: '368px', height: '176px', top: '392px', left: '768px' }}>
              <p className="text-white text-[15px] leading-[22px] mb-4">
                This is my new favorite way of building projects quickly.
              </p>
              <div className="flex items-center gap-3">
                <Image src="/avatar9.png" alt="Paul Bratslavsky" width={40} height={40} className="rounded-full" />
                <div>
                  <p className="text-white font-semibold text-[14px]">Paul Bratslavsky</p>
                  <p className="text-gray-400 text-[12px]">@codingthirty</p>
                </div>
              </div>
            </div>

          </div>

          {/* Mobile Responsive Grid */}
          <div className="block md:hidden space-y-4">
            {[
              { text: "It practically solves every issue I have with Webflow and Framer. This is so much easier to use as a developer!", name: "Jaiden Lee", handle: "@buildjaiden", avatar: "/avatar1.png" },
              { text: "Amazing.", name: "shadcn", handle: "@shadcn", avatar: "/avatar2.png" },
              { text: "I really have been missing this product for years. It feels like a much more natural way of working.", name: "Ninjanordbo", handle: "@ninjanordbo", avatar: "/avatar3.png" },
              { text: "This looks really freaking cool!!", name: "James Q Quick", handle: "@jamesqquick", avatar: "/avatar4.png" },
              { text: "This is awesome. Better than Framer/Wordpress as you can take the code and continue working on it instantly yourself.", name: "soumya dot dev", handle: "@geekysrm", avatar: "/avatar5.png" },
              { text: "This is so tastefully built. Loving it.", name: "Kabir Asani", handle: "@KabirAsani", avatar: "/avatar6.png" },
              { text: "Absolutely love Reweb! Such a game-changer for building beautiful landing pages effortlessly.", name: "Wayne", handle: "@wayne_dev", avatar: "/avatar7.png" },
              { text: "This is super cool! Very easy to use, and better than trying to mock things up in Figma.", name: "Mike Knapp", handle: "@mikeee", avatar: "/avatar8.png" },
              { text: "This is my new favorite way of building projects quickly.", name: "Paul Bratslavsky", handle: "@codingthirty", avatar: "/avatar9.png" },
            ].map((testimonial, index) => (
              <div key={index} className="bg-[#1a1a1a] rounded-[16px] p-6">
                <p className="text-white text-[15px] leading-[22px] mb-4">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-3">
                  <Image src={testimonial.avatar} alt={testimonial.name} width={40} height={40} className="rounded-full" />
                  <div>
                    <p className="text-white font-semibold text-[14px]">{testimonial.name}</p>
                    <p className="text-gray-400 text-[12px]">{testimonial.handle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full bg-black py-20 px-4">
        <div className="max-w-[1200px] mx-auto">

          {/* Title */}
          <h2 className="font-instrument font-medium text-[48px] md:text-[56px] leading-[1.1] text-white text-center mb-4">
            Choose the Plan<br />That's Right for You
          </h2>

          {/* Subtitle */}
          <p className="text-center text-[#CCCCCC] text-[15px] md:text-[16px] leading-[24px] max-w-[680px] mx-auto mb-12">
            Giving you access to essential features and over 1,000 creative tools. Upgrade to the Pro Plan to unlock powerful AI capabilities, cloud syncing, and a whole new level of creative freedom.
          </p>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto">

            {/* Logo & Branding Plan */}
            <div className="bg-[#1B1B1C] border border-[#2A2A2B] rounded-[16px] p-8 flex flex-col hover:border-[#7370FF] transition-all">
              <h3 className="text-white text-[20px] font-semibold mb-2">Logo & Branding</h3>
              <p className="text-[#999999] text-[14px] leading-[20px] mb-6">
                For businesses that need a strong brand identity that reflects their vision and justifies premium pricing.
              </p>
              
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-white text-[40px] font-bold">$399</span>
              </div>

              <div className="border-t border-[#2A2A2B] pt-6">
                <p className="text-white text-[14px] font-semibold mb-4">What's Included</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-[#CCCCCC] text-[14px]">
                    <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Logo design (3 concepts)</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#CCCCCC] text-[14px]">
                    <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Brand colors & fonts</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#CCCCCC] text-[14px]">
                    <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>2 revision rounds</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#CCCCCC] text-[14px]">
                    <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Brand style guide</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#CCCCCC] text-[14px]">
                    <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Marketing collateral templates</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#CCCCCC] text-[14px]">
                    <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Source files</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* High-Converting Landing Page Plan - Featured */}
            <div className="bg-[#1B1B1C] border-2 border-[#7370FF] rounded-[16px] p-8 flex flex-col relative">
              <h3 className="text-white text-[20px] font-semibold mb-2">High-Converting Landing Page</h3>
              <p className="text-[#999999] text-[14px] leading-[20px] mb-6">
                For businesses launching products, testing offers or validating ideas fast without waiting weeks.
              </p>
              
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-white text-[40px] font-bold">$1499</span>
              </div>

              <div className="border-t border-[#2A2A2B] pt-6">
                <p className="text-white text-[14px] font-semibold mb-4">What's Included</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-[#CCCCCC] text-[14px]">
                    <svg className="w-5 h-5 text-[#7370FF] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Strategy & discovery session</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#CCCCCC] text-[14px]">
                    <svg className="w-5 h-5 text-[#7370FF] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Conversion copywriting</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#CCCCCC] text-[14px]">
                    <svg className="w-5 h-5 text-[#7370FF] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Mobile-optimized design</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#CCCCCC] text-[14px]">
                    <svg className="w-5 h-5 text-[#7370FF] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Unlimited revisions</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#CCCCCC] text-[14px]">
                    <svg className="w-5 h-5 text-[#7370FF] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Analytics setup</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#CCCCCC] text-[14px]">
                    <svg className="w-5 h-5 text-[#7370FF] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>48-hour response time</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Websites & E-Commerce Plan */}
            <div className="bg-[#1B1B1C] border border-[#2A2A2B] rounded-[16px] p-8 flex flex-col hover:border-[#7370FF] transition-all">
              <h3 className="text-white text-[20px] font-semibold mb-2">Websites & E-Commerce</h3>
              <p className="text-[#999999] text-[14px] leading-[20px] mb-6">
                For businesses that need a website or online store that actually converts browsers into buyers.
              </p>
              
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-white text-[40px] font-bold">$3699</span>
              </div>

              <div className="border-t border-[#2A2A2B] pt-6">
                <p className="text-white text-[14px] font-semibold mb-4">What's Included</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-[#CCCCCC] text-[14px]">
                    <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Strategy & discovery session</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#CCCCCC] text-[14px]">
                    <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Up to 5-10 pages</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#CCCCCC] text-[14px]">
                    <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Conversion copywriting</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#CCCCCC] text-[14px]">
                    <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Development (Framer, Next.js, Shopify)</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#CCCCCC] text-[14px]">
                    <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Mobile-optimized & fast loading</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#CCCCCC] text-[14px]">
                    <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>48-hour response time</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-black py-20 px-4">
        <div className="max-w-[1200px] mx-auto">

          {/* Title */}
          <h2 className="font-instrument font-medium text-[48px] leading-[48px] tracking-[-2.4px] text-white text-center mb-4">
            FAQ
          </h2>

          {/* Subtitle */}
          <p className="font-inter font-normal text-[17.6px] leading-[28px] text-[#999999] text-center mb-12">
            Got other questions? Reach out in our<span className="font-semibold text-[#999999]">Discord</span>.
          </p>

          {/* FAQ Items */}
          <div className="max-w-[768px] mx-auto space-y-4">

            {/* FAQ Item 1 */}
            <div className="bg-[#1a1a1a] rounded-[12px] p-6 flex items-center gap-4 hover:bg-[#222222] transition-all cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-[#7370FF] flex items-center justify-center text-white text-[20px]">
                +
              </div>
              <p className="text-white text-[16px] md:text-[18px] font-normal">
                How is Reweb different than tools like Framer or Webflow?
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-[#1a1a1a] rounded-[12px] p-6 flex items-center gap-4 hover:bg-[#222222] transition-all cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-[#7370FF] flex items-center justify-center text-white text-[20px]">
                +
              </div>
              <p className="text-white text-[16px] md:text-[18px] font-normal">
                What is the learning curve for Reweb?
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-[#1a1a1a] rounded-[12px] p-6 flex items-center gap-4 hover:bg-[#222222] transition-all cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-[#7370FF] flex items-center justify-center text-white text-[20px]">
                +
              </div>
              <p className="text-white text-[16px] md:text-[18px] font-normal">
                Is the generated code high quality?
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-[#1a1a1a] rounded-[12px] p-6 flex items-center gap-4 hover:bg-[#222222] transition-all cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-[#7370FF] flex items-center justify-center text-white text-[20px]">
                +
              </div>
              <p className="text-white text-[16px] md:text-[18px] font-normal">
                Do you plan to add more sections and templates?
              </p>
            </div>

            {/* FAQ Item 5 */}
            <div className="bg-[#1a1a1a] rounded-[12px] p-6 flex items-center gap-4 hover:bg-[#222222] transition-all cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-[#7370FF] flex items-center justify-center text-white text-[20px]">
                +
              </div>
              <p className="text-white text-[16px] md:text-[18px] font-normal">
                Can I import my own components?
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-[linear-gradient(180deg,#000000_0%,#1a1a3e_50%,#2a2a5e_100%)] py-20 px-4">
        <div className="max-w-[1200px] mx-auto">

          {/* Top Section - Links and Social */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-16">

            {/* Left - Links Title & Social Icons */}
            <div className="mb-8 md:mb-0">
              <h3 className="text-white font-semibold text-[18px] mb-6 flex items-center gap-2">
                <span className="text-[#7370FF]">{"<>"}</span> LINKS
              </h3>
              <div className="flex gap-4">
                <a href="#" className="text-white hover:text-[#7370FF] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                </a>
                <a href="#" className="text-white hover:text-[#7370FF] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                </a>
                <a href="#" className="text-white hover:text-[#7370FF] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" /></svg>
                </a>
                <a href="#" className="text-white hover:text-[#7370FF] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
              </div>
            </div>

            {/* Right - Community & Legal */}
            <div className="flex gap-16">
              {/* Community Column */}
              <div>
                <h4 className="text-white font-semibold text-[16px] mb-4">Community</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-[#999999] hover:text-white transition-colors text-[14px]">Discord</a></li>
                  <li><a href="#" className="text-[#999999] hover:text-white transition-colors text-[14px]">Email</a></li>
                </ul>
              </div>

              {/* Legal Column */}
              <div>
                <h4 className="text-white font-semibold text-[16px] mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-[#999999] hover:text-white transition-colors text-[14px]">Terms of Service</a></li>
                  <li><a href="#" className="text-[#999999] hover:text-white transition-colors text-[14px]">Privacy Policy</a></li>
                </ul>
              </div>
            </div>

          </div>

          {/* Bottom Section - Large Logo */}
          <div className="flex justify-center items-center mt-[107px]">
            <Image
              src="/logo.png"
              alt="Couture Agency"
              width={965}
              height={432}
              className="object-contain"
            />
          </div>

        </div>
      </footer>

    </div>
  );
}
