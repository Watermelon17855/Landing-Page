import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Phone, MapPin, Heart, MessageCircle, ShoppingBag } from 'lucide-react';

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
    name: 'Bánh Két (Bánh Cặp)',
    desc: 'Bánh két vỏ giòn rụm bên ngoài, thơm béo đặc trưng, vừa miệng không bị quá ngọt.',
    badge: 'Món ngon tuổi thơ',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=600',
  }
];

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="min-h-screen bg-amber-50 text-stone-800 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-amber-100/90 backdrop-blur-md border-b border-amber-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-amber-800 tracking-wide">Bánh Thửng Quê Nhà</span>
          </div>
          <a
            href={`tel:${HOTLINE}`}
            className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full font-medium transition text-sm flex items-center gap-1.5 shadow-sm"
          >
            <Phone className="w-4 h-4" /> Gọi Đặt Bánh
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-20 grid md:grid-cols-2 gap-8 items-center">
        <div data-aos="fade-right">
          <span className="inline-block px-3 py-1 bg-amber-200 text-amber-900 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            Thủ công • 100% Nguyên liệu sạch
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-amber-950 leading-tight mb-4">
            Hương Vị Bánh Thửng & Bánh Két <br />
            <span className="text-amber-600">Đậm Đà Tuổi Thơ</span>
          </h1>
          <p className="text-stone-600 text-lg mb-6 leading-relaxed">
            Từng chiếc bánh nở bung vàng ươm, thơm lừng vị trứng gà tươi và bơ. Nướng bằng lò điện hiện đại giữ trọn hương vị truyền thống quê nhà.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="#contact"
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <ShoppingBag className="w-5 h-5" /> Liên Hệ Đặt Hàng
            </a>
            <a
              href="#products"
              className="bg-white border border-amber-300 text-amber-900 px-6 py-3 rounded-xl font-medium hover:bg-amber-100 transition"
            >
              Xem Bánh
            </a>
          </div>
        </div>
        <div className="relative" data-aos="fade-left">
          <div className="w-full h-80 md:h-96 bg-amber-200 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800"
              alt="Bánh Thửng"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-lg border border-amber-100 flex items-center gap-3" data-aos="zoom-in" data-aos-delay="300">
            <div className="p-2 bg-amber-100 rounded-full text-amber-700">
              <Heart className="w-6 h-6 fill-amber-500" />
            </div>
            <div>
              <p className="font-bold text-sm text-stone-800">Không chất bảo quản</p>
              <p className="text-xs text-stone-500">Nướng mới mỗi ngày</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-amber-100/60 py-12 border-y border-amber-200/60">
        <div className="max-w-6xl mx-auto px-4 grid sm:grid-cols-3 gap-6 text-center">
          <div className="p-4 bg-white/80 rounded-2xl shadow-sm" data-aos="fade-up" data-aos-delay="100">
            <div className="text-3xl mb-2">🥚</div>
            <h3 className="font-bold text-amber-900 mb-1">Trứng Gà Tươi</h3>
            <p className="text-sm text-stone-600">Tuyển chọn kỹ càng, không dùng hương liệu nhân tạo</p>
          </div>
          <div className="p-4 bg-white/80 rounded-2xl shadow-sm" data-aos="fade-up" data-aos-delay="200">
            <div className="text-3xl mb-2">⚡</div>
            <h3 className="font-bold text-amber-900 mb-1">Nướng Lò Điện</h3>
            <p className="text-sm text-stone-600">Nhiệt độ chuẩn giúp bánh nở bung đều, thơm ngon & sạch sẻ</p>
          </div>
          <div className="p-4 bg-white/80 rounded-2xl shadow-sm" data-aos="fade-up" data-aos-delay="300">
            <div className="text-3xl mb-2">🌾</div>
            <h3 className="font-bold text-amber-900 mb-1">Nguyên Liệu Chính Gốc</h3>
            <p className="text-sm text-stone-600">Được lựa chọn cẩn thận, giữ trọn hương vị truyền thống</p>
          </div>
        </div>
      </section>

      {/* Products Menu */}
      <section id="products" className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-amber-950">Danh Mục Sản Phẩm</h2>
          <p className="text-stone-600 mt-2">Đặc sản bánh truyền thống thơm ngon đậm vị</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PRODUCTS.map((prod, index) => (
            <div
              key={prod.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-white rounded-3xl overflow-hidden shadow-md border border-amber-100 flex flex-col justify-between hover:shadow-xl transition"
            >
              <div>
                <div className="h-52 w-full overflow-hidden relative">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-amber-900 text-xs font-semibold rounded-full shadow-sm">
                    {prod.badge}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-stone-800 mb-2">{prod.name}</h3>
                  <p className="text-stone-600 leading-relaxed">{prod.desc}</p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-amber-50 flex items-center justify-between">
                <span className="text-stone-500 text-sm font-medium">Giá bán:</span>
                <a
                  href="#contact"
                  className="text-amber-700 hover:text-amber-800 font-bold text-base flex items-center gap-1 underline underline-offset-4"
                >
                  Liên hệ để đặt hàng →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-3xl mx-auto px-4 py-12" data-aos="zoom-in">
        <div className="bg-gradient-to-br from-amber-600 to-amber-700 text-white rounded-3xl p-8 md:p-12 shadow-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Đặt Bánh Thửng & Bánh Két</h2>
          <p className="text-amber-100 text-lg mb-8 max-w-xl mx-auto">
            Vui lòng gọi điện trực tiếp hoặc nhắn tin Zalo để lò bánh tư vấn số lượng, báo giá tốt nhất và giao bánh nhanh chóng!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <a
              href={`tel:${HOTLINE}`}
              className="bg-white text-amber-800 hover:bg-amber-100 px-6 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-lg transition"
            >
              <Phone className="w-6 h-6 text-amber-600" />
              <span>Gọi: {HOTLINE}</span>
            </a>

            <a
              href={ZALO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-lg transition"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Nhắn Zalo Ngay</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-950 text-amber-100/80 py-8 border-t border-amber-900 text-sm">
        <div className="max-w-6xl mx-auto px-4 grid sm:grid-cols-2 gap-4">
          <div>
            <h4 className="font-bold text-white text-base mb-2">Lò Bánh Thửng Quê Nhà</h4>
            <p className="flex items-center gap-2 mb-1"><MapPin className="w-4 h-4 text-amber-500" /> Nhà thờ Thanh Điền, xã Xuâ</p>
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