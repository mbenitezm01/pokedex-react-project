import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

import Searchbar from './Searchbar'
import Info from './Info'
import Sprite from './Sprite'

import './Pokedex.css'

function Pokedex() {

    const [pokeSpeciesData, setPokeSpeciesData] = useState({}); //Datos de la especie de pokemon
    const [pokeData, setPokeData] = useState({}); //Datos de pokemon
    const [pokeName, setPokeName] = useState(); //Nombre de pokemon a buscar
    const [isLoading, setIsLoading] = useState(false); //Determina si se esta realizando el get
    const [found, setFound] = useState(false); //Determina si se encontro el pokemon a buscar

    const fetchPokeData = useCallback(async (name) => {
        try {

            //Se hace primero el get de la especie
            let response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${name}`);
            setPokeSpeciesData(response.data);

            //Utilizando el nombre de la especie se hace el get del pokemon
            response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${response.data.varieties[0].pokemon.name}`);
            setPokeData(response.data);

            //Al realizar ambos gets se termina de cargar
            setIsLoading(false);
            setFound(true);
        }
        catch (e) {
            //Si el get falla, el valor de found cambia a false
            setIsLoading(false);
            setFound(false);
            alert('Pokemon not found');
        }
    }, []);



    //Si se esta cargando se regresa una pantalla de loading
    if (isLoading) {
        return (
            <div>
                <Searchbar pokeName={pokeName} setPokeName={setPokeName} handleClick={handleClick} />
                <h1>Loading...</h1>
            </div>
        )
    }

    //Funcion de click de buscar realiza un get con el nombre en el input
    function handleClick() {
        setIsLoading(true);
        fetchPokeData(pokeName);
    }

    return (
        <div>
            <Searchbar pokeName={pokeName} setPokeName={setPokeName} handleClick={handleClick} />
            <div className='pokedex-container'>
                {/*Si found es true significa que el get funciono, y se renderiza*/
                    found &&
                    <div className='flex-container'>
                        <Sprite dexNum={pokeSpeciesData.id} />
                        <Info speciesData={pokeSpeciesData} pokeData={pokeData} />
                    </div>
                }
            </div>
        </div>
    )
}
export default Pokedex;
