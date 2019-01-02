const PORT = 3000;
const express = require('express');
// const GameManager = require('./gameManager');
const bodyParser = require('body-parser');
const {
  check,
  validationResult,
} = require('express-validator/check');
const {
  sanitizeBody,
} = require('express-validator/filter');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(express.json());
app.use(express.static('/public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', {});
});

app.get('/new', (req, res) => {
  res.render('new');
});

app.post(
  '/new',
  [
    check('game_name').isLength({
      min: 4,
      max: 80,
    }),
    check('host_name').isLength({
      min: 4,
      max: 80,
    }),
    check('password').isLength({
      min: 8,
      max: 20,
    }),
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // Render form w/ error messages
    } else {
      res.redirect('/');
    }
  },
);

app.listen(PORT, () => {});
