import './Tours.css';
const jsonData = require('../../data/db.json')

function Tours(props) {
    return (
        <>
            {jsonData.map(item => {
                return (
                    <>
                        <div className='card'>
                            <p>{item.name}</p>
                            <img src={item.image} alt={item.name} />
                        </div>
                    </>
                )
            })}
        </>
    )
}

export default Tours;