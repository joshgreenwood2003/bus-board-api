"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
app.get('/postcode', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(yield busStopFromPostCode(req.query.postcode));
}));
function busStopFromPostCode(postcode) {
    return __awaiter(this, void 0, void 0, function* () {
        const latLongRes = yield fetch("https://api.postcodes.io/postcodes/" + postcode);
        const latLongData = yield latLongRes.json();
        const long = latLongData.result.longitude;
        const lat = latLongData.result.latitude;
        //console.log(long);
        //console.log(lat)
        const stopRes = yield fetch("https://api.tfl.gov.uk/StopPoint/?lat=" + lat + "&lon=" + long + "&stopTypes=NaptanPublicBusCoachTram&radius=300");
        const stopData = yield stopRes.json();
        //console.log(stopData);
        return stopData;
    });
}
//# sourceMappingURL=app.js.map