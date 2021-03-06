Preguntas:

¿Por qué evitar los callbacks en las llamadas asíncronas?

Para evitar el callback hell, podremos usar promesas para no anidar de manera tan
profunda.

¿Qué es una promesa?

Una Promise (promesa en castellano) es un objeto que representa la terminación o el fracaso de una operación asíncrona.
Esencialmente, una promesa es un objeto devuelto al cuál se adjuntan funciones callback, en lugar de pasar callbacks a una función.


¿Qué es el callback hell?

Consiste en múltiples Callbacks anidados que provocan que el código se vuelva difícil de leer y ‘debuggear’; ésta es la principal razón por la cual se debe evitar. 
