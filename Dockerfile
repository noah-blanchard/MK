FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html 404.html favicon.svg favicon.ico apple-touch-icon.png robots.txt sitemap.xml site.webmanifest /usr/share/nginx/html/
COPY fr /usr/share/nginx/html/fr
COPY en /usr/share/nginx/html/en
COPY assets /usr/share/nginx/html/assets
COPY v2 /usr/share/nginx/html/v2
EXPOSE 80
