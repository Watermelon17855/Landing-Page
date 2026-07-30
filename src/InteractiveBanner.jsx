import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AOS from 'aos';

gsap.registerPlugin(ScrollTrigger);

export default function InteractiveBanner() {
    const containerRef = useRef(null);
    const cakeRef = useRef(null);
    const eggRef = useRef(null);
    const butterRef = useRef(null);
    const ovenRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: '+=120%',
                    scrub: 1,
                    pin: true,
                    pinReparent: false, // Ngăn GSAP biến đổi vị trí DOM làm lệch Header
                    anticipatePin: 1,
                    onUpdate: () => AOS.refresh(),
                }
            });

            gsap.set(eggRef.current, { x: -150, y: -100, opacity: 0, scale: 0.5, rotate: -45 });
            gsap.set(butterRef.current, { x: 150, y: -100, opacity: 0, scale: 0.5, rotate: 45 });
            gsap.set(ovenRef.current, { x: 0, y: 150, opacity: 0, scale: 0.6 });
            gsap.set(cakeRef.current, { scale: 0.2, opacity: 0 });
            gsap.set(textRef.current, { y: 30, opacity: 0 });

            tl.to([eggRef.current, butterRef.current, ovenRef.current], {
                x: 0,
                y: 0,
                opacity: 1,
                scale: 1,
                rotate: 0,
                duration: 1,
                stagger: 0.2
            })
                .to([eggRef.current, butterRef.current, ovenRef.current], {
                    scale: 0.3,
                    opacity: 0,
                    duration: 0.5
                })
                .to(cakeRef.current, {
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    ease: 'back.out(1.7)'
                }, '-=0.3')
                .to(textRef.current, {
                    y: 0,
                    opacity: 1,
                    duration: 0.8
                }, '-=0.5');

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        // Thêm w-full max-w-full overflow-hidden để ép GSAP không làm phình khung màn hình
        <section
            ref={containerRef}
            className="h-screen w-full max-w-full bg-stone-900 text-white relative overflow-hidden flex items-center justify-center box-border"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-amber-950/40 via-stone-900 to-stone-900 pointer-events-none" />

            <div className="relative w-full max-w-4xl h-[400px] flex items-center justify-center overflow-hidden">
                <div ref={eggRef} className="absolute z-10 flex flex-col items-center">
                    <div className="w-20 h-20 sm:w-32 sm:h-32 bg-amber-100 rounded-full flex items-center justify-center text-4xl sm:text-6xl shadow-2xl border-2 sm:border-4 border-amber-300">
                        🥚
                    </div>
                    <span className="mt-2 text-amber-300 font-bold text-xs sm:text-sm bg-black/60 px-2 py-0.5 rounded-full">Trứng Gà Tươi</span>
                </div>

                <div ref={butterRef} className="absolute z-10 flex flex-col items-center">
                    <div className="w-20 h-20 sm:w-32 sm:h-32 bg-amber-100 rounded-full flex items-center justify-center text-4xl sm:text-6xl shadow-2xl border-2 sm:border-4 border-amber-300">
                        🌾
                    </div>
                    <span className="mt-2 text-amber-300 font-bold text-xs sm:text-sm bg-black/60 px-2 py-0.5 rounded-full">Bột Mì & Bơ</span>
                </div>

                <div ref={ovenRef} className="absolute z-10 flex flex-col items-center">
                    <div className="w-20 h-20 sm:w-32 sm:h-32 bg-amber-100 rounded-full flex items-center justify-center text-4xl sm:text-6xl shadow-2xl border-2 sm:border-4 border-amber-300">
                        ⚡
                    </div>
                    <span className="mt-2 text-amber-300 font-bold text-xs sm:text-sm bg-black/60 px-2 py-0.5 rounded-full">Lò Nướng Điện</span>
                </div>

                <div ref={cakeRef} className="absolute z-20 flex flex-col items-center">
                    <div className="w-48 h-48 sm:w-72 sm:h-72 rounded-full overflow-hidden shadow-[0_0_50px_rgba(245,158,11,0.5)] border-4 border-amber-400">
                        <img
                            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800"
                            alt="Bánh Thửng Bà Hằng"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            <div ref={textRef} className="absolute bottom-8 sm:bottom-12 z-30 text-center px-4 w-full">
                <h2 className="text-xl sm:text-4xl font-black text-amber-400 tracking-tight uppercase drop-shadow-lg">
                    Hội Tụ Tinh Hoa Quê Nhà
                </h2>
                <p className="text-amber-100 text-xs sm:text-lg font-medium mt-1 max-w-xl mx-auto">
                    Nguyên liệu chọn lọc • Nướng chín giòn xốp • Chuẩn vị Bánh Bà Hằng!
                </p>
            </div>
        </section>
    );
}