import './Sprite.css'

const Sprite = ({dexNum}) => {

    return (
        <div className='sprite-container'>
            <div className='image-container'>
                {/*Cuando el cursor esta encima de la imagen, se cambia a la version shiny*/}
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${dexNum}.png`}
                onMouseOver={e => (e.currentTarget.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${dexNum}.png`)}
                onMouseOut={e => (e.currentTarget.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${dexNum}.png`)}/>
            </div>
        </div>
    )
}
export default Sprite;
