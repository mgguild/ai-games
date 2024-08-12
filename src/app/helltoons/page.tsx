import Aboutpage from "./Aboutpage";
import Download from "./Downloadhere";
import Helltoons from "./Homepage";
import Newsletter from "./Newsletter";
import PreviewCards from "./PreviewCards";
import PreviewCardsmobile from "./PreviewCardsmobile";

export default function Hero(){
    return (
        <>
        <div id="landingpage">
            <Helltoons />
        </div>
        <div id="aboutpage">
            <Aboutpage />
        </div>
        <div id="previewcard">
            <PreviewCards />
        </div>

        <div id="previewcardmobile">
            <PreviewCardsmobile />
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