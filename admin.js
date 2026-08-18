// Admin Translations
const adminTranslations = {
    fr: {
        dashboard: 'Tableau de bord',
        products: 'Produits',
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
        dashboard: 'Dashboard',
        products: 'Products',
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
let products = [
    { id: 1, name: 'Smartphone Pro X', category: 'electronics', price: 899.99, stock: 45, icon: '📱', status: 'active' },
    { id: 2, name: 'Laptop Ultra', category: 'electronics', price: 1299.99, stock: 23, icon: '💻', status: 'active' },
    { id: 3, name: 'Casque Audio Premium', category: 'electronics', price: 299.99, stock: 67, icon: '🎧', status: 'active' },
    { id: 4, name: 'Montre Connectée', category: 'electronics', price: 249.99, stock: 0, icon: '⌚', status: 'inactive' },
    { id: 5, name: 'T-shirt Écologique', category: 'clothing', price: 39.99, stock: 150, icon: '👕', status: 'active' },
    { id: 6, name: 'Baskets Sport', category: 'clothing', price: 89.99, stock: 89, icon: '👟', status: 'active' }
];

let orders = [
    { id: '#ORD-001', customer: 'Jean Dupont', email: 'jean@example.com', date: '2025-01-15', amount: 899.99, status: 'delivered' },
    { id: '#ORD-002', customer: 'Marie Martin', email: 'marie@example.com', date: '2025-01-14', amount: 349.98, status: 'shipped' },
    { id: '#ORD-003', customer: 'Pierre Durand', email: 'pierre@example.com', date: '2025-01-14', amount: 1299.99, status: 'processing' },
    { id: '#ORD-004', customer: 'Sophie Bernard', email: 'sophie@example.com', date: '2025-01-13', amount: 129.98, status: 'pending' },
    { id: '#ORD-005', customer: 'Luc Petit', email: 'luc@example.com', date: '2025-01-12', amount: 249.99, status: 'cancelled' }
];

document.addEventListener('DOMContentLoaded', () => {
    loadOrders();
    loadProducts();
    updateAdminLanguage();
});

function loadOrders() {
    const tbody = document.getElementById('ordersTable');
    if (!tbody) return;
    
    tbody.innerHTML = orders.map(order => `
        <tr>
            <td>${order.id}</td>
            <td>${order.customer}</td>
            <td>${order.date}</td>
            <td>${order.amount.toFixed(2)} €</td>
            <td><span class="status-badge status-${order.status}">${getStatusText(order.status)}</span></td>
            <td>
                <button class="action-btn view-btn" onclick="viewOrder('${order.id}')">👁️</button>
                <button class="action-btn edit-btn" onclick="editOrder('${order.id}')">✏️</button>
                <button class="action-btn delete-btn" onclick="deleteOrder('${order.id}')">🗑️</button>
            </td>
        </tr>
    `).join('');
}

function loadProducts() {
    const tbody = document.getElementById('productsTable');
    if (!tbody) return;
    
    tbody.innerHTML = products.map(product => `
        <tr>
            <td style="font-size: 2rem;">${product.icon}</td>
            <td>${product.name}</td>
            <td>${getCategoryText(product.category)}</td>
            <td>${product.price.toFixed(2)} €</td>
            <td>${product.stock}</td>
            <td><span class="status-badge ${product.status === 'active' ? 'status-active' : 'status-cancelled'}">${product.status === 'active' ? 'Actif' : 'Inactif'}</span></td>
            <td>
                <button class="action-btn edit-btn" onclick="editProduct(${product.id})">✏️</button>
                <button class="action-btn delete-btn" onclick="deleteProduct(${product.id})">🗑️</button>
            </td>
        </tr>
    `).join('');
}

function getStatusText(status) {
    const texts = {
        fr: { pending: 'En attente', processing: 'En traitement', shipped: 'Expédié', delivered: 'Livré', cancelled: 'Annulé' },
        en: { pending: 'Pending', processing: 'Processing', shipped: 'Shipped', delivered: 'Delivered', cancelled: 'Cancelled' }
    };
    return texts[currentLang][status] || status;
}

function getCategoryText(category) {
    const texts = {
        fr: { electronics: 'Électronique', clothing: 'Vêtements', home: 'Maison', sports: 'Sports' },
        en: { electronics: 'Electronics', clothing: 'Clothing', home: 'Home', sports: 'Sports' }
    };
    return texts[currentLang][category] || category;
}

function showModal(type) {
    document.getElementById(`${type}Modal`).classList.add('active');
}

function closeModal(type) {
    document.getElementById(`${type}Modal`).classList.remove('active');
    document.getElementById(`${type}Form`).reset();
}

function saveProduct(event) {
    event.preventDefault();
    alert('Produit enregistré avec succès! (Démo)');
    closeModal('product');
}

function saveOrder(event) {
    event.preventDefault();
    alert('Commande enregistrée avec succès! (Démo)');
    closeModal('order');
}

function toggleLanguage() {
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
    document.querySelector('.lang-switch-admin').textContent = currentLang === 'fr' ? 'EN' : 'FR';
    updateAdminLanguage();
    loadOrders();
    loadProducts();
}

function updateAdminLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (adminTranslations[currentLang][key]) {
            el.textContent = adminTranslations[currentLang][key];
        }
    });
}

function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
}

function logout() {
    alert('Déconnexion... (Démo)');
}

function viewOrder(id) {
    alert(`Voir commande: ${id}`);
}

function editOrder(id) {
    alert(`Modifier commande: ${id}`);
}

function deleteOrder(id) {
    if (confirm('Supprimer cette commande?')) {
        orders = orders.filter(o => o.id !== id);
        loadOrders();
    }
}

function editProduct(id) {
    alert(`Modifier produit: ${id}`);
}

function deleteProduct(id) {
    if (confirm('Supprimer ce produit?')) {
        products = products.filter(p => p.id !== id);
        loadProducts();
    }
}

window.showModal = showModal;
window.closeModal = closeModal;
window.saveProduct = saveProduct;
window.saveOrder = saveOrder;
window.toggleLanguage = toggleLanguage;
window.toggleSidebar = toggleSidebar;
window.logout = logout;
window.viewOrder = viewOrder;
window.editOrder = editOrder;
window.deleteOrder = deleteOrder;
window.editProduct = editProduct;
window.deleteProduct = deleteProduct;
