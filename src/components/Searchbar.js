import './Searchbar.css'

const Searchbar = ({pokeName, setPokeName, handleClick}) =>{

    const handleChange = (e) => {
        setPokeName(e.target.value.toLowerCase());
    }

    return (
        <div className='searchbar-container'>
            <h1>PokeDex</h1>
            <div className='input-container'>
                <input className='textbox' placeholder='Enter Pokemon name or number' onChange={handleChange}/>
                <button onClick={handleClick}>Search</button>
            </div>
        </div>
    )
}
export default Searchbar;