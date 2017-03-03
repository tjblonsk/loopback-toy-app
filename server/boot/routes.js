var bodyParser = require('body-parser');

module.exports = function(app) {
  app.set('views', './client/views');
  app.set('view engine', 'pug');
  app.use(bodyParser.urlencoded({ extended: false }));

  app.get('/', function (req, res) {
    res.render('index', {orders: [{id: 1}, {id: 2}]})
  })
  .get('/create', function(req, res) {
    app.models.PizzaType.find(null, function(err, pizzaTypes) {
      res.render('create', {pizzaTypes: pizzaTypes})
    });
  })
  .post('/create', function(req, res) {
    console.log(req.body)


    res.send('hi')
  })
}
