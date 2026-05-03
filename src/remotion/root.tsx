import { Composition } from "remotion";
import { ProductPresentation } from "./ProductPresentation";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="ProductPresentation"
        component={ProductPresentation}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
