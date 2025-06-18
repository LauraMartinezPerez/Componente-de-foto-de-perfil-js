'use strict';

const fr = new FileReader();
const fileField = document.querySelector('.js__profile-upload-btn');
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js__profile-preview');


/**
 * Recoge el archivo añadido al campo de tipo "file"
 * y lo carga en nuestro objeto FileReader para que 
 * lo convierta a algo con lo que podamos trabajar.
 * Añade un listener al FR para que ejecute una función
 * al tener los datos listos
 * @param {evento} e 
 */
function getImage(e) {
    const myFile = e.currentTarget.files[0];
    fr.addEventListener('load', writeImage);
    fr.readAsDataURL(myFile);
}


/**
 * Una vez tenemos los datos listos en el FR podemos
 * trabajar con ellos ;)
 */
function writeImage() {
    /* En la propiedad `result` de nuestro FR se almacena
     * el resultado. Ese resultado de procesar el fichero que hemos cargado
     * podemos pasarlo como background a la imagen de perfil y a la vista previa
     * de nuestro componente.
     */
    profileImage.style.backgroundImage = `url(${fr.result})`;
    profilePreview.style.backgroundImage = `url(${fr.result})`;

 /*Crear un nuevo elemento (POST)
Para crear un nuevo registro y almacenar los datos ingresados por la usuaria en el formulario para generar una nueva tarjeta, es necesario realizar una solicitud HTTP de tipo POST. 
Este método envía la información al servidor, donde se procesa y guarda en la base de datos, creando así un nuevo recurso. 
Nosotras, desde el frontend, debemos realizar la petición al servidor con la ruta https://dev.adalab.es/api/info/data.

Ejemplo de JSON completo que debemos enviar al servidor:

Copy
{
  "field1": 0,
  "field2": "",
  "field3": "",
  "field4": "",
  "field5": "",
  "field6": "",
  "field7": "",
  "photo": ""
}
Para en este gcaso guardar la foto/imagen en el objeto hay que poner: 
formData.photo = fr.result;
formData sería el nombre de la varibale de nuestro objeto
*/


    /* Si en lugar de establecer la imagen como fondo de un elemento, 
      estás trabajando con una etiqueta <img> en el HTML, entonces en vez de 
      asignar la imagen como background, debes establecer la URL en el atributo `src` de la imagen.
      Para ello, reemplaza las dos líneas anteriores de código por las siguientes:
    
      profileImage.src = fr.result;
      profilePreview.src = fr.result;
    */
}


/**
 * Añadimos los listeners necesarios:
 * - al botón visible para generar el click automático
 * - al campo oculto para cuando cambie su value
 */
fileField.addEventListener('change', getImage);
