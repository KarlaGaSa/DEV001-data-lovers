//import pokemon from './data/pokemon/pokemon.js';export const searchFilter =  (pokemon,nombrePokemon)=> {
  export const searchFilter =  (pokemon,nombrePokemon)=> {
    const nameFilter= pokemon.filter (x=>
      x.name.toLowerCase()==nombrePokemon.toLowerCase())
  
      
    ;return nameFilter
  
  
  };
  


/*export const searchFilter =  (pokemon,nombrePokemon)=> {
  const nameFilter= pokemon.filter (x=>
    x.name.toUpperCase()==nombrePokemon.toUpperCase())

    
  ;return nameFilter


};*/


/*export const ordenAzPokemon=(array)=>{

  return array.sort(function (a, b) {
    
    if (a.name < b.name) {
      return -1;
    }
    if (a.name> b.name) {
      return 1;
    }
   return 0;
  })
  
  
}


// estas funciones son de ejemplo
/*export const pokemon = () => {
  return 'pokemon';
};
export const anotherExample = () => {
  return 'OMG';
};*/


//const pokemon = 

/*Te recomendamos que este archivo contenga toda la funcionalidad que corresponda a obtener, procesar y manipular datos (tus funciones). Por ejemplo:

filterData(data, condition): esta función filter o filtrar recibiría la data, y nos retornaría aquellos datos que sí cumplan con la condición.

sortData(data, sortBy, sortOrder): esta función sort u ordenar recibe tres parámetros. El primer parámetro, data, nos entrega los datos. El segundo parámetro, sortBy, nos dice con respecto a cuál de los campos de la data se quiere ordenar. El tercer parámetro, sortOrder, indica si se quiere ordenar de manera ascendente o descendente.

Estos nombres de funciones y de parámetros son solamente referenciales, lo que decidas depende de tu propia implementación.

Estas funciones deben ser puras e independientes del DOM. Estas funciones serán después usadas desde el archivo src/main.js, al cargar la página, y cada vez que el usuario interactúe (click, filtrado, ordenado, ...).*/