import './App.scss'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Organisation from './containers/Organisations/Organisations'
import Home from './containers/Home/Home'
const App= () => {
 //const [count, setCount] = useState(0)


  return (
    <Router>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/organisations" element={<Organisation />} />
      </Routes>
    </Router>

  )
}

export default App


{/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div> */}