/*********************************************************************/
//Global Area

window.onload = function()
{
    var btn1 = document.getElementById("btn1");
    btn1.addEventListener("click", createLink);

    var btn2 = document.getElementById("btn2");
    btn2.addEventListener("click", removeLink);

    var btn3 = document.getElementById("btn3");
    btn3.addEventListener("click", changeColor);

    var btn4 = document.getElementById("btn4");
    btn4.addEventListener("click", changeSquares);

    var btn5 = document.getElementById("btn5");
    btn5.addEventListener("click", changeShape);

    var elems = document.getElementsByClassName("btnOrig");

    for(var i=0; i < elems.length; i++)
    {
        elems[i].addEventListener("change", function()
        {
            changeButtonText(this);
        })

    }

    var elems2 = document.getElementsByClassName("square2");

    for(var i=0; i < elems2.length; i++)
    {
        elems2[i].addEventListener("change", function()
        {
            changeSquare(this);
        })

    }
    
}


/***************** Function definition area *************/
//write a function to change the size of the box (css)

//Lab 7 code************************/
function changeButtonText(btnObj)
{
    btnObj.toggleClass('active');
}

function changeSquare(elem)
{

    elem.style.backgroundColor = "green";

}
/***********************************/


function createLink()
{
    //I dont know why this doesn't work. It is creating something invisible on the html whenever I hit create link.
    var parent = document.getElementById("parentLink");

    var child = document.createElement("a");
    child.classList.add("link");
    
    parent.appendChild(child);
}

function removeLink()
{
    var parent = document.getElementById("parentLink");
    var child = parent.lastElementChild;
    
    parent.removeChild(child);
}

function changeColor()
{
    var color = document.getElementById("inputColor").value;
    
    var box1 = document.getElementById("box");
    
    box1.style.backgroundColor = color;
}

function changeSquares()
{
    var squares1 = document.getElementsByClassName("square1");

    for(var i=0; i<squares1.length;i++)
    {
        squares1[i].style.backgroundColor = "black";
    }

    var squares2 = document.getElementsByClassName("square2");

    for(var i=0; i<squares2.length;i++)
    {
        squares2[i].style.backgroundColor = "white";
    }
}

function changeShape()
{
    var shape = document.getElementsById("inputRadius").value;
    var squares1 = document.getElementsByClassName("square1");

    for(var i=0; i<squares1.length;i++)
    {
        
        squares1[i].style.borderRadius = "2px";
        shape[i].style.borderRadius = "2px";
    }

}
