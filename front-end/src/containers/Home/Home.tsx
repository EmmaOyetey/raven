import { useEffect} from 'react'
import ravenLogo from '../../assets/ravenLogo.png'
import Nav from '../../components/Nav/Nav'
import './Home.scss'
import { Link } from 'react-router-dom'
const Home =() => {

    useEffect(() => {
        
        const timeoutDuration = 19000; 
      
        const timeoutFunction = setTimeout(() => {
          console.log('Timeout function executed');
          const ravenLogoElement = document.querySelector('.logo_raven');
          if (ravenLogoElement) {
            ravenLogoElement.classList.remove('spin'); 
          }
        }, timeoutDuration);
      
        return () => {
          clearTimeout(timeoutFunction);
        };
      }, []); //

return (
    <>
    <Nav/>
    <div className="page-container--home-page">
      <div className = "home__image-container">
      <Link to="/organisations"> 
        <img className = "logo_raven spin"
            src={ravenLogo} 
            alt="raven Logo" 
            />
        </Link>
      </div>
      <div className = "home-content">
        <h1>RAVEN</h1>
          <p className = "home-content__intro">Providing access to information on charitable and non profit organiastions who support young people.</p>
          <p className = "home-content__link">Click the <span style={{ fontFamily: 'Major Mono Display, monospace' }}>RAVEN</span> to <span style={{ fontFamily: 'Major Mono Display, monospace' }}>SEE</span></p>      
        <div className = "home-content__values">
          <p>ACCESSIBILITY</p>
          <p>TRANPARENCY</p>
          <p>OWNERSHIP</p>
        </div>
      </div>
    </div>
  </>  
)

}

export default Home;