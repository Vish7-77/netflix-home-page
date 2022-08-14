import React,{useEffect,useState} from "react";
import Row from "../Row";
import "./home.scss";
import axios from "axios";
import {BiPlay} from "react-icons/bi"
import {AiOutlinePlus} from "react-icons/ai"

const apikey="74f547791769cfac9d814515cd0df94a"
const apiurl="https://api.themoviedb.org/3/movie"
const upcoming="upcoming"
const toprated="top_rated"
const popular="popular"
const imgUrl="https://image.tmdb.org/t/p/original"

function Home() {

  const [upcom, setupcom] = useState([])
  const[top,settop]=useState([])
  const[pop,setpop]=useState([])
  useEffect(() => {
    const fetch=async()=>{
     const {data:{results}} =await axios.get(`${apiurl}/${upcoming}?api_key=${apikey}&language=en-US`)
     setupcom(results)
    
   
    }
    const fetchtop=async()=>{
      const {data:{results}} = await axios.get(`${apiurl}/${toprated}?api_key=${apikey}&language=en-US`)
      settop(results)
   
     }
     const fetchpop=async()=>{
      const {data:{results}} = await axios.get(`${apiurl}/${popular}?api_key=${apikey}&language=en-US`)
      setpop(results)
      
  
     }
    fetch()
    fetchtop()
    fetchpop()
    }, [])

  return (
    <>
    <section className="home">
      <div className="banner" style={{background:pop[0]?`url(${`${imgUrl}/${pop[0].poster_path}`})`:"nooe"}}>
<h1> {pop[0].title}</h1>
<p> {pop[0].overview}</p>
<div className="but">
<button> <BiPlay/>Play</button>
<button>My List<AiOutlinePlus/></button>
</div>

      </div>
      <Row title={"Upcoming "} imgUrl={imgUrl} arr={upcom}/>
      <Row title={"popular"}  imgUrl={imgUrl} arr={pop}/>
      <Row title={"toprated"}   imgUrl={imgUrl} arr={top}/>
    </section>
    </>
  );
}

export default Home;
