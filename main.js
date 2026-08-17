// Translations
const translations = {
    fr: {
        home: 'Accueil',
        products: 'Produits',
        features: 'Fonctionnalités',
        contact: 'Contact',
        heroTitle: 'Bienvenue sur EcoShop',
        heroSubtitle: 'Découvrez nos produits de qualité exceptionnelle',
        shopNow: 'Acheter Maintenant',
        ourProducts: 'Nos Produits',
        freeShipping: 'Livraison Gratuite',
        freeShippingDesc: 'Pour toutes commandes supérieures à 50€',
        securePayment: 'Paiement Sécurisé',
        securePaymentDesc: 'Vos transactions sont 100% sécurisées',
        easyReturns: 'Retours Faciles',
        easyReturnsDesc: '30 jours pour retourner votre produit',
        support247: 'Support 24/7',
        support247Desc: 'Notre équipe est toujours là pour vous',
        about: 'À propos',
        privacy: 'Confidentialité',
        terms: 'Conditions',
        footerText: '© 2025 EcoShop. Tous droits réservés.',
        yourCart: 'Votre Panier',
        total: 'Total:',
        checkout: 'Passer la Commande',
        installApp: 'Installer l\'application',
        installAppDesc: 'Installez EcoShop pour une expérience optimale',
        later: 'Plus tard',
        install: 'Installer',
        addToCart: 'Ajouter au panier',
        dashboard: 'Tableau de bord',
        orders: 'Commandes',
        customers: 'Clients',
        analytics: 'Analytiques',
        settings: 'Paramètres',
        logout: 'Déconnexion',
        totalSales: 'Ventes Totales',
        totalOrders: 'Commandes',
        totalCustomers: 'Clients',
        totalProducts: 'Produits',
        recentOrders: 'Commandes Récentes',
        newOrder: 'Nouvelle Commande',
        productList: 'Liste des Produits',
        newProduct: 'Nouveau Produit',
        orderId: 'ID',
        customer: 'Client',
        date: 'Date',
        amount: 'Montant',
        status: 'Statut',
        actions: 'Actions',
        image: 'Image',
        name: 'Nom',
        category: 'Catégorie',
        price: 'Prix',
        stock: 'Stock',
        addProduct: 'Ajouter un Produit',
        addOrder: 'Ajouter une Commande',
        productName: 'Nom du produit',
        description: 'Description',
        save: 'Enregistrer',
        customerName: 'Nom du client',
        email: 'Email'
    },
    en: {
        home: 'Home',
        products: 'Products',
        features: 'Features',
        contact: 'Contact',
        heroTitle: 'Welcome to EcoShop',
        heroSubtitle: 'Discover our exceptional quality products',
        shopNow: 'Shop Now',
        ourProducts: 'Our Products',
        freeShipping: 'Free Shipping',
        freeShippingDesc: 'For all orders over €50',
        securePayment: 'Secure Payment',
        securePaymentDesc: 'Your transactions are 100% secure',
        easyReturns: 'Easy Returns',
        easyReturnsDesc: '30 days to return your product',
        support247: '24/7 Support',
        support247Desc: 'Our team is always here for you',
        about: 'About',
        privacy: 'Privacy',
        terms: 'Terms',
        footerText: '© 2025 EcoShop. All rights reserved.',
        yourCart: 'Your Cart',
        total: 'Total:',
        checkout: 'Checkout',
        installApp: 'Install App',
        installAppDesc: 'Install EcoShop for the best experience',
        later: 'Later',
        install: 'Install',
        addToCart: 'Add to Cart',
        dashboard: 'Dashboard',
        orders: 'Orders',
        customers: 'Customers',
        analytics: 'Analytics',
        settings: 'Settings',
        logout: 'Logout',
        totalSales: 'Total Sales',
        totalOrders: 'Orders',
        totalCustomers: 'Customers',
        totalProducts: 'Products',
        recentOrders: 'Recent Orders',
        newOrder: 'New Order',
        productList: 'Product List',
        newProduct: 'New Product',
        orderId: 'ID',
        customer: 'Customer',
        date: 'Date',
        amount: 'Amount',
        status: 'Status',
        actions: 'Actions',
        image: 'Image',
        name: 'Name',
        category: 'Category',
        price: 'Price',
        stock: 'Stock',
        addProduct: 'Add Product',
        addOrder: 'Add Order',
        productName: 'Product Name',
        description: 'Description',
        save: 'Save',
        customerName: 'Customer Name',
        email: 'Email'
    }
};

