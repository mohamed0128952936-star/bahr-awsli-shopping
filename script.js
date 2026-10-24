* {
  box-sizing: border-box;
}

:root {
  --bg: #f7f1ec;
  --bg-deep: #efe5dc;
  --card: #fffdfb;
  --primary: #0c5362;
  --primary-strong: #062e3c;
  --secondary: #d9a659;
  --secondary-soft: #f7e6bf;
  --text: #18212d;
  --muted: #58657a;
  --line: #e9e1d9;
  --shadow: 0 20px 45px rgba(29, 36, 48, 0.12);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Cairo", sans-serif;
  background:
    radial-gradient(circle at top, rgba(217, 166, 89, 0.08), transparent 30%),
    linear-gradient(180deg, #f9f5f2 0%, #f4f8fb 100%);
  color: var(--text);
}

a {
  text-decoration: none;
}

button,
input,
select {
  font: inherit;
}

img {
  display: block;
  max-width: 100%;
}

button {
  cursor: pointer;
}

.page-shell {
  min-height: 100vh;
  overflow-x: hidden;
}

.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 40;
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(24, 33, 45, 0.06);
}

.nav-wrap {
  height: 82px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.brand-group {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  width: 42px;
  height: 42px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  color: #fff;
  font-weight: 800;
  background: linear-gradient(135deg, var(--primary) 0%, #0f86a3 100%);
  box-shadow: 0 18px 32px rgba(12, 83, 98, 0.2);
}

.brand-name,
.brand-group small {
  display: block;
}

.brand-name {
  font-size: 1.2rem;
  font-weight: 800;
  color: var(--text);
}

.brand-group small {
  font-size: 0.72rem;
  color: var(--muted);
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 24px;
}

.main-nav a {
  color: var(--muted);
  font-weight: 700;
  transition: color 0.2s ease;
}

.main-nav a:hover {
  color: var(--primary);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.icon-btn,
.cart-btn,
.close-btn,
.modal-close {
  border: 1px solid rgba(12, 83, 98, 0.08);
  background: #fff;
  border-radius: 12px;
  color: var(--text);
}

.icon-btn {
  width: 44px;
  height: 44px;
  font-size: 1.25rem;
}

.cart-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  min-width: 58px;
  height: 44px;
  padding: 0 12px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-strong) 100%);
  color: #fff;
  box-shadow: 0 14px 28px rgba(12, 83, 98, 0.22);
}

.cart-count {
  display: grid;
  place-items: center;
  min-width: 20px;
  height: 20px;
  background: var(--secondary);
  color: #1d2e2f;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 800;
}

.hero {
  padding: 40px 0 28px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  align-items: center;
  gap: 30px;
}

.eyebrow,
.mini-label {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(12, 83, 98, 0.08);
  color: var(--primary);
  font-size: 0.8rem;
  font-weight: 700;
}

.hero-copy h1 {
  margin: 18px 0 16px;
  font-size: clamp(2.5rem, 4vw, 4.7rem);
  line-height: 1.08;
  letter-spacing: -0.04em;
}

.hero-copy p {
  max-width: 560px;
  margin: 0;
  color: var(--muted);
  font-size: 1.08rem;
  line-height: 1.9;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 28px;
}

.primary-btn,
.secondary-btn,
.small-btn,
.modal-add,
.newsletter-form button,
.checkout-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding: 0 24px;
  border-radius: 14px;
  font-weight: 700;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}

.primary-btn,
.checkout-btn,
.modal-add,
.newsletter-form button {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-strong) 100%);
  color: #fff;
  box-shadow: 0 18px 34px rgba(12, 83, 98, 0.18);
  border: none;
}

.secondary-btn {
  background: #fff;
  color: var(--primary-strong);
  border: 1px solid rgba(12, 83, 98, 0.12);
}

.small-btn {
  min-height: 42px;
  padding: 0 18px;
  font-size: 0.92rem;
  border: none;
  background: #fff;
  color: var(--primary-strong);
}

.small-btn.light {
  background: rgba(255, 255, 255, 0.18);
  color: #fff;
}

.primary-btn:hover,
.secondary-btn:hover,
.small-btn:hover,
.checkout-btn:hover,
.newsletter-form button:hover,
.modal-add:hover,
.category-card:hover,
.add-btn:hover,
.product-card:hover {
  transform: translateY(-2px);
}

