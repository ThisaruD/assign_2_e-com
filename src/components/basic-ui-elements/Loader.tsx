import { FC } from 'react';
import Spinner from 'react-bootstrap/Spinner';


const Loader: FC<{ variant: string; animation: string; }> = ({ variant,animation}) => {

 
  return (
    <Spinner animation={ animation} role="status" variant={ variant} >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default Loader;