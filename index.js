function show(){
        
    // Initializing the user inputted value to variables

    var amount = document.getElementById("amount").value ;
    var percentage = document.getElementById("percentage").value ;
    var people = document.getElementById("people").value;

    // Checking if the input value are in limits

    if (amount<0 )
      alert("Amount should be greater than $0");
    else if (percentage<0 || percentage>100)
      alert ("Percentage should be between 0% & 100%");
    else if (people<0)
      alert ("One People should be there at least");
    else if (people>1000)
      alert("Restaurant is not enough for more than 1000 people");
    else
      results();

    // Function to calculate the "Tip per Person" & "Total Per Person"

    function results() {
    var tip;
    tip= (percentage*amount)/100;
    
    // Showcasing the calculated values into HTML "p" Tags 
    document.getElementById("person_tip").innerHTML =" Tip per Person $" + (tip/people).toFixed(2) ;
    document.getElementById("total_tip").innerHTML = "Total per person $" + ((tip + Number(amount) )/people).toFixed(2);
    }
   }