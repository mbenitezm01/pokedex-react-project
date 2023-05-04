import Type from './Type'
import { strCapital } from '../Utils.js'

import './Info.css'

const Info = ({ speciesData, pokeData }) => {

    //Revisa si existe el flavo_text_entries, y que no sea un arreglo vacio para evitar errores
    function flavorChecker() {
        try {
            if (speciesData.flavor_text_entries.length !== 0) {

                for (let i = 0; i < speciesData.flavor_text_entries.length; i++) {
                    if (speciesData.flavor_text_entries[i].language.name === 'en') {
                        return speciesData.flavor_text_entries[i].flavor_text;
                    }
                }

            }
        }
        catch (e) {
            return 'No data';
        }
    }

    return (
        <div>
            <table className='info-container'>
                <th><h1 style={{paddingTop:'10px'}}>No.{speciesData.id} {strCapital(speciesData.name)}</h1></th>
                <tr><div className='types'>
                    {pokeData.types.map((type, i) => <Type key={i} type={pokeData.types[i].type.name} />)}
                </div>
                    <p>{flavorChecker()}</p>
                    <p>Height: {pokeData.height / 10}m</p>
                    <p>Weight: {pokeData.weight / 10}kg</p>
                    <p>Abilities: {
                        pokeData.abilities.map(function (item, i) {
                            return <span key={i} >{pokeData.abilities[i].ability.name}{i !== (pokeData.abilities.length - 1) ? ', ' : ''}</span>;
                        })}
                    </p></tr>
            </table>
        </div>
    )
}
export default Info;
