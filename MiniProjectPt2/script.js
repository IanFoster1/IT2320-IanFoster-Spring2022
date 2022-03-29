//Global area
window.onload=function() 
{
    //Try and use classname to get a group of divs instead of getting them one by one by id
    //if you are writing the same type of code multiple times, you are doing it incorrect
    
    //Attach events using eventlistener here
    target = null;

    window.onload = function()
    {
    document.addEventListener('click', function(a) 
    {
    a = a || window.event;
    target = a.target;
    
    userTurn();
}
,  false);

}
    
}
    
    /************** Function area *******************/
    
    
function userTurn()
{
    target.innerText="X";
    computerTurn(); 
}

    function computerTurn(){
    var div = document.getElementsByClassName("col");

    for(var i=0; i<div.length; i++)
{

    if(div[i].innerText=="")
{

    div[i].innerText="O";
    break;
}
}
}
    
    
    
    
 
    