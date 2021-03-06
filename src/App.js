import React from 'react'
import { Tarjeta } from './components/Tarjeta';
import "./style.css";
import Footer from './components/Footer';
import { Navbar } from './components/Navbar';

const App = () => {
  return (
    <>
    <Navbar />
    <section className='container mt-5'>
      <Tarjeta title1='Capitana Marvel'  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/capitana-marvel-poster-1551691489.jpg?crop=1xw:1xh;center,top&resize=480:*"/>
      <Tarjeta title1='Vengadores: End Game' src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/vengadores-endgame-orden-peli-culas-marvel-1556096718.jpg?crop=1xw:1xh;center,top&resize=480:*"/>
      <Tarjeta title1='Guardianes de la Galaxia' src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/guardianes-de-la-galaxia-1525787553.jpg?crop=1xw:1xh;center,top&resize=480:*"/>
      <Tarjeta title1='Vengadores: La Era de Ultrón' src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/vengadores-era-de-ultron-poster-1551691493.jpg?crop=1xw:1xh;center,top&resize=480:*"/>
      <Tarjeta title1='Spiderman Homecoming' src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spiderman-homecoming-poster-1551691492.jpg?crop=1xw:1xh;center,top&resize=480:*"/>
      <Tarjeta title1='Thor Ragnarok' src="https://es.web.img2.acsta.net/pictures/17/08/25/09/36/103601.jpg"/>
    </section>
      <Footer/>
    </>

  
  )
}

export default App;