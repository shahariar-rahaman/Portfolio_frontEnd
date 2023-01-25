import Home from './pages/Home';
import Blog from './pages/Blog';
import Header from './components/Header';
import Login from './pages/Login';
import BlogPost from './pages/BlogPost';
import FigmaPost from './pages/FigmaPost';
import ReactPost from './pages/ReactPost';
import BasicPost from './pages/BasicPost';
import Registration from './pages/Registration';
import BlogUpdate from './pages/BlogUpdate'
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <>  
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/blogPost" element={<BlogPost/>}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
          <Route path="/figmaPost" element={<FigmaPost/>}></Route>
          <Route path="/reactPost" element={<ReactPost/>}></Route>
          <Route path="/basicPost" element={<BasicPost/>}></Route>
          <Route path="/blogUpdate" element={<BlogUpdate/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
