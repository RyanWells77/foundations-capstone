
console.log("connected to recipe.js")

const recipeList = document.getElementById('recipe-links')


let recipeNames

const createList = (recipeNames) => {

  recipeNames.forEach(recipe => {
    console.log(recipe)
    let list = document.createElement('div')
    let anchor = document.createElement('a')
    list.classList.add('recipe-list')

    let recipeNameElement = document.createElement('h3')
    recipeNameElement.textContent = recipe
    list.appendChild(recipeNameElement)
    list.appendChild(anchor)
    recipeList.appendChild(list)
  })
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
