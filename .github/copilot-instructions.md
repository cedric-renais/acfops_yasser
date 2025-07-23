# Guide GitHub Copilot – Instructions Complètes ACFOPS Learning

## 1. Introduction

- Stack tech basée sur Next.js, TypeScript, React, Tailwind CSS et Shadcn UI.
- Objectifs : assurer qualité, sécurité, accessibilité AAA, maintenabilité, et méthodologie agile pour le projet.

---

## 2. Environnement et outils

- **OS** : Windows avec PowerShell (utiliser syntaxe native).
- **Containerisation** : Docker.
- Principaux outils : Next.js, React, TypeScript, Tailwind CSS, Shadcn UI, Lucide React, TanStack Query, Prisma, PostgreSQL, NextAuth, bcryptjs, Zod, Sonner, Resend.

---

## 3. Architecture et bonnes pratiques générales

- Appliquer les principes **SOLID** et **DRY** pour un code modulaire, propre et maintenable.
- Séparer clairement les responsabilités entre frontend, backend, services, et accès aux données.
- Favoriser l’injection de dépendances pour faciliter les tests et évolutions.
- Documenter systématiquement les composants, fonctions et API.
- Maintenir une documentation à jour.

---

## 4. Frontend UI/UX

- **Composants UI** : utiliser Shadcn UI (basé sur Radix UI) pour cohérence, accessibilité et design moderne.
- **Design** : minimaliste, épuré, hiérarchie visuelle claire, palette sobre et harmonieuse conforme à la charte Shadcn.
- **Accessibilité** : respecter le niveau AAA WCAG 2.1 (contrastes 7:1 et 4.5:1, navigation clavier, texte alternatif, structure sémantique).
- **Responsive design** : mobile-first, adaptation fluide, zones tactiles ≥ 44x44 px, test tactile (zoom, gestes).
- **Gestion des formulaires** :
  - Composants Shadcn UI pour UI.
  - React Hook Form + Zod pour la gestion du state local et validation.
  - TanStack Query pour synchronisation serveur (chargement, soumission, invalidation cache).
- **Feedback utilisateur** : états de chargement, erreurs visibles, notifications Sonner.

---

## 5. Backend Next.js

- Organiser le backend avec API routes claires et séparation logique métier / accès DB.
- Valider et nettoyer toutes les données reçues (Zod).
- Authentification robuste avec NextAuth, contrôle d’accès basé sur rôles.
- Sécurité renforcée : chiffrement des données sensibles, protection contre attaques (injection, XSS, CSRF).
- Logs sécurisés, gestion centralisée des erreurs, monitoring et alertes.
- Optimisation des performances : cache Redis/CDN, pagination, index DB.
- Documentation API.
- Gestion rigoureuse des données personnelles selon RGPD : minimisation, anonymisation, conservation limitée.

---

## 6. Tests & qualité

- Tests unitaires, d’intégration (Jest, React Testing Library).
- Tests end-to-end (Playwright ou Cypress).
- Tests manuels systématiques après chaque fonctionnalité.
- Correction immédiate des anomalies.
- Documentation des cas de test et résultats.

  **Importance** :

  - Assure qualité constante du code.
  - Permet détection rapide des erreurs.
  - Facilite collaboration et évite bugs en production.
  - Automatise processus et réduit erreurs humaines.

---

## 7. Méthodologie de travail

- Approche agile et itérative, travailler étape par étape.
- Validation obligatoire à chaque étape avant de passer à la suivante.
- Feedback utilisateur continu et documentation à jour.

### Démarche réflexive avant codage

Avant d’implémenter une fonctionnalité ou une solution technique :

- Prendre le temps d’analyser le besoin et le contexte.
- Si plusieurs approches sont possibles, exposer clairement les avantages et inconvénients de chacune.
- Présenter la solution recommandée avec une justification claire.
- Valider ce choix avec le client ou l’équipe avant de commencer le développement.

### Quand faire un push

Un push vers la branche principale (ou la branche de travail partagée) doit être réalisé **uniquement si** :

1. **Les fonctionnalités développées sont terminées et validées**

- Le code implémente entièrement la fonctionnalité prévue selon le plan.
- Tous les critères d’acceptation sont respectés.

