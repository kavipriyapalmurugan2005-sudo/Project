import React from "react";
import { Link } from "react-router-dom";
import usePageMotion from "./usePageMotion.js";

export default function Home() {
  usePageMotion();

  const vegetables = [
    {
      id: 1,
      name: "Fresh Tomatoes",
      category: "FRESH VEGETABLES",
      price: 40,
      unit: "per kg",
      image:
        "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=700&auto=format&fit=crop",
      tag: "POPULAR",
    },
    {
      id: 2,
      name: "Organic Carrots",
      category: "ROOT VEGETABLES",
      price: 60,
      unit: "per kg",
      image:
        "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=700&auto=format&fit=crop",
      tag: "FRESH PICK",
    },
    {
      id: 3,
      name: "Green Broccoli",
      category: "GREEN VEGETABLES",
      price: 80,
      unit: "per kg",
      image:
        "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=700&auto=format&fit=crop",
      tag: "HEALTHY CHOICE",
    },
    {
      id: 4,
      name: "Fresh Bell Peppers",
      category: "FRESH VEGETABLES",
      price: 70,
      unit: "per kg",
      image:
        "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=700&auto=format&fit=crop",
      tag: "CUSTOMER FAVOURITE",
    },
  ];

  const benefits = [
    {
      number: "01",
      icon: "✳",
      title: "Carefully Selected",
      description:
        "Explore a carefully selected range of vegetables for your everyday cooking needs.",
    },
    {
      number: "02",
      icon: "◇",
      title: "Simple Ordering",
      description:
        "Browse products, add your favourites to cart and place your order with ease.",
    },
    {
      number: "03",
      icon: "↗",
      title: "Convenient Shopping",
      description:
        "A smooth online shopping experience designed to make vegetable ordering easier.",
    },
  ];

  return (
    <div className="palm-home">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Playfair+Display:wght@500;600;700;800&display=swap');

        .palm-home {
          --forest: #153d2b;
          --forest-dark: #0b281d;
          --cream: #f7f6ef;
          --sage: #dce8d9;
          --lime: #d7ee8c;
          --gold: #c5a66a;
          --ink: #172b20;
          font-family: 'DM Sans', sans-serif;
          color: var(--ink);
          background: var(--cream);
          overflow: hidden;
        }

        .palm-home * {
          box-sizing: border-box;
        }

        .palm-home a {
          text-decoration: none;
        }

        .palm-home .ph-navbar {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 10;
          padding: 23px 7%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255,255,255,.16);
        }

        .palm-home .ph-logo {
          display: flex;
          align-items: center;
          gap: 11px;
          color: white;
          font-size: 21px;
          font-weight: 800;
          letter-spacing: -.8px;
        }

        .palm-home .ph-logo-icon {
          width: 40px;
          height: 40px;
          display: grid;
          place-items: center;
          background: var(--lime);
          color: var(--forest);
          border-radius: 13px;
          font-size: 23px;
        }

        .palm-home .ph-navlinks {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .palm-home .ph-navlinks a {
          color: rgba(255,255,255,.85);
          font-size: 13px;
          font-weight: 600;
          transition: .3s;
        }

        .palm-home .ph-navlinks a:hover {
          color: var(--lime);
        }

        .palm-home .ph-nav-action {
          background: var(--lime);
          color: var(--forest) !important;
          padding: 12px 21px;
          border-radius: 30px;
        }

        .palm-home .ph-hero {
          min-height: 740px;
          position: relative;
          display: flex;
          align-items: center;
          padding: 150px 9% 100px;
          background:
            linear-gradient(90deg, rgba(8,31,21,.97) 0%, rgba(8,31,21,.88) 43%, rgba(8,31,21,.12) 100%),
            url('https://images.unsplash.com/photo-1540420773420-3366772f4999?w=2000&auto=format&fit=crop') center/cover;
          color: white;
        }

        .palm-home .ph-hero-content {
          max-width: 660px;
          position: relative;
          z-index: 2;
          animation: phRise 1s ease both;
        }

        .palm-home .ph-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--lime);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 25px;
        }

        .palm-home .ph-eyebrow:before {
          content: "";
          width: 30px;
          height: 1px;
          background: var(--lime);
        }

        .palm-home .ph-hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(48px, 6.5vw, 86px);
          line-height: 1.07;
          letter-spacing: -2.5px;
          font-weight: 600;
          margin: 0 0 25px;
        }

        .palm-home .ph-hero h1 span {
          color: var(--lime);
          font-style: italic;
        }

        .palm-home .ph-hero p {
          max-width: 490px;
          color: rgba(255,255,255,.72);
          font-size: 15px;
          line-height: 1.9;
          margin-bottom: 34px;
        }

        .palm-home .ph-buttons {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 15px;
        }

        .palm-home .ph-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 15px;
          background: var(--lime);
          color: var(--forest);
          border-radius: 40px;
          padding: 16px 25px;
          font-size: 13px;
          font-weight: 800;
          transition: .3s;
        }

        .palm-home .ph-btn-primary:hover {
          background: white;
          color: var(--forest);
          transform: translateY(-4px);
        }

        .palm-home .ph-btn-outline {
          color: white;
          border: 1px solid rgba(255,255,255,.4);
          padding: 15px 24px;
          border-radius: 40px;
          font-size: 13px;
          font-weight: 600;
          transition: .3s;
        }

        .palm-home .ph-btn-outline:hover {
          background: white;
          color: var(--forest);
        }

        .palm-home .ph-hero-note {
          position: absolute;
          right: 8%;
          bottom: 65px;
          color: rgba(255,255,255,.8);
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          writing-mode: vertical-rl;
        }

        .palm-home .ph-trust-strip {
          background: var(--lime);
          padding: 19px 7%;
          display: flex;
          justify-content: space-around;
          gap: 20px;
          flex-wrap: wrap;
        }

        .palm-home .ph-trust-item {
          color: var(--forest);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .palm-home .ph-section {
          padding: 105px 8%;
        }

        .palm-home .ph-section-heading {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 25px;
          margin-bottom: 45px;
        }

        .palm-home .ph-kicker {
          color: #78916c;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 15px;
        }

        .palm-home .ph-section h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(35px, 4vw, 53px);
          line-height: 1.15;
          color: var(--forest);
          margin: 0;
          font-weight: 600;
        }

        .palm-home .ph-section-heading > p {
          max-width: 350px;
          color: #78847a;
          font-size: 13px;
          line-height: 1.9;
          margin: 0;
        }

        .palm-home .ph-product-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        .palm-home .ph-product-card {
          background: #fff;
          border-radius: 15px;
          overflow: hidden;
          transition: .35s;
          border: 1px solid rgba(21,61,43,.07);
        }

        .palm-home .ph-product-card:hover {
          transform: translateY(-9px);
          box-shadow: 0 20px 45px rgba(20,50,30,.1);
        }

        .palm-home .ph-product-image {
          height: 250px;
          position: relative;
          overflow: hidden;
          background: #e8eee4;
        }

        .palm-home .ph-product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .6s;
        }

        .palm-home .ph-product-card:hover img {
          transform: scale(1.08);
        }

        .palm-home .ph-product-tag {
          position: absolute;
          top: 15px;
          left: 15px;
          background: var(--lime);
          color: var(--forest);
          font-size: 9px;
          letter-spacing: 1px;
          font-weight: 800;
          padding: 8px 11px;
          border-radius: 20px;
        }

        .palm-home .ph-product-info {
          padding: 20px;
        }

        .palm-home .ph-product-category {
          font-size: 9px;
          color: #8b9a8a;
          font-weight: 800;
          letter-spacing: 1.5px;
          margin-bottom: 9px;
        }

        .palm-home .ph-product-info h3 {
          color: var(--forest);
          font-family: 'Playfair Display', serif;
          font-size: 21px;
          margin: 0 0 13px;
        }

        .palm-home .ph-product-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid #edf0e9;
          padding-top: 14px;
        }

        .palm-home .ph-price {
          color: var(--forest);
          font-size: 17px;
          font-weight: 800;
        }

        .palm-home .ph-price small {
          color: #929b91;
          font-size: 10px;
          font-weight: 500;
        }

        .palm-home .ph-product-arrow {
          width: 36px;
          height: 36px;
          display: grid;
          place-items: center;
          background: var(--forest);
          color: white;
          border-radius: 50%;
          transition: .3s;
        }

        .palm-home .ph-product-card:hover .ph-product-arrow {
          background: var(--lime);
          color: var(--forest);
        }

        .palm-home .ph-center-link {
          text-align: center;
          margin-top: 45px;
        }

        .palm-home .ph-text-link {
          color: var(--forest);
          font-size: 13px;
          font-weight: 800;
          border-bottom: 1px solid var(--gold);
          padding-bottom: 7px;
        }

        .palm-home .ph-benefits {
          background: var(--forest);
          color: white;
          padding: 95px 8%;
        }

        .palm-home .ph-benefits .ph-kicker {
          color: var(--lime);
        }

        .palm-home .ph-benefits h2 {
          color: white;
          font-family: 'Playfair Display', serif;
          font-size: clamp(35px, 4vw, 52px);
          font-weight: 600;
          max-width: 600px;
          margin: 0 0 50px;
        }

        .palm-home .ph-benefit-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 35px;
        }

        .palm-home .ph-benefit-card {
          padding: 30px 25px;
          border: 1px solid rgba(255,255,255,.17);
          border-radius: 13px;
          transition: .3s;
        }

        .palm-home .ph-benefit-card:hover {
          background: rgba(255,255,255,.07);
          transform: translateY(-6px);
        }

        .palm-home .ph-benefit-number {
          color: var(--lime);
          font-size: 11px;
          letter-spacing: 2px;
        }

        .palm-home .ph-benefit-icon {
          display: block;
          color: var(--lime);
          font-size: 32px;
          margin: 30px 0 20px;
        }

        .palm-home .ph-benefit-card h3 {
          font-family: 'Playfair Display', serif;
          font-size: 23px;
          margin: 0 0 13px;
          color: white;
        }

        .palm-home .ph-benefit-card p {
          color: rgba(255,255,255,.62);
          font-size: 12px;
          line-height: 1.9;
          margin: 0;
        }

        .palm-home .ph-story {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 75px;
          padding: 110px 9%;
        }

        .palm-home .ph-story-image {
          position: relative;
          min-height: 490px;
        }

        .palm-home .ph-story-image img {
          width: 100%;
          height: 490px;
          object-fit: cover;
          border-radius: 12px;
        }

        .palm-home .ph-story-label {
          position: absolute;
          bottom: -20px;
          right: -20px;
          background: var(--lime);
          color: var(--forest);
          padding: 22px 27px;
          border-radius: 10px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1px;
          line-height: 1.7;
        }

        .palm-home .ph-story-content h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(37px, 4vw, 54px);
          line-height: 1.15;
          color: var(--forest);
          font-weight: 600;
          margin: 15px 0 22px;
        }

        .palm-home .ph-story-content p {
          color: #78847a;
          font-size: 13px;
          line-height: 2;
          margin-bottom: 27px;
        }

        .palm-home .ph-story-points {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-bottom: 32px;
        }

        .palm-home .ph-story-point {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--forest);
          font-size: 13px;
          font-weight: 700;
        }

        .palm-home .ph-check {
          display: grid;
          place-items: center;
          width: 23px;
          height: 23px;
          border-radius: 50%;
          background: var(--sage);
          color: var(--forest);
          font-size: 12px;
        }

        .palm-home .ph-cta {
          margin: 0 7% 90px;
          padding: 75px 35px;
          text-align: center;
          background:
            linear-gradient(rgba(10,39,27,.91), rgba(10,39,27,.91)),
            url('https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1600&auto=format&fit=crop') center/cover;
          border-radius: 17px;
          color: white;
        }

        .palm-home .ph-cta .ph-kicker {
          color: var(--lime);
        }

        .palm-home .ph-cta h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(34px, 4vw, 52px);
          max-width: 650px;
          margin: 0 auto 18px;
          line-height: 1.2;
          font-weight: 600;
        }

        .palm-home .ph-cta p {
          color: rgba(255,255,255,.7);
          font-size: 13px;
          margin-bottom: 30px;
        }

        .palm-home .ph-footer {
          background: var(--forest-dark);
          color: white;
          padding: 65px 8% 25px;
        }

        .palm-home .ph-footer-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1fr;
          gap: 45px;
          padding-bottom: 45px;
        }

        .palm-home .ph-footer-brand p {
          color: rgba(255,255,255,.57);
          max-width: 280px;
          font-size: 12px;
          line-height: 1.9;
          margin-top: 20px;
        }

        .palm-home .ph-footer h4 {
          color: var(--lime);
          font-size: 12px;
          letter-spacing: 1px;
          margin: 5px 0 22px;
        }

        .palm-home .ph-footer-links {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .palm-home .ph-footer-links a,
        .palm-home .ph-footer-links span {
          color: rgba(255,255,255,.65);
          font-size: 12px;
          transition: .3s;
        }

        .palm-home .ph-footer-links a:hover {
          color: var(--lime);
        }

        .palm-home .ph-footer-bottom {
          border-top: 1px solid rgba(255,255,255,.12);
          padding-top: 23px;
          display: flex;
          justify-content: space-between;
          gap: 15px;
          flex-wrap: wrap;
          color: rgba(255,255,255,.45);
          font-size: 10px;
        }

        @keyframes phRise {
          from { opacity: 0; transform: translateY(25px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 1000px) {
          .palm-home .ph-product-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .palm-home .ph-story {
            gap: 40px;
          }

          .palm-home .ph-footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 700px) {
          .palm-home .ph-navbar {
            padding: 17px 5%;
            flex-wrap: wrap;
            gap: 15px;
          }

          .palm-home .ph-logo {
            font-size: 18px;
          }

          .palm-home .ph-navlinks {
            width: 100%;
            gap: 17px;
            overflow-x: auto;
            padding-bottom: 5px;
          }

          .palm-home .ph-navlinks a {
            white-space: nowrap;
            font-size: 11px;
          }

          .palm-home .ph-nav-action {
            padding: 9px 14px;
          }

          .palm-home .ph-hero {
            min-height: 700px;
            padding: 190px 7% 90px;
            background-position: 60% center;
          }

          .palm-home .ph-hero h1 {
            font-size: 51px;
          }

          .palm-home .ph-hero p {
            font-size: 13px;
          }

          .palm-home .ph-hero-note {
            display: none;
          }

          .palm-home .ph-trust-strip {
            justify-content: flex-start;
            padding: 20px 7%;
          }

          .palm-home .ph-trust-item {
            font-size: 10px;
          }

          .palm-home .ph-section {
            padding: 75px 6%;
          }

          .palm-home .ph-section-heading {
            display: block;
          }

          .palm-home .ph-section-heading > p {
            margin-top: 18px;
          }

          .palm-home .ph-product-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
          }

          .palm-home .ph-product-image {
            height: 175px;
          }

          .palm-home .ph-product-info {
            padding: 13px;
          }

          .palm-home .ph-product-info h3 {
            font-size: 17px;
          }

          .palm-home .ph-product-tag {
            font-size: 7px;
            top: 9px;
            left: 9px;
          }

          .palm-home .ph-price {
            font-size: 14px;
          }

          .palm-home .ph-product-arrow {
            width: 30px;
            height: 30px;
          }

          .palm-home .ph-benefits {
            padding: 75px 6%;
          }

          .palm-home .ph-benefit-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .palm-home .ph-story {
            grid-template-columns: 1fr;
            padding: 75px 7%;
            gap: 55px;
          }

          .palm-home .ph-story-image {
            min-height: 330px;
          }

          .palm-home .ph-story-image img {
            height: 330px;
          }

          .palm-home .ph-story-label {
            right: -7px;
          }

          .palm-home .ph-cta {
            margin: 0 5% 65px;
            padding: 60px 20px;
          }

          .palm-home .ph-footer {
            padding: 55px 7% 25px;
          }

          .palm-home .ph-footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 35px 20px;
          }
        }

        @media (max-width: 380px) {
          .palm-home .ph-hero h1 {
            font-size: 43px;
          }

          .palm-home .ph-product-image {
            height: 145px;
          }

          .palm-home .ph-footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* NAVBAR */}
      <nav className="ph-navbar">
        <Link to="/" className="ph-logo">
          <span className="ph-logo-icon">♧</span>
          <span>PALMURUGAN<span style={{ color: "#d7ee8c" }}>.</span></span>
        </Link>

        <div className="ph-navlinks">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/admin" className="ph-nav-action">Admin ↗</Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="ph-hero">
        <div className="ph-hero-content">
          <div className="ph-eyebrow">
            A BETTER WAY TO SHOP VEGETABLES
          </div>

          <h1>
            Fresh choices.
            <br />
            Better <span>living.</span>
          </h1>

          <p>
            Discover a thoughtfully selected collection of fresh vegetables
            for your everyday kitchen. Explore, choose your favourites and
            enjoy a simpler way to shop.
          </p>

          <div className="ph-buttons">
            <Link to="/products" className="ph-btn-primary">
              Explore Products <span>↗</span>
            </Link>

            <Link to="/about" className="ph-btn-outline">
              Discover Our Story
            </Link>
          </div>
        </div>

        <div className="ph-hero-note">
          FRESHNESS FOR EVERYDAY LIVING
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="ph-trust-strip">
        <div className="ph-trust-item">✳ Carefully Selected Products</div>
        <div className="ph-trust-item">✳ Easy Online Ordering</div>
        <div className="ph-trust-item">✳ Everyday Kitchen Essentials</div>
      </div>

      {/* PRODUCTS */}
      <section className="ph-section">
        <div className="ph-section-heading">
          <div>
            <div className="ph-kicker">OUR COLLECTION</div>
            <h2>
              Everyday essentials,
              <br />
              naturally better.
            </h2>
          </div>

          <p>
            Find your kitchen favourites in one place. Explore our vegetable
            collection and choose what you need for your everyday meals.
          </p>
        </div>

        <div className="ph-product-grid">
          {vegetables.map((item) => (
            <Link
              to="/products"
              className="ph-product-card"
              key={item.id}
            >
              <div className="ph-product-image">
                <img src={item.image} alt={item.name} loading="lazy" />
                <span className="ph-product-tag">{item.tag}</span>
              </div>

              <div className="ph-product-info">
                <div className="ph-product-category">{item.category}</div>
                <h3>{item.name}</h3>

                <div className="ph-product-bottom">
                  <div className="ph-price">
                    ₹{item.price} <small>/ {item.unit}</small>
                  </div>
                  <span className="ph-product-arrow">↗</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="ph-center-link">
          <Link to="/products" className="ph-text-link">
            VIEW ALL PRODUCTS &nbsp; ↗
          </Link>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="ph-benefits">
        <div className="ph-kicker">THE PALMURUGAN EXPERIENCE</div>
        <h2>
          A simpler way to bring
          <br />
          your kitchen essentials together.
        </h2>

        <div className="ph-benefit-grid">
          {benefits.map((item) => (
            <div className="ph-benefit-card" key={item.number}>
              <div className="ph-benefit-number">{item.number}</div>
              <span className="ph-benefit-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT / STORY */}
      <section className="ph-story">
        <div className="ph-story-image">
          <img
            src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1000&auto=format&fit=crop"
            alt="Fresh vegetables collection"
            loading="lazy"
          />

          <div className="ph-story-label">
            GOOD FOOD.
            <br />
            BETTER EVERYDAY.
          </div>
        </div>

        <div className="ph-story-content">
          <div className="ph-kicker">ABOUT PALMURUGAN</div>

          <h2>
            Your everyday
            <br />
            vegetable shopping,
            <br />
            made simpler.
          </h2>

          <p>
            Palmurugan Fresh Vegetables is an online vegetable shopping
            platform designed to make product browsing and ordering
            convenient. We bring a simple shopping experience together
            with a collection of everyday vegetable essentials.
          </p>

          <div className="ph-story-points">
            <div className="ph-story-point">
              <span className="ph-check">✓</span>
              Easy product browsing
            </div>

            <div className="ph-story-point">
              <span className="ph-check">✓</span>
              Convenient cart and ordering
            </div>

            <div className="ph-story-point">
              <span className="ph-check">✓</span>
              Simple online shopping experience
            </div>
          </div>

          <Link to="/about" className="ph-btn-primary">
            More About Us <span>↗</span>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="ph-cta">
        <div className="ph-kicker">YOUR KITCHEN STARTS HERE</div>

        <h2>
          Make everyday shopping
          <br />
          a little more effortless.
        </h2>

        <p>
          Explore our collection and find your everyday vegetable essentials.
        </p>

        <Link to="/products" className="ph-btn-primary">
          Start Shopping <span>↗</span>
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="ph-footer">
        <div className="ph-footer-grid">
          <div className="ph-footer-brand">
            <Link to="/" className="ph-logo">
              <span className="ph-logo-icon">♧</span>
              <span>PALMURUGAN<span style={{ color: "#d7ee8c" }}>.</span></span>
            </Link>

            <p>
              A convenient online destination for exploring and ordering
              everyday fresh vegetable essentials.
            </p>
          </div>

          <div>
            <h4>EXPLORE</h4>
            <div className="ph-footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/products">Our Products</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <h4>SHOPPING</h4>
            <div className="ph-footer-links">
              <Link to="/products">Browse Products</Link>
              <Link to="/cart">My Cart</Link>
              <Link to="/contact">Get In Touch</Link>
            </div>
          </div>

          <div>
            <h4>QUICK LINKS</h4>
            <div className="ph-footer-links">
              <Link to="/admin">Admin</Link>
              <Link to="/admin/login">Admin Login</Link>
              <Link to="/contact">Support</Link>
            </div>
          </div>
        </div>

        <div className="ph-footer-bottom">
          <span>© {new Date().getFullYear()} Palmurugan Fresh Vegetables. All rights reserved.</span>
          <span>Designed for better everyday shopping.</span>
        </div>
      </footer>
    </div>
  );
}