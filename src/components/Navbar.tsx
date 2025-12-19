import Image from 'next/image';

export default function Navbar() {
    return (
        <nav className="absolute top-[22px] left-0 right-0 z-50 px-4">
            <div className="mx-auto max-w-[1367px] w-full h-[75px] glass-navbar glass-border flex items-center justify-between px-6 md:px-10 shadow-[0px_16px_64px_0px_#6801FF1F]">

                {/* Logo Section */}
                <div className="flex items-center">
                    <Image
                        src="/logo.png"
                        alt="Couture Agency Logo"
                        width={165}
                        height={45}
                        className="object-contain"
                    />
                </div>

                {/* CTA Button */}
                <button className="glass-navbar glass-border relative w-[161px] h-[43px] flex items-center justify-center text-white text-sm font-medium transition-transform hover:scale-105">
                    Book Strategy Call
                </button>
            </div>
        </nav>
    );
}
