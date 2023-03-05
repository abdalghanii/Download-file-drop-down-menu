import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <>
      <h2>Functionality Services </h2>

      <Link to="/agriculture">Function 1</Link>
      <Link to="/manufacture">Function 2</Link>
      <Link to="/mining">Function 3</Link>
      <Link to="/cleaning">Function 4</Link>
      <Link to="/education">Function 5</Link>
    </>
  );
};

export default Services;
