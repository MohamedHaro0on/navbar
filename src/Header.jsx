import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./logo.svg";
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter, FaBars } from 'react-icons/fa';


const Links = ["home", "aboutUs", "contactUs", "projects", "profile"]
const socialLinks = [
    { href: "https://www.facebook.com/", icon: <FaFacebook /> },
    { href: "https://twitter.com/home", icon: <FaTwitter /> },
    { href: "https://www.linkedin.com/", icon: <FaLinkedin /> },
    { href: "https://www.behance.net/", icon: <FaBehance /> }
]

const Header = (props) => {

    const [displayFullHeader, setfullHeader] = useState(false);

    // To Close the Header after Routing
    useEffect(() => {
        setfullHeader(false)
    }, [props.location])


    const ToggleHeader = () => {
        setfullHeader(prevState => !prevState);
    }


    let ClassNames = ["Header"]
    if (displayFullHeader) {
        ClassNames.push("Open")
    }
    else {
        ClassNames.push("Close");
    }


    return (
        <header className={ClassNames.join(" ").trim()}>
            <div className="Container">
                <h1 className="Heading">
                    <img alt="Codding Addict " src={Logo} title="Coding Addict" width ="250" />
                    {<button onClick={ToggleHeader} aria-label ="Toggle Header"><FaBars /></button>}
                </h1>
                <nav>
                    <ul>
                        {Links.map((element, index) => {
                            return (
                                <li key={index} ><Link to={`${element}`} aria-label ={`to ${element}`}> {element} </Link></li>
                            )
                        })}
                    </ul>
                </nav>
                <ul className="SocialLinks">
                    {socialLinks.map((element, index) => {
                        return (
                            <li key={index + 10}>
                                <a href={element.href} target="_blank" rel="noreferrer" aria-label ={`to ${element.href}`}>{element.icon}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </header>
    )
}
export default Header