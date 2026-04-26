# 🚌 Prompt Thiết Kế Landing Page — Hoàng Long Express
> **Đã được tối ưu bởi Frontend Design Skill** | Dành cho AI Agent

---

## VAI TRÒ

Bạn là UI/UX Designer + Frontend Developer chuyên nghiệp, có khả năng tạo ra giao diện production-grade THỰC SỰ nổi bật — không phải thiết kế AI generic. Mọi quyết định thiết kế phải có chủ đích và nhất quán.

---

## MỤC TIÊU DỰ ÁN

Xây dựng Landing Page conversion-focused cho nhà xe khách liên tỉnh.

**3 mục tiêu kinh doanh (theo thứ tự ưu tiên):**
1. **Chuyển đổi** → Khách đặt vé online ngay trên trang
2. **Uy tín** → Khách tin tưởng thương hiệu trong 5 giây đầu
3. **Nhận diện** → Thương hiệu khác biệt với đối thủ cùng ngành

---

## THÔNG TIN CÔNG TY

| Trường | Giá trị |
|---|---|
| Tên công ty | Hoàng Long Express |
| Lĩnh vực | Vận tải hành khách liên tỉnh cao cấp |
| Tuyến chính | HN → Hải Phòng · HN → Đà Nẵng · HN → TP.HCM |
| Hotline | 1800 6066 (miễn phí) |
| Năm thành lập | 2005 (20 năm kinh nghiệm) |
| Quy mô đội xe | 150+ xe, 100% xe đời mới 2022–2024 |
| CTA chính | "Đặt Vé Ngay" |
| Giờ hoạt động | 05:00 – 22:00 hàng ngày |

---

## HƯỚNG THẨM MỸ (BẮT BUỘC TUÂN THỦ)

**Aesthetic Direction:** `"Premium Velocity"` — Cảm giác của một hãng hàng không nội địa cao cấp được ứng dụng vào xe khách. Tối, mạnh, tin cậy nhưng có chiều sâu và chuyển động.

### Màu sắc — CSS Variables (bắt buộc dùng)

```css
:root {
  --navy-deep:   #050e1f;   /* nền chính, tạo chiều sâu */
  --navy-mid:    #0a2147;   /* sections phụ */
  --blue-brand:  #1565c0;   /* brand color chính */
  --blue-glow:   #2979ff;   /* accent sáng, hover */
  --orange-fire: #ff6d00;   /* CTA, nút hành động */
  --orange-warm: #ff8f00;   /* highlight, badge */
  --white-pure:  #ffffff;
  --white-soft:  #e8f0fe;
  --text-muted:  #90a4ae;
}
```

### Typography — Google Fonts (bắt buộc)

| Vai trò | Font | Weight |
|---|---|---|
| Display / Headline | `Barlow Condensed` | 800, 900 |
| Body | `DM Sans` | 400, 500, 600 |
| Label / Accent | `Barlow Condensed` uppercase + letter-spacing 3px | 700 |

> ⛔ **KHÔNG dùng:** Inter, Roboto, Arial, Open Sans, Space Grotesk

---

## YÊU CẦU KỸ THUẬT

**Output:** Một file HTML duy nhất (self-contained), mở được ngay trong browser không cần server.

| Hạng mục | Yêu cầu |
|---|---|
| CSS | Thuần CSS + CSS custom properties — **KHÔNG dùng Bootstrap/Tailwind** |
| JavaScript | Vanilla JS — **KHÔNG dùng jQuery** |
| Icons | Inline SVG (không CDN ngoài) |
| Ảnh | `picsum.photos` hoặc SVG, bắt buộc `loading="lazy"` |
| Fonts | Google Fonts (CDN duy nhất được phép) |
| Code style | BEM hoặc utility classes nhất quán, semantic HTML5 |
| Accessibility | ARIA labels đầy đủ, contrast ratio đạt WCAG AA |

---

## SPATIAL COMPOSITION

> Tránh layout đều đặn 2 cột nhàm chán.

- **Hero:** Full-viewport, text lệch trái 60%, search form glassmorphism nổi bên phải
- **Transitions:** Diagonal `clip-path` giữa các sections
- **Stats:** Số liệu lớn overlapping vào section phía trên
- **Route Cards:** Horizontal scroll trên mobile, grid asymmetric trên desktop
- **Testimonials:** Quote marks khổng lồ làm background decoration mờ

---

## ANIMATION STRATEGY

### Page Load — Staggered (chạy một lần)

| Delay | Element |
|---|---|
| 0ms | Logo + Nav fade in |
| 200ms | Hero headline slide up |
| 400ms | Hero subtext fade in |
| 600ms | Search form scale in từ dưới |
| 800ms | Stats counter bắt đầu đếm |

### Scroll-Triggered — IntersectionObserver

- **Cards:** fade-up với stagger 100ms mỗi card
- **Stats:** Number counter khi vào viewport
- **Feature icons:** rotate + scale vào

