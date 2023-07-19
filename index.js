let maxPoints = 120;
let passingPoints = 70;
let samPoints = 84;
let alexPoints = 45;
let jessiePoints = 99;
let didAlexPass = false;
let samPointsDisplay = "Sam earned " + samPoints + " points out of " + maxPoints;
console.log(samPointsDisplay);
let alexPointsDisplay =  "Alex earned " + alexPoints + " points out of " + maxPoints;
let jessiePointsDisplay = "Jessie earned " + jessiePoints + " points out of " + maxPoints;
console.log(alexPointsDisplay);
console.log(jessiePointsDisplay);
//FINDING THE PERCENTAGE
let samPercentage = (samPoints/maxPoints) * 100;
let samPercentDisplay = "Sam scored " + samPercentage;
console.log(samPercentDisplay);
let alexPercentage = (alexPoints/maxPoints) * 100;
let alexPercentDisplay = "Alex scored " + alexPercentage;
console.log(alexPercentDisplay);
let jessiePercentage = (jessiePoints/maxPoints) * 100;
let jessiePercentDisplay = "Jessie scored " + jessiePercentage;
console.log(jessiePercentDisplay);
let samMissedPoints = maxPoints - samPoints;
let alexMissedPoints = maxPoints - alexPoints;
let jessieMissedPoints = maxPoints - jessiePoints;
let samMissedPointsDisplay = "Sam missed " + samMissedPoints + " point(s)";
console.log(samMissedPointsDisplay);
let alexMissedPointsDisplay = "Alex missed " + alexMissedPoints + " point(s)";
console.log(alexMissedPointsDisplay);
let jessieMissedPointsDisplay = "Jessie missed " + jessieMissedPoints + " point(s)";
console.log(jessieMissedPointsDisplay);
//FINDING THE AVERAGE
let classAveragePoints = (samPoints + alexPoints + jessiePoints) / 3;
let classAveragePercent = (classAveragePoints/maxPoints) * 100;
let classAvgDisplay = "The class average was " + classAveragePoints + " points or " + classAveragePercent.toFixed(2);
console.log(classAvgDisplay);
//Update Alex's points to 75.
//Right now, didAlexPass is set to false. 
//Update it to true by assigning it its negated value like !didAlexPass.
alexPoints = 75;
didAlexPass = !false;
//Create the variable alexPointsUpdated to store the new message. Code the message by joining strings with the values of alexPoints and maxPoints.
//Display alexPointsUpdated.
//Messahe should display "Alex failed initially but did extra credit. Their new score is 75 out of 120"
let alexPointsUpdated = "Alex failed initially but did extra credit. Alex's new score is " + alexPoints + " out of " + maxPoints;
console.log(alexPointsUpdated);


const listItemArray = document.querySelectorAll("li");
listItemArray[0].innerHTML = "Raw Points:";
listItemArray[4].innerHTML = "Percentages:";
listItemArray[8].innerHTML = "Missed Points:";
listItemArray[12].innerHTML = "Final Notes:";

//Copy and paste the following code at the end of the script.js file to connect your variables to the HTML code. You'll see the results when you run the code.
listItemArray[1].innerHTML = samPointsDisplay;
listItemArray[2].innerHTML = alexPointsDisplay;
listItemArray[3].innerHTML = jessiePointsDisplay;

listItemArray[5].innerHTML = samPercentDisplay;
listItemArray[6].innerHTML = alexPercentDisplay;
listItemArray[7].innerHTML = jessiePercentDisplay;

listItemArray[9].innerHTML = samMissedPointsDisplay;
listItemArray[10].innerHTML = alexMissedPointsDisplay;
listItemArray[11].innerHTML = jessieMissedPointsDisplay;

listItemArray[13].innerHTML = classAvgDisplay;
listItemArray[14].innerHTML = alexPointsUpdated;