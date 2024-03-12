const sequelize = require('./database.js')

const seed = () => {
    sequelize.query(`
        DROP TABLE IF EXISTS recipes CASCADE;
        DROP TABLE IF EXISTS ingredients CASCADE;
        DROP TABLE IF EXISTS instructions CASCADE;

        CREATE TABLE recipes (
            recipe_id SERIAL PRIMARY KEY,
            recipe_name VARCHAR (250) NOT NULL
        );


        CREATE TABLE ingredients (
            ingredient_id SERIAL PRIMARY KEY,
            recipe_id INTEGER,
            ingredient_name VARCHAR NOT NULL,
            unit VARCHAR NOT NULL,
            measurement VARCHAR NOT NULL,
            FOREIGN KEY (recipe_id) REFERENCES recipes(recipe_id)
        );


        CREATE TABLE instructions (
            instructions_id SERIAL PRIMARY KEY,
            recipe_id INTEGER,
            instructions TEXT NOT NULL,
            FOREIGN KEY (recipe_id) REFERENCES recipes(recipe_id)
        );
        
    `);
    sequelize.query(`
        INSERT INTO recipes (recipe_name)
        VALUES
            ('Sweet and Sour Chicken'),
            ('French Dip Sandwiches'),
            ('Good Old Fashioned Pancakes'),
            ('Creamy Homemade baked Mac and Cheese');
    

        INSERT INTO ingredients (recipe_id, ingredient_name, unit, measurement)
        VALUES (1,'Vegetable Oil', 'tbs', '2'),
              (1,'Chicken Breasts', 'lb', '1'),
              (1,'Salt', 'tsp', '1/2'),
              (1,'Pepper', 'tsp', '1/2'),
              (1,'Red pepper chopped', 'cup', '1/2'),
              (1,'Cornstarch', 'tsp', '4'),
              (1,'Water', 'tsp', '4'),
              (1,'Canned Pineapple chuncks, drained', 'cup', '1'),
              (1,'Pineapple juce from can', 'cup', '1'),
              (1,'Brown sugar', 'tbs', '3'),
              (1,'Rice Vinegar', 'tbs', '3'),
              (1,'Chicken stock', 'cup', '1/4'),
              (1,'Green pepper choped', 'cup', '1/2'),
              (1,'Cooked rice', 'cup', '4'),

              (2, 'Butter', 'tbs', '3'),
              (2, 'Shallot chopped', 'qt', '2'),
              (2, 'All-purpose flour', 'tbs', '1'),
              (2, 'Cans of Beef Consomee or Broth', 'qt', '3'),
              (2, 'Deli sliced roast beef', 'lb', '1 1/2'),
              (2, 'Steak Seasoning Blend or Salt and Peper', 'tsp', '2'),
              (2, 'Torpedo sandwich rolls', 'qt', '1'),
              
              (3, 'All-purpose flour', 'cups', '2'),
              (3, 'Baking powder', 'tsp', '4'),
              (3, 'Salt', 'tsp', '1'),
              (3, 'White sugar', 'tbs', '1'),
              (3, 'Milk', 'cup', '1 3/4'),
              (3, 'Egg', 'qt', '1'),
              (3, 'Butter melted', 'tbs', '3'),
              
              (4, 'Dried elbow pasta', 'lb', '1'),
              (4, 'Butter', 'qt', '1 stick'),
              (4, 'All purpose flour', 'cup', '1/2'),
              (4, 'Milk', 'cup', '1 1/2'),
              (4, 'Heavy Cream', 'cup', '2 1/2'),
              (4, 'Grated Cheddar Cheese or equivelent', 'cup', '4'),
              (4, 'Grated Swiss cheese', 'cup', '2'),
              (4, 'Garlic Salt', 'tbs', '1'),
              (4, 'Garlic Powder', 'tbs', '1'),
              (4, 'Black Pepper', 'tsp', '1/2'),
              (4, 'Paprika', 'tsp', '1/2');

        INSERT INTO instructions (recipe_id, instructions)
        VALUES 
        (1,'1. In a large non-stick skillet, heat oil over medium high heat. season chicken (chucnked) and add to pan. Brown chicken and remove to plate.\n 2. Add red and green peppers and cook for 1 minute. Stir in pineapple chuncks, juice, sugar, vinegar, and chicken stock and bring to a simmer. Simmer until sauce begins to reduce. stir in cornstarch mixture and bring liquid to a simmer. Stir in chicken and cook for 5 minutes.\n Server over rice.'),

        (2, '1. In a large, shallow skillet over moderate heat, melt butter. Add shallots to butter and saute 2 minutes. Add flour to butter and shallot and cook a minute longer. Whisk in consomee in a slow stream. Bring sauce to a bubble and allow to simmer over heat untill ready to server.\n 2. Pile meat loosely across your cutting board or a large work surace. Season meat with seasoning.\n Assemble using a pair of kitchen tongs, dip meat into loose au jus sauce and pile into rolls. Server with au jus dipping sauce.' ),
        
        (3, '1. In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter. Mix until smooth.\n  2. Heat a lightly oild griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using aproximately 1/4 cup for each pancake. Brown on both sides and server hot.\n  Makes about 8 pancakes.'),
        
        (4, '1. Preheat oven to 325 degrees F and grease a 3 qt baking dish (9x13). Set aside.\n 2. Bring a large pot of salted water to a boil. When boiling, add dried pasta and cook 1 minute les that the package directs for al dente. Drain and drizzle with a little bit of olive oil to keep from sticking.\n 3. While water is coming up to a boil, grate cheeses and toss together to mix, then divide into three piles. Aproximately 3 cups for the sauce, 1 1/2 cups for the inner layer, and 1 1/2 cups for the topping.\n 4. Melt butter in a large saucepan over MED heat. Sprinkle in flour and whisk to combine. Mixture will look like very wet sand. Cook for approximately 1 minute, whisking often. Slowly pour in about 2 cups of the milk/cream, while whisking constantly, until smooth. Slowly pour in the remaining milk/cream, while whisking constantly, until combined and smooth.\n 5. Continue to heat over MED heat, whisking very often, until thickened to a very thick consistency. It should almost be the consistency of a semi thinned out condensed soup.\n 6. Stir in spices and 1 1/2 cups of the cheeses, stirring to melt and combine. Stir in another 1 1/2 cups of cheese, and stir untill completely melted and smooth.\n 7. In a large mixing bowl, combine drained pasta with cheese sauce, stirring to combine fully. Pour half of the pasta mixture into the prepared baking dish. Top with 1 1/2 ups of grated cheeses, then top that with the remaining pasta mixture.\n 8 Sprinkle the top with the last 1 1/2 cups of cheese and bake for 15 minutes, untill cheesy is bubbly and lightly golden brown.');

    `).then(() => {
        console.log('DB has been seeded')
    })
}

module.exports = seed