import './header.css';
const Header = () => {
    return (
        <>
        <header>
            <span className="headerCont">
                <h1><a href="#">.whitespace</a></h1>
                <nav><ul>
                    <li><a href="#" onClick={()=>window.scrollTo({top: 800, behavior: "smooth"})}>Gallery</a></li>
                    <li><a href="#" onClick={()=>window.scrollTo({top: 6550, behavior: "smooth"})}>Info</a></li>
                    <li><a href="#" onClick={()=>window.scrollTo({top: 7200, behavior:"smooth"})}>Contact</a></li>
                </ul></nav>
            </span>

        </header>
        </>
    )

}
export default Header;