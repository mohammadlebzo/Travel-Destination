const jsonData = require('../../data/db.json')

function Tours(props) {
    return (
        <>
            {jsonData.map(item => {
                return (
                    <>
                        <div>
                            <p>{item.name}</p>
                            <img src={item.image} alt={item.name} />
                        </div>
                        <hr />
                    </>
                )
            })}
        </>
    )
}

export default Tours;