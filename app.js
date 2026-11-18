const PRODUCTS = [
  {
    id: 'electrify-nitro-5',
    name: 'Electrify NITRO™ 5',
    subtitle: "Men's Running Shoes",
    category: 'men',
    tags: ['running', 'nitro', 'men', 'new'],
    price: 9999,
    mrp: null,
    badge: 'NEW',
    badgeType: 'new',
    image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/313488/01/sv01/fnd/IND/fmt/png/Electrify-NITRO%E2%84%A2-5-Running-Shoes',
    rail: ['fall', 'performance']
  },
  {
    id: 'palermo-leather',
    name: 'Palermo Leather Sneakers',
    subtitle: 'Unisex Terrace Sneakers',
    category: 'women',
    tags: ['sneakers', 'classics', 'palermo', 'women', 'unisex'],
    price: 6999,
    mrp: null,
    badge: 'BESTSELLER',
    badgeType: 'new',
    image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/396463/92/sv01/fnd/IND/fmt/png/Palermo-Sneakers',
    rail: ['fall', 'performance']
  },
  {
    id: 'speedcat-og-fall',
    name: 'Speedcat OG Motorsport',
    subtitle: 'Unisex Low-Profile Sneakers',
    category: 'men',
    tags: ['sneakers', 'speedcat', 'motorsport', 'men', 'unisex'],
    price: 9999,
    mrp: null,
    badge: 'NEW',
    badgeType: 'new',
    image: 'assets/fall-favorite-one.avif',
    rail: ['fall']
  },
  {
    id: 'speedcat-suede-w',
    name: "Speedcat Suede Women's",
    subtitle: "Women's Motorsport Sneakers",
    category: 'women',
    tags: ['sneakers', 'speedcat', 'motorsport', 'women', 'sale'],
    price: 7999,
    mrp: 9999,
    badge: '-20%',
    badgeType: 'sale',
    image: 'assets/fall-favorite-two.avif',
    rail: ['fall']
  },
  {
    id: 'speedcat-vtg-rose',
    name: 'Speedcat VTG x ROSÉ',
    subtitle: 'Unisex Limited Edition Sneakers',
    category: 'women',
    tags: ['sneakers', 'speedcat', 'classics', 'collab', 'women'],
    price: 10999,
    mrp: null,
    badge: 'LIMITED',
    badgeType: 'new',
    image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/410911/01/sv01/fnd/IND/fmt/png/Speedcat-VTG-Burgundy-x-ROS%C3%89-Sneakers',
    rail: ['fall', 'performance']
  },
  {
    id: 'speedcat-ballet',
    name: 'Speedcat Ballet',
    subtitle: "Women's Lifestyle Shoes",
    category: 'women',
    tags: ['sneakers', 'speedcat', 'women', 'sale'],
    price: 6999,
    mrp: 8499,
    badge: '-18%',
    badgeType: 'sale',
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/401287/06/sv01/fnd/IND/fmt/png/Speedcat-Women's-Ballet-Shoes",
    rail: ['fall', 'performance']
  },
  {
    id: 'velocity-nitro-pro',
    name: 'Velocity NITRO™ 3 Road',
    subtitle: "Men's Cushioned Running Shoes",
    category: 'men',
    tags: ['running', 'nitro', 'men', 'sale'],
    price: 8999,
    mrp: 12999,
    badge: '-31%',
    badgeType: 'sale',
    image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/313488/01/sv01/fnd/IND/fmt/png/Electrify-NITRO%E2%84%A2-5-Running-Shoes',
    rail: ['performance']
  },
  {
    id: 'palermo-vintage-club',
    name: 'Palermo Vintage Club',
    subtitle: "Men's Classics Sneakers",
    category: 'men',
    tags: ['sneakers', 'palermo', 'classics', 'men', 'sale'],
    price: 5599,
    mrp: 7999,
    badge: '-30%',
    badgeType: 'sale',
    image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/396463/92/sv01/fnd/IND/fmt/png/Palermo-Sneakers',
    rail: ['performance']
  }
];

