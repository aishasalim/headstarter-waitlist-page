import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Services from '../components/Services';

import LandingNavigation from '../components/LandingNavigation';
import Action from '../components/Action';
import Footer from '../components/Footer';


function Body() {
  return (
    <>
    <LandingNavigation/>
    <div className='mt-[5em] pt-[5rem] lg:pt-[6em]'>
    <Hero/>
    <Services />
    <Action />
    {/* <Benefits /> */}
    <Footer />
    </div>

    </>
  )
}

export default Body