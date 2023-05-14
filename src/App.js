import NavBar from './components/NavBar';
import Home from './pages/Home';
import AdBlog from './pages/blog/AdBlog';
import DetailBlog from './pages/blogs/DetailBlog';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const websiteTitle = "Dunia Coding";



  // useEffect(() => {
  //   console.log("Trigger Use Effect");
  //   console.log(blogs);
  // },[])



  return (
    <BrowserRouter>
      <div>
        <NavBar brand={websiteTitle} />

        <Routes>
          <Route path='/'  element={<Home />}></Route>
          <Route path='/add' element={<AdBlog />}></Route>
          <Route path='/blogs/:id' element={ <DetailBlog />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
