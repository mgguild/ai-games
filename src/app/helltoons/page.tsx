import Aboutpage from "./Aboutpage";
import Helltoons from "./Homepage";

export default function Hero(){
    return (
        <>
        <div id="landingpage">
            <Helltoons />
        </div>
        <div id="aboutpage">
            <Aboutpage />
        </div>
        </>
    )
}