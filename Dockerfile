FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html 404.html favicon.svg favicon.ico apple-touch-icon.png robots.txt sitemap.xml site.webmanifest /usr/share/nginx/html/
COPY fr /usr/share/nginx/html/fr
COPY en /usr/share/nginx/html/en
COPY assets /usr/share/nginx/html/assets
COPY v2 /usr/share/nginx/html/v2
COPY v3 /usr/share/nginx/html/v3
COPY v4 /usr/share/nginx/html/v4
COPY v5 /usr/share/nginx/html/v5
COPY v6 /usr/share/nginx/html/v6
EXPOSE 80
