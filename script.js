function incentiveAmount(){

 let name = document.getElementById("Name").value;
 document.getElementById("Name").value='';


 let age = document.getElementById("Age").value;
 document.getElementById("Age").value='';


 let internetBill = document.getElementById("MonthlyIntenetBill").value;
 document.getElementById("MonthlyIntenetBill").value='';


 let ydmaintenanceFee = document.getElementById("YearlyDeviceMaintenanceFee").value;
 document.getElementById("YearlyDeviceMaintenanceFee").value='';

 let incentive;

 let monthlyDeviceMaintenanceFee = ydmaintenanceFee / 12;

 let yearlyFee=(internetBill * 12) + ydmaintenanceFee;

if(age>50 && yearlyFee>20000){
    incentive = (internetBill * 12) *.20;
    result= "Dear, " + name + " your government incentive amount is " + incentive;
    document.getElementById("showIncentive").innerText=result;
}
else if(age>30 && monthlyDeviceMaintenanceFee>250){
    incentive = (internetBill * 12) *.15;
    result= "Dear, " + name + " your government incentive amount is " + incentive;
    document.getElementById("showIncentive").innerText=result;
}
else{
    incentive=0;
    result= "Dear, " + name + " your government incentive amount is " + incentive;
    document.getElementById("showIncentive").innerText=result;
}

} 