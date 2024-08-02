import Aboutpage from "./Aboutpage";
import Download from "./Downloadhere";
import Helltoons from "./Homepage";
import Newsletter from "./Newsletter";
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

        <div id="downloadhere">
            <Download />
        </div>

        <div id="newsletter">
            <Newsletter />
        </div>

        </>
    )
}