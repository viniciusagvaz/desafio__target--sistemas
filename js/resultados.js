// //? QUESTÃO 1
const questao1 = document.querySelector('.questao__1');
const resposta = document.querySelector('.soma_verificada');
const verificarSoma = document.querySelector('.verificar__soma');

let INDICE = 13;
let SOMA = 0;

function soma(I) {
	let K = 0

	while (I > K) {
		K++
		SOMA += K
	}
	return SOMA
}

function mostrarResultado() {
	resposta.textContent = `O valor final de SOMA é: ${soma(INDICE)}`;
}

verificarSoma.addEventListener('click', mostrarResultado);

// //? QUESTÃO 2:
const verificar = document.querySelector('.verificar__fibonacci');

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

function pertenceOuNao() {
	const numeroProcurado = document.querySelector('.numero__fibonacci');
	const fibonacciVerificado = document.querySelector('.fibonacci__verificado');

	const numero = Number(numeroProcurado.value);
	const pertence = pertenceFibonacci(numero);
	const resultado = pertence ? 'pertence' : 'não pertence';

	return (fibonacciVerificado.textContent = `O número ${numero} ${resultado} à sequência de Fibonacci.`);
}

verificar.addEventListener('click', pertenceOuNao);

// //? QUESTAO 5

const inverterBttn = document.querySelector('.inverter__string');

function inverterString(string) {
	let stringToArray = [...string];

	let stringInvertida = stringToArray.reduce((acc, caractere) => {
		return caractere + acc;
	}, '');

	return stringInvertida;
}

function stringInvertida() {
	const resultado = document.querySelector('.string__invertida');
	const string = document.querySelector('.string__do__usario');

	return (resultado.innerHTML = `String Invertida: ${inverterString(
		string.value
	)}`);
}

inverterBttn.addEventListener('click', stringInvertida);
