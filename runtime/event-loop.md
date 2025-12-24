O Event Loop observa o Call Stack e:

- Executa todas as microtasks pendentes assim que o stack fica vazio
- Depois move a próxima task da Task Queue para o Call Stack

Esse ciclo se repete continuamente, garantindo execução previsível, não bloqueante e eficiente.
