import './Footer.css';

function Footer(props) {
    let githubLink = 'https://github.com/mohammadlebzo';
    return (
        <>
            <ul id='ulF'>
                <li>Mohammad Lebzo &copy;</li>
                <li id='liURL'><a href={githubLink} target='_blank'>My GitHub</a></li>
            </ul>
        </>
    )
}

export default Footer;