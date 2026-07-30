import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';
import AOS from 'aos';

gsap.registerPlugin(ScrollTrigger);

// 📸 THAY LINK ẢNH HIỂN THỊ BAN ĐẦU TẠI ĐÂY (Hoặc dùng đường dẫn ảnh trong folder public, ví dụ: "/banner-intro.jpg")
const INITIAL_COVER_IMAGE = "logo_banh_ba_hang.png";

export default function InteractiveBanner() {
    const containerRef = useRef(null);
    const coverRef = useRef(null);       // Ref cho tấm ảnh xuất hiện ban đầu
    const scrollHintRef = useRef(null);  // Ref cho nút chỉ dẫn cuộn
    const cakeRef = useRef(null);
    const eggRef = useRef(null);
    const butterRef = useRef(null);
    const ovenRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // 1. TRẠNG THÁI BAN ĐẦU (Mới vào trang web)
            // Tấm ảnh bìa ban đầu & Nút chỉ dẫn hiện sẵn 100%
            gsap.set(coverRef.current, { scale: 1, opacity: 1 });
            gsap.set(scrollHintRef.current, { opacity: 1, y: 0 });

            // Các phần tử animation sau đó được ẩn hoàn toàn lúc đầu
            gsap.set(eggRef.current, { x: -150, y: -100, opacity: 0, scale: 0.5, rotate: -45 });
            gsap.set(butterRef.current, { x: 150, y: -100, opacity: 0, scale: 0.5, rotate: 45 });
            gsap.set(ovenRef.current, { x: 0, y: 150, opacity: 0, scale: 0.6 });
            gsap.set(cakeRef.current, { scale: 0.2, opacity: 0 });
            gsap.set(textRef.current, { y: 30, opacity: 0 });

            // 2. TIMELINE HOẠT HỌA KHI CUỘN CHUỘT
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: '+=150%',        // Độ dài hành trình cuộn chuột
                    scrub: 1,
                    pin: true,
                    pinReparent: false,
                    anticipatePin: 1,
                    onUpdate: () => AOS.refresh(),
                }
            });

            // BƯỚC 1: Cuộn chuột -> Ảnh ban đầu & nút chỉ dẫn mờ dần rồi biến mất
            tl.to([coverRef.current, scrollHintRef.current], {
                scale: 0.7,
                opacity: 0,
                duration: 0.8,
                ease: 'power1.in'
            })

                // BƯỚC 2: 3 Nguyên liệu hiện ra và bay từ các góc vào tâm
                .to([eggRef.current, butterRef.current, ovenRef.current], {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    duration: 1,
                    stagger: 0.2
                }, '-=0.2')

                // BƯỚC 3: Nguyên liệu thu nhỏ mờ đi, Bánh Thửng bùng nở xuất hiện
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

                // BƯỚC 4: Dòng chữ thông điệp cuối cùng hiện lên
                .to(textRef.current, {
                    y: 0,
                    opacity: 1,
                    duration: 0.8
                }, '-=0.5');

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="h-screen w-full max-w-full bg-stone-900 text-white relative overflow-hidden flex items-center justify-center box-border"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-amber-950/50 via-stone-900 to-stone-900 pointer-events-none" />

            {/* SÂN KHẤU TRUNG TÂM */}
            <div className="relative w-full max-w-4xl h-[400px] flex items-center justify-center overflow-hidden">

                {/* 🖼️ 1. TẤM ẢNH BÌA HIỆN SẴN BAN ĐẦU (Sẽ mờ dần khi cuộn) */}
                <div ref={coverRef} className="absolute z-30 flex flex-col items-center">
                    <div className="w-56 h-56 sm:w-80 sm:h-80 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(245,158,11,0.5)] border-4 border-amber-400">
                        <img
                            src={INITIAL_COVER_IMAGE}
                            alt="Bánh Bà Hằng Banner Intro"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* 2. CÁC NGUYÊN LIỆU (Ẩn ban đầu, hiện ra khi cuộn) */}
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

                {/* 3. BÁNH THÀNH PHẨM (Nở bung sau khi gom nguyên liệu) */}
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

            {/* 🌟 DÒNG CHỮ THÔNG ĐIỆP HIỆN CUỐI CÙNG */}
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