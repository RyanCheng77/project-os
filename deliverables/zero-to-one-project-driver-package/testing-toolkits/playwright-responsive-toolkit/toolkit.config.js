const toolkitConfig = {
  baseURL: process.env.BASE_URL || 'http://127.0.0.1:3001',
  mobileBreakpoint: 768,
  paths: {
    home: '/',
    detail: null
  },
  screenshot: {
    enabled: true,
    fullPageName: 'app-full-page.png',
    mobileName: 'app-mobile.png',
    maxDiffPixels: 100
  },
  selectors: {
    nav: '.nav',
    hero: '.hero',
    heroTitle: '.hero-title-main',
    heroSubtitle: '.hero-sub, .hero-desc',
    primaryButton: 'button, .btn, a.btn',
    cardGrid: '.fold2-grid, .card-grid, .grid',
    cards: '.fold2-info-card, .card',
    cardTitle: '.fold2-info-title, .card-title, h3',
    detailPage: '.detail-page, .modal, .drawer',
    detailMedia: '.detail-main-media, .detail-media, img, video',
    navBackButton: '#navDetailBackBtn, .detail-back-btn, .back-btn'
  }
};

export default toolkitConfig;
