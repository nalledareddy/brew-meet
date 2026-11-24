import Image from 'next/image'
import { ArrowDown, ArrowRight, ArrowUpRight, Coffee, MapPin, ShoppingBag } from 'lucide-react'

const details = [
  { label: 'When', value: '24 November 2026', icon: Coffee },
  { label: 'Where', value: 'Hyderabad', icon: MapPin },
  { label: 'For', value: 'Coffee lovers', icon: ShoppingBag },
]

export default function Page() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Coffee Shop home">
          <span className="wordmark-mark"><Coffee size={16} strokeWidth={1.6} /></span>
          <span>COFFEE SHOP</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#details">The details</a>
          <a href="#shop">Coffee &amp; checkout</a>
        </nav>
        <a className="header-link" href="#shop">Explore the shop <ArrowUpRight size={15} /></a>
      </header>

      <section className="hero" id="home" aria-labelledby="hero-title">
        <Image className="hero-image" src="/mocha-coffee-hero.png" alt="A ceramic cup of coffee on a warm mocha tabletop" fill priority sizes="100vw" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow"><span className="eyebrow-dot" /> A gathering for coffee lovers</p>
          <h1 id="hero-title">Coffee<br /><em>Shop.</em></h1>
          <p className="hero-copy">A little time for coffee, in good company.</p>
          <a className="button button-cream" href="#details">Discover the gathering <ArrowDown size={16} /></a>
        </div>
        <div className="hero-index"><span>01</span><span className="index-line" /><span>03</span></div>
        <p className="hero-location">HYDERABAD <span>·</span> 24 NOVEMBER 2026</p>
      </section>

      <section className="details-band" id="details" aria-label="Event details">
        {details.map(({ label, value, icon: Icon }) => (
          <div className="detail-item" key={label}>
            <span className="detail-icon"><Icon size={16} strokeWidth={1.6} /></span>
            <div><span className="detail-label">{label}</span><span className="detail-value">{value}</span></div>
          </div>
        ))}
        <a className="details-cta" href="#shop">Find your coffee <ArrowRight size={16} /></a>
      </section>

      <section className="story-section" aria-labelledby="story-title">
        <div className="story-kicker"><span>THE GATHERING</span><span>HYDERABAD · 2026</span></div>
        <div className="story-grid">
          <h2 id="story-title">For the love<br />of <em>coffee.</em></h2>
          <div className="story-copy">
            <span className="story-rule" />
            <p>A coffee shop gathering for coffee lovers. Save the date, find your cup, and make a little room in the day for something good.</p>
            <a href="#shop" className="text-link">See the coffee shop <ArrowRight size={15} /></a>
          </div>
        </div>
        <div className="story-stamp" aria-hidden="true"><span>GOOD<br />COFFEE<br />GOOD<br />COMPANY</span><Coffee size={20} strokeWidth={1.4} /></div>
      </section>

      <section className="shop-section" id="shop" aria-labelledby="shop-title">
        <div className="shop-topline"><span>02 / THE SHOP</span><span>COFFEE LOVERS, THIS IS FOR YOU</span></div>
        <div className="shop-layout">
          <div className="shop-intro">
            <p className="eyebrow"><span className="eyebrow-dot" /> A cup, at your own pace</p>
            <h2 id="shop-title">Find your<br /><em>coffee.</em></h2>
            <p className="shop-copy">Browse the coffee shop and place your order in one easy flow.</p>
            <div className="shop-meta"><span>24 NOVEMBER 2026</span><span className="meta-divider" /><span>HYDERABAD</span></div>
          </div>
          <div className="order-card">
            <div className="order-card-head"><span className="order-icon"><ShoppingBag size={18} strokeWidth={1.5} /></span><span className="order-step">YOUR ORDER · 01</span></div>
            <div className="order-empty">
              <span className="empty-ring"><Coffee size={22} strokeWidth={1.4} /></span>
              <h3>The menu is on its way.</h3>
              <p>Coffee selections and prices haven&apos;t been provided yet, so there&apos;s nothing to add or check out just now.</p>
            </div>
            <div className="order-footer">
              <span>ORDER TOTAL</span><span>—</span>
            </div>
            <button className="checkout-button" type="button" disabled aria-describedby="checkout-note">Continue to checkout <ArrowRight size={16} /></button>
            <p className="checkout-note" id="checkout-note">Checkout and login aren&apos;t connected. No payment will be taken.</p>
          </div>
        </div>
      </section>

      <section className="closing-section" aria-label="Event reminder">
        <span className="closing-overline">SAVE THE DATE</span>
        <p>Good coffee is better <em>together.</em></p>
        <div className="closing-details"><span>24 NOVEMBER 2026</span><span>HYDERABAD</span><span>FOR COFFEE LOVERS</span></div>
      </section>

      <footer className="site-footer">
        <a className="wordmark footer-mark" href="#home"><span className="wordmark-mark"><Coffee size={15} strokeWidth={1.6} /></span><span>COFFEE SHOP</span></a>
        <span>24 NOVEMBER 2026 <span className="footer-dot">·</span> HYDERABAD</span>
        <a className="back-top" href="#home">Back to top ↑</a>
      </footer>
    </main>
  )
}
