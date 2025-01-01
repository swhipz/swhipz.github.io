import './gallery.css';
import amfotball1 from "../../media/gallery/amfotball1.jpg"
import amfotball2 from "../../media/gallery/amfotball2.jpg"
import ma from "../../media/gallery/ma.jpg"
import dog1 from "../../media/gallery/dog1.jpg"
import landscape from "../../media/gallery/landscape.jpg"
const Gallery = () => {
    return (
        <>
        <div className="galleryWrapper">
        <h2 className="caption top"><i style={{fontSize:"4rem", fontWeight:"100"}}>Do you need..<br /></i> </h2>
            <div className="image-wrapper">

                <h2 className="caption">Sports Photography?</h2>
                <img class="img one" src={amfotball1} alt="football player" />
            </div>
            <div className="image-wrapper">
                <img class="img two" src={amfotball2} alt="american football" />
                <h2 className="caption">Professional <i style={{fontSize:"2rem", color:"#b9b9b9"}}>&</i> cool..</h2>
            </div>
        </div>
        <h2 style={{
            fontWeight: "100",
            textAlign: "center"
        }}className="caption">With elegant style?</h2>
        <div className="galleryWrapper">
            <div className="image-wrapper three">
                <h2 className="caption">I do portraits of people</h2>
                <img class="img one" src={ma} alt="woman" />
            </div>
            <div className="image-wrapper portraits">
                <img id="portraitsize" class="img two" src={dog1} alt="dog" />
                <h2 className="caption"><i style={{fontSize:"2rem", color:"#b9b9b9"}}>&</i> animals</h2>
            </div>
            <div className="image-wrapper portraits">
            <h2 className="caption"><i style={{fontSize:"2rem", color:"#b9b9b9"}}>I also do <br /></i> landscape photos</h2>
                <img id="portraitsize" class="img two" src={landscape} alt="dog" />
  
            </div>
            <div className="end">
                <></>
            </div>
        </div>
        </>
    );
}
export default Gallery;