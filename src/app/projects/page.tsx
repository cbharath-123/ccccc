export default function Projects() {
  return (
    <div className="min-h-screen w-full bg-black overflow-x-hidden py-20">
      {/* Title */}
      <div className="flex justify-center items-center mt-[100px] mb-[50px]">
        <h1 className="font-instrument font-medium text-[48px] md:text-[72px] leading-[72px] tracking-[-3.6px] bg-clip-text text-transparent bg-[linear-gradient(117.11deg,#9C99FF_25.56%,#FFFFFF_30.53%,#FFFFFF_47.75%,#9C99FF_73.19%,#9C99FF_82.2%)]">
          OUR PROJECTS
        </h1>
      </div>

      {/* Projects Grid - Desktop Layout */}
      <div className="hidden lg:block relative w-full max-w-[1472px] mx-auto px-4">
        
        {/* Row 1 */}
        <div className="flex gap-[32px] mb-[28px]">
          {/* Box 1 */}
          <div 
            className="bg-black rounded-[14px] border border-black shadow-[0px_0px_0px_8px_rgba(115,112,255,0.3)] hover:shadow-[0px_0px_0px_12px_rgba(115,112,255,0.4)] transition-all cursor-pointer"
            style={{ width: '561px', height: '299px' }}
          >
            {/* Project content here */}
          </div>

          {/* Box 2 */}
          <div 
            className="bg-black rounded-[14px] border border-black shadow-[0px_0px_0px_8px_rgba(115,112,255,0.3)] hover:shadow-[0px_0px_0px_12px_rgba(115,112,255,0.4)] transition-all cursor-pointer"
            style={{ width: '764px', height: '379px' }}
          >
            {/* Project content here */}
          </div>
        </div>

        {/* Row 2 - Positioned absolutely to match Figma */}
        <div className="relative" style={{ height: '600px' }}>
          {/* Box 3 */}
          <div 
            className="absolute bg-black rounded-[14px] border border-black shadow-[0px_0px_0px_8px_rgba(115,112,255,0.3)] hover:shadow-[0px_0px_0px_12px_rgba(115,112,255,0.4)] transition-all cursor-pointer"
            style={{ width: '571px', height: '308px', top: '0px', left: '0px' }}
          >
            {/* Project content here */}
          </div>

          {/* Box 4 */}
          <div 
            className="absolute bg-black rounded-[14px] border border-black shadow-[0px_0px_0px_8px_rgba(115,112,255,0.3)] hover:shadow-[0px_0px_0px_12px_rgba(115,112,255,0.4)] transition-all cursor-pointer"
            style={{ width: '444px', height: '289px', top: '75px', left: '596px' }}
          >
            {/* Project content here */}
          </div>

          {/* Box 5 */}
          <div 
            className="absolute bg-black rounded-[14px] border border-black shadow-[0px_0px_0px_8px_rgba(115,112,255,0.3)] hover:shadow-[0px_0px_0px_12px_rgba(115,112,255,0.4)] transition-all cursor-pointer"
            style={{ width: '355px', height: '496px', top: '80px', left: '1075px' }}
          >
            {/* Project content here */}
          </div>

          {/* Box 6 */}
          <div 
            className="absolute bg-black rounded-[14px] border border-black shadow-[0px_0px_0px_8px_rgba(115,112,255,0.3)] hover:shadow-[0px_0px_0px_12px_rgba(115,112,255,0.4)] transition-all cursor-pointer"
            style={{ width: '466px', height: '251px', top: '337px', left: '0px' }}
          >
            {/* Project content here */}
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

    </div>
  );
}