### Micro-interactions

- Nút CTA: `glow pulse` animation lúc idle
- Card tuyến xe: lift + border glow khi hover
- Navbar: background blur tăng dần khi scroll
- Input form: focus ring màu orange

---

## CẤU TRÚC TRANG — 11 SECTIONS

---

### 1. NAVBAR (Fixed)

- **Logo trái:** icon xe SVG + "Hoàng Long" bold + "Express" màu orange
- **Links:** Tuyến Xe · Lịch Trình · Khuyến Mãi · Liên Hệ
- **CTA phải:** Nút "Đặt vé" — orange pill button
- **Scroll behavior:** transparent → navy blur sau 80px scroll
- **Mobile:** hamburger → slide-down menu

---

### 2. HERO SECTION (100vh)

**Background:** CSS animated road line (vạch kẻ đường cao tốc chạy từ dưới lên) trên nền navy-deep gradient

**Layout:**

```
┌─────────────────────────────────────────┐
│  [Badge: ✈ 20 Năm Uy Tín]              │
│                                          │
│  H1: Hành Trình Của Bạn              [SEARCH│
│       Bắt Đầu Từ Đây               FORM  │
│                                    CARD  │
│  Subtext ngắn 2 dòng               FLOAT│
│                                         │
│  ✓ An toàn  ✓ Đúng giờ  ✓ Tiện nghi   │
│                                          │
└─────────────────────────────────────────┘
```

**Search Form (glassmorphism dark card):**
- Dropdown "Điểm đi" (Hà Nội mặc định)
- Dropdown "Điểm đến"
- Date picker (HTML5 native, styled)
- Stepper số hành khách (−  1  +)
- Nút "Tìm Chuyến" — full-width orange

**Trust badges dưới form:** 🔒 Thanh toán an toàn · ✅ Hoàn vé dễ dàng · 📞 Hỗ trợ 24/7

---

### 3. STATS BAR

- Nền: `--navy-mid`, border top/bottom orange glow 1px
- Animated number counter khi scroll vào

| Chỉ số | Giá trị |
|---|---|
| Năm kinh nghiệm | 20+ |
| Đầu xe | 150+ |
| Lượt khách/năm | 2,000,000+ |
| Tỷ lệ đúng giờ | 98% |

---

### 4. GIỚI THIỆU CÔNG TY

- Layout: Text trái + Ảnh phải với `clip-path` diagonal
- Story ngắn: thành lập 2005, cam kết chất lượng
- 3 milestone mini cards (timeline style)
- Nút: "Tìm Hiểu Thêm" — outline button

---

### 5. LÝ DO CHỌN CHÚNG TÔI (USP)

6 feature cards — dark glassmorphism, hover glow xanh:

| # | Icon | Tiêu đề | Mô tả ngắn |
|---|---|---|---|
| 1 | 🚌 | Xe Đời Mới 2024 | Điều hòa, WiFi, USB sạc |
| 2 | 👨‍✈️ | Tài Xế Chứng Nhận | Đào tạo chuyên nghiệp, kinh nghiệm 5+ năm |
| 3 | ⚡ | Đặt Vé 60 Giây | Online 24/7, không cần xếp hàng |
| 4 | ⏰ | Đúng Giờ Cam Kết | Bồi thường nếu trễ quá 30 phút |
| 5 | 🛡️ | Bảo Hiểm Hành Khách | 100% chuyến có bảo hiểm |
| 6 | 📞 | Hỗ Trợ 24/7 | Tổng đài miễn phí 1800 6066 |

---

### 6. TUYẾN PHỔ BIẾN

Label: `HOT ROUTES` (badge orange)

| Tuyến | Giờ KH | Thời gian | Giá từ |
|---|---|---|---|
| Hà Nội → Hải Phòng | 06:00 | 2 giờ | 120.000đ |
| Hà Nội → Đà Nẵng | 20:00 | 13 giờ | 380.000đ |
| Hà Nội → TP.HCM | 19:00 | 30 giờ | 650.000đ |
| Hà Nội → Vinh | 08:00 | 4 giờ | 180.000đ |
| Hà Nội → Huế | 20:00 | 11 giờ | 320.000đ |

- **Mobile:** horizontal scroll cards
- **Desktop:** grid asymmetric
- Mỗi card: gradient header (origin→destination), giá nổi bật orange, nút "Đặt Vé"

---

### 7. ĐÁNH GIÁ KHÁCH HÀNG

- Background: `--navy-deep` + quote mark SVG khổng lồ mờ phía sau
- Auto-play carousel (JS đơn giản, 4s interval)
- 3 testimonial cards

