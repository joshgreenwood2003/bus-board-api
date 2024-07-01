import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});


app.get('/postcode', async (req,res)=>{
    res.send(await busStopFromPostCode(req.query.postcode));
})






async function busStopFromPostCode(postcode): Promise<void> { 
    const latLongRes = await fetch("https://api.postcodes.io/postcodes/"+postcode);
    const latLongData = await latLongRes.json();
    const long = latLongData.result.longitude;
    const lat = latLongData.result.latitude;
    //console.log(long);
    //console.log(lat)
    const stopRes = await fetch("https://api.tfl.gov.uk/StopPoint/?lat="+lat+"&lon="+long+"&stopTypes=NaptanPublicBusCoachTram&radius=300");
    const stopData = await stopRes.json()
    //console.log(stopData);
    return stopData
  }
