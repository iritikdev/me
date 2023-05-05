import { Rings } from "react-loader-spinner";

function LoadingSpinner({ isLoading, theme, height = 80, width = 80 }) {
  return (
    <div>
      {isLoading && (
        <Rings
          height={height}
          width={width}
          color={theme.palette.green.main}
          radius="6"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="rings-loading"
        />
      )}
    </div>
  );
}

export default LoadingSpinner;
