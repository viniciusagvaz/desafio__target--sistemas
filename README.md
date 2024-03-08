# desafio__target--sistemas

3) Descubra a lógica e complete o próximo elemento:

a) 1, 3, 5, 7, 9 -> Aumenta de 2 em 2

b) 2, 4, 8, 16, 32, 64, 128 -> Dobra o valor anterior

c) 0, 1, 4, 9, 16, 25, 36, 49 -> Cada indice do comprimento da lista de valores é elevado ao quadrado

d) 4, 16, 36, 64, 81 -> Os quadrados de números pares até que um numero impar seja atingido como resultado

e) 1, 1, 2, 3, 5, 8, 13 -> Valor da sequência até 7 de Fibonacci

f) 2, 10, 12, 16, 17, 18, 19, 20-> A partir do número 16, a sequência se torna o valor anterior mais um


4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.

Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

Passos:
Eu ligaria o primeiro interruptor e o deixaria ligado por 5 minutos.
Desligaria o primeiro interruptor e ligaria o segundo.
Então, eu iria até a sala onde as lâmpadas estão para verificar o estado delas.
Seguindo estes passos, teriamos dois cenários possíveis
Caso 1: Se há uma lâmpada acessa:
A lâmpada que estaria acesa seria a lâmpada controlada pelo segundo interruptor.
Uma das lâmpadas apagadas estaria quente pelo tempo que o primeiro interruptor ficou ligado. Essa seria conectada ao primeiro interruptor, mas se estivesse quente ao toque, significaria que ela foi a que eu liguei primeiro e depois desliguei.
A terceira lâmpada estaria apagada e fria estaria conectada ao terceiro interruptor, que eu não mexi.
Caso 2: Se não há lâmpada acessa:
Desligaria o segundo interruptor
Ligaria o terceiro interruptor e voltaria a sala.
A lâmpada que estiver acessa está conectada ao terceiro interruptor e a que estivesse apagada e fria corresponderia ao segundo interruptor.

