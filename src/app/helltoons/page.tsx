import Aboutpage from "./Aboutpage";
import Helltoons from "./Homepage";
import PreviewCards from "./PreviewCards";

export default function Hero(){
    return (
        <>
        <div id="landingpage">
            <Helltoons />
        </div>
        <div id="aboutpage">
            <Aboutpage />
        </div>
        <div id="aboutpage">
            <PreviewCards />
        </div>
        </>
    )
}