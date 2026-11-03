import { useEffect } from "react";

const motionTargets = [
    ".home-page .home-hero .row > div",
    ".home-page .home-benefit",
    ".home-page .home-product-card",
    ".home-page .home-story-section .row > div",
    ".home-page .home-cta-section",
    ".products-page .products-hero-content",
    ".products-page .products-hero-note",
    ".products-page .products-card",
    ".products-page .products-trust-strip",
    ".about-page .about-hero .container",
    ".about-page .about-content .row > div",
    ".about-page .about-value-card",
    ".about-page .about-cta",
    ".contact-page .contact-hero .container",
    ".contact-page .contact-info-card",
    ".contact-page .contact-form-card",
    ".cart-page .cart-heading",
    ".cart-page .cart-item",
    ".cart-page .cart-summary",
    ".cart-page .cart-empty",
    ".order-page .order-heading",
    ".order-page .order-card",
    ".admin-page .admin-heading",
    ".admin-page .admin-stat-card",
    ".admin-page .admin-order-card",
    ".admin-login-page .admin-login-card"
].join(",");

export default function usePageMotion() {
    useEffect(() => {
        const elements = [...document.querySelectorAll(motionTargets)];
        if (!elements.length) return undefined;

        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reducedMotion || !("IntersectionObserver" in window)) {
            elements.forEach((element) => element.classList.add("motion-visible"));
            return undefined;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("motion-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });

        elements.forEach((element, index) => {
            element.classList.add("motion-reveal");
            element.style.setProperty("--motion-delay", `${(index % 4) * 70}ms`);
            observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);
}
