
var soap = require('soap');
var url = 'http://localhost:9000/wsdl?wsdl';

// Create client
soap.createClient(url, function (err, client) {
  if (err){
    throw err;
  }
  /* 
  * Parameters of the service call: they need to be called as specified
  * in the WSDL file
  */
  var args = {
    message: "id: 32, nome: FERRARI, descricao: Descrição Rolls Royce Phantom, latitude: -23.564224, longitude: -46.653156, tipo: luxo",
    splitter: ":"
  };
  // call the service
  client.MessageSplitter(args, function (err, res) {
    if (err)
      throw err;
      // print the service returned result
    console.log(res); 
  });
});