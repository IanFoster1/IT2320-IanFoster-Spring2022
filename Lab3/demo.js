//Javascript is case sensitive

/*Javascript statement end in a semicolon
Javascript comments can span single or multiple lines*/


console.log("console log - hello world");//log in developer tools
var globalX = 100;//global scope

function hello() //function definition
{
    alert("alert - hello world!");//popup window    
}

function add()//function definition
{
    var x = 3;
    var y = 5;
    var sum = x + y;
    alert("Sum is " + sum);
}

function substract()
{
    var a = 1000;
    var b = 100;
    var diff = a - b;
    alert("Difference is" + diff);
}

//Homework Lab- Complete Multiplication and Division functionality

function increment()
{ 
    var y = 10;//local scope - resets y everytime function is called
    globalX = globalX+10;//can add any number to itself
    //y = y+10;
    y+=10;//same as y = y+10;
    alert("x="+globalX + "y="+y); 

}

/* JS statements
Conditional statements:
If statement
Switch statement
Loops:
For loop
While loop
Do while loop
Break
*/

function compare()
{
    var charlie = 120;
    var john = 120;
    
    //conditional if statement
    
    if (charlie > john)
    {
        alert("Charlie is taller");
    }
    else if( charlie == john)//"=" is assignment; "==" is comparison
    {
        alert("Charlie and John are of the same height");
    }
    else
    {
        alert("John is taller");
    }

}

function IsTropical(fruit)//fruit is a variable and is an input parameter
{
    
    var isTropical = false; //boolean variable: True or False

    switch(fruit)
    {
        case "banana":
            isTropical = true;
            break;

        case "papaya":
            isTropical = true;
            break;

        case "tomato":
            isTropical = false;
            break;

        case "mango":
            isTropical = true;
            break;

        case "watermelon":
            isTropical = true;
            break;

        default:
            isTropical = false;            
    }

    alert("Is "+ fruit+ " tropical?"+ isTropical );

}

function Repeat( message )
{
    var counter = 0;
    console.log("While loop:");
    while (counter < 5)
    {
        console.log( message );
        counter++; //You have to remember to increment the counter otherwise the loop will go on endlessly
    }

    counter = 0;
    console.log("Do - While loop:");
    do 
    {
        console.log( message );
        counter++; //You have to remember to increment the counter otherwise the loop will go on endlessly
    } while (counter < 5);

    console.log("For loop:");
    /************************************************* */
    for(var counter=0; counter < 5; counter++)
    {
        console.log(message);
    }
}

//Homework below

function multiply()
{
    var a = 25;
    var b = 42;
    var prod = a * b;
    alert("Product is " + prod);
}

function divide()
{
    var a = 48;
    var b = 12;
    var div = a / b;
    alert("Quotient is " + div);
}

function mean()
{
    var a = 25;
    var b = 47;
    var c = 98;
    var d = 46;
    var e = 52;

    var mea = (a + b + c + d + e) / 5;
    alert("Mean is " + mea);
}

function even(num)
{
    var count = 0;

    for(var i=1;i<=200;i++)
    {
        if (i % num == 0)
        {
            count++;
        }

    }
    alert("Total multiples for " + num + "=" + count);

}

function fibonacchi()
    {
    function fibo(num)
    {
        if(num==1)
            return 0;

        if(num==2)
            return 1;

        var num1=0;
        var num2=1;
        var sum;
        var i=2;

        while (i<num)  
        {
            sum=num1+num2;
            num1=num2;
            num2=sum;
            i+=1;
        }
        return num2;
    }

        console.log(fibo(1));
        console.log(fibo(2));
        console.log(fibo(3));
        console.log(fibo(4));
        console.log(fibo(5));
        console.log(fibo(6));
        console.log(fibo(7));
        console.log(fibo(0));
        console.log(fibo(8));
        console.log(fibo(9));
        console.log(fibo(10));
        console.log(fibo(12));
        console.log(fibo(13));
        console.log(fibo(14));
        console.log(fibo(15));
        console.log(fibo(16));
        console.log(fibo(17));
        console.log(fibo(18));
        console.log(fibo(19));
        console.log(fibo(20));
    
  
    }
