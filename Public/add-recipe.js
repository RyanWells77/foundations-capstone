

console.log("connected to my add-recipe folder")

//Declared Var's to grab different elements
const form = document.getElementById('recipe-form')
const ingredientsContainer = document.getElementById('ingredients-container')
const addIngredientButton = document.getElementById('add-ingredient-btn')
const ingredientName = document.getElementById('ingredient-name')
const unit = document.getElementById('unit')
const measurement = document.getElementById('measurement')
const ingredientsArr = []
//Functions

const addIngredient = () => {

    const ingredient = {
        ingredient_name: ingredientName.value,
        unit: unit.value,
        measurement: measurement.value
    }
    ingredientsArr.push(ingredient)
    ingredientName.value = ""
    unit.value = "lb"
    measurement.value = "5"
console.log(ingredientsArr)
}

const removeIngredient = () => {
    ingredientDiv.remove()
    ingredientsContainer.appendChild(ingredientDiv)
}

const nextIngredient = () => {
    const ingredientDiv = document.createElement('div')
    ingredientDiv.classList.add('ingredients')

    ingredientDiv.innerHTML = `
        <label for="ingredient">Ingredient:</label>
        <input type="text" class="ingredient-name" name="ingredient[]" required />
        <label for="unit">Unit:</label>
        <select name="unit" class="unit">
            <option value="lb">lb</option>
            <option value="oz">oz</option>
            <option value="cup">cups</option>
            <option value="tbs">tbs</option>
            <option value="ts">ts</option>
            <option value="pinch">pinch</option>
        </select>
        <div class="measurement">
            <label for="measurement">Measurement:</label>
            <select name="measurement" class="measurement">
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
                <option value="2/3">2/3</option>
                <option value="1/3">1/3</option>
                <option value="3/4">3/4</option>
                <option value="1/2">1/2</option>
                <option value="1/4">1/4</option>
                <option value="1/8">1/8</option>
            </select>
            <button type="button" class="removeIngredient">Remove</button>
        </div>
    `
    ingredientDiv.querySelector('.removeIngredient').addEventListener('click', removeIngredient)
}

const sendForm = (e) => {
    e.preventDefault ()

    // let ingredientsArr = []
    // const ingredientInputs = document.querySelectorAll('.ingredient-name')
    // const unitSelects = document.querySelectorAll('.unit')
    // const measurementSelects = document.querySelectorAll('.measurement')

    // ingredientInputs.forEach((input, index) => {
    //    const ingredient = {
    //        ingredient_name: input.value,
    //        unit: unitSelects[index].value,
    //     //    measurement: measurementSelects[index].value
    //        measurement: "this is a test"
    //    }
    //    ingredientsArr.push(ingredient)
    // })

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
addIngredientButton.addEventListener('click', addIngredient)
form.addEventListener('submit', sendForm)


