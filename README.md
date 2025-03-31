# Portfolio Moderne avec Vue.js

Un portfolio professionnel moderne avec animations GSAP, thème clair/sombre et design responsive.

![Portfolio Preview](https://via.placeholder.com/800x400?text=Portfolio+Preview)

## 🚀 Fonctionnalités

- **Design Moderne** - Interface élégante et épurée avec animations fluides
- **Thème Clair/Sombre** - Basculement entre les modes clair et sombre
- **Animations GSAP** - Animations professionnelles pour une meilleure expérience utilisateur
- **Design Responsive** - S'adapte à tous les types d'écrans (mobile, tablette, desktop)
- **Optimisé pour le SEO** - Méta-tags pour une meilleure indexation
- **Formulaire de Contact** - Formulaire interactif avec validation
- **Performances Optimisées** - Chargement rapide et expérience utilisateur fluide

## 🛠️ Technologies Utilisées

- **Vue.js 3** - Framework JavaScript progressif
- **GSAP** - Librairie d'animations professionnelles
- **Font Awesome** - Icônes vectorielles
- **Google Fonts** - Typographies web modernes
- **CSS Personnalisé** - Styles personnalisés sans framework CSS

## 🔧 Installation

1. Clonez le dépôt
```bash
git clone https://github.com/votre-username/markupfolio.git
```

2. Naviguez dans le répertoire du projet
```bash
cd markupfolio
```

3. Installez les dépendances
```bash
npm install
```

4. Lancez le serveur de développement
```bash
npm run dev
```

5. Compilez pour la production
```bash
npm run build
```

## 📋 Structure du Projet

```
markupfolio/
├── public/              # Fichiers publics (favicon, images)
├── src/                 # Code source
│   ├── assets/          # Assets (CSS, images)
│   ├── components/      # Composants Vue.js
│   ├── App.vue          # Composant racine
│   └── main.js          # Point d'entrée JS
├── index.html           # Page HTML principale
├── package.json         # Dépendances et scripts
└── README.md            # Documentation
```

## 🎨 Personnalisation

Le portfolio peut être facilement personnalisé en modifiant les variables CSS dans le fichier `src/assets/main.css`.

### Couleurs

Modifiez les variables CSS pour changer le thème de couleurs :

```css
:root {
  --primary: #00b894;
  --primary-dark: #009e81;
  --primary-light: #55efc4;
  /* Plus de variables... */
}
```

### Contenu

Modifiez le contenu directement dans les composants Vue.js dans le dossier `src/components/`.

## 📱 Responsive Design

Le portfolio est entièrement responsive et s'adapte aux écrans suivants :
- **Mobile** : < 576px
- **Tablette** : 576px - 992px
- **Desktop** : > 992px

## 🌙 Mode Sombre

Le portfolio inclut un mode sombre qui peut être activé en cliquant sur l'icône de thème dans la barre de navigation. Le choix de l'utilisateur est sauvegardé dans le localStorage pour persister entre les sessions.

## 📝 License

Distribué sous la licence MIT. Voir `LICENSE` pour plus d'informations.

## 📧 Contact

Votre Nom - email@example.com

Lien du projet: [https://github.com/votre-username/markupfolio](https://github.com/votre-username/markupfolio)
