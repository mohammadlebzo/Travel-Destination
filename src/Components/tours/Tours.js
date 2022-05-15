import './Tours.css';
import Tour from './tour/Tour';
import jsonData from '../../data/db.json';
import { Link } from "react-router-dom";

function Tours(props) {
    return (
        <>
            {jsonData.map(item => {
                return (
                    <>
                        <Link to={`/city/${item.id}`} key={item.id}>
                            <Tour image={item.image} name={item.name} />
                        </Link>
                    </>
                )
            })}
        </>
    )
}

export default Tours;