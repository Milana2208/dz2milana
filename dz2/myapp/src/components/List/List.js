//import './App.css';


function List (props) {
   const i = props.links.map( (item) => <li key={item.id} >{item.task}</li>)

    return (
        <>
            <h2>{i}</h2>

        </>
    );
}

export default List;


