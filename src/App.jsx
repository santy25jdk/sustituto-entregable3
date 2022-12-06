import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import ErrorFetch from './components/ErrorFetch'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'

function App() {

	const [locations, setLocations] = useState()
	const [locationInput, setLocationInput] = useState()
	const [hasError, setHasError] = useState(false)

	useEffect(() => {

		let API;
		if(locationInput){
			API = `https://rickandmortyapi.com/api/location/${locationInput}`
		}else{
			const randomIdLocation = Math.floor(Math.random() * 126) + 1;
			API = `https://rickandmortyapi.com/api/location/${randomIdLocation}`
		}
		axios.get(API)
		.then(res => {
			setHasError(false)
			setLocations(res.data)
		})
		.catch(err => {
			setHasError(true)
			console.log(err)
		})
	}, [locationInput])


	const handleSubmit = e => {
		e.preventDefault()
		setLocationInput(e.target.inputSearch.value)
	}


  return (
    <div className="App">
		<div className='principal'>
      		<h1 className='titulo'>Rick and Morty</h1>
			<form className='form' onSubmit={handleSubmit}>
				<input id='inputSearch' type="text" placeholder='ingrese un número' />
				<button>Search</button>
			</form>
		</div>
				{
					hasError ? 
					<ErrorFetch />
					:
					<>
						<LocationInfo locations={locations} />
						<div className='residents-container'>
							{
								locations?.residents.map(url => (
									<ResidentCard key={url} url={url} /> ))
							}
						</div>
					</> 
				}
    </div>
  )
}

export default App
