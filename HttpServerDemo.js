
var http = require('http'),
    url = require('url');

var procesador = function(request, response) {
	response.writeHead(200, { 
		'Content-Type' : 'text/html'
	});
	response.write('<meta charset="utf-8">');
	response.write('<h1>Snoop</h1>');	
	response.write('<p>Método: ' + request.method + '</p>');
	response.write('<p>URL: ' + request.url + '</p>');
	
	urlParseada = url.parse(request.url, true);
	response.write('<p>URL: ' + request.url + '</p>');
	
	response.write('<h2>Parámetros</h2>');
	response.write('<ul>');
	var parametros = urlParseada.query;
	for (var nomProp in parametros) {
		response.write('<li>' + nomProp + ' = ' + 
						parametros[nomProp] + '</li>');
	}
	response.write('</ul>');
	
	response.end();
}

var server = http.createServer(procesador);
server.listen(80);







