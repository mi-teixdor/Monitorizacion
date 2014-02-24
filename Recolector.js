/*Copyright [yyyy] [name of copyright owner]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
esto es otro cambio
*/

var http = require('http'),
    url = require('url');

var procesarRegistrar = function(request, response, urlParseada) {
	if (request.method == 'GET') {
		response.writeHead(200, { 
			'Content-Type' : 'text/html'
		});			
		response.write('<p>Instancia ' + 
					   urlParseada.query.instancia + 
					   ' registrada</p>');
	} else {
		response.writeHead(405);
	}
	response.end();
}	
	
var procesarEstadistica = function(request, response) {
	if (request.method == 'POST') {
		var datos = '';
		var contador = 0;
		
		request.on('data', function(nuevosDatos) {
			datos = datos + nuevosDatos.toString();
			contador = contador+1;
		});
		request.on('end', function() {
			// !!!
			response.writeHead(200);
			console.log('****************************');
			console.log(datos);
			console.log(contador);
			console.log('****************************');
			response.end();
		});
	} else {
		response.writeHead(405);
		response.end();
	}
}
	
var procesador = function(request, response) {
	var urlParseada = url.parse(request.url, true);
	
	if (urlParseada.pathname == '/registrar') {
		procesarRegistrar(request, response, urlParseada);
	} else if (urlParseada.pathname = '/estadistica') {
		procesarEstadistica(request, response);
	} else {
		response.writeHead(404);
		response.end();
	}
}

var server = http.createServer(procesador);
server.listen(80);


