// ============================================================
// MENU DATA
// ============================================================
const menuData = [
  {
    category: 'Starters',
    icon: '🥗',
    items: [
      { id: 1, name: 'Paneer Tikka', desc: 'Grilled cottage cheese marinated in spices', price: 220, veg: true, image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop' },
      { id: 2, name: 'Samosa (2 pcs)', desc: 'Crispy pastry with spiced potato filling', price: 60, veg: true, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop' },
      { id: 3, name: 'Chicken Seekh Kebab', desc: 'Minced chicken skewers with herbs', price: 280, veg: false, image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop' },
      { id: 4, name: 'Hara Bhara Kebab', desc: 'Spinach and peas patties, shallow fried', price: 180, veg: true, image: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=400&h=300&fit=crop' },
    ]
  },
  {
    category: 'Main Course',
    icon: '🍛',
    items: [
      { id: 5, name: 'Butter Chicken', desc: 'Tender chicken in creamy tomato gravy', price: 320, veg: false, image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop' },
      { id: 6, name: 'Paneer Butter Masala', desc: 'Cottage cheese in rich buttery sauce', price: 260, veg: true, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop' },
      { id: 7, name: 'Dal Makhani', desc: 'Slow-cooked black lentils with cream', price: 200, veg: true, image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400&h=300&fit=crop' },
      { id: 8, name: 'Mutton Rogan Josh', desc: 'Kashmiri style slow-cooked lamb curry', price: 420, veg: false, image: 'https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400&h=300&fit=crop' },
      { id: 9, name: 'Chicken Biryani', desc: 'Fragrant basmati rice with spiced chicken', price: 300, veg: false, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop' },
      { id: 10, name: 'Veg Biryani', desc: 'Aromatic rice with mixed vegetables', price: 220, veg: true, image: 'https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=400&h=300&fit=crop' },
    ]
  },
  {
    category: 'Breads',
    icon: '🫓',
    items: [
      { id: 11, name: 'Butter Naan', desc: 'Soft flatbread with butter', price: 50, veg: true, image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop' },
      { id: 12, name: 'Garlic Naan', desc: 'Naan topped with garlic and coriander', price: 60, veg: true, image: 'https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400&h=300&fit=crop' },
      { id: 13, name: 'Tandoori Roti', desc: 'Whole wheat bread from clay oven', price: 30, veg: true, image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop' },
      { id: 14, name: 'Laccha Paratha', desc: 'Layered flaky whole wheat bread', price: 55, veg: true, image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop' },
    ]
  },
  {
    category: 'Desserts',
    icon: '🍮',
    items: [
      { id: 15, name: 'Gulab Jamun (2 pcs)', desc: 'Deep-fried milk dumplings in syrup', price: 80, veg: true, image: 'https://images.unsplash.com/photo-1666190094762-a8e4e498d36b?w=400&h=300&fit=crop' },
      { id: 16, name: 'Rasmalai (2 pcs)', desc: 'Soft cottage cheese in saffron milk', price: 120, veg: true, image: 'https://images.unsplash.com/photo-1666190094762-a8e4e498d36b?w=400&h=300&fit=crop' },
      { id: 17, name: 'Kheer', desc: 'Creamy rice pudding with nuts', price: 100, veg: true, image: 'https://images.unsplash.com/photo-1666190094762-a8e4e498d36b?w=400&h=300&fit=crop' },
    ]
  },
  {
    category: 'Beverages',
    icon: '🥤',
    items: [
      { id: 18, name: 'Masala Chai', desc: 'Spiced Indian tea with milk', price: 40, veg: true, image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=300&fit=crop' },
      { id: 19, name: 'Mango Lassi', desc: 'Sweet yogurt drink with mango', price: 90, veg: true, image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?w=400&h=300&fit=crop' },
      { id: 20, name: 'Cold Coffee', desc: 'Chilled coffee with ice cream', price: 110, veg: true, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop' },
    ]
  }
];

// ============================================================
// STATE
// ============================================================
let cart = {};
let activeCategory = menuData[0].category;

// ============================================================
// RENDER FUNCTIONS
// ============================================================

function renderCategoryTabs() {
  const container = document.getElementById('category-tabs');
  container.innerHTML = menuData.map(cat => `
    <button onclick="scrollToCategory('${cat.category}')"
      class="category-tab whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${cat.category === activeCategory ? 'cat-active text-white' : 'bg-gray-100/80 text-gray-600 hover:bg-gray-200/80 hover:text-gray-800'}"
      data-category="${cat.category}">
      <span class="mr-1.5">${cat.icon}</span>${cat.category}
    </button>
  `).join('');
}

function renderMenu() {
  const container = document.getElementById('menu-container');
  container.innerHTML = menuData.map((cat, ci) => `
    <section id="section-${cat.category.replace(/\s/g, '-')}" class="mb-12">
      <div class="mb-6">
        <h2 class="section-title font-display text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-3">
          <span class="text-2xl">${cat.icon}</span>
          ${cat.category}
        </h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        ${cat.items.map((item, ii) => renderMenuCard(item, ci * 6 + ii)).join('')}
      </div>
    </section>
  `).join('');
  observeReveal();
}

function renderMenuCard(item, index) {
  const qty = cart[item.id] || 0;
  const hasItem = qty > 0;
  const vegBadge = item.veg
    ? `<div class="veg-dot w-4 h-4 rounded-sm flex items-center justify-center" title="Vegetarian"><div class="w-2 h-2 rounded-full bg-green-500"></div></div>`
    : `<div class="nonveg-dot w-4 h-4 rounded-sm flex items-center justify-center" title="Non-Vegetarian"><div class="w-2 h-2 rounded-full bg-red-500"></div></div>`;

  return `
    <div class="reveal menu-card bg-white rounded-2xl overflow-hidden border ${hasItem ? 'card-selected border-brand-200' : 'border-gray-100/80 shadow-sm'}" id="card-${item.id}" style="transition-delay: ${index * 60}ms">
      <div class="relative h-48 overflow-hidden bg-gray-100">
        <img src="${item.image}" alt="${item.name}" class="card-img w-full h-full object-cover" loading="lazy"
          onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22><rect fill=%22%23f3f4f6%22 width=%22400%22 height=%22300%22/><text fill=%22%239ca3af%22 font-family=%22sans-serif%22 font-size=%2216%22 x=%2250%%22 y=%2250%%22 text-anchor=%22middle%22 dy=%22.3em%22>No Image</text></svg>'">
        <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        <div class="absolute top-3 left-3">${vegBadge}</div>
        ${hasItem ? `<div class="absolute top-3 right-3 bg-gradient-to-br from-brand-500 to-brand-600 text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center shadow-lg shadow-brand-500/40">${qty}</div>` : ''}
        <div class="absolute bottom-3 right-3 price-tag backdrop-blur-sm text-brand-700 font-bold text-sm px-3 py-1 rounded-lg shadow-sm">
          &#8377;${item.price}
        </div>
      </div>
      <div class="p-4">
        <h3 class="font-semibold text-gray-900 text-[15px] leading-snug mb-1">${item.name}</h3>
        <p class="text-gray-400 text-xs leading-relaxed mb-4 line-clamp-2">${item.desc}</p>
        <div class="flex items-center justify-between">
          ${qty > 0 ? `
            <div class="flex items-center gap-2.5">
              <button onclick="updateQty(${item.id}, -1)" class="qty-btn w-9 h-9 rounded-full bg-gray-100 hover:bg-red-50 hover:text-red-600 flex items-center justify-center text-gray-600 font-bold text-lg transition-colors">−</button>
              <span class="font-bold text-gray-900 w-7 text-center text-lg">${qty}</span>
              <button onclick="updateQty(${item.id}, 1)" class="qty-btn w-9 h-9 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-brand-500/30">+</button>
            </div>
            <span class="text-sm font-bold text-brand-600 bg-brand-50 px-3 py-1.5 rounded-lg">&#8377;${item.price * qty}</span>
          ` : `
            <button onclick="updateQty(${item.id}, 1)" class="qty-btn w-full py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-700 hover:to-brand-600 text-white font-semibold text-sm transition-all duration-200 shadow-md shadow-brand-500/20 hover:shadow-brand-500/30 flex items-center justify-center gap-1.5 hover:scale-[1.02] active:scale-95">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4"/></svg>
              Add to Order
            </button>
          `}
        </div>
      </div>
    </div>
  `;
}

function renderCart() {
  const cartItemsContainer = document.getElementById('cart-items');
  const items = getCartItems();

  if (items.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="text-center py-16">
        <div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
          </svg>
        </div>
        <p class="text-gray-500 font-semibold">Your cart is empty</p>
        <p class="text-gray-400 text-sm mt-1">Add items from the menu</p>
      </div>
    `;
    document.getElementById('cart-place-order-btn').classList.add('hidden');
  } else {
    cartItemsContainer.innerHTML = items.map(({ item, qty, total }) => `
      <div class="flex items-center gap-3 bg-gray-50/80 hover:bg-gray-50 rounded-xl p-3 transition-colors">
        <img src="${item.image}" alt="${item.name}" class="w-14 h-14 rounded-lg object-cover flex-shrink-0 shadow-sm"
          onerror="this.style.display='none'">
        <div class="flex-1 min-w-0">
          <p class="font-semibold text-gray-900 text-sm truncate">${item.name}</p>
          <p class="text-xs text-gray-400 mt-0.5">&#8377;${item.price} &times; ${qty}</p>
        </div>
        <div class="flex items-center gap-2 flex-shrink-0">
          <button onclick="updateQty(${item.id}, -1)" class="qty-btn w-7 h-7 rounded-full bg-white border border-gray-200 hover:border-red-300 hover:bg-red-50 hover:text-red-600 flex items-center justify-center text-sm font-bold transition-colors">−</button>
          <span class="w-5 text-center font-bold text-sm">${qty}</span>
          <button onclick="updateQty(${item.id}, 1)" class="qty-btn w-7 h-7 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white flex items-center justify-center text-sm font-bold shadow-sm">+</button>
        </div>
        <span class="font-bold text-gray-900 text-sm w-16 text-right">&#8377;${total}</span>
      </div>
    `).join('');
    document.getElementById('cart-place-order-btn').classList.remove('hidden');
  }

  const grandTotal = items.reduce((sum, i) => sum + i.total, 0);
  document.getElementById('cart-grand-total').textContent = grandTotal;

  const totalQty = items.reduce((sum, i) => sum + i.qty, 0);
  const floatingBar = document.getElementById('floating-cart');
  if (totalQty > 0) {
    floatingBar.classList.remove('hidden');
    document.getElementById('floating-count').textContent = totalQty;
    document.getElementById('floating-total').textContent = grandTotal;
  } else {
    floatingBar.classList.add('hidden');
  }

  const badge = document.getElementById('cart-badge');
  if (totalQty > 0) {
    badge.classList.remove('hidden');
    badge.classList.add('flex');
    badge.textContent = totalQty;
    badge.classList.add('pulse-badge');
    setTimeout(() => badge.classList.remove('pulse-badge'), 400);
  } else {
    badge.classList.add('hidden');
    badge.classList.remove('flex');
  }
}

function renderModalSummary() {
  const items = getCartItems();
  const summaryContainer = document.getElementById('modal-summary');
  if (items.length === 0) {
    summaryContainer.innerHTML = '<p class="text-gray-400">No items selected</p>';
  } else {
    summaryContainer.innerHTML = items.map(({ item, qty, total }) => `
      <div class="flex justify-between items-center">
        <span class="text-gray-600">${item.name} <span class="text-gray-400">&times; ${qty}</span></span>
        <span class="font-semibold text-gray-900">&#8377;${total}</span>
      </div>
    `).join('');
  }
  const grandTotal = items.reduce((sum, i) => sum + i.total, 0);
  document.getElementById('modal-total').textContent = grandTotal;
}

// ============================================================
// CART LOGIC
// ============================================================

function findMenuItem(id) {
  for (const cat of menuData) {
    for (const item of cat.items) {
      if (item.id === id) return item;
    }
  }
  return null;
}

function getCartItems() {
  return Object.entries(cart)
    .filter(([, qty]) => qty > 0)
    .map(([id, qty]) => {
      const item = findMenuItem(Number(id));
      return { item, qty, total: item.price * qty };
    });
}

function updateQty(id, delta) {
  const current = cart[id] || 0;
  const next = current + delta;
  if (next <= 0) {
    delete cart[id];
  } else {
    cart[id] = next;
  }
  if (delta > 0) showToast(`Added ${findMenuItem(id).name}`);
  renderMenu();
  renderCart();
}

// ============================================================
// SCROLL REVEAL
// ============================================================

function observeReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ============================================================
// NAVIGATION
// ============================================================

function scrollToCategory(category) {
  activeCategory = category;
  renderCategoryTabs();
  const section = document.getElementById(`section-${category.replace(/\s/g, '-')}`);
  if (section) {
    const headerHeight = 130;
    const top = section.getBoundingClientRect().top + window.pageYOffset - headerHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

const categoryObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const cat = entry.target.id.replace('section-', '').replace(/-/g, ' ');
      activeCategory = cat;
      renderCategoryTabs();
    }
  });
}, { rootMargin: '-140px 0px -60% 0px', threshold: 0 });

function observeSections() {
  menuData.forEach(cat => {
    const section = document.getElementById(`section-${cat.category.replace(/\s/g, '-')}`);
    if (section) categoryObserver.observe(section);
  });
}

// ============================================================
// CART SIDEBAR
// ============================================================

function toggleCart() {
  const overlay = document.getElementById('cart-overlay');
  const sidebar = document.getElementById('cart-sidebar');
  const isOpen = !sidebar.classList.contains('translate-x-full');

  if (isOpen) {
    sidebar.classList.add('translate-x-full');
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
  } else {
    renderCart();
    sidebar.classList.remove('translate-x-full');
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

// ============================================================
// ORDER MODAL
// ============================================================

function openOrderModal() {
  const items = getCartItems();
  if (items.length === 0) {
    showToast('Please add items first', 'error');
    return;
  }
  renderModalSummary();
  document.getElementById('order-modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  const sidebar = document.getElementById('cart-sidebar');
  if (!sidebar.classList.contains('translate-x-full')) {
    toggleCart();
  }
}

function closeOrderModal() {
  document.getElementById('order-modal').classList.add('hidden');
  document.body.style.overflow = '';
}

function closeSuccessModal() {
  document.getElementById('success-modal').classList.add('hidden');
  document.body.style.overflow = '';
}

// ============================================================
// ORDER SUBMISSION (AIRTABLE)
// ============================================================

async function submitOrder(e) {
  e.preventDefault();
  const name = document.getElementById('customer-name').value.trim();
  const table = document.getElementById('table-number').value.trim();

  if (!name) {
    showToast('Please enter your name', 'error');
    return;
  }

  const items = getCartItems();
  if (items.length === 0) {
    showToast('No items in order', 'error');
    return;
  }

  const submitBtn = document.getElementById('submit-order-btn');
  submitBtn.disabled = true;
  submitBtn.innerHTML = `
    <svg class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    <span>Submitting...</span>
  `;

  const grandTotal = items.reduce((sum, i) => sum + i.total, 0);
  const orderItems = items.map(({ item, qty, total }) => ({
    id: item.id,
    name: item.name,
    price: item.price,
    quantity: qty,
    subtotal: total
  }));

  const record = {
    fields: {
      'Customer Name': name,
      'Table Number': table || 'N/A',
      'Ordered Items': JSON.stringify(orderItems, null, 2),
      'Total Price': grandTotal,
      'Timestamp': new Date().toLocaleString('sv-SE', { timeZone: 'Asia/Kolkata' }).replace(' ', 'T') + '+05:30',
      'Status': 'pending'
    }
  };

  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_CONFIG.baseId}/${encodeURIComponent(AIRTABLE_CONFIG.tableName)}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${AIRTABLE_CONFIG.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(record),
      }
    );

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData.error?.message || `HTTP ${response.status}`);
    }

    closeOrderModal();
    cart = {};
    renderMenu();
    renderCart();
    document.getElementById('order-form').reset();
    document.getElementById('success-modal').classList.remove('hidden');

  } catch (err) {
    console.error('Order submission failed:', err);
    showToast(`Order failed: ${err.message}. Please try again.`, 'error');

    const fallbackData = { customerName: name, tableNumber: table || 'N/A', items: orderItems, totalPrice: grandTotal, timestamp: new Date().toLocaleString('sv-SE', { timeZone: 'Asia/Kolkata' }).replace(' ', 'T') + '+05:30' };
    const blob = new Blob([JSON.stringify(fallbackData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `order-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Order saved locally as backup', 'info');
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = '<span>Submit Order</span>';
  }
}

// ============================================================
// TOAST
// ============================================================

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  const icons = { success: '✓', error: '✕', info: 'ℹ' };
  const colors = {
    success: 'bg-gray-900 text-white',
    error: 'bg-red-600 text-white',
    info: 'bg-blue-600 text-white'
  };
  toast.className = `toast ${colors[type] || colors.success} text-sm font-medium px-5 py-3 rounded-xl shadow-xl flex items-center gap-2`;
  toast.innerHTML = `<span class="font-bold">${icons[type] || icons.success}</span> ${message}`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// ============================================================
// INIT
// ============================================================

function init() {
  renderCategoryTabs();
  renderMenu();
  renderCart();
  observeSections();
  document.getElementById('order-form').addEventListener('submit', submitOrder);

  document.getElementById('order-modal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeOrderModal();
  });
  document.getElementById('success-modal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeSuccessModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeOrderModal();
      closeSuccessModal();
      const sidebar = document.getElementById('cart-sidebar');
      if (!sidebar.classList.contains('translate-x-full')) toggleCart();
    }
  });
}

document.addEventListener('DOMContentLoaded', init);
