
//import data from './data/pokemon/pokemon.js'

export const searchFilter =  (pokemon,nombrePokemon)=> {
  const nameFilter= pokemon.filter (x=>
    x.name.startsWith(nombrePokemon.toLowerCase()))
    return nameFilter
  };
 

  export const ordenAZPokemon=(array)=>{

  return array.sort(function (a, b) {
    
    if (a.name < b.name) {
      return -1;
    }
    if (a.name> b.name) {
      return 1;
  }
})
};

export const ordenZAPokemon=(array)=>{

  return array.sort(function (a, b) {
    
    if (a.name < b.name) {
      return 1;
    }
    if (a.name > b.name) {
      return -1;
    }
  })
}
  
export const filtroPorTipo =  (pokemon, ptype)=> {
  const busquedaXTipo= pokemon.filter (x => 
  x.type.includes(ptype));
  return busquedaXTipo;
  };
