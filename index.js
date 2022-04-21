/**
 * aqui accedemos al document.
 * utilizamos el selector 'getElementById' el cual recibe el id del nodo o elemento 
 * del document que queremos accesar.
 * y  utilizamos el metodo addEventListener() el cual sirve para escuchar y recibe 2 argumentos 
 * 1er argumento es el nombre del evento que pondremos a escuchar
 * 2do argumento es una expresion funcion anonima o tambien puede recibir una funcion arrow
 */
document
  .getElementById("ordenar-form")
  .addEventListener("submit", function (event) {

    /**
     * (event)  hace referencia al evento que se captura tambien es habitual usar (e)
     * event.preventDefault() se utiliza para evitar que el evento se ejecute por default
     *al cargar la pagina evitando que se envie el formulario vacio.
     */
    event.preventDefault();
    // hacemos el llamado a nuestra funcion ordenarNumeros
    ordenarNumeros();
  });

function ordenarNumeros() {
  /**
   * guardamos en constantes los nodos que contienen los datos que ingreso el usuario
   * y tambien guardamos el nodo donde vamos a mostrar el resultado el cual esta identificado
   * con el id='resultadoOrdenar' y lo guardaremos en una variable para poder modificarlo,
   * tambien guardamos el nodo donde mostraremos un mensaje de error en caso de que el usuario
   * ingrese numeros negativos el cual esta identificado en nuestro html con el id='errorMsn' 
   * y lo guardamos en una variable para luego poder modificarlo
   */
  const nodoPrimerNumero = document.getElementById("1erNumero");
  const nodoSegundoNumero = document.getElementById("2doNumero");
  const nodoTercerNumero = document.getElementById("3erNumero");
  let nodoResultadoOrdenar = document.getElementById("resultadoOrdenar");
  let nodoErrorMsn = document.getElementById("errorMsn");

  /**
   * accedemos a la propiedad .valueAsNumber de cada nodo la cual guarda el valor numerico
   * ingresado por elusuario y lo guaramos en constantes
   */
  const primerNumero = nodoPrimerNumero.valueAsNumber;
  const segundoNumero = nodoSegundoNumero.valueAsNumber;
  const tercerNumero = nodoTercerNumero.valueAsNumber;

  /**
   * validaremos que los numeros no iguales entre ellos
   * es decir utilizaremos logica negativa.
   * si alguno de los numeros llega a ser igual a cualquier otro mostraremos un error al usuario
   * Usamos el operador '||' conocido como 'ó', en este caso con que una sola condicion
   * se cumpla sera suficnete para mostrar el mensaje de error
   */
  if (primerNumero === segundoNumero || primerNumero === tercerNumero || segundoNumero === tercerNumero) {

    /**
     * en nuestro nodoErrorMsn accedemos al metodo .setAttribute()
     * el cual recibe como primer argumento el nombre de la propiead html que desamos modificar
     * para este caso vamos modificar la propiedad 'class' y como segundo argumento
     * enviamos las clases de estilo que seran asignadas a la propiedad 'class' en este caso
     * asignaremos algunas clases de estilos pertenecientes al framework de estilos boostrap
     * bg-danger --> genera un fondo rojo
     * rounded-3 --> redondea las esquinas 
     * mb-2 ---> margin-bottom agrega un margen en la parte inferior del nodoErrorMsn
     * p-2 ---> agrega un padding alrededor de todo el nodoErrorMsn 
     * 
     */

    nodoErrorMsn.setAttribute('class', 'bg-danger rounded-3 mb-2 p-2');
    /**
     * modificamos el nodoErrorMsn accediendo a su propiedad .textContent
     */
    nodoErrorMsn.textContent = 'No se permiten numeros iguales'

    /**
     * utilizamos la instruccion de return para romper el flujo de nuestra aplicacion
     * y evitar que continue a realizar la valiacion de ordenamiento
     */
    return;
  }

  /**
   * Crearemos o declararemos 3 variables para almacenar los numeros segun su valor
   * pero no las vamos a inicializar es decir no les asignaremos un valor inicial
   */
  let numeroMayor;
  let numeroMedio;
  let numeroMenor;
  /**
   * validaremos que los numeros no sean menores a 0
   */
  if (primerNumero >= segundoNumero) {
    /**
     * si el valor del primer numero es mayor o igual al del segundo cumplira la condicion
     * y procedera a evaluar la siguiente
     */
    if (primerNumero >= tercerNumero) {
      /**
       * si primer numero es mayor al tercero podemos decir que el mayor numero 
       * es el primer numero y procedemos a evaluar quien es mayor de los 
       * otros numeros
       */
      numeroMayor = primerNumero;
      /**
       * ahora procedemos a verificar cual numero es mayor y menor entre los faltantes
       */
      if (segundoNumero > tercerNumero) {
        /**
         * si el segundo numero es mayor al tercero procederemos a asignarlo
         * como numero medio y al tercer numero como numero menor
         */
        numeroMedio = segundoNumero;
        numeroMenor = tercerNumero;
      } else {
        /**
         * si la anterior condicion no se cumple procederemos a asignar el tercer numero 
         * como numero medio y al segundo numero como numero menor
         */
        numeroMedio = tercerNumero;
        numeroMenor = segundoNumero;
      }
    } else {
      /**
       * si la condicion anterior no se cumple procederemos a asignar 
       * como numero mayor al tercer numero
       * como numero medio al primer numero
       * como numero menor al segundo numero
       */
      numeroMayor = tercerNumero;
      numeroMedio = primerNumero;
      numeroMenor = segundoNumero;

    }

  } else {
    if (segundoNumero > tercerNumero) {
      /**
       * si segundo numero es mayor al tercer numero
       * asignaremos al segundo numero como el mayor de los 3
       */
      numeroMayor = segundoNumero;
      /**
       * ahora procedemos a verificar cual numero es mayor y menor entre los faltantes
       */
      if (primerNumero > tercerNumero) {
        /**
         * si el primer numero es mayor al tercero procederemos a asignarlo
         * como numero medio y al tercer numero como numero menor
         */
        numeroMedio = primerNumero;
        numeroMenor = tercerNumero;
      } else {
        /**
         * si la anterior condicion no se cumple procederemos a asignar el tercer numero 
         * como numero medio y al primer numero como numero menor
         */
        numeroMedio = tercerNumero;
        numeroMenor = primerNumero;
      }
    } else {
      /**
       * sino se cumple la condicion anterior procedemos a asignar
       * como numero mayor al tercer numero
       * como numero medio al segundo numero
       * como numero menor al primer numero
       */
      numeroMayor = tercerNumero;
      numeroMedio = segundoNumero;
      numeroMenor = primerNumero;
    }
  }
  /**
   *  utilizaremos  nodoResultadoOrdenar accediendo a su propiedad '.textContent'
   * y asignaremos alli los numeros ordenados para modificar el DOM y poder mostrarle
   * el resultado al usuario
   * empleamos  un template-string para mostrar texto y nuestro resultado
   */
   nodoResultadoOrdenar.textContent = `Numero mayor es: ${numeroMayor}, Numero medio es: ${numeroMedio}, Numero menor es: ${numeroMenor}`;
}