2. **Les tests sont passés avec succès**

- Les tests unitaires et d’intégration associés à la fonctionnalité passent sans erreur.
- Les tests end-to-end (si applicables) ont été exécutés avec succès localement.

3. **La documentation est à jour**

- Les changements fonctionnels ou techniques sont documentés (README, commentaires, changelog).
- Les cas de test et scénarios d’usage sont consignés.

4. **Pas d’erreurs critiques ou avertissements**

- Le build local est propre, sans erreurs ni warnings bloquants.
- Les outils d’audit (lint, sécurité, accessibilité) ne remontent pas de problèmes critiques.

### Bonnes pratiques complémentaires

- **Commits atomiques et clairs**  
  Faire des commits petits et thématiques avant push, facilitant la relecture.

- **Push fréquent sur branches feature**  
  Pour éviter la perte de travail et faciliter l’intégration continue, pousser régulièrement sur branches de fonctionnalité, même avant la fusion finale.

- **Utiliser les pull requests (PR)**  
  Toujours passer par PR pour fusionner vers la branche principale, avec validation automatique des tests.

- **Gestion des conflits**  
  Résoudre les conflits locaux avant push.

---

## 8. Clean Code & Conventions

- TypeScript strict activé avec typage fort.
- Nommage explicite et cohérent des variables et fonctions.
- Principe **DRY** pour éviter redondances.
- Commentaires utiles et concis uniquement.
- Fonctions courtes, focalisées et composants réutilisables.
- Documentation claire des composants et props personnalisés.
- Conventions de commit claires, en français, avec emojis selon la structure :  
  `emoji type: description courte`  
  (ex. `✨ feat: ajoute la fonctionnalité de connexion utilisateur`)

---

## 9. Gestion des formulaires

Pour garantir des formulaires accessibles, robustes et bien synchronisés avec le backend, utiliser la combinaison suivante :

- **Composants UI** : composants accessibles et stylés de **Shadcn UI** (`<Label>`, `<Input>`, `<Button>`, etc.)
- **Gestion du state local et validation client** : **React Hook Form** + **Zod** (via `zodResolver`) pour un contrôle strict et typé des données
- **Synchronisation backend** : **TanStack Query** (`useQuery` pour chargement, `useMutation` pour soumission) avec gestion des états asynchrones (chargement, succès, erreur) et invalidation du cache

Cette approche garantit :

- Une UI accessible et conforme aux standards RGAA/AAA
- Une validation stricte et typée
- Une gestion claire du state local et des appels serveur
- Une expérience utilisateur fluide et réactive

---

## 10. Principes et bonnes pratiques d’éco-conception

L’éco-conception vise à réduire l’impact environnemental des applications numériques tout au long de leur cycle de vie, sans compromettre la qualité ni l’expérience utilisateur.

### Principes clés

- **Minimiser la consommation énergétique**  
  Optimiser le code et les requêtes pour limiter la charge CPU et la consommation réseau.
- **Limiter les transferts de données**  
  Réduire la taille des fichiers (images, scripts, styles), compresser les ressources, utiliser le lazy loading.
- **Optimiser le rendu et les performances**  
  Favoriser les rendus statiques (SSG), mettre en cache efficacement, éviter les calculs inutiles côté client.
- **Favoriser l’accessibilité et l’inclusion**  
  Une application accessible touche plus d’utilisateurs et évite les redondances inutiles (ex : alternatives textuelles plutôt que contenus multimédias lourds).
- **Éviter la surconsommation des ressources**  
  Limiter les animations et effets visuels gourmands, privilégier la simplicité visuelle.
- **Sensibiliser les utilisateurs**  
  Informer sur l’impact des actions (ex : indication de chargement, choix entre qualité image et poids, etc.).

### Bonnes pratiques

- Utiliser des formats d’images modernes et légers (WebP, AVIF).
- Charger les ressources non critiques de façon asynchrone ou différée.
- Éviter le chargement inutile de librairies ou polices externes.
- Optimiser les requêtes API, paginer et limiter les données transférées.
- Mesurer régulièrement l’impact énergétique avec des outils (ex : Lighthouse, GreenIT).
- Documenter les choix techniques dans une perspective durable.