.stats-row {
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  margin-top: 30px;
}

.stats-row div {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stats-row strong {
  font-size: 1.6rem;
  font-weight: 800;
}

.stats-row span {
  color: var(--muted);
  font-size: 0.92rem;
}

.hero-visual {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
}

.visual-card {
  position: relative;
  background: #fff;
  border-radius: 30px;
  overflow: hidden;
  border: 1px solid rgba(35, 40, 50, 0.04);
  box-shadow: var(--shadow);
}

.visual-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.showcase {
  width: min(360px, 72vw);
  height: 450px;
}

.visual-stack {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.small-card {
  width: 180px;
  height: 180px;
}

.small-card.accent {
  background: #fef5e8;
}

.floating-tag {
  position: absolute;
  top: 16px;
  right: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 38px;
  padding: 0 14px;
  border-radius: 999px;
  background: rgba(217, 166, 89, 0.95);
  color: #1b1b1f;
  font-weight: 800;
}

.trust-bar {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  padding: 10px 0 0;
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 20px;
  background: rgba(255, 255, 255, 0.74);
  border: 1px solid var(--line);
  border-radius: 20px;
}

.trust-item span {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(12, 83, 98, 0.08), rgba(217, 166, 89, 0.12));
  font-size: 1.5rem;
}

.trust-item strong,
.trust-item small {
  display: block;
}

.trust-item strong {
  font-size: 1.02rem;
}

.trust-item small {
  color: var(--muted);
}

.categories,
.products-section,
.reviews {
  padding-top: 54px;
}

.section-head {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 22px;
}

.section-head h2 {
  margin: 10px 0 0;
  font-size: clamp(1.9rem, 2.4vw, 2.7rem);
}

.section-head a {
  color: var(--primary);
  font-weight: 700;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 16px;
}

.category-card {
  appearance: none;
  border: 1px solid var(--line);
  background: #fff;
  border-radius: 20px;
  min-height: 120px;
  padding: 18px 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: var(--text);
  transition: all 0.2s ease;
}

.category-card span {
  font-size: 2rem;
}

.category-card.active {
  background: linear-gradient(135deg, rgba(12, 83, 98, 0.1), rgba(217, 166, 89, 0.14));
  border-color: rgba(12, 83, 98, 0.12);
}

.promo-strip {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  padding-top: 52px;
}

.promo-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 24px 22px;
  border-radius: 24px;
  min-height: 152px;
}

