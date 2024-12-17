import { ColorRing } from "react-loader-spinner";

const LoadingRing = ({ width, height, colors }) => {
  return (
    <ColorRing
      visible={true}
      height={height}
      width={width}
      ariaLabel="color-ring-loading"
      wrapperStyle={{}}
      wrapperClass="color-ring-wrapper"
      colors={colors}
    />
  );
};

export default LoadingRing;