let currentLang = 'fr';
let cart = [];
let products = [
    { id: 1, name: 'Smartphone Pro X', category: 'electronics', price: 899.99, icon: '📱' },
    { id: 2, name: 'Laptop Ultra', category: 'electronics', price: 1299.99, icon: '💻' },
    { id: 3, name: 'Casque Audio Premium', category: 'electronics', price: 299.99, icon: '🎧' },
    { id: 4, name: 'Montre Connectée', category: 'electronics', price: 249.99, icon: '⌚' },
    { id: 5, name: 'T-shirt Écologique', category: 'clothing', price: 39.99, icon: '👕' },
    { id: 6, name: 'Baskets Sport', category: 'clothing', price: 89.99, icon: '👟' },
    { id: 7, name: 'Sac à Dos Urbain', category: 'clothing', price: 79.99, icon: '🎒' },
    { id: 8, name: 'Lampe de Bureau LED', category: 'home', price: 59.99, icon: '💡' },
    { id: 9, name: 'Chaise Ergonomique', category: 'home', price: 349.99, icon: '🪑' },
    { id: 10, name: 'Tapis de Yoga', category: 'sports', price: 49.99, icon: '🧘' },
    { id: 11, name: 'Haltères Set', category: 'sports', price: 129.99, icon: '🏋️' },
    { id: 12, name: 'Vélo de Course', category: 'sports', price: 899.99, icon: '🚴' }
];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    updateLanguage();
    loadCart();
    registerServiceWorker();
});

// Load products
function loadProducts() {
    const grid = document.getElementById('productGrid');
    if (!grid) return;
    
    grid.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image">${product.icon}</div>
            <div class="product-info">
                <div class="product-category">${translations[currentLang][product.category] || product.category}</div>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">${product.price.toFixed(2)} €</div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    ${translations[currentLang].addToCart}
                </button>
            </div>
        </div>
    `).join('');
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    saveCart();
    updateCartCount();
    
    // Show feedback
    const btn = event.target;
    const originalText = btn.textContent;
    btn.textContent = '✓ Ajouté!';
    btn.style.background = '#10B981';
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
    }, 1000);
}

// Update cart count
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

// Toggle cart
function toggleCart() {
    const modal = document.getElementById('cartModal');
    modal.classList.toggle('active');
    
    if (modal.classList.contains('active')) {
        renderCart();
    }
}

// Render cart
function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; padding: 2rem; color: var(--gray);">Votre panier est vide</p>';
        cartTotal.textContent = '0.00 €';
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">${item.icon}</div>
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">${item.price.toFixed(2)} € x ${item.quantity}</div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">Supprimer</button>
            </div>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2) + ' €';
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    renderCart();
    updateCartCount();
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert('Votre panier est vide!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Merci pour votre commande!\nTotal: ${total.toFixed(2)} €\n\nCeci est une démo.`);
    cart = [];
    saveCart();
    updateCartCount();
    toggleCart();
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('ecoshop_cart', JSON.stringify(cart));
}

// Load cart from localStorage
function loadCart() {
    const saved = localStorage.getItem('ecoshop_cart');
    if (saved) {
        cart = JSON.parse(saved);
        updateCartCount();
    }
}

// Toggle language
function toggleLanguage() {
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
    document.querySelector('.lang-switch').textContent = currentLang === 'fr' ? 'EN' : 'FR';
    updateLanguage();
    loadProducts();
}

// Update language
function updateLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });
}

// Service Worker registration for PWA
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered:', registration);
            })
            .catch(error => {
                console.log('SW registration failed:', error);
            });
    }
}

// PWA Install prompt
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    document.getElementById('installPrompt').classList.add('active');
});

function installApp() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then(choiceResult => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted install');
            }
            deferredPrompt = null;
            document.getElementById('installPrompt').classList.remove('active');
        });
    }
}

function dismissInstall() {
    document.getElementById('installPrompt').classList.remove('active');
}

// Make functions global
window.toggleCart = toggleCart;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.checkout = checkout;
window.toggleLanguage = toggleLanguage;
window.installApp = installApp;
window.dismissInstall = dismissInstall;
