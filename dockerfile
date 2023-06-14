# Wybierz obraz bazowy Node.js
FROM node:14

# Utwórz katalog aplikacji w kontenerze
WORKDIR /app

# Skopiuj plik package.json i package-lock.json do katalogu aplikacji
COPY package*.json ./

# Zainstaluj zależności aplikacji
RUN npm install

# Skopiuj pozostałe pliki aplikacji do katalogu aplikacji
COPY . .

# Zdefiniuj zmienne środowiskowe
ENV AUTHOR_NAME "Piotr Kowalczyk"

# Wyeksponuj port, na którym działa serwer
EXPOSE 8080

# Uruchom serwer po uruchomieniu kontenera
CMD [ "node", "skrypt.js" ]
