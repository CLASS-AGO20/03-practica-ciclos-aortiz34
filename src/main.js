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
}

let app = new App();

console.log(app.factorial(5));

console.log(app.convertirAString(5));
