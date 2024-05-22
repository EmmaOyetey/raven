import { useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import springLogo from './assets/Spring_Framework_Logo.png'
import ravenLogo from './assets/ravenLogo.png'
import './App.scss'

const App= () => {
 //const [count, setCount] = useState(0)

 useEffect(() => {
  // Timeout duration in milliseconds
  const timeoutDuration = 19000; // 5 seconds

  // Log a message when the timeout function is created
  console.log('Timeout function created');

  // Timeout function to remove the spinning animation class after timeoutDuration
  const timeoutFunction = setTimeout(() => {
    console.log('Timeout function executed');
    const ravenLogoElement = document.querySelector('.logo_raven');
    if (ravenLogoElement) {
      ravenLogoElement.classList.remove('spin'); // Remove the spinning class
    }
  }, timeoutDuration);

  // Clean up function to clear the timeout when component unmounts
  return () => {
    console.log('Cleanup function executed');
    clearTimeout(timeoutFunction);
  };
}, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <>
      <div>
        <img className = "logo_raven spin"
             src={ravenLogo} 
             alt="raven Logo" 
             />
      </div>

      <div>
        <h1>RAVEN</h1>
        <p>Providing access to information on charitable and non profit organiastions who can support young people.</p>
        <p>Giving you the information you need to make decisions on what is right for you.</p>
      <p> ACCESSIBILITY TRANPARENCY OWNERSHIP</p>
      </div>

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

      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div> */}
    </>
  )
}

export default App
