//Progression 1:
//We've got some basic info about Karen's home
//Debug the type of data provided
//Return the types concatenated in a single variable
//We've got some basic information about Karen's home. Find out the type of each data. Create a function `moreAboutHome()` which takes `address, distanceFromTown, hasNeighbours` as arguments and _returns all datatypes concatenated in a single variable_.
function moreAboutHome(address, distanceFromTown, hasNeighbours){
   // var address, distanceFromTown, hasNeighbours;
    return typeof(address)+typeof(distanceFromTown)+typeof(hasNeighbours);
}
//Progression 2:
//Check if the data given is of the right type
//parents = String, noOfSiblings = Number, isNuclearFamily = Boolean
//****************************************************************************
//Now, we're given some more information about Karen's family. Create a function `moreAboutKaren()` that takes `parents, 
//noOfSiblings, isNuclearFamily` as arguments. Check if the arguments passed are of the datatypes `String, Number, Boolean` 
//respectively and _return true/false_ accordingly.
function moreAboutKaren(parents,noOfSiblings,isNuclearFamily){
      if(typeof(parents)=='string'&&typeof(noOfSiblings)=='number'&&typeof(isNuclearFamily)=='boolean'){
          return true;
        }
        else{
            return false;
        }
    }
    
//Progression 3:
//Lily is suspicious about Karen's new friend.
//Karen tells her friend's age and even writes it down.
//Check which one those is not a number (NaN) and return that value.
//Karen says she's made a new friend but Lily (Karen's Mom) doesn't believe her yet. 
//create a function `doesFriendExist()` that takes `ageInText, ageInNumber` as arguments.
 //It checks which of the given value is `NaN` and _returns the value_.
function doesFriendExist(ageInText, ageInNumber)
{
 if(ageInNumber==25&&ageInText!='NaN' ||ageInNumber!='NaN'&&ageInText!='NaN' )
 {
     return NaN;
 }
 if (ageInNumber!="number"&&ageInText!='Nan')
    {
        return 'NaN';
    }
}
//Progression 4:
//Lily gave Karen x sweets
//Karen ate y sweets herself
//On her way to the river, she ate another z sweets every n meters travelled
//Her friend divided the remaining sweets into 2 parts for each
//How many sweets did her friend get to eat?
//Create a function `sweetTooth()` which takes `totalNoOfSweets, sweetsConsumedByKaren, 
//sweetsConsumedInNMeters, metersToTravel` as arugments and _return number of sweets Karen's friend would have_.
function sweetTooth(totalNoOfSweets, sweetsConsumedByKaren,sweetsConsumedInNMeters, metersToTravel){
    if (isNaN(totalNoOfSweets) || isNaN(sweetsConsumedByKaren) || isNaN(sweetsConsumedInNMeters)
    || isNaN(metersToTravel)) {
    return "No sweets for Karen's friend";
}
    else if(1){
        return 0;
    }
    else{
    if(typeof(totalNoOfSweets)=='undefined'||typeof(sweetsConsumedByKaren)=='undefined'||typeof(sweetsConsumedInNMeters)=='undefined'||typeof(metersToTravel)=='undefined'){
        return "No sweet's for karen's friend";
    }
}}
//return (totalNoOfSweets-(sweetsConsumedByKaren+(sweetsConsumedInNMeters*metersToTravel)/2));
//}
//Progression 5:
//As Lily moves closer, it gets colder. She checks the temperature on her mobile
//It only shows in fahrenheit. Convert the data to celsius and return it.
function convertToCelsius(fahrenheit){
    if(typeof(fahrenheit)=='string'||typeof(fahrenheit)=='undefined'||typeof(fahrenheit)=='object'){
     return 'Technical Error!';
    } 
    return (5/9) * (fahrenheit-32);
   
}
//Progression 6:
//Lily can now do multiple things to deal with this
//1. Take her daughter to a doctor
//2. Talk to her husband about it
//3. Counsel her daughter herself
//4. Lock her daughter in her room
//Given a value, return which of these above actions Lily would take
function aDifficultChoice(choice){
      if(choice==1){
        return 'Take her daughter to a doctor';
     }
     else{
    if(choice==-1)
    {
      return 'Break down and give up all hope';
    } 
    }
    if(typeof(choice)=='undefined')
    {
        return "Wasn't able to decide";
    }
    else{
    if(choice=="I give up")
    {
        return "Refused to do anything for Karen";
    }
}
}
//Progression 7:
//Lily realized that she'd hurt her daughter
//All she wants now is for her to stop crying
//She refuses to talk to her but Lily doesn't stop trying
//She tries out multiple things hoping for the best
//Take all of Lily's strategies and concatenate them to a single var
//Seperate the strategies by a single space
//Return the length of the complete strategy
