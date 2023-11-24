import React from 'react'
import { Link } from 'react-router-dom';
import fav from '../assets/124378.jpg'

const Home = () => {
  return (
    <div className='Home-Page  text-white container-fluid d-flex justify-content-center align-items-center' style={{background:"linear-gradient(45deg, #1CC5DD 0%, #8E42D1 100%)"}} >
             <div className="black-line"></div>
        <div className='row container '>
            <div className='col-lg-6 d-flex justify-content-center align-items-start flex-column'  style={{height:"80.6vh"}}>
              <h2 style={{fontSize:"60px"}}>Discover Worlds Between the Pages</h2>
              <h3 style={{fontSize:"20px", color:"#ffffff"}}>"Journey into Infinite Stories, One Page at a Time."</h3>
              <Link to="/books" className='viewBook my-3 ' style={{background:"#ac54da", border:'1px #ac54da solid'}}>View Books</Link>
            </div>
            <div className='col-lg-6 d-flex justify-content-center align-items-end flex-column'  style={{height:"80.6vh"}}>
              <img className="img-fluid homeimg" src={fav} style={{height:'500px', width:'700px'}}></img>
            </div>
        </div>
    </div>
  );
}

export default Home;