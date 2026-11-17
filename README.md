# melanie.kathan.pro

Site vitrine statique (HTML/CSS, un peu de JS) de Melanie Kathan, traductrice agréée FR → EN à Montréal.

## Identité visuelle : « L'encre et le sceau »

- **Deux encres** : bleu outremer `#2443c6` et rouge vermillon `#e5392b`, les couleurs des drapeaux de ses deux langues (Québec, France, Canada, É.-U., R.-U.), sur papier `#f5f5f1` avec un grain d'impression, et l'encre noire `#141418`.
- **Le sceau** : un tampon circulaire « MELANIE KATHAN ✦ TRADUCTRICE ✦ TRANSLATOR », clin d'œil au sceau qui authentifie les traductions agréées.
- **Une seule famille typographique** : Archivo, de 62 % (titres condensés façon affiche) à 125 % (petites étiquettes larges).
- **La signalétique bilingue** : chaque titre est suivi de sa version dans l'autre langue, comme les panneaux au Canada.
- **Le texte parallèle** : la section À propos est présentée comme dans un outil de traduction, avec le texte source et le texte cible côte à côte.

## Structure

- `/fr/` et `/en/` : pages complètes ; `/` redirige selon la langue du navigateur.
- `assets/` : CSS, JS, police auto-hébergée, images (dont les images de partage `og-*.png`).
- SEO : meta, Open Graph, hreflang, données structurées JSON-LD, `sitemap.xml`, `robots.txt`.

## Déploiement (Dokploy)

Application de type Dockerfile : nginx sur le port 80 (`nginx.conf` redirige aussi les anciennes URL `/en` et `/fr`).
