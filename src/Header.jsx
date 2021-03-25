import { useState, useEffect} from "react";
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
    const [width, setWidth] = useState(window.innerWidth);


    // To get the current width of the window ;
    useEffect(() => {
        const handleWindowWidth = () => {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleWindowWidth)
        return () => window.removeEventListener("resize", handleWindowWidth);
    })


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
            <div>
                <h1 className="Heading">
                    <img alt="Codding Addict " src={Logo} title="Coding Addict" />
                    {width <= 812 && <button onClick={ToggleHeader}><FaBars /></button>}
                </h1>
                <nav>
                    {Links.map((element, index) => {
                        return (
                            <Link to={`${element}`} key={index} > {element} </Link>
                        )
                    })}
                </nav>
                <ul>
                    {socialLinks.map((element, index) => {
                        return (
                            <li key={index + 10}>
                                <a href={element.href} target="_blank" rel="noreferrer" >{element.icon}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </header>
    )
}
export default Header