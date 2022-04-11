var book = 
{

    title : "Harry Potter and the Sorcerer's Stone",
    author : "J.K. Rowling",
    totalPageNumbers : 320,
    pulisher : "Bloomsbury Publishing",
    ISBN : 12345
    
}
    
    var str = JSON.stringify(book);

    console.log(str)

    console.log(typeof str)

    var obj = JSON.parse(str)

    console.log(obj)
    
    console.log(typeof obj)