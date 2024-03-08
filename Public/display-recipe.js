
const displayRecipe = document.getElementById('display-recipe')

const fetchRecipe = (req, res) => {
    axios.get('http://localhost:7777/api/recipe')
    .then(res => {
        console.log(res.data)
    })
}