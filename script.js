const products = [
  {
    id: 1,
    name: "ساعة ذكية برو 5",
    category: "electronic",
    price: 899,
    oldPrice: 1199,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=900&q=80",
    badge: "الأكثر طلبًا",
    description: "ساعة ذكية مزودة بمراقبة النشاط والمكالمات والقياسات الصحية.",
  },
  {
    id: 2,
    name: "حذاء رياضي ألترا",
    category: "fashion",
    price: 329,
    oldPrice: 470,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    badge: "خصم 30%",
    description: "حذاء مريح ومرن للأداء اليومي والأنشطة الرياضية الخفيفة.",
  },
  {
    id: 3,
    name: "مروحة منزلية Elite",
    category: "home",
    price: 499,
    oldPrice: 650,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1555626906-fcf10d6851b4?auto=format&fit=crop&w=900&q=80",
    badge: "جديد",
    description: "مروحة عالية الكفاءة مع تصميم أنيق ومريح للمساحات الصغيرة.",
  },
  {
    id: 4,
    name: "مجموعة عناية بالبشرة",
    category: "beauty",
    price: 259,
    oldPrice: 390,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
    badge: "أفضل اختيار",
    description: "مجموعة كاملة للعناية بالبشرة مع مكونات طبيعية ومضادة للشيخوخة.",
  },
  {
    id: 5,
    name: "سماعات لاسلكية X9",
    category: "electronic",
    price: 420,
    oldPrice: 540,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80",
    badge: "تخفيض",
    description: "سماعات لاسلكية ذات جودة صوت عالية ومقاومة للماء.",
  },
  {
    id: 6,
    name: "جاكيت أنيق كاجوال",
    category: "fashion",
    price: 450,
    oldPrice: 620,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
    badge: "مميز",
    description: "جاكيت أنيق يناسب الزي اليومي ويضيف لمسة عصرية للأناقة.",
  },
  {
    id: 7,
    name: "ديكور منزلي فاخر",
    category: "home",
    price: 300,
    oldPrice: 410,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    badge: "قيمة",
    description: "قطع ديكور أنيقة تضيف دفئًا وأناقة لأي غرفة معيشة.",
  },
  {
    id: 8,
    name: "مستحضرات عناية الشعر",
    category: "beauty",
    price: 189,
    oldPrice: 250,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
    badge: "مميز",
    description: "مجموعة كاملة للعناية بالشعر وتغذيته من الجذور حتى الأطراف.",
  },
];

const STORAGE_KEY = "bahrAwsliUsers";
const CURRENT_USER_KEY = "bahrAwsliCurrentUser";

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const cartToggle = document.getElementById("cartToggle");
const cartPanel = document.getElementById("cartPanel");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const subtotalEl = document.getElementById("subtotal");
const totalEl = document.getElementById("total");
const categoryButtons = document.querySelectorAll(".category-card");
const authOverlay = document.getElementById("authOverlay");
const authMessage = document.getElementById("authMessage");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const authModeButtons = document.querySelectorAll(".auth-mode-btn");
const userActions = document.getElementById("userActions");
const userGreeting = document.getElementById("userGreeting");
const logoutBtn = document.getElementById("logoutBtn");

let activeCategory = "all";
let cart = [];

function readStorage(key, fallback = []) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(error);
  }
}

function getUsers() {
  return readStorage(STORAGE_KEY, []);
}

function saveUsers(users) {
  writeStorage(STORAGE_KEY, users);
}

function getCurrentUser() {
  return readStorage(CURRENT_USER_KEY, null);
}

function setCurrentUser(user) {
  writeStorage(CURRENT_USER_KEY, user);
}

function clearCurrentUser() {
  localStorage.removeItem(CURRENT_USER_KEY);
}

function formatPrice(value) {
  return `SAR ${value.toLocaleString("en-US")}`;
}

function showAuthModal(message = "") {
  if (message) {
    authMessage.textContent = message;
  }
  authOverlay.classList.remove("hidden");
}

function hideAuthModal() {
  authOverlay.classList.add("hidden");
  authMessage.textContent = "";
}

function renderUserState() {
  const user = getCurrentUser();

  if (user) {
    userGreeting.textContent = `مرحباً ${user.name}`;
    userActions.classList.remove("hidden");
    return;
  }

  userActions.classList.add("hidden");
  showAuthModal("يرجى تسجيل الدخول لإتمام الطلب أو إضافة منتجات إلى السلة.");
}

function setAuthMode(mode) {
  const isLogin = mode === "login";
  authModeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === mode);
  });

  loginForm.classList.toggle("hidden", !isLogin);
  registerForm.classList.toggle("hidden", isLogin);
}

function ensureLoggedIn() {
  if (!getCurrentUser()) {
    showAuthModal("يرجى تسجيل الدخول أولاً.");
    return false;
  }

  return true;
}

