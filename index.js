
require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const multer = require('multer');
const crypto = require('crypto');
const path = require('path');
const cookieParser = require('cookie-parser');
const db = require('./db');


const app = express();

const upload = multer ({
    storage: multer.diskStorage({
        destination: (request, file, callback) => {
            callback(null, path.join(__dirname, 'public/uploads/'))
        },
        filename: function (request, file, callback) {
            crypto.pseudoRandomBytes(16, function(err, raw) {
                if (err) return callback(err);
                callback(null, raw.toString('hex') + path.extname(file.originalname));
            });
        }
    })
});

app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));


const reactEngine = require('express-react-views').createEngine();
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine);


require('./routes')(app, upload, db);


const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, () => console.log(`~~~ Tuning in to the waves of port ${PORT} ~~~`));


server.on('close', () => {
    console.log('Closed express server');

    db.pool.end(() => {
        console.log('Shut down db connection pool');
    });
});






