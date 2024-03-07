

// console.log("connected to my add-recipe folder")

//Declared Var's to grab different elements
// const form = document.getElementById('recipe-form')
const ingredientsContainer = document.getElementById('ingredients-container')
const addIngredientButton = document.getElementById('add-ingredient-btn')
const ingredientName = document.getElementById('ingredient-name')
const unit = document.getElementById('unit')
const measurement = document.getElementById('measurement')
const submitForm = document.getElementById('submit-btn')
const ingredientsArr = []

//Functions
const captureRecipeName = () => {
    const recipeName = document.getElementById('recipe_name').value
    const nameDisplay = document.getElementById('recipe-name-display')
    nameDisplay.textContent = `${recipeName}`
}
const addIngredient = () => {

    const ingredient = {
        ingredient_name: ingredientName.value,
        unit: unit.value,
        measurement: measurement.value
    }
    ingredientsArr.push(ingredient)
    ingredientName.value = ""
    unit.value = "lb"
    measurement.value = ""

    console.log(ingredientsArr)
}

const removeIngredient = (index) => {
    ingredientsArr.splice(index, 1)
    showIngredients()
    console.log(ingredientsArr)
 }

const showIngredients = () => {
    const recipeTitle = document
    const ingredientsList = document.getElementById('ingredients-list')
    ingredientsList.innerHTML = ""


    ingredientsArr.forEach((ingredient, index) => {
        const listItem = document.createElement('li')
        listItem.textContent = `${ingredient.ingredient_name} (${ingredient.unit}, ${ingredient.measurement})`

        const removeItemBtn = document.createElement('button')
        removeItemBtn.textContent = 'Remove Ingredient'
        removeItemBtn.addEventListener('click', () => removeIngredient(index))

        listItem.appendChild(removeItemBtn)
        ingredientsList.appendChild(listItem)
    })
}


const sendForm = (e) => {
    e.preventDefault ()

    const newRecipe = {
        recipe_name: document.getElementById('recipe_name').value,
         ingredients: ingredientsArr, 
         instructions: document.getElementById('instructions').value

    }
console.log(newRecipe)
    axios.post('http://localhost:7777/api/recipe', newRecipe)
    .then(res => {
        console.log(res.data)
        alert("Recipe has been added.")
    })
    .catch(err => console.log(err))
}


// Events listners
addIngredientButton.addEventListener('click', () => {
    addIngredient()
    showIngredients()
    captureRecipeName()
})
submitForm.addEventListener('click', sendForm)