function renderProducts() {
  const searchValue = searchInput.value.trim().toLowerCase();

  let filteredProducts = products.filter((product) => {
    const categoryMatch = activeCategory === "all" || product.category === activeCategory;
    const searchMatch = product.name.toLowerCase().includes(searchValue);
    return categoryMatch && searchMatch;
  });

  const sortValue = sortSelect.value;
  if (sortValue === "low-high") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortValue === "high-low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  if (!filteredProducts.length) {
    productGrid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1; min-height: 220px;">
        <div class="empty-icon">🔎</div>
        <p>لا توجد منتجات تطابق البحث الحالي.</p>
      </div>
    `;
    return;
  }

  productGrid.innerHTML = filteredProducts
    .map(
      (product) => `
        <article class="product-card">
          <div class="product-image">
            <img src="${product.image}" alt="${product.name}" />
            <span class="badge">${product.badge}</span>
          </div>
          <div class="product-body">
            <div class="product-title-row">
              <h3>${product.name}</h3>
              <span class="product-rating">★ ${product.rating}</span>
            </div>
            <p class="product-description">${product.description}</p>
            <div class="product-meta">
              <div class="price-wrap">
                <span class="price">${formatPrice(product.price)}</span>
                <span class="old-price">${formatPrice(product.oldPrice)}</span>
              </div>
              <button class="add-btn" data-id="${product.id}">إضافة</button>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function addToCart(productId) {
  if (!ensureLoggedIn()) return;

  const product = products.find((item) => item.id === Number(productId));
  if (!product) return;

  const existingItem = cart.find((item) => item.id === Number(productId));
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCartUI();
}

function updateCartUI() {
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = itemCount;

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  subtotalEl.textContent = formatPrice(total);
  totalEl.textContent = formatPrice(total);

  if (!cart.length) {
    cartItems.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🛍️</div>
        <p>سلة التسوق فارغة</p>
      </div>
    `;
    return;
  }

  cartItems.innerHTML = cart
    .map(
      (item) => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" />
          <div>
            <h4>${item.name}</h4>
            <p>${formatPrice(item.price)}</p>
            <div class="item-actions">
              <div class="qty-controls">
                <button class="decrease-btn" data-id="${item.id}">−</button>
                <span>${item.quantity}</span>
                <button class="increase-btn" data-id="${item.id}">+</button>
              </div>
            </div>
          </div>
          <div class="item-total">${formatPrice(item.price * item.quantity)}</div>
        </div>
      `
    )
    .join("");
}

function changeQuantity(productId, change) {
  if (!ensureLoggedIn()) return;

  const item = cart.find((entry) => entry.id === Number(productId));
  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    cart = cart.filter((entry) => entry.id !== Number(productId));
  }

  updateCartUI();
}

searchInput.addEventListener("input", renderProducts);
sortSelect.addEventListener("change", renderProducts);

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    categoryButtons.forEach((btn) => btn.classList.toggle("active", btn === button));
    renderProducts();
  });
});

productGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".add-btn");
  if (!button) return;
  addToCart(button.dataset.id);
});

cartItems.addEventListener("click", (event) => {
  const increaseButton = event.target.closest(".increase-btn");
  if (increaseButton) {
    changeQuantity(increaseButton.dataset.id, 1);
    return;
  }

  const decreaseButton = event.target.closest(".decrease-btn");
  if (decreaseButton) {
    changeQuantity(decreaseButton.dataset.id, -1);
  }
});

cartToggle.addEventListener("click", () => {
  if (!ensureLoggedIn()) return;
  cartPanel.classList.toggle("open");
});

closeCart.addEventListener("click", () => {
  cartPanel.classList.remove("open");
});

logoutBtn.addEventListener("click", () => {
  clearCurrentUser();
  cart = [];
  updateCartUI();
  renderUserState();
  cartPanel.classList.remove("open");
});

authModeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setAuthMode(button.dataset.mode);
  });
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("loginEmail").value.trim().toLowerCase();
  const password = document.getElementById("loginPassword").value.trim();
  const users = getUsers();
  const user = users.find((entry) => entry.email === email && entry.password === password);

  if (!user) {
    authMessage.textContent = "البريد الإلكتروني أو كلمة المرور غير صحيحة.";
    return;
  }

  setCurrentUser({ name: user.name, email: user.email });
  renderUserState();
  hideAuthModal();
  loginForm.reset();
  document.getElementById("loginPassword").value = "";
});

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("registerName").value.trim();
  const email = document.getElementById("registerEmail").value.trim().toLowerCase();
  const password = document.getElementById("registerPassword").value.trim();
  const users = getUsers();

  if (!name || !email || password.length < 6) {
    authMessage.textContent = "يرجى إدخال بيانات صحيحة، ويفضل أن تكون كلمة المرور 6 أحرف على الأقل.";
    return;
  }

  const isExists = users.some((entry) => entry.email === email);
  if (isExists) {
    authMessage.textContent = "هذا البريد الإلكتروني مسجل بالفعل.";
    return;
  }

  const newUser = { name, email, password };
  users.push(newUser);
  saveUsers(users);
  setCurrentUser({ name, email });
  renderUserState();
  hideAuthModal();
  registerForm.reset();
});

renderUserState();
renderProducts();
updateCartUI();
setAuthMode("login");

const checkoutBtn = document.querySelector(".checkout-btn");
if (checkoutBtn) {
  checkoutBtn.addEventListener("click", () => {
    if (!ensureLoggedIn()) return;
    alert("تم إرسال طلبك بنجاح! شكراً لك على التسوق من متجر بحر أوسلي.");
  });
}
