import Screen from "./Screen/Screen";
import './MiniScreen.css'
import LandingScreen from "../landingScreen/landingScreen";

export default function MiniScreen() {
    return (
        <div className="miniScreen">
            {/* <Screen /> */}
            <LandingScreen />
        </div>
    )
}