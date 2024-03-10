// //? QUESTÃO 1
const somaBttn = document.querySelector('.questao__1--botao');

let INDICE = 13;
let SOMA = 0;

function soma(indice = INDICE) {
	let K = 0;

	while (indice > K) {
		K++;
		SOMA += K;
	}
	return SOMA;
}

function mostrarResultadoSoma() {
	const somaResultado = document.querySelector('.questao__1--resultado');

	somaResultado.textContent = `O valor de SOMA é: ${soma()}`;
	console.log(soma);

	somaBttn.classList.add('questao__1--botao--desativado');
	somaBttn.textContent = 'Verificado';
	somaBttn.disabled = true;
}

somaBttn.addEventListener('click', mostrarResultadoSoma);


// //? QUESTÃO 2:
const fibonacciBttn = document.querySelector('.questao__2--botao');

function pertenceFibonacci(num) {
	const sequencia = [0, 1];

	for (let i = 2; sequencia[i - 1] < num; i++) {
		sequencia[i] = sequencia[i - 1] + sequencia[i - 2];
	}

	return sequencia.includes(num);
}

function mostrarSePertence() {
	const fibonacciInput = document.querySelector('.questao__2--input');
	const fibonacciResultado = document.querySelector('.questao__2--resultado');

  if (fibonacciInput.value.length < 1){
    alert('Digite um numero')  
    return 
  }

	const numero = Number(fibonacciInput.value);

	const sePertencer = pertenceFibonacci(numero);
	const formatarResultado = sePertencer ? 'pertence' : 'não pertence';

	fibonacciResultado.textContent = `O número ${numero} ${formatarResultado} à sequência de Fibonacci.`;
	fibonacciInput.value = '';
}

fibonacciBttn.addEventListener('click', mostrarSePertence);


//? QUESTAO 5
const inverterBttn = document.querySelector('.questao__5--botao');

function inverterString(string) {
	let stringToArray = [...string];

	let stringInvertida = stringToArray.reduce((acc, caractere) => {
		return caractere + acc;
	}, '');

	return stringInvertida;
}

function mostrarStringInvertida() {
	const stringInput = document.querySelector('.questao__5--input');
	const stringResultado = document.querySelector('.questao__5--resultado');

	if (stringInput.value.length <= 1) {
		alert('Digite ao menos dois caracteres');
		return;
	}

	stringResultado.textContent = `String Invertida: ${inverterString(stringInput.value)}`;
  stringInput.value = ''
}

inverterBttn.addEventListener('click', mostrarStringInvertida);