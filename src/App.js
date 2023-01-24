import Home from './pages/Home';
import BlogEdit from './pages/BlogEdit';
import Blog from './pages/Blog';
import Header from './components/Header';
import Login from './pages/Login';
import FigmaEdit from './pages/FigmaEdit';
import ReactEdit from './pages/ReactEdit';
import BasicEdit from './pages/BasicEdit';
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
          <Route path="/blogEdit" element={<BlogEdit/>}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
          <Route path="/figmaEdit" element={<FigmaEdit/>}></Route>
          <Route path="/reactEdit" element={<ReactEdit/>}></Route>
          <Route path="/basicEdit" element={<BasicEdit/>}></Route>
          <Route path="/blogUpdate" element={<BlogUpdate/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
