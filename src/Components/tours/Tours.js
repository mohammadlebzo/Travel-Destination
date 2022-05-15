import './Tours.css';
import Tour from './tour/Tour';
import jsonData from '../../data/db.json';


function Tours(props) {
    return (
        <>
            {jsonData.map(item => {
                return (
                    <>
                        <Tour image={item.image} name={item.name} />
                    </>
                )
            })}
        </>
    )
}

export default Tours;