const UK_SIZES = ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'];
const FREE_SHIPPING_THRESHOLD = 1999;

const FALLBACK_IMG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f5f5f5'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23999' font-family='Arial' font-size='18'%3EPUMA INDIA%3C/text%3E%3C/svg%3E";

const ANNOUNCEMENTS = [
  'FREE RETURNS AND EXCHANGES',
  'EXTRA 5% OFF ON ALL PREPAID ORDERS',
  'FREE SHIPPING ON ORDERS ABOVE ₹1,999'
];

// State
let cart = loadStorage('puma_cart', []);
let wishlist = loadStorage('puma_wishlist', []);
let user = loadStorage('puma_user', null);
let activeQuickViewProduct = null;
let selectedQuickViewSize = 'UK 8';
let toastTimer = null;

function loadStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function saveStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Ignore storage quota errors in private browsing
  }
}

function formatINR(amount) {
  return '₹' + Number(amount).toLocaleString('en-IN');
}

function escapeHTML(str) {
  return String(str).replace(/[&<>"']/g, ch => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[ch]));
}

// DOM References
const overlay = document.getElementById('overlay');
const cartDrawer = document.getElementById('cartDrawer');
const wishlistDrawer = document.getElementById('wishlistDrawer');
const mobileMenuDrawer = document.getElementById('mobileMenuDrawer');
const productModal = document.getElementById('productModal');
const accountModal = document.getElementById('accountModal');
const searchPanel = document.getElementById('searchPanel');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const toastEl = document.getElementById('toast');

// Toast Manager (race-condition free)
function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.add('visible');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toastEl.classList.remove('visible');
  }, 2600);
}

// Rotating Announcement Bar
function initAnnouncementBar() {
  const el = document.getElementById('announcementText');
  if (!el) return;
  let index = 0;
  window.setInterval(() => {
    el.classList.add('fade');
    window.setTimeout(() => {
      index = (index + 1) % ANNOUNCEMENTS.length;
      el.textContent = ANNOUNCEMENTS[index];
      el.classList.remove('fade');
    }, 260);
  }, 4200);
}

// Product Card Renderer
function createProductCardHTML(product) {
  const isSaved = wishlist.includes(product.id);
  const badgeHTML = product.badge
    ? `<span class="tag ${product.badgeType === 'sale' ? 'sale' : ''}">${escapeHTML(product.badge)}</span>`
    : '';
  const priceHTML = product.mrp
    ? `<span class="price is-sale">${formatINR(product.price)}</span><span class="old-price">${formatINR(product.mrp)}</span>`
    : `<span class="price">${formatINR(product.price)}</span>`;

  return `
    <article class="product-card" data-id="${product.id}" data-category="${product.category}" data-tags="${product.tags.join(',')}" tabindex="0" role="button" aria-label="View ${escapeHTML(product.name)}">
      <div class="product-image">
        ${badgeHTML}
        <button class="heart ${isSaved ? 'active' : ''}" type="button" data-wishlist="${product.id}" aria-label="${isSaved ? 'Remove' : 'Add'} ${escapeHTML(product.name)} ${isSaved ? 'from' : 'to'} wishlist" aria-pressed="${isSaved}">
          <svg viewBox="0 0 24 24"><path d="M20.8 8.8c0 5.3-8.8 10.2-8.8 10.2S3.2 14.1 3.2 8.8A4.5 4.5 0 0 1 12 6.5a4.5 4.5 0 0 1 8.8 2.3Z"/></svg>
        </button>
        <img src="${product.image}" alt="${escapeHTML(product.name)}" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">
        <button class="quick-add" type="button" data-quick-add="${product.id}">+ Quick Add (UK 8)</button>
      </div>
      <div class="product-info">
        <div class="product-info-top">
          <h3>${escapeHTML(product.name)}</h3>
          <div class="price-block">${priceHTML}</div>
        </div>
        <p>${escapeHTML(product.subtitle)}</p>
      </div>
    </article>
  `;
}

