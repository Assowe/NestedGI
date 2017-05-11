calcTax();
 
function calcTax()
{
    var income = 0, baseTax = 0, extraTax = 0, totalTax = 0;
    var keepgoing = "Y";
    
    baseTax = valid("Base Tax", 0,1000.00);
 
    while (keepgoing == "Y" || keepgoing == "y")
    {
     
       income = valid("Income", 0, 10000000.00);
     
    if (income <= 40000)
    { extraTax = income * 0.15; }
    else if (income <= 80000)
    { extraTax = 40000 * 0.15 + (income - 40000) * 0.30;}
    else
    { extraTax = 40000 * 0.15 + (80000-40000)* 0.3 + (income - 80000) * 0.50 ;  }
     
    totalTax = baseTax + extraTax;
     
    alert("income is $"+ income.toFixed(2) + ",\n" + 
          "The base tax is $" + baseTax.toFixed(2) + 
          ", \n extra tax is $" + extraTax.toFixed(2) + 
          ", \n total tax is $" + totalTax.toFixed(2));
 
    keepgoing = prompt("Enter next income? [Y/N]", "Y");
  }
 
}// calcTax
function valid(promptStr, low, high)
{
    var input;
    input = Number(prompt("Enter " + promptStr, 0));
     while (isNaN(input) || input < low || input > high)
     {
        input = Number(prompt("ERROR! Enter " + promptStr + "  in the range [ " +low.toFixed(2) + " , " + high.toFixed(2)+ " ]:", 0));
     }
         
    return input;
}