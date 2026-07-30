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
                    onUpdate: () => AOS.refresh(), // Cập nhật AOS liên tục khi cuộn
                }
            });

            gsap.set(eggRef.current, { x: -300, y: -200, opacity: 0, scale: 0.5, rotate: -45 });
            gsap.set(butterRef.current, { x: 300, y: -200, opacity: 0, scale: 0.5, rotate: 45 });
            gsap.set(ovenRef.current, { x: 0, y: 300, opacity: 0, scale: 0.6 });
            gsap.set(cakeRef.current, { scale: 0.2, opacity: 0 });
            gsap.set(textRef.current, { y: 50, opacity: 0 });

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
        <section ref={containerRef} className="h-screen bg-stone-900 text-white relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-b from-amber-950/40 via-stone-900 to-stone-900 pointer-events-none" />

            <div className="relative w-full max-w-4xl h-[450px] flex items-center justify-center">
                <div ref={eggRef} className="absolute z-10 flex flex-col items-center">
                    <div className="w-28 h-28 md:w-36 md:h-36 bg-amber-100 rounded-full flex items-center justify-center text-6xl shadow-2xl border-4 border-amber-300">
                        🥚
                    </div>
                    <span className="mt-2 text-amber-300 font-bold text-sm bg-black/60 px-3 py-1 rounded-full">Trứng Gà Tươi</span>
                </div>

                <div ref={butterRef} className="absolute z-10 flex flex-col items-center">
                    <div className="w-28 h-28 md:w-36 md:h-36 bg-amber-100 rounded-full flex items-center justify-center text-6xl shadow-2xl border-4 border-amber-300">
                        🌾
                    </div>
                    <span className="mt-2 text-amber-300 font-bold text-sm bg-black/60 px-3 py-1 rounded-full">Bột Mì & Bơ</span>
                </div>

                <div ref={ovenRef} className="absolute z-10 flex flex-col items-center">
                    <div className="w-28 h-28 md:w-36 md:h-36 bg-amber-100 rounded-full flex items-center justify-center text-6xl shadow-2xl border-4 border-amber-300">
                        ⚡
                    </div>
                    <span className="mt-2 text-amber-300 font-bold text-sm bg-black/60 px-3 py-1 rounded-full">Lò Nướng Điện</span>
                </div>

                <div ref={cakeRef} className="absolute z-20 flex flex-col items-center">
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-[0_0_50px_rgba(245,158,11,0.5)] border-4 border-amber-400">
                        <img
                            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800"
                            alt="Bánh Thửng Bà Hằng"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            <div ref={textRef} className="absolute bottom-12 z-30 text-center px-4">
                <h2 className="text-3xl md:text-5xl font-black text-amber-400 tracking-tight uppercase drop-shadow-lg">
                    Hội Tụ Tinh Hoa Quê Nhà
                </h2>
                <p className="text-amber-100 text-base md:text-xl font-medium mt-2 max-w-xl mx-auto">
                    Nguyên liệu chọn lọc • Nướng chín giòn xốp • Chuẩn vị Bánh Bà Hằng!
                </p>
            </div>
        </section>
    );
}