function renderRails() {
  const fallGrid = document.getElementById('fallFavoritesRail');
  const perfGrid = document.getElementById('performanceRail');

  if (fallGrid) {
    fallGrid.innerHTML = PRODUCTS.filter(p => p.rail.includes('fall')).map(createProductCardHTML).join('');
  }
  if (perfGrid) {
    perfGrid.innerHTML = PRODUCTS.filter(p => p.rail.includes('performance')).map(createProductCardHTML).join('');
  }
}

// Overlay & Drawer/Modal Management
function closeAllPanels() {
  [cartDrawer, wishlistDrawer, mobileMenuDrawer, productModal, accountModal].forEach(el => {
    if (el) {
      el.classList.remove('open');
      el.setAttribute('aria-hidden', 'true');
    }
  });
  searchPanel.classList.remove('open');
  overlay.classList.remove('visible');
  document.body.classList.remove('no-scroll');
}

function openPanel(panelEl) {
  closeAllPanels();
  panelEl.classList.add('open');
  panelEl.setAttribute('aria-hidden', 'false');
  overlay.classList.add('visible');
  document.body.classList.add('no-scroll');
}

// Cart Functions
function addToCart(productId, size = 'UK 8') {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId && item.size === size);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: productId, size, qty: 1 });
  }

  saveStorage('puma_cart', cart);
  renderCart();
  showToast(`Added ${product.name} (${size}) to your bag`);
}

function updateCartQty(productId, size, delta) {
  const idx = cart.findIndex(item => item.id === productId && item.size === size);
  if (idx === -1) return;

  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) {
    cart.splice(idx, 1);
  }
  saveStorage('puma_cart', cart);
  renderCart();
}

function removeFromCart(productId, size) {
  cart = cart.filter(item => !(item.id === productId && item.size === size));
  saveStorage('puma_cart', cart);
  renderCart();
}

