import './Tour.css';


function Tour(props) {
    return (
        <>
            <div className='card'>
                <p>{props.name}</p>
                <img src={props.image} alt={props.name} />
            </div>
        </>
    )
}

export default Tour;