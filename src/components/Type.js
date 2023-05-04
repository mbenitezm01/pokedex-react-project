import './Type.css'

const Type = ({type}) =>{
    return (
        <div className={`type-container ${type}`}>
            <span style={{lineHeight:'33px'}}>{type.toUpperCase()}</span>
        </div>
    )
}
export default Type;