function renderCart() {
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartCount = document.getElementById('cartCount');
  const drawerCount = document.getElementById('drawerCount');
  const cartBody = document.getElementById('cartBody');
  const cartFooter = document.getElementById('cartFooter');

  cartCount.textContent = totalQty;
  cartCount.dataset.empty = totalQty === 0 ? 'true' : 'false';
  drawerCount.textContent = `(${totalQty})`;

  if (cart.length === 0) {
    cartBody.innerHTML = `
      <div class="empty-state">
        <strong>Your Shopping Cart is Empty</strong>
        Explore our latest NITRO™, Speedcat, and Palermo drops to get started.
      </div>
    `;
    cartFooter.hidden = true;
    return;
  }

  let subtotal = 0;
  let totalMrp = 0;

  const itemsHTML = cart.map(entry => {
    const product = PRODUCTS.find(p => p.id === entry.id);
    if (!product) return '';
    const linePrice = product.price * entry.qty;
    const lineMrp = (product.mrp || product.price) * entry.qty;
    subtotal += linePrice;
    totalMrp += lineMrp;

    return `
      <div class="cart-item">
        <img src="${product.image}" alt="${escapeHTML(product.name)}" onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">
        <div>
          <div class="cart-item-head">
            <h4>${escapeHTML(product.name)}</h4>
            <strong>${formatINR(linePrice)}</strong>
          </div>
          <div class="cart-item-meta">${escapeHTML(product.subtitle)} · Size ${escapeHTML(entry.size)}</div>
          <div class="cart-item-controls">
            <div class="qty-control">
              <button type="button" data-qty-minus="${product.id}" data-size="${entry.size}" aria-label="Decrease quantity">−</button>
              <span>${entry.qty}</span>
              <button type="button" data-qty-plus="${product.id}" data-size="${entry.size}" aria-label="Increase quantity">+</button>
            </div>
            <button class="text-link-btn" type="button" data-remove-cart="${product.id}" data-size="${entry.size}">Remove</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  const remainingForFree = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const progressPct = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
  const shippingText = remainingForFree === 0
    ? 'You have unlocked FREE Express Shipping!'
    : `Add ${formatINR(remainingForFree)} more to unlock FREE Shipping`;

  cartBody.innerHTML = `
    <div class="shipping-progress">
      <div>${shippingText}</div>
      <div class="shipping-bar"><div class="shipping-bar-fill" style="width:${progressPct}%"></div></div>
    </div>
    ${itemsHTML}
  `;

  const savings = totalMrp - subtotal;
  const shippingFee = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 199;
  const grandTotal = subtotal + shippingFee;

  cartFooter.hidden = false;
  cartFooter.innerHTML = `
    <div class="summary-row"><span>Subtotal</span><span>${formatINR(subtotal)}</span></div>
    ${savings > 0 ? `<div class="summary-row" style="color:var(--red);"><span>You Save</span><span>−${formatINR(savings)}</span></div>` : ''}
    <div class="summary-row"><span>Shipping</span><span>${shippingFee === 0 ? 'FREE' : formatINR(shippingFee)}</span></div>
    <div class="summary-row total"><span>Estimated Total</span><span>${formatINR(grandTotal)}</span></div>
    <button class="button primary-dark full-width" type="button" id="checkoutBtn">Checkout Now</button>
  `;
}

// Wishlist Functions
function toggleWishlist(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const exists = wishlist.includes(productId);
  if (exists) {
    wishlist = wishlist.filter(id => id !== productId);
    showToast(`Removed ${product.name} from wishlist`);
  } else {
    wishlist.push(productId);
    showToast(`Saved ${product.name} to wishlist`);
  }

  saveStorage('puma_wishlist', wishlist);
  syncHeartButtons();
  renderWishlist();
}

function syncHeartButtons() {
  document.querySelectorAll('[data-wishlist]').forEach(btn => {
    const id = btn.dataset.wishlist;
    const isSaved = wishlist.includes(id);
    btn.classList.toggle('active', isSaved);
    btn.setAttribute('aria-pressed', String(isSaved));
  });

  const badge = document.getElementById('wishlistCount');
  if (badge) {
    badge.textContent = wishlist.length;
    badge.dataset.empty = wishlist.length === 0 ? 'true' : 'false';
  }
}

function renderWishlist() {
  const body = document.getElementById('wishlistBody');
  const countLabel = document.getElementById('wishlistDrawerCount');
  countLabel.textContent = `(${wishlist.length})`;

  if (wishlist.length === 0) {
    body.innerHTML = `
      <div class="empty-state">
        <strong>Your Wishlist is Empty</strong>
        Tap the heart icon on any sneaker or running shoe to save it here.
      </div>
    `;
    return;
  }

  body.innerHTML = wishlist.map(id => {
    const product = PRODUCTS.find(p => p.id === id);
    if (!product) return '';
    return `
      <div class="cart-item">
        <img src="${product.image}" alt="${escapeHTML(product.name)}" onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">
        <div>
          <div class="cart-item-head">
            <h4>${escapeHTML(product.name)}</h4>
            <strong>${formatINR(product.price)}</strong>
          </div>
          <div class="cart-item-meta">${escapeHTML(product.subtitle)}</div>
          <div class="cart-item-controls">
            <button class="button primary-dark" style="padding:8px 14px;font-size:11px;" type="button" data-move-to-cart="${product.id}">Move to Bag</button>
            <button class="text-link-btn" type="button" data-remove-wishlist="${product.id}">Remove</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Product Quick-View Modal
function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  activeQuickViewProduct = product;
  selectedQuickViewSize = 'UK 8';

  const isSaved = wishlist.includes(product.id);
  const content = document.getElementById('quickViewContent');
  content.innerHTML = `
    <div class="quickview-grid">
      <div class="quickview-media">
        ${product.badge ? `<span class="tag ${product.badgeType === 'sale' ? 'sale' : ''}">${escapeHTML(product.badge)}</span>` : ''}
        <img src="${product.image}" alt="${escapeHTML(product.name)}" onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">
      </div>
      <div class="quickview-details">
        <button class="close-btn" type="button" data-close-modal aria-label="Close quick view">×</button>
        <div class="quickview-category">${escapeHTML(product.subtitle)}</div>
        <h2>${escapeHTML(product.name)}</h2>
        <div class="quickview-price-row">
          <span class="quickview-price ${product.mrp ? 'is-sale' : ''}">${formatINR(product.price)}</span>
          ${product.mrp ? `<span class="old-price" style="display:inline;">${formatINR(product.mrp)}</span>` : ''}
        </div>
        <div class="size-label">
          <span>Select Size (UK)</span>
          <span style="color:var(--muted);font-weight:500;">Inclusive of all taxes</span>
        </div>
        <div class="size-grid">
          ${UK_SIZES.map(size => `
            <button type="button" class="size-btn ${size === selectedQuickViewSize ? 'selected' : ''}" data-select-size="${size}">${size}</button>
          `).join('')}
        </div>
        <div class="quickview-actions">
          <button type="button" class="button primary-dark full-width" id="quickViewAddBtn">Add to Cart</button>
          <button type="button" class="button outline-dark full-width" id="quickViewWishBtn">${isSaved ? 'Saved in Wishlist ♥' : 'Add to Wishlist ♡'}</button>
        </div>
      </div>
    </div>
  `;

  openPanel(productModal);
}

// Live Search
function renderSearchResults(query) {
  const q = query.trim().toLowerCase();
  const matches = q
    ? PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.tags.some(t => t.includes(q))
      )
    : PRODUCTS.slice(0, 4);

  if (matches.length === 0) {
    searchResults.innerHTML = `<div class="search-empty">No products found for "<strong>${escapeHTML(query)}</strong>". Try searching for Speedcat, Palermo, or NITRO.</div>`;
    return;
  }

  searchResults.innerHTML = matches.map(product => `
    <button type="button" class="search-result-card" data-search-pick="${product.id}">
      <img src="${product.image}" alt="${escapeHTML(product.name)}" onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">
      <div>
        <h4>${escapeHTML(product.name)}</h4>
        <p>${escapeHTML(product.subtitle)}</p>
        <strong>${formatINR(product.price)}</strong>
      </div>
    </button>
  `).join('');
}

// Section-scoped Category Tabs (Strictly scoped to #new)
function applyPerformanceFilter(filter) {
  const section = document.getElementById('new');
  if (!section) return;

  section.querySelectorAll('.tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.filter === filter);
  });

  section.querySelectorAll('.product-card').forEach(card => {
    const category = card.dataset.category;
    const tags = (card.dataset.tags || '').split(',');
    const match = filter === 'all' || category === filter || tags.includes(filter);
    card.classList.toggle('is-hidden', !match);
  });
}

