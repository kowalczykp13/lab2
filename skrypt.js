const http = require('http');

const server = http.createServer((req, res) => {
  // Pobierz informacje o adresie IP klienta
  const clientIP = req.connection.remoteAddress;

  // Pobierz aktualną datę i godzinę w strefie czasowej klienta
  const clientTime = new Date().toLocaleString('pl-PL', {
    timeZone: 'Europe/Warsaw' // Zmień na odpowiednią strefę czasową
  });

  // Wyświetl informacje w przeglądarce klienta
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`<h1>Adres IP klienta: ${clientIP}</h1>`);
  res.write(`<p>Data i godzina w strefie czasowej klienta: ${clientTime}</p>`);
  res.end();
});

const port = 8080; // Wybierz dowolny port

server.listen(port, () => {
  const authorName = 'Piotr Kowalczyk'; // Zmień na swoje imię i nazwisko
  console.log(`Serwer uruchomiony. Autor: ${authorName}`);
  console.log(`Serwer nasłuchuje na porcie ${port}`);
});
