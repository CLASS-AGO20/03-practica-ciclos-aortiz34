export default class App {

    factorial(numero){
        let factorial = 1;
        let i = 1;
        for (i; i <= numero; i++) {
            factorial *= i;  
        }
        return factorial;
    }
}

let app = new App();

console.log(app.factorial(5));