// Account Modal
function renderAccountModal() {
  const body = document.getElementById('accountBody');
  const dot = document.getElementById('accountDot');
  dot.classList.toggle('visible', Boolean(user));

  if (user) {
    body.innerHTML = `
      <div style="padding:8px 0;">
        <p style="margin:0 0 6px;color:var(--muted);font-size:13px;text-transform:uppercase;font-weight:700;">Signed in as</p>
        <h3 style="margin:0 0 4px;font-family:var(--font-display);font-size:26px;text-transform:uppercase;">${escapeHTML(user.name)}</h3>
        <p style="margin:0 0 22px;color:var(--muted);font-size:14px;">${escapeHTML(user.email)}</p>
        <button type="button" class="button outline-dark full-width" id="signOutBtn">Sign Out</button>
      </div>
    `;
  } else {
    body.innerHTML = `
      <form id="accountForm">
        <div class="field">
          <label for="accName">Full Name</label>
          <input id="accName" type="text" placeholder="Enter your name" required>
        </div>
        <div class="field">
          <label for="accEmail">Email Address</label>
          <input id="accEmail" type="email" placeholder="you@example.com" required>
        </div>
        <div class="field">
          <label for="accPass">Password</label>
          <input id="accPass" type="password" placeholder="Minimum 6 characters" minlength="6" required>
        </div>
        <button type="submit" class="button primary-dark full-width">Sign In / Join PUMA</button>
      </form>
    `;
  }
}

