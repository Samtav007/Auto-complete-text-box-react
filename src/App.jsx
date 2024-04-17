import './App.css'
import SearchBox from './Components/search'
import BoxData from "./Components/countryData.json"

function App() {
  return (
    <>
      <SearchBox data={BoxData}/>
    </>
  )
}

export default App