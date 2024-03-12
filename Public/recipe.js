
console.log("connected to recipe.js")

const recipeList = document.getElementById('recipeList')


let recipeNames

const navigateToRecipe = (recipeName) => {
  window.location.href = `display-recipe.html?recipeName=${recipeName}`
}

const createList = (recipeNames) => {
  let list = document.createElement('ul')
  list.classList.add('recipe-list')

  recipeNames.forEach(recipe => {
    console.log(recipe)
    let listItem = document.createElement('li')

    let recipeNameElement = document.createElement('h3')
    recipeNameElement.textContent = recipe
    list.appendChild(recipeNameElement)
    listItem.appendChild(recipeNameElement)
    list.appendChild(listItem)

    recipeNameElement.addEventListener('click', () => navigateToRecipe(recipe))
  })
  recipeList.appendChild(list)

}


const displayRecipes = () => {
  axios.get('http://localhost:7777/api/recipe')
    .then(res => {
      console.log(res.data)
      recipeList.innerHTML = ''

      recipeNames = res.data.map(recipe => recipe.recipe_name)
      // console.log(recipeNames)
      createList(recipeNames)
    })
    .catch(err => {
      console.log(err)
    })
}



displayRecipes()
