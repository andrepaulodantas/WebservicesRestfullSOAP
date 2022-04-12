const express = require('express');
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const soap = require('soap');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Rotas
const CarroDB = require('./model/CarroDB');
const Carro = require('./routes/carros');
app.get('/', (req, res) => res.send('<h1>API REST SOAP</h1>'));
app.use('/api/carros', require('./routes/carros'));

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const { constants } = require('buffer');

//soap
var serviceObj = {
  carros: {
    CarroService: {
      CarroPort: {
        getCarros: function(args) {
          return CarroDB.getCarros();
        },
        getCarro: function(args) {
          return CarroDB.getCarro(args.id);
        },
        addCarro: function(args) {
          return CarroDB.addCarro(args.carro);
        },
        updateCarro: function(args) {
          return CarroDB.updateCarro(args.carro);
        },
        deleteCarro: function(args) {
          return CarroDB.deleteCarro(args.id);
        }
      }
    }
  }
};

// load the WSDL file
var xml = fs.readFileSync('service.wsdl', 'utf8');

// Launch the server and listen
var port = 9001;
app.listen(port, function () {
  console.log('Listening on port ' + port);
  var wsdl_path = "/wsdl";
  soap.listen(app, wsdl_path, serviceObject, xml);
  console.log("Check http://localhost:" + port + wsdl_path +"?wsdl to see if the service is working");
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

//listen
const port = process.env.PORT || 8000;
soap.listen(server,'/wsdl', serviceObj, xml)
var url = 'http://localhost:9000/wsdl?wsdl';
app.listen(port, () => console.log(`Server running on port ${port}`));
