# melanie.kathan.pro

Site vitrine statique (HTML/CSS, un peu de JS pour le menu mobile) de Melanie Kathan, traductrice FR → EN à Montréal.

- `/fr/` et `/en/` : pages complètes ; `/` redirige selon la langue du navigateur.
- `assets/` : CSS, JS, polices auto-hébergées (Newsreader, Hanken Grotesk), images.
- SEO : balises meta/Open Graph, hreflang, données structurées JSON-LD, `sitemap.xml`, `robots.txt`.

## Déploiement (Dokploy)

Application de type Dockerfile : le `Dockerfile` sert le site avec nginx sur le port 80
(`nginx.conf` redirige aussi les anciennes URL `/en` et `/fr`).
