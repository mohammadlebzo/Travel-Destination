import './TourDetails.css';
import { useState } from 'react';
import { useParams } from "react-router-dom";
import jsonData from '../../data/db.json';
import Navbar from '../Navbar/Navbar';
import Button from 'react-bootstrap/Button'

function TourDetails(props) {
    let { id } = useParams();
    let dataByID = jsonData.filter(item => item.id === id);
    
    const [buttonBol, setButtonBol] = useState(false);
    const [info, setInfo] = useState(`${dataByID[0].info.substring(0, dataByID[0].info.length / 2)}...`);
    const [buttonText, setButtonText] = useState('see more');

    function moreInfoHandle() {
        if (buttonBol) {
            setInfo(`${dataByID[0].info.substring(0, dataByID[0].info.length / 2)}...`);
            setButtonText('see more');
            setButtonBol(false);
        }
        else {
            setInfo(dataByID[0].info);
            setButtonText('see less');
            setButtonBol(true);
        }
    }

    return (
        <>
            <Navbar />
            <div key={dataByID[0].id}>
                <p><span className="topicTitles">Place Name: </span> {dataByID[0].name}</p>
                <p>
                    <span className="topicTitles">Description: </span>
                    {info} <Button onClick={moreInfoHandle} variant="primary">{buttonText}</Button>{' '}
                </p>
                <img src={dataByID[0].image} alt={dataByID[0].name} />
                <p><span className="topicTitles">Price: </span> {`${dataByID[0].price}$`}</p>
            </div>

        </>
    )
}

export default TourDetails;