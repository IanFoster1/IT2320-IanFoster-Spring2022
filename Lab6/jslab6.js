/*********************************************************************/
//Global Area




/***************** Function definition area *************/
//write a function to change the size of the box (css)

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