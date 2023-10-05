import Spinner from "react-bootstrap/Spinner";

type loaderProps = {
  animation: "border" | "grow";
  variant: "secondary";
};

const Loader = (props: loaderProps) => {
  return (
    <Spinner animation={props.animation} role="status" variant={props.variant}>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};

export default Loader;
