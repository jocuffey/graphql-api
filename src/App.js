import './App.css';
import { API } from 'aws-amplify'
import { listRecipes } from './graphql/queries'
import { createRecipe} from './graphql/mutations'
import { onCreateRecipe } from './graphql/subscriptions'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const pullData = async () => {
      const data = await API.graphql({ query: listRecipes})
      console.log(data)
    }
    pullData()

    const subscription = API.graphql(
      { query: onCreateRecipe}).subscribe({
        next: (recipeData) => {
          pullData()
        },
        error: (err) => {
          console.log(err)
        }
      })
    return () => subscription.unsubscribe()
  }, [])

  const createNewRecipe = async () => {
    const name = prompt('recipe name?')
    const newRecipe = await API.graphql({ query: createRecipe, variables: { input: {name}}})
    console.log(newRecipe)
  }
  
  return (
   <div className ="App">
     <button onClick={createNewRecipe}>Create recipe</button>
   </div>
  );
}

export default App;
