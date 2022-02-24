//Javascript is case sensitive

/*Javascript statement end in a semicolon
Javascript comments can span single or multiple lines*/

console.log("Lab 04 startup code");//log in developer tools


function CalculateCommission()
{
    var topCommission = 0;
    var topSalesPerson = "Nobody yet";
    var salesperson = ["Noah", "Kody", "Michael", "Connor", "James", "Scott","Mia"];
    var Jan = [1500, 15000,30000,15000,58000,15000,6000];
    var Feb = [7000, 5500, 47000, 20000, 29000, 26000, 17000];
    var Dec = [1500, 15000,40000,18000,45000,28000,9000];

    var totalsales=[];
    var commission=[];
    var avgcommission=[];

    for(var i=0;i<=6;i++)
{
totalsales[0] = Jan[0] + Feb[0] + Dec[0];
totalsales[1] = Jan[1] + Feb[1] + Dec[1];
totalsales[2] = Jan[2] + Feb[2] + Dec[2];
totalsales[3] = Jan[3] + Feb[3] + Dec[3];
totalsales[4] = Jan[4] + Feb[4] + Dec[4];
totalsales[5] = Jan[5] + Feb[5] + Dec[5];
totalsales[6] = Jan[6] + Feb[6] + Dec[6];

if(totalsales[i]<=5000){

commission[i]=totalsales[i]*.01;

}

else if(totalsales[i]<=10000){

    commission[i]=totalsales[i]*.02;

    }

    else if(totalsales[i]<=15000)

    {
    commission[i]=totalsales[i]*.03;

    }

    else if(totalsales[i]<=30000)

    {

    commission[i]=totalsales[i]*.05;

    }

    else

    {

    commission[i]=totalsales[i]*.08;

}

avgcommission[i]=commission[i]/3;

console.log(salesperson[i]+" "+commission[i]+" "+ avgcommission[i]);

if(topCommission<=commission[i]){
topCommission=commission[i];
topSalesPerson=salesperson[i];
}

}

alert("Top salesperson is"+" "+ topSalesPerson+" "+"top commission amount is " +" " +topCommission);

}

//Your code goes here
    /*
    Here's the pseudocode in case you are wondering how to get started:
    1. Save salesperson names in an array
    2. Save December sales amount in an array
    3. Save January sales amount in an array
    4. Save February sales amount in an array
    5. In a "For" loop, for each person
        Calculate Total sales = December sale + January sale + February sale
        
        Calculate commission: 
        if total sales is greater than 30000 then commission = total sales * 0.08 
        If total sales is greater than 15000).....etc
        Continue the if condition for the remaining as specified in the requirement for commission %
        
        Calculate average commission:
        Avg commission = Total commission / 3
        Display sales person name, commission and average commission
        Store the commission to a "topCommission" variable.
        Each time compare topCommission to commission of current salesperson 
        to determine if this is the top commission
    6. Outside the "For" loop, display topCommission and topSalesperson name.
*/