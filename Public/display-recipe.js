

console.log("connected to deisplay-recipe.js")
const urlParams = new URLSearchParams(window.location.search)
const recipeName = urlParams.get('recipeName')
const displayRecipe = document.getElementById('display-recipe')




const printRecipe = (recipe) => {
    let name = document.createElement('h1')
    name.textContent = recipe.name

    let recipeContainer = document.createElement('div')
    recipeContainer.classList.add('recipe-container')
    
    let ingredientsList = document.createElement('ul')
    recipe.ingredients.forEach(ingredient => {
        let listItem = document.createElement('li')
        listItem.textContent = `${ingredient.name} - ${ingredient.unit} ${ingredient.measurement}`
        ingredientsList.appendChild(listItem)
    })

    let instructions = document.createElement('p')
    instructions.textContent = recipe.instructions

    recipeContainer.appendChild(ingredientsList)
    recipeContainer.appendChild(instructions)
    
    let displayRecipeDiv = document.getElementById('display-recipe')
    displayRecipeDiv.innerHTML = ''
    
    displayRecipeDiv.appendChild(name)
    displayRecipeDiv.appendChild(recipeContainer)
}


    
   


const fetchRecipe = (req, res) => {
    axios.get(`http://localhost:7777/api/recipes/?recipeName=${recipeName}`)
    .then(res => {
        console.log("recived data:", res.data)
        const recipe = {
            name: res.data[0].recipe_name, 
            ingredients: res.data.map(ingredient => ({
                name: ingredient.ingredient_name,
                unit: ingredient.unit,
                measurement: ingredient.measurement
            })),
            instructions: res.data[0].instructions 
        }
        printRecipe(recipe)
    })
    .catch(err => { 
        console.log(err)
    })
}
fetchRecipe()