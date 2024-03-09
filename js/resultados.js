// //? QUESTÃO 1
const somaBttn = document.querySelector('.questao__1--botao');

let INDICE = 13;
let SOMA = 0;

function soma(I) {
	let K = 0;

	while (I > K) {
		K++;
		SOMA += K;
	}
	return SOMA;
}

function mostrarResultadoSoma() {
	const somaResultado = document.querySelector('.questao__1--resultado');

	somaResultado.textContent = `O valor de SOMA é: ${soma(INDICE)}`;

	somaBttn.classList.add('questao__1--botao--desativado');
	somaBttn.disabled = true;
	console.log(soma);
}

somaBttn.addEventListener('click', mostrarResultadoSoma);

// //? QUESTÃO 2:
const fibonacciBttn = document.querySelector('.questao__2--botao');

function pertenceFibonacci(num) {
	let a = 0,
		b = 1,
		c = a + b;

	while (c < num) {
		a = b;
		b = c;
		c = a + b;
	}
	return c === num || num === a || num === b;
}

function mostrarSePertence() {
	const fibonacciInput = document.querySelector('.questao__2--input');
	const fibonacciResultado = document.querySelector('.questao__2--resultado');

	const numero = Number(fibonacciInput.value);
	const sePertence = pertenceFibonacci(numero);
	const formatarResultado = sePertence ? 'pertence' : 'não pertence';

	return (fibonacciResultado.textContent = `O número ${numero} ${formatarResultado} à sequência de Fibonacci.`);
}

fibonacciBttn.addEventListener('click', mostrarSePertence);

// //? QUESTAO 5
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
		alert('Digite uma string válida!');
		return;
	}

	return (stringResultado.innerHTML = `String Invertida: ${inverterString(
		stringInput.value
	)}`);
}

inverterBttn.addEventListener('click', mostrarStringInvertida);
