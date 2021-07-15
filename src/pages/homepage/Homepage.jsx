import './homepage.css'
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import { useLocation } from "react-router";

const Homepage = () => {
  const location = useLocation();
   console.log(location);
  return (
    <>
      <Header />
      <div className='home'>
        <Posts /> 
        <Sidebar />
      </div>
    </>
  )
}

export default Homepage
