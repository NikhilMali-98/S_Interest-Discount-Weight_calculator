function first()
{
    console.log('first fun');  //function getting called
    //console.log(document);
    //console.log(typeof document); 

   // console.log(document.getElementById("a1"));
    var Amount = document.getElementById("a1").value //assigning a1
    //console.log(amount); amount getting stored 

    //console.log(document.getElementById("a2"));
    var Discount = document.getElementById("a2").value //assigning a2
    //console.log(discount); discount getting stored 

    var amt = parseInt(Amount)
    var dis = parseInt(Discount)
    dis = amt*(dis/100)  //discount calculated
    aNew = amt-dis       
     //value added to show 
    console.log(document.getElementById("b1"));  
        document.getElementById("b1").innerHTML=dis
    console.log(document.getElementById("b2"));
        document.getElementById("b2").innerHTML=aNew
}

function secound()
{
    console.log('secound fun');  
    console.log(document.getElementById("n1"));
    var Amount1 = document.getElementById("n1").value 

    console.log(document.getElementById("n2"));
    var ROI = document.getElementById("n2").value 

    console.log(document.getElementById("n3"));
    var Tenure = document.getElementById("n3").value 

    var amt1 = parseInt(Amount1)
    var roi = parseInt(ROI)
    var ten = parseInt(Tenure)
    //amt = amt(1+roi*ten)
    //roi = (roi/100)+1
    //ten = ten*12 
    si = (amt1*roi*ten)/100    
    
    console.log(document.getElementById("m1"));  
        document.getElementById("m1").innerHTML=si
}

function third()
{
    console.log('third fun');  
    console.log(document.getElementById("w"));
    var Weight = document.getElementById("w").value 

    var wgt = parseInt(Weight)
    wgt = wgt*1000 

    console.log(document.getElementById("g"));  
        document.getElementById("g").innerHTML=wgt
}