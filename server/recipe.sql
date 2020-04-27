CREATE DATABASE Recipe;

USE Recipe;

CREATE TABLE dish(
	id INT AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
    );


CREATE TABLE  recipes(
	id INT AUTO_INCREMENT,
    d_id INT  NOT NULL,
    user VARCHAR(255) NOT NULL,
    r_name VARCHAR(255) NOT NULL,
    ingredients TEXT NOT NULL,
    preparation TEXT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(d_id) REFERENCES dish (id)
    );
    

INSERT INTO dish (name)
VALUES ("Pizza"),
("Soup"),
("Pasta"),
("Salad");

INSERT recipes (d_id, user, r_name,ingredients, preparation)
VALUES(1, "Eran", "Napolitana", "dough, mozzarella, tomato, basil", "Make the dough and than lay it on the table, blend the tomato and basil into a sauch in the mixer, spread the sauce and decorate with a leaf of basil when serving" ),
(2, "Snir", "Onion Soup", "2 tablespoons (1/4 stick) butter, 2 pounds onions, thinly sliced, 3 14 1/2-ounce cans beef broth, 1/2 cup dry red wine, 1 1/3 cups seasoned croutons, 4 thin slices Swiss cheese, 4 tablespoons grated Parmesan cheese", "Melt butter in heavy large pot over medium-high heat. Add onions; cook until deep brown, stirring frequently, about 25 minutes. Add broth and wine; boil until soup is slightly reduced and flavors blend, about 10 minutes. Season with salt and pepper, Meanwhile, preheat oven to 500°F. Put 4 deep ovenproof bowls on baking sheet. Put 1/3 cup croutons in each bowl, Ladle soup over croutons. Top with cheeses. Bake soup until heated through and cheeses melt, about 8 minutes."),
(3, "Yosi", "Spaghetti", "1 1/2–2 lbs. ripe tomatoes, halved, 1–2 garlic cloves, finely grated, 1/2 cup passata di pomodoro, or strained tomatoes, 4–6 tablespoons extra-virgin olive oil, 1 pinch of crushed red pepper flakes, Salt and freshly ground black pepper.","Grate the fleshy sides of the tomatoes on the large holes of a box grater into a big bowl. Discard the skins. Add the garlic, passata, oil, and crushed red pepper flakes, and season to taste with salt and pepper."),
(4, "Shoam", "Everyday gereen salad", "8 oz. mixed tender greens, 1 cup torn tender herbs (optional),  salt, vinaigrette.", "Drizzle 3 Tbsp. vinaigrette into a large bowl, coating sides and bottom of bowl. Add greens and herbs (if using). Using your hands, fold greens, working from the bottom, out and up the sides of the bowl, until evenly coated in vinaigrette. Season with salt until greens taste vibrant (you may need to season and toss a few times). Mound salad, higher than wide, on plates or in shallow bowls.");