// Event Delegation & Initialization
document.addEventListener('DOMContentLoaded', () => {
  initAnnouncementBar();
  renderRails();
  renderCart();
  syncHeartButtons();
  renderWishlist();
  renderAccountModal();
  renderSearchResults('');

  // Header buttons
  document.getElementById('cartButton').addEventListener('click', () => openPanel(cartDrawer));
  document.getElementById('wishlistButton').addEventListener('click', () => openPanel(wishlistDrawer));
  document.getElementById('menuButton').addEventListener('click', () => openPanel(mobileMenuDrawer));
  document.getElementById('accountButton').addEventListener('click', () => {
    renderAccountModal();
    openPanel(accountModal);
  });

  // Search button
  document.getElementById('searchButton').addEventListener('click', () => {
    const isOpen = searchPanel.classList.contains('open');
    closeAllPanels();
    if (!isOpen) {
      searchPanel.classList.add('open');
      renderSearchResults(searchInput.value);
      searchInput.focus();
    }
  });

  document.getElementById('searchClear').addEventListener('click', () => {
    searchInput.value = '';
    renderSearchResults('');
    searchInput.focus();
  });

  searchInput.addEventListener('input', event => {
    renderSearchResults(event.target.value);
  });

  // Trending search chips
  document.querySelectorAll('.search-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      searchInput.value = chip.dataset.query;
      renderSearchResults(chip.dataset.query);
      searchInput.focus();
    });
  });

  // Close overlays & drawers
  overlay.addEventListener('click', closeAllPanels);
  document.querySelectorAll('[data-close-panel]').forEach(btn => {
    btn.addEventListener('click', closeAllPanels);
  });

  // Close mobile drawer when clicking any link inside it
  mobileMenuDrawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeAllPanels);
  });

  // Close mobile drawer if viewport resizes to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 960 && mobileMenuDrawer.classList.contains('open')) {
      closeAllPanels();
    }
  });

  // Escape key closes any open panel
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeAllPanels();
  });

  // Carousel scroll arrows
  document.querySelectorAll('[data-rail-scroll]').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.railTarget;
      const direction = Number(btn.dataset.railScroll);
      const rail = document.getElementById(targetId);
      if (rail) {
        rail.scrollBy({ left: direction * 290, behavior: 'smooth' });
      }
    });
  });

  // Section-scoped Performance Favorites tabs
  document.querySelectorAll('#new .tab').forEach(tab => {
    tab.addEventListener('click', () => applyPerformanceFilter(tab.dataset.filter));
  });

  // Links that also trigger a category filter (e.g. Hero "For Him" / "For Her")
  document.querySelectorAll('[data-jump-filter]').forEach(link => {
    link.addEventListener('click', () => {
      applyPerformanceFilter(link.dataset.jumpFilter);
    });
  });

  // Product card delegation (Wishlist, Quick Add, Quick View)
  document.addEventListener('click', event => {
    const wishBtn = event.target.closest('[data-wishlist]');
    if (wishBtn) {
      event.stopPropagation();
      toggleWishlist(wishBtn.dataset.wishlist);
      return;
    }

    const quickAddBtn = event.target.closest('[data-quick-add]');
    if (quickAddBtn) {
      event.stopPropagation();
      addToCart(quickAddBtn.dataset.quickAdd, 'UK 8');
      return;
    }

    const productCard = event.target.closest('.product-card');
    if (productCard) {
      openQuickView(productCard.dataset.id);
      return;
    }

    // Search result click -> Quick View
    const searchPick = event.target.closest('[data-search-pick]');
    if (searchPick) {
      openQuickView(searchPick.dataset.searchPick);
      return;
    }

    // Quick view modal buttons
    if (event.target.closest('[data-close-modal]')) {
      closeAllPanels();
      return;
    }

    const sizeBtn = event.target.closest('[data-select-size]');
    if (sizeBtn) {
      selectedQuickViewSize = sizeBtn.dataset.selectSize;
      productModal.querySelectorAll('.size-btn').forEach(b => {
        b.classList.toggle('selected', b.dataset.selectSize === selectedQuickViewSize);
      });
      return;
    }

    if (event.target.id === 'quickViewAddBtn' && activeQuickViewProduct) {
      addToCart(activeQuickViewProduct.id, selectedQuickViewSize);
      openPanel(cartDrawer);
      return;
    }

    if (event.target.id === 'quickViewWishBtn' && activeQuickViewProduct) {
      toggleWishlist(activeQuickViewProduct.id);
      const isSaved = wishlist.includes(activeQuickViewProduct.id);
      event.target.textContent = isSaved ? 'Saved in Wishlist ♥' : 'Add to Wishlist ♡';
      return;
    }

    // Cart item actions
    const minusBtn = event.target.closest('[data-qty-minus]');
    if (minusBtn) {
      updateCartQty(minusBtn.dataset.qtyMinus, minusBtn.dataset.size, -1);
      return;
    }

    const plusBtn = event.target.closest('[data-qty-plus]');
    if (plusBtn) {
      updateCartQty(plusBtn.dataset.qtyPlus, plusBtn.dataset.size, 1);
      return;
    }

    const removeCartBtn = event.target.closest('[data-remove-cart]');
    if (removeCartBtn) {
      removeFromCart(removeCartBtn.dataset.removeCart, removeCartBtn.dataset.size);
      return;
    }

    if (event.target.id === 'checkoutBtn') {
      const itemCount = cart.reduce((s, i) => s + i.qty, 0);
      cart = [];
      saveStorage('puma_cart', cart);
      renderCart();
      closeAllPanels();
      showToast(`Order placed for ${itemCount} item(s)! Thank you for shopping PUMA India.`);
      return;
    }

    // Wishlist drawer actions
    const moveBtn = event.target.closest('[data-move-to-cart]');
    if (moveBtn) {
      addToCart(moveBtn.dataset.moveToCart, 'UK 8');
      toggleWishlist(moveBtn.dataset.moveToCart);
      openPanel(cartDrawer);
      return;
    }

    const removeWishBtn = event.target.closest('[data-remove-wishlist]');
    if (removeWishBtn) {
      toggleWishlist(removeWishBtn.dataset.removeWishlist);
      return;
    }

    // Account sign out
    if (event.target.id === 'signOutBtn') {
      user = null;
      saveStorage('puma_user', null);
      renderAccountModal();
      showToast('Signed out of your PUMA account.');
    }
  });

  // Keyboard support for opening product card with Enter/Space
  document.addEventListener('keydown', event => {
    if ((event.key === 'Enter' || event.key === ' ') && event.target.classList.contains('product-card')) {
      event.preventDefault();
      openQuickView(event.target.dataset.id);
    }
  });

  // Account form submit
  accountModal.addEventListener('submit', event => {
    if (event.target.id !== 'accountForm') return;
    event.preventDefault();
    const name = document.getElementById('accName').value.trim();
    const email = document.getElementById('accEmail').value.trim();
    if (!name || !email) return;
    user = { name, email };
    saveStorage('puma_user', user);
    renderAccountModal();
    closeAllPanels();
    showToast(`Welcome back, ${name}!`);
  });

  // Newsletter subscription
  document.getElementById('subscribeForm').addEventListener('submit', event => {
    event.preventDefault();
    const msg = document.getElementById('formMessage');
    msg.textContent = 'Welcome to PUMA India! Use code PUMA10 at checkout for 10% off your first order.';
    event.target.reset();
    showToast('Subscribed! Code PUMA10 unlocked.');
  });

  // Country selector button
  document.getElementById('countrySelector').addEventListener('click', () => {
    showToast('Currently shopping PUMA India (EN / ₹ INR)');
  });
});
