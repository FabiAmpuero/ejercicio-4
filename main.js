var tiempo, tarifa, costoLlamada;

tiempo = prompt("Por favor, ingrese el tiempo que duró su llamada");
tarifa = prompt("Por favor, ingrese la tarifa de costo de la llamada");

costoLlamada = parseFloat(tiempo)*parseFloat(tarifa);

alert(costoLlamada);