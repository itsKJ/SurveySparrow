const express = require("express");
const captureWebsite = require('capture-website');
var cors = require('cors')
var bodyParser = require('body-parser')

const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000

app.use(cors());
app.use(bodyParser.json());
app.listen(PORT, () => { console.log(`Listening on port ${PORT}...`) });

app.post('/', (async (req, res) => {
    try {
        var imageName = new Date().getTime() + '.' + req.body.options.type
        await captureWebsite.file(req.body.options.url, imageName, {
            height: req.body.options.height ? parseInt(req.body.options.height) : 800,
            width: req.body.options.width ? parseInt(req.body.options.width) : 1280,
            type: req.body.options.type ? req.body.options.type : "jpeg"
        });
        res.send({ status: 'success', image_64: 'data:image/png;base64,' + fs.readFileSync(imageName, { encoding: 'base64' }) })
    } catch (e) {
        console.log(e);
        res.send({ status: 'failed', error: e.toString() })
    } finally {
        fs.unlink(imageName, () => {
            console.log('Screenshot sent and temp file deleted for ' + req.body.options.url);
        });
    }
}))