.promo-card-primary {
  background: linear-gradient(135deg, #0e4b5d 0%, #123d5c 100%);
  color: #fff;
}

.promo-card-secondary {
  background: linear-gradient(135deg, #f5d39d 0%, #edca6d 100%);
  color: #1a1f2a;
}

.promo-card span {
  display: inline-block;
  margin-bottom: 10px;
  opacity: 0.85;
  font-size: 0.8rem;
  font-weight: 700;
}

.promo-card h3 {
  margin: 0;
  font-size: clamp(1.5rem, 2vw, 2.2rem);
  line-height: 1.35;
}

.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin: 18px 0 28px;
}

.search-box {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  max-width: 520px;
  min-height: 52px;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 0 14px;
}

.search-box input {
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  color: var(--text);
  font-size: 1rem;
}

.toolbar select {
  min-height: 52px;
  border: 1px solid var(--line);
  background: #fff;
  border-radius: 12px;
  padding: 0 16px;
  color: var(--text);
  outline: none;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 22px;
}

.product-card {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(20, 27, 36, 0.04);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}

.product-card:hover {
  box-shadow: 0 18px 34px rgba(20, 27, 36, 0.08);
}

.product-image {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.badge {
  position: absolute;
  top: 14px;
  right: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 32px;
  padding: 0 10px;
  border-radius: 999px;
  background: linear-gradient(135deg, #ff8c61, #ffb560);
  color: #fff;
  font-size: 0.72rem;
  font-weight: 800;
}

.product-body {
  padding: 18px 16px 20px;
}

.product-title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 8px;
}

.product-body h3 {
  margin: 0;
  font-size: 1.08rem;
}

.product-rating {
  color: #f5a623;
  font-size: 0.8rem;
  font-weight: 700;
}

.product-description {
  min-height: 54px;
  margin: 0 0 16px;
  color: var(--muted);
  line-height: 1.8;
  font-size: 0.9rem;
}

.product-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.price-wrap {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.price {
  font-size: 1.45rem;
  font-weight: 800;
  color: var(--primary-strong);
}

.old-price {
  color: var(--muted);
  font-size: 0.8rem;
  text-decoration: line-through;
}

.add-btn,
.product-actions button {
  border: none;
  border-radius: 12px;
  background: var(--primary);
  color: #fff;
  min-height: 42px;
  padding: 0 14px;
  font-weight: 700;
}

.product-actions {
  display: flex;
  gap: 8px;
}

.details-btn {
  border: 1px solid rgba(12, 83, 98, 0.08);
  background: #fff;
  color: var(--primary-strong);
  min-height: 42px;
  padding: 0 12px;
  border-radius: 12px;
  font-weight: 700;
}

.showcase-panel {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 24px;
  align-items: center;
  padding-top: 58px;
}

.showcase-copy {
  padding: 34px 22px;
  background: linear-gradient(135deg, #102f3d 0%, #1a3b60 100%);
  border-radius: 28px;
  color: #fff;
}

.showcase-copy h3 {
  margin: 12px 0 12px;
  font-size: clamp(2rem, 2.8vw, 3rem);
}

.showcase-copy p {
  margin: 0 0 24px;
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.8;
}

.light {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
}

.showcase-image {
  border-radius: 28px;
  overflow: hidden;
  min-height: 350px;
  box-shadow: var(--shadow);
}

.showcase-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.review-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.review-card {
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 22px 20px;
}

.stars {
  color: #f5a623;
  letter-spacing: 0.12em;
  margin-bottom: 14px;
}

.review-card p {
  margin: 0 0 18px;
  color: var(--muted);
  line-height: 1.8;
}

.review-user {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.review-user strong {
  font-size: 1rem;
}

.review-user span {
  color: var(--muted);
  font-size: 0.85rem;
}

.newsletter {
  padding: 58px 0 40px;
}

.newsletter-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 26px 24px;
  border-radius: 26px;
  background: linear-gradient(135deg, #0b4959 0%, #102f3d 100%);
  color: #fff;
}

.newsletter-box h3 {
  margin: 12px 0 0;
  font-size: clamp(1.5rem, 2vw, 2.2rem);
}

.newsletter-form {
  display: flex;
  align-items: center;
  gap: 12px;
  width: min(100%, 460px);
}

.newsletter-form input {
  flex: 1;
  min-height: 52px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  border-radius: 12px;
  padding: 0 16px;
  outline: none;
}

.newsletter-form input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.site-footer {
  background: #0e1a24;
  color: rgba(255, 255, 255, 0.8);
  padding-top: 42px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr 0.8fr 1fr;
  gap: 20px;
  padding-bottom: 24px;
}

.footer-brand {
  margin-bottom: 14px;
}

.site-footer p,
.site-footer ul {
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.8;
}

.site-footer h4 {
  margin: 0 0 12px;
  color: #fff;
  font-size: 1.05rem;
}

.site-footer ul {
  list-style: none;
  padding: 0;
}

.site-footer a {
  color: rgba(255, 255, 255, 0.7);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  text-align: center;
  padding: 18px 0 26px;
  color: rgba(255, 255, 255, 0.7);
}

.cart-overlay {
  position: fixed;
  inset: 0;
  z-index: 45;
  background: rgba(14, 26, 36, 0.45);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
}

.cart-overlay.visible {
  opacity: 1;
  pointer-events: auto;
}

.cart-panel {
  position: fixed;
  top: 0;
  left: 0;
  width: min(420px, 100%);
  height: 100dvh;
  background: #fff;
  box-shadow: -26px 0 60px rgba(18, 26, 34, 0.16);
  border-left: 1px solid var(--line);
  transform: translateX(105%);
  transition: transform 0.25s ease;
  z-index: 50;
  display: flex;
  flex-direction: column;
}

.cart-panel.open {
  transform: translateX(0);
}

.cart-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 22px 20px;
  border-bottom: 1px solid var(--line);
}

.cart-header h3 {
  margin: 0;
  font-size: 1.5rem;
}

.close-btn {
  width: 40px;
  height: 40px;
  font-size: 1.1rem;
}

.cart-items {
  flex: 1;
  padding: 18px 20px;
  overflow: auto;
}

.empty-state {
  display: grid;
  place-items: center;
  height: 100%;
  color: var(--muted);
  text-align: center;
}

.empty-icon {
  font-size: 3rem;
  margin-bottom: 8px;
}

.cart-item {
  display: grid;
  grid-template-columns: 90px 1fr auto;
  gap: 14px;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid var(--line);
}

.cart-item img {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 16px;
}

.cart-item h4 {
  margin: 0 0 4px;
  font-size: 1rem;
}

.cart-item p {
  margin: 0;
  color: var(--muted);
  font-size: 0.82rem;
}

.item-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 12px;
}

.qty-controls {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 6px 10px;
}

.qty-controls button {
  border: none;
  background: transparent;
  color: var(--text);
  font-size: 1.1rem;
}

.item-total {
  color: var(--primary-strong);
  font-weight: 800;
}

.cart-summary {
  border-top: 1px solid var(--line);
  padding: 18px 20px 20px;
  background: rgba(247, 242, 238, 0.8);
}

.summary-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  color: var(--muted);
}

.summary-row.total {
  color: var(--text);
  font-size: 1.08rem;
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid var(--line);
}

.checkout-btn {
  width: 100%;
  margin-top: 12px;
}

.product-modal {
  position: fixed;
  inset: 0;
  z-index: 60;
  display: none;
}

.product-modal.visible {
  display: block;
}

.modal-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(12, 17, 22, 0.58);
}

.modal-card {
  position: relative;
  z-index: 1;
  width: min(860px, calc(100% - 24px));
  margin: 5vh auto 0;
  background: #fff;
  border-radius: 28px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.modal-close {
  position: absolute;
  top: 14px;
  right: 14px;
  width: 38px;
  height: 38px;
  z-index: 2;
}

.modal-media {
  min-height: 440px;
  background: #f7f3ef;
}

.modal-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-body {
  padding: 26px 24px 26px;
}

.modal-badge {
  display: inline-flex;
  padding: 7px 12px;
  background: rgba(217, 166, 89, 0.18);
  color: #8d6418;
  border-radius: 999px;
  font-weight: 800;
  font-size: 0.75rem;
}

.modal-body h3 {
  margin: 18px 0 12px;
  font-size: clamp(1.7rem, 2.2vw, 2.4rem);
}

.modal-rating {
  color: #f5a623;
  margin-bottom: 14px;
  font-weight: 700;
}

.modal-body p {
  margin: 0 0 20px;
  color: var(--muted);
  line-height: 1.8;
}

.modal-price-row {
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 22px;
}

.modal-price-row strong {
  font-size: 2rem;
  color: var(--primary-strong);
}

.modal-price-row span {
  color: var(--muted);
  text-decoration: line-through;
}

@media (max-width: 980px) {
  .hero-grid,
  .showcase-panel,
  .modal-card,
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }

  .hero-grid,
  .showcase-panel,
  .modal-card {
    grid-template-columns: 1fr;
  }

  .trust-bar,
  .review-grid,
  .product-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .toolbar {
    flex-direction: column;
    align-items: stretch;
  }

  .search-box {
    max-width: none;
  }
}

@media (max-width: 760px) {
  .main-nav {
    display: none;
  }

  .category-grid,
  .trust-bar,
  .product-grid,
  .review-grid,
  .promo-strip,
  .footer-grid {
    grid-template-columns: 1fr;
  }

  .promo-card,
  .newsletter-box,
  .section-head {
    flex-direction: column;
    align-items: flex-start;
  }

  .hero-copy h1 {
    font-size: 2.5rem;
  }

  .showcase {
    width: 100%;
    height: 340px;
  }

  .hero-visual {
    flex-direction: column;
  }

  .small-card {
    width: 100%;
    height: 180px;
  }

  .newsletter-form {
    width: 100%;
    flex-direction: column;
    align-items: stretch;
  }
}

@media (max-width: 500px) {
  .stats-row {
    gap: 16px;
  }

  .product-meta {
    flex-direction: column;
    align-items: flex-start;
  }
}





































































































































































































































































