 console.log('Inicializando agente.');
 
 var os = require('os');
 
 console.log('Memoria libre: ' + 
             parseInt(os.freemem() / 1024 / 1024) + 'MB');
 
 var datosCpus = os.cpus();
 console.log('Info CPUs:' + 
             JSON.stringify(datosCpus));
 
 for (var i=0; i < datosCpus.length; i++) {
	var cpuActual = datosCpus[i];
	console.log('Modelo : ' + cpuActual.model);
} 
 // Acumular segundos usados por todas las cpus
 var segundosTotales = 0;
 for (var i=0; i < datosCpus.length; i++) {
	var cpuActual = datosCpus[i];
	segundosTotales = segundosTotales +
	    cpuActual.times.idle +
		cpuActual.times.user +
		cpuActual.times.nice +
		cpuActual.times.sys +
		cpuActual.times.irq;
} 
 
 // Acumular segundos usados por las cpus en modo idle
 var segundosIdle = 0;
 for (var i=0; i < datosCpus.length; i++) {
	var cpuActual = datosCpus[i];
	segundosIdle = segundosIdle +
	    cpuActual.times.idle;
} 
 
console.log('%CPU: ' + parseInt(segundosIdle / segundosTotales * 100)); 
 
 
 
 
 
 console.log('Fin.');