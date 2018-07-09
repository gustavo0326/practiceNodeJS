console.log('inicio del programa');

setTimeout(() => {
    console.log('primer  timeout');
}, 3000);

setTimeout(() => {
    console.log('segundo  timeout');
}, 1000);

setTimeout(() => {
    console.log('tercero  timeout');
}, 0);

console.log('fin del programa');