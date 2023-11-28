import './Data.css'

const Edata =(props) =>{
    return(
        <div className="block">
            <h3>Emplpyee Name :</h3>
            <p>{props.elempData.name}</p>
            <h3>Designation</h3>
            <p>{props.elempData.desi}</p>
            <h3>Age</h3>
            <p>{props.elempData.age}</p>
            <h3>Salary</h3>
            <p>{props.elempData.sal}</p>
            <hr />
            <button onClick={()=> {props.deleteHandler(props.ind)}}>Delete</button>
        </div>
    )
}
export default Edata