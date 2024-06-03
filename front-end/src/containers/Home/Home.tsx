import { useEffect} from 'react'
import viteLogo from '../../../public/vite.svg'
import reactLogo from '../../../public/react.svg'
import springLogo from '../../assets/Spring_Framework_Logo.png'
import ravenLogo from '../../assets/ravenLogo.png'
import Nav from '../../components/Nav/Nav'
import './Home.scss'
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
    <div>
      <a href="">
      <img className = "logo_raven spin"
           src={ravenLogo} 
           alt="raven Logo" 
           />
      </a>
    </div>
    <div>
      <h1>RAVEN</h1>
      <p>Providing access to information on charitable and non profit organiastions who support young people.</p>
      <p>Click the RAVEN to SEE</p>      
    </div>

    <p className ="values"> ACCESSIBILITY TRANPARENCY OWNERSHIP</p>

    <div className = "dev-tools"> 
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <a href="https://spring.io/projects/spring-boot" target="_blank">
        <img src={springLogo} className="logo_spring" alt="SPring logo" />
      </a>
    </div>
  </>  
)

}

export default Home;