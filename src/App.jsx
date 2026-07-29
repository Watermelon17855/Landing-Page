import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect';
import { Phone, MapPin, Heart, MessageCircle, ShoppingBag, Award, Star, CheckCircle } from 'lucide-react';

const HOTLINE = "0817897378"; // Thay bằng số điện thoại Zalo thật của bạn
const ZALO_LINK = `https://zalo.me/${HOTLINE}`;

const PRODUCTS = [
  {
    id: 1,
    name: 'Bánh Thửng (Bánh Thuẫn)',
    desc: 'Bánh nở bung vàng ươm như bông hoa mai, xốp nhẹ, thơm lừng vị trứng gà tươi và bơ truyền thống.',
    badge: 'Đặc sản truyền thống',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 2,
    name: 'Bánh Két ',
    desc: 'Bánh két vỏ giòn rụm bên ngoài, thơm béo đặc trưng, vừa miệng không bị quá ngọt.',
    badge: 'Món ngon tuổi thơ',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=600',
  }
];

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="min-h-screen bg-amber-50/50 text-stone-800 font-sans relative overflow-x-hidden">

      {/* 🔴 FLOATING BUTTONS (Nút liên hệ cố định góc màn hình - Cực sống động) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a
          href={ZALO_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white p-3.5 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center animate-bounce"
          title="Nhắn Zalo"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        <a
          href={`tel:${HOTLINE}`}
          className="bg-amber-600 hover:bg-amber-700 text-white p-3.5 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center animate-pulse"
          title="Gọi điện"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-amber-100/80 backdrop-blur-md border-b border-amber-200/60">
        <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* Hiển thị Logo */}
            <img src="/logo_banh_ba_hang.png" alt="Bánh Bà Hằng" className="w-12 h-12 rounded-full border-2 border-amber-500 shadow-sm" />
            <div>
              <h1 className="text-xl font-black text-amber-950 leading-none">Bánh Bà Hằng</h1>
              <p className="text-[10px] text-amber-800 font-bold mt-0.5">Ăn không ngon không lấy tiền</p>
            </div>
          </div>
          <a
            href={`tel:${HOTLINE}`}
            className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full font-semibold transition text-sm flex items-center gap-1.5 shadow-md"
          >
            <Phone className="w-4 h-4" /> Gọi Đặt Bánh
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div data-aos="fade-right">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-200/80 text-amber-950 rounded-full text-xs font-bold tracking-wider mb-4 border border-amber-300">
            <Award className="w-3.5 h-3.5 text-amber-700" /> Thủ công • 100% Nguyên liệu sạch
          </span>

          {/* TIÊU ĐỀ CÓ HIỆU ỨNG GÕ CHỮ (TYPEWRITER) */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-amber-950 leading-tight mb-4 min-h-[110px]">
            Hương Vị Bánh Thửng & Bánh Két <br />
            <span className="text-amber-600 inline-block">
              <Typewriter
                options={{
                  strings: ['Đậm Đà Tuổi Thơ', 'Giòn Xốp Thơm Lừng', 'Nướng Lò Điện Chuẩn Vị'],
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 40,
                }}
              />
            </span>
          </h1>

          <p className="text-stone-600 text-lg mb-8 leading-relaxed">
            Từng chiếc bánh nở bung vàng ươm, thơm lừng vị trứng gà tươi và bơ. Nướng bằng lò điện hiện đại giữ trọn hương vị truyền thống quê nhà.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="#contact"
              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-7 py-3.5 rounded-2xl font-bold text-lg shadow-xl shadow-amber-600/25 hover:shadow-2xl hover:shadow-amber-600/40 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2.5"
            >
              <ShoppingBag className="w-5 h-5" /> Liên Hệ Đặt Hàng
            </a>
            <a
              href="#products"
              className="bg-white border-2 border-amber-300 text-amber-950 px-7 py-3.5 rounded-2xl font-semibold hover:bg-amber-100/50 hover:border-amber-400 transition-all duration-300 shadow-sm"
            >
              Xem Sản Phẩm
            </a>
          </div>
        </div>

        {/* HERO IMAGE VỚI HIỆU ỨNG NỔI & THÊM FLOATING BADGE */}
        <div className="relative" data-aos="fade-left">
          <div className="w-full h-80 md:h-[420px] bg-amber-200 rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
            <img
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800"
              alt="Bánh Thửng"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-out"
            />
          </div>

          <div className="absolute -bottom-5 -left-5 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-amber-100 flex items-center gap-3 animate-pulse">
            <div className="p-2.5 bg-amber-100 rounded-xl text-amber-700">
              <Heart className="w-6 h-6 fill-amber-500 text-amber-500" />
            </div>
            <div>
              <p className="font-bold text-sm text-stone-800">Không chất bảo quản</p>
              <p className="text-xs text-stone-500">Nướng mới mỗi ngày</p>
            </div>
          </div>

          <div className="absolute -top-4 -right-4 bg-amber-600 text-white p-3.5 rounded-2xl shadow-lg border-2 border-white flex items-center gap-2 rotate-3 hover:rotate-0 transition">
            <Star className="w-5 h-5 fill-amber-300 text-amber-300" />
            <span className="font-extrabold text-sm">100% Tự Nhiên</span>
          </div>
        </div>
      </section>

      {/* Highlights (Các ô tính năng trượt nổi) */}
      <section className="bg-amber-100/50 py-14 border-y border-amber-200/60">
        <div className="max-w-6xl mx-auto px-4 grid sm:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-white rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-amber-100" data-aos="fade-up" data-aos-delay="100">
            <div className="text-4xl mb-3">🥚</div>
            <h3 className="font-bold text-amber-950 text-lg mb-1">Trứng Gà Tươi</h3>
            <p className="text-sm text-stone-600 leading-relaxed">Tuyển chọn kỹ càng, không dùng hương liệu nhân tạo</p>
          </div>
          <div className="p-6 bg-white rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-amber-100" data-aos="fade-up" data-aos-delay="200">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-bold text-amber-950 text-lg mb-1">Nướng Lò Điện</h3>
            <p className="text-sm text-stone-600 leading-relaxed">Nhiệt độ chuẩn giúp bánh nở bung đều, thơm ngon & sạch sẻ</p>
          </div>
          <div className="p-6 bg-white rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-amber-100" data-aos="fade-up" data-aos-delay="300">
            <div className="text-4xl mb-3">🌾</div>
            <h3 className="font-bold text-amber-950 text-lg mb-1">Nguyên Liệu Chính Gốc</h3>
            <p className="text-sm text-stone-600 leading-relaxed">Được lựa chọn cẩn thận, giữ trọn hương vị truyền thống</p>
          </div>
        </div>
      </section>

      {/* Products Menu */}
      <section id="products" className="max-w-5xl mx-auto px-4 py-20">
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="text-amber-700 font-bold text-sm tracking-widest uppercase">Thực Đơn Của Lò Bánh</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-amber-950 mt-1">Danh Mục Sản Phẩm</h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PRODUCTS.map((prod, index) => (
            <div
              key={prod.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-amber-100 flex flex-col justify-between group"
            >
              <div>
                <div className="h-60 w-full overflow-hidden relative">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-out"
                  />
                  <span className="absolute top-4 left-4 px-3.5 py-1.5 bg-white/90 backdrop-blur-md text-amber-950 text-xs font-bold rounded-full shadow-sm border border-white">
                    {prod.badge}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-bold text-stone-800 mb-3 group-hover:text-amber-700 transition">{prod.name}</h3>
                  <p className="text-stone-600 leading-relaxed text-sm">{prod.desc}</p>
                </div>
              </div>

              <div className="px-7 pb-7 pt-3 border-t border-amber-50 flex items-center justify-between">
                <span className="text-stone-500 text-sm font-medium flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-emerald-600" /> Luôn có sẵn
                </span>
                <a
                  href="#contact"
                  className="text-amber-700 hover:text-amber-800 font-bold text-base flex items-center gap-1 group-hover:translate-x-1 transition"
                >
                  Liên hệ để đặt hàng →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto px-4 py-12" data-aos="zoom-in">
        <div className="bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 text-white rounded-3xl p-8 md:p-14 shadow-2xl text-center relative overflow-hidden">
          {/* Bán kính trang trí phía sau */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative z-10">Đặt Bánh Thửng & Bánh Két</h2>
          <p className="text-amber-100 text-lg mb-8 max-w-xl mx-auto leading-relaxed relative z-10">
            Vui lòng gọi điện trực tiếp hoặc nhắn tin Zalo để lò bánh tư vấn số lượng, báo giá tốt nhất và giao bánh nhanh chóng!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto relative z-10">
            <a
              href={`tel:${HOTLINE}`}
              className="bg-white text-amber-900 hover:bg-amber-100 px-6 py-4 rounded-2xl font-extrabold text-lg flex items-center justify-center gap-3 shadow-xl hover:scale-105 transition duration-300"
            >
              <Phone className="w-6 h-6 text-amber-600" />
              <span>Gọi: {HOTLINE}</span>
            </a>

            <a
              href={ZALO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-2xl font-extrabold text-lg flex items-center justify-center gap-3 shadow-xl hover:scale-105 transition duration-300"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Nhắn Zalo Ngay</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-950 text-amber-100/80 py-10 border-t border-amber-900 text-sm mt-12">
        <div className="max-w-6xl mx-auto px-4 grid sm:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-white text-lg mb-3">Lò Bánh Thửng Quê Nhà</h4>
            <p className="flex items-center gap-2 mb-1.5"><MapPin className="w-4 h-4 text-amber-500" /> Nhà Thờ Thanh Điền, xã Xuân Hải, tỉnh Khánh Hòa</p>
            <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-amber-500" /> Hotline/Zalo: {HOTLINE}</p>
          </div>
          <div className="sm:text-right flex flex-col justify-end">
            <p>© {new Date().getFullYear()} Bánh Thửng Quê Nhà. Món ngon tròn vị tuổi thơ.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}