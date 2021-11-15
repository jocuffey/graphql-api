import './App.css';
import { API } from 'aws-amplify'
import { listRecipes } from './graphql/queries'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const pullData = async () => {
      const data = await API.graphql({ query: listRecipes})
      console.log(data)
    }
    pullData()
  }, [])
  return (
    <h1>Check console for data</h1>
  );
}

export default App;