| Avatar | Tên | Tuyến | Rating | Review |
|---|---|---|---|---|
| Picsum | Nguyễn Văn An | HN → HP | ⭐⭐⭐⭐⭐ | "Xe sạch, đúng giờ, tài xế thân thiện..." |
| Picsum | Trần Thị Mai | HN → ĐN | ⭐⭐⭐⭐⭐ | "Đặt vé online cực dễ, nhận vé ngay SMS..." |
| Picsum | Lê Minh Tuấn | HN → HCM | ⭐⭐⭐⭐⭐ | "Ghế nằm thoải mái, ngủ ngon suốt đường..." |

- Bên phải (desktop): **4.8 / 5** sao lớn + breakdown rating bars

---

### 8. GALLERY PHƯƠNG TIỆN

- Masonry grid 2×3 (desktop) / 2×2 (mobile)
- Ảnh: nội thất xe, ghế ngồi, dashboard, đội xe, tài xế, hành trình
- Hover: scale + dark overlay + icon zoom
- Nút "Xem Thêm" → lightbox JS đơn giản

---

### 9. QUY TRÌNH ĐẶT VÉ

Timeline nằm ngang (desktop) / dọc (mobile):

```
[🔍 Bước 1] ——————> [💺 Bước 2] ——————> [💳 Bước 3] ——————> [🎫 Bước 4]
Chọn tuyến          Chọn ghế &          Thanh toán           Nhận vé
& ngày đi           thông tin           online               SMS/Email
```

- Connector line gradient: orange → blue
- Nút CTA cuối: **"Bắt Đầu Đặt Vé"**

---

### 10. CTA SECTION

- Background: CSS radial gradient cao tốc đêm
- Headline: **"Sẵn Sàng Lên Đường?"**
- Hotline lớn nổi bật: **1800 6066**
- 2 nút song song:
  - **"Đặt Vé Ngay"** — orange filled
  - **"Gọi 1800 6066"** — white outline
- Floating bus SVG animation nhẹ (translateX loop)

---

### 11. FOOTER

4 cột:

| Cột 1 | Cột 2 | Cột 3 | Cột 4 |
|---|---|---|---|
| Logo + mô tả + social | Tuyến xe phổ biến | Hỗ trợ khách hàng | Thông tin liên hệ |
| Facebook · Zalo · YouTube | 5 tuyến chính | FAQ · Chính sách hoàn vé | VP Hà Nội + địa chỉ |

- Thanh toán: Visa / Mastercard / MoMo / ZaloPay (SVG badges)
- Border top: 2px gradient orange
- Background: `--navy-deep`
- Copyright + links: Điều khoản · Chính sách bảo mật · CSBVHD

---

## SEO & PERFORMANCE

```html
<title>Hoàng Long Express | Đặt Vé Xe Khách Liên Tỉnh Online</title>
<meta name="description" content="Đặt vé xe khách Hoàng Long Express online — Tuyến Hà Nội đi Hải Phòng, Đà Nẵng, TP.HCM. An toàn, đúng giờ, 20 năm kinh nghiệm. Hotline: 1800 6066">
<meta property="og:title" content="Hoàng Long Express | Đặt Vé Xe Khách">
<meta property="og:description" content="Đặt vé nhanh chóng, an toàn, tiện lợi">
<link rel="canonical" href="https://hoanglong.express">
```

**Checklist:**
- [ ] 1 H1 duy nhất → H2 mỗi section → H3 cho cards
- [ ] Tất cả ảnh có `loading="lazy"` + `alt` mô tả đầy đủ
- [ ] Critical CSS inline trong `<style>` của `<head>`
- [ ] JS đặt cuối `<body>` hoặc dùng `defer`
- [ ] Contrast ratio đạt WCAG AA (4.5:1)
- [ ] Tab navigation hoạt động đúng thứ tự

---

## DIFFERENTIATOR — YẾU TỐ "WOW" DUY NHẤT

> **Animated Road Lines trên Hero Section**

CSS animation của vạch kẻ đường cao tốc chạy từ dưới lên tạo cảm giác tốc độ và xe đang chạy — kết hợp với number counter đếm khi tải trang. Không một nhà xe Việt Nam nào có hiệu ứng này.

```css
/* Road line animation concept */
@keyframes roadMove {
  0%   { transform: translateY(100vh); }
  100% { transform: translateY(-100%); }
}
```

---

## OUTPUT FORMAT

Xuất **một file `index.html` duy nhất**, hoàn chỉnh, bao gồm:

```
index.html
├── <head>    → meta SEO đầy đủ + Google Fonts link
├── <style>   → toàn bộ CSS (CSS variables ở :root)
├── <body>    → 11 sections semantic HTML5
└── <script>  → IntersectionObserver · counter · carousel · hamburger · scroll navbar
```

> ⚠️ **Không** dùng CDN ngoài (trừ Google Fonts)  
> ⚠️ **Không** để placeholder "TODO" hay section trống  
> ⚠️ Mọi section phải có nội dung thật, copy đã điền sẵn

---

*Prompt được tối ưu theo Frontend Design Skill — tập trung vào aesthetic intentionality, spatial composition và animation strategy có chiến lược.*
