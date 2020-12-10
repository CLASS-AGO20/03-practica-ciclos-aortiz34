export default class App {

    factorial(numero){
        let factorial = 1;
        let i = 1;
        for (i; i <= numero; i++) {
            factorial *= i;  
        }
        return factorial;
    }

    convertirAString(numero){
        let i = 1;
        let aster = ``;
        while (i <= numero) {
            aster += `*`;

            i++;
        }
        return aster;
    }

    obtenerDivisibles(numero){
        let i = 1;
        let suma = 0;
        do {
            if (numero % i === 0){
                suma += 1;
              }
              i++;
        }while (i <= numero);
        return suma;
    }

    elevar(numero, potencia){
        let i = 1;
        let num = numero;
        let resultado = numero;
        for (i; i < potencia; i++) {
            resultado *= num; 
            
        }
        return resultado;
    }
}

let app = new App();

console.log(app.factorial(5));

console.log(app.convertirAString(5));

console.log(app.obtenerDivisibles(6));

console.log(app.elevar(3,4));