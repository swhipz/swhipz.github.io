import './footer.css'
import StackIcon from 'tech-stack-icons'
import  fjicon  from '../../media/icon-removebg-preview.png'
const Footer = () => {
    return(
        <>
        <div className="toTop" onClick={() => {window.scrollTo({top:0, behavior:"smooth"})}}>
         Go up
        </div>
        <div className="spacing" style={{paddingTop:"30vh"}}></div>
        <footer>
            <div className="flexbox">
                <div className="linkwrap">
                    <ul>
                        <li><a href="https://www.linkedin.com/in/fredrik-jensen-89355a271/"><img src="https://www.svgrepo.com/show/108614/linkedin.svg"className="icons"/></a></li>
                        <li><a href="https://github.com/swhipz"><StackIcon name="github" className='icons'/><br /></a></li>
                        <li><a href="https://fredrikjensen.no/"><img src={fjicon} alt="fj website icon"  className="icons"/></a></li>
                    </ul>
                </div>
            </div>
        </footer>

        <div className="mobFoot"
        style={{
            paddingBottom:"25vh",
            fontSize:"24px",
            textDecoration:"none",
            color:"#292929"
        }}>
            <a href="https://www.linkedin.com/in/fredrik-jensen-89355a271/">Linked-In</a>
            <a href="https://github.com/swhipz">GitHub</a>
            <a href="https://fredrikjensen.no/">Website</a>
            
        </div>
        </>
    )
}
export default Footer;