FROM nginx:latest
COPY /dist/weatherforecastui /user/share/nginx/html
EXPOSE 80