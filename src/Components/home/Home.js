import Footer from "../footer/Footer";
import Header from "../header/Header";
import Tours from "../tours/Tours";

import './Home.css';

function Home(props) {
    return (
        <>
            <Header />
            <div className="cardsContainer">
                <Tours />
            </div>
            <Footer />
        </>
    )
}

export default Home;