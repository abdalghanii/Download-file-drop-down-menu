import { Routes, Route } from 'react-router-dom';
// import Home from '../routes/Home';
// import About from '../routes/About';
import Agriculture from '../routes/Agriculture';
import Mining from '../routes/Mining';
import Services from '../routes/Services';
import Layout from './Layout';
// import Frontend from '../routes/Frontend';
// import PHP from '../routes/PHP';
// import Node from '../routes/Node';
// import AboutWho from '../routes/AboutWho';
// import OurValues from '../routes/OurValues';
import Manufacture from '../routes/Manufacture';
import Education from '../routes/Education';
import Cleaning from '../routes/Cleaning';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="about" element={<About />} /> */}
          <Route path="services" element={<Services />} />
          <Route path="agriculture" element={<Agriculture />} />
          <Route path="manufacture" element={<Manufacture />} />
          <Route path="cleaning" element={<Cleaning />} />
          <Route path="education" element={<Education />} />
          {/* <Route path="frontend" element={<Frontend />} /> */}
          {/* <Route path="node" element={<Node />} /> */}
          <Route path="mining" element={<Mining />} />
          {/* <Route path="php" element={<PHP />} /> */}
          {/* <Route path="who-we-are" element={<AboutWho />} /> */}
          {/* <Route path="our-values" element={<OurValues />} /> */}
          {/* <Route path="*" element={<p>Not found!</p>} /> */}
        </Route>
      </Routes>
    </>
  );
};

export default App;
