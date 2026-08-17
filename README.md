# EcoShop - Application E-commerce PWA

Une application web e-commerce moderne avec support PWA (Progressive Web App) et panneau d'administration complet.

## 🚀 Fonctionnalités

### Page d'Accueil (E-commerce)
- Design moderne et percutant
- Catalogue de produits avec catégories
- Panier d'achat fonctionnel
- Support multi-langue (Français / Anglais)
- Installation PWA pour une expérience native
- Responsive design (mobile, tablette, desktop)

### Panneau Admin
- Tableau de bord avec statistiques
- Gestion des produits (CRUD)
- Gestion des commandes
- Suivi des clients
- Interface multi-langue
- Design professionnel et intuitif

## 📦 Technologies

- **HTML5/CSS3** - Structure et style
- **JavaScript (ES6+)** - Logique applicative
- **Vite** - Build tool et dev server
- **PWA** - Service Worker pour le mode hors-ligne
- **LocalStorage** - Persistance des données

## 🛠️ Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Prévisualiser la production
npm run preview
```

## 📱 PWA Features

- Installable sur mobile et desktop
- Mode hors-ligne grâce au Service Worker
- Icônes personnalisées
- Manifeste d'application

## 🌐 Multi-langue

L'application supporte deux langues:
- **Français** (par défaut)
- **Anglais**

Changer la langue via le bouton dans la navigation.

## 📁 Structure du Projet

```
/workspace
├── index.html          # Page d'accueil e-commerce
├── admin.html          # Panneau d'administration
├── main.js             # Logique de la boutique
├── admin.js            # Logique du panneau admin
├── sw.js               # Service Worker PWA
├── manifest.json       # Manifeste PWA
├── package.json        # Dépendances npm
└── README.md           # Documentation
```

## 🎨 Personnalisation

Les couleurs et styles peuvent être modifiés via les variables CSS dans `<style>`:

```css
:root {
  --primary: #4F46E5;
  --secondary: #10B981;
  --dark: #1F2937;
  --light: #F9FAFB;
}
```

## 📄 License

ISC

---

Créé avec ❤️ pour une expérience e-commerce moderne
