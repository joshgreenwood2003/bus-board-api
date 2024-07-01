import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
  fetchWithAwait();
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});









async function fetchWithAwait(): Promise<void> {
    const response = await fetch("https://api.tfl.gov.uk/StopPoint/Mode/bus/Disruption");
    const data = await response.json();
    // deal with JSON response
    console.log(data);
  }
  fetchWithAwait();