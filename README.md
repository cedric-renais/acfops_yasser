# Bienvenue Yasser !

## Contexte du projet

Ce projet Next.js a pour objectif de te permettre de monter en compétences sur une stack moderne (Next.js, TypeScript, Tailwind CSS, Shadcn UI, etc.) tout en respectant les bonnes pratiques de développement (accessibilité, qualité, maintenabilité, éco-conception).

Tu trouveras ci-dessous toutes les étapes pour installer et lancer le projet, ainsi que les premières tâches à réaliser.

---

## 1. Installation et lancement du projet

### Prérequis

- Node.js v18 ou supérieur (https://nodejs.org/)
- npm (installé avec Node.js)
- Accès à internet

### Étapes à suivre

1. **Cloner le dépôt**
   ```powershell
   git clone <url-du-repo>
   cd acfops_yasser
   ```
2. **Installer les dépendances**
   ```powershell
   npm install
   ```
3. **Lancer le serveur de développement**
   ```powershell
   npm run dev
   ```
4. **Accéder à l’application**
   Ouvre ton navigateur sur [http://localhost:3000](http://localhost:3000)

### Structure du projet (extrait)

```
acfops_yasser/
├── app/           # Pages et layout Next.js
├── components/    # Composants réutilisables (UI, Header, etc.)
├── lib/           # Fonctions utilitaires
├── public/        # Images et ressources statiques
├── ...
```

---

## 2. Tâches à réaliser

### 🎯 Objectif principal

Créer un composant **Footer** responsive, accessible et conforme à la maquette Figma.

Le Footer doit comporter des liens vers :

- la page **Mentions légales**
- la page **Conditions Générales de Vente (CGV)**
- la page **Contact**
- la page **Déclaration d’accessibilité**
- la page **Politique de confidentialité**

Toutes ces pages doivent être créées dans le projet (même avec un contenu temporaire ou minimal au départ).

### 📋 Consignes et bonnes pratiques

- Utiliser **TypeScript** et **Tailwind CSS** pour le style.
- Utiliser les composants **Shadcn UI** pour garantir cohérence et accessibilité.
- Le Footer doit être **responsive** (mobile-first, adaptation tablette/desktop).
- Respecter l’**accessibilité AAA** : contrastes, navigation clavier, balises sémantiques, textes alternatifs.
- Composant réutilisable, code propre et documenté.
- Tester le rendu sur plusieurs tailles d’écran.

### 🛠️ Ressources utiles

- [Documentation Shadcn UI](https://ui.shadcn.com/docs/components)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- [Accessibilité web (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/)

N’hésite pas à demander si tu bloques ou à proposer des améliorations !

---

## 2bis. Livrables attendus

Pour valider cette tâche, merci de fournir :

1. **Le composant Footer** responsive, accessible, documenté et intégré dans le projet.
2. **Les pages** : Mentions légales, CGV, Contact, Déclaration d’accessibilité, Politique de confidentialité (même avec un contenu temporaire).
3. **Un court document de présentation** (Markdown ou PDF) qui explique :
   - Les choix techniques (structure, accessibilité, responsive, composants Shadcn utilisés…)
   - Les points d’attention ou difficultés rencontrées
   - Les tests réalisés (accessibilité, responsive, navigation clavier…)

Optionnel : tu peux ajouter des captures d’écran du rendu sur desktop, tablette, mobile, et proposer des pistes d’amélioration si tu as des idées.

---

## 3. Récapitulatif des étapes

1. **Installer et lancer le projet** en suivant les instructions ci-dessus.
2. **Explorer la structure du projet** pour bien comprendre où placer le composant Footer (dossier `components/`).
3. **Créer le composant Footer** en respectant la maquette Figma et les bonnes pratiques (voir section précédente).
4. **Tester le composant** sur différents écrans et avec la navigation clavier.
5. **Documenter** le composant (commentaires, accessibilité, choix techniques).
6. **Faire relire** ou valider le composant avant de passer à la suite.

---

### Conseils finaux

- Prends le temps de bien lire la documentation et d’explorer les exemples.
- N’hésite pas à demander de l’aide ou à proposer des idées d’amélioration.
- L’important est d’apprendre, de progresser et de livrer un code propre, accessible et maintenable.
