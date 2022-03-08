/********************************************/
var books = [
{
    name: "Harry Potter and the Prisoner of Azkaban",
    author: "J. K. Rowling",
    price: 120,
    origin: "UK",
},

{
    name: "Harry Potter and the Sorcerer's Stone",
    author: "J. K. Rowling",
    price: 170,
    origin: "Uk",
},

{
    name: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 190,
    origin: "US",
},

{
    name: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
    price: 140,
    origin: "UK",
},

{
    name: "Harry Potter and the Prisoner of Azkaban",
    author: " J.k. Rowling",
    price: 130,
    origin: "UK",
},

{
    name: "Harry Potter and the Order of the Phoneix",
    author: "J.K. Rowling",
    price: 155,
    origin: "UK",
},

{
    name: "Harry Potter and the Half-Blood Prince",
    author: "J.K. Rowling",
    price: 225,
    origin: "UK",
},

{
    name: "The Adventures of Tom Sawyer",
    author: "Mark Twain",
    price: 220,
    origin: "US",
},

{
    name: "The Grapes of Wrath",
    author: "John Steinbeck",
    price: 100,
    origin: "US",
},

{
    name: "Alice's Adventures in Wonderland",
    author: "Lewis Carrol",
    price: 495,
    origin: "US",
},

{
    name: "Anne of Green Gables",
    author: "L. M. Montgomery",
    price: 430,
    origin: "US",
},

{
    name: "Another Country",
    author: "James Baldwin",
    price: 210,
    origin: "US",
},

{
    name: "Atlas Shrugged (Centennial Ed. HC)",
    author: "Ayn Rand",
    price: 180,
    origin: "US",
},

{
    name: "Beloved",
    author: "Toni Morrison",
    price: 225,
    origin: "US",
},

{
    name: "The Book Thief",
    author: " Markus Zusak",
    price: 235,
    origin: "US",
},

{
    name: "The Brief Wondrous Life of Oscar Wao",
    author: "Junot Diaz",
    price: 120,
    origin: "US",
},

{
    name: "The Handmaid's Tale by Margaret Atwood",
    author: "Margaret Atwood",
    price: 230,
    origin: "Canada",
},

{
    name: "A Complicated Kindness",
    author: "Miriam Toews",
    price: 400,
    origin: "Canada",
},

{
    name: "Disappearing Moon Café",
    author: "Sky Lee",
    price: 135,
    origin: "Canada",
},

{
    name: "Le Comte de Monte-Cristo",
    author: "Alexandre Dumas",
    price: 195,
    origin: "France",
}
]
/********************************************/

function getDiscountedPrices()
{
    books.forEach(emp => {

        if(emp.origin == "US")

        emp.salesprice = 0.90 * emp.price;

        else if(emp.origin == "UK")

        emp.salesprice = 0.95 * emp.price;

        else if(emp.origin == "Canada")

        emp.salesprice = 0.88 * emp.price;

        else    

        emp.salesprice = 0.85 * emp.price;
    });
}

books.forEach(emp => {

    console.log("Book Name: " + emp.name);

    console.log("Book Author: " + emp.author);

    console.log("Book Price: " + emp.price);

    console.log("Book origin: " + emp.origin);

    console.log("Book Saleprice: " + emp.salesprice);

});


function getDiscountPercent()
{
    books.forEach(emp => {

        if(emp.origin == "US")

        emp.salesprice = 0.90 * emp.price;

        else if(emp.origin == "UK")

        emp.salesprice = 0.95 * emp.price;

        else if(emp.origin == "Canada")

        emp.salesprice = 0.88 * emp.price;

        else    

        emp.salesprice = 0.85 * emp.price;
    });
}

