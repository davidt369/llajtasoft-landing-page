import { Player } from "@remotion/player";
import ProductPresentation from "../../../remotion/ProductPresentation";
import "./HeroRemotion.css";

export default function HeroRemotion() {
  return (
    <section className="hero-remotion">
      <div className="hero-remotion__player-container">
        <Player
          component={ProductPresentation}
          inputProps={{}}
          durationInFrames={180}
          fps={30}
          compositionWidth={1920}
          compositionHeight={1080}
          controls={true}
          loop={true}
          autoplay={true}
          acknowledgeRemotionLicense={true}
          style={{
            width: "100%",
            height: "auto",
            aspectRatio: "16 / 9",
          }}
        />
      </div>
    </section>
  );
}
