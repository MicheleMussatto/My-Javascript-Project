'use strict';
//This function called getArt requests data from the json file randomly upon page refresh then returns the results in the HTML
getArt();
let globalData;

function getArt() {
  let ajaxRequest = new XMLHttpRequest();
  ajaxRequest.onreadystatechange = function() {
    console.log(ajaxRequest.readyState);
    if(ajaxRequest.readyState == 4) {
      if(ajaxRequest.status == 200) {
        // console.log(ajaxRequest.responseText);
        let id = Math.floor(Math.random() * 25);
        console.log(id);
        let data = JSON.parse(ajaxRequest.responseText);
        globalData = data[id];
        document.getElementById('name').innerHTML = data[id].name;
        document.getElementById('category').innerHTML = data[id].category;
        document.getElementById('subject').innerHTML = data[id].subject;
        document.getElementById('medium').innerHTML = data[id].medium;
        document.getElementById('image').src = data[id].image;

      }
      else{
        console.log("Status error: " + ajaxRequest.status);
      }
    }
    else{
		console.log("Ignored readyState: " + ajaxRequest.readyState);
	 }
  }
  ajaxRequest.open('GET', 'https://www.tallgrassschool.com/cohort_1/students/mm/javascript_project/michele_art.json');
  ajaxRequest.send();
}

//This function called testSelectors requests data from the json file randomly upon button click until the data matches the conditions then returns the results in the HTML
document.getElementById("go").addEventListener("click", testSelectors);
function testSelectors (){
  let ajaxRequest = new XMLHttpRequest();
  ajaxRequest.onreadystatechange = function() {
    console.log(ajaxRequest.readyState);
    if(ajaxRequest.readyState == 4) {
      if(ajaxRequest.status == 200) {

        let id = Math.floor(Math.random() * 25);
        console.log(id);
        let data = JSON.parse(ajaxRequest.responseText);

        let categorySelector = document.getElementById('categorySelector');
        let subjectSelector = document.getElementById('subjectSelector');
        let mediumSelector = document.getElementById('mediumSelector');

        if (categorySelector.value == "") {
          categorySelector.value = "ANY";

        }
        if (subjectSelector.value == "") {
          subjectSelector.value = "ANY";

        }
        if (mediumSelector.value == "") {
          mediumSelector.value = "ANY";

        }
        if (
          (categorySelector.value == data[id].category || categorySelector.value == "ANY")
         &&
          (subjectSelector.value == data[id].subject || subjectSelector.value == "ANY")
         &&
          (mediumSelector.value == data[id].medium || mediumSelector.value == "ANY")
        )

        // if (categorySelector.value == data[id].category || categorySelector.value == "ANY") {
        //   if (subjectSelector.value == data[id].subject || subjectSelector.value == "ANY") {
        //
        //     if (mediumSelector.value == data[id].medium || mediumSelector.value == "ANY") {
        //     console.log("found one");
{
            document.getElementById('name').innerHTML = data[id].name;
            document.getElementById('category').innerHTML = data[id].category;
            document.getElementById('subject').innerHTML = data[id].subject;
            document.getElementById('medium').innerHTML = data[id].medium;
            document.getElementById('image').src = data[id].image;






          }
        else {
          console.log("didn't find one");
        testSelectors();
        }
      }
      else{
        console.log("Status error: " + ajaxRequest.status);
      }
    }
    else{
    console.log("Ignored readyState: " + ajaxRequest.readyState);
   }
 }
 ajaxRequest.open('GET', 'https://www.tallgrassschool.com/cohort_1/students/mm/javascript_project/michele_art.json');
 ajaxRequest.send();
 }

 //This event listener is supposed to cause clicking the Faves button to add a thumbnail of the chosen art into the Faves window.
 let thumbnail = document.getElementById("thumbnail");
 document.getElementById("addFave").addEventListener("click",
   copyFaves);
 function copyFaves (){
  document.getElementById('thumbnail').src = globalData.image;
   }

 //This event listener is supposed to cause clicking the Faves button to add a thumbnail of the chosen art into the Faves window.
 // document.getElementById("addFave").addEventListener("click",
 //   copyFaves);
 // function copyFaves () {
 //    document.getElementById('thumbnail').src = data[id].image;
 //   }



 //This event listener just tests the pick another button for now...
  document.getElementById("pickAnother").addEventListener("click", getArt);

//JUST IGNORE THIS STUFF FROM HERE ON DOWN, IT'S MY PSUEDO SCRIPT AND MISC IDEAS
// 1. getArt runs and pulls a random image from json
// 2. user presses Go or Pick Another and getArt runs again
// 3. user chooses a category and presses Go or Pick Another and getArt runs again and again until it finds art who's category, subject and/or medium match those picked in the selectors

//while loop? if elseif?
//test the random object, and if it doesn't meet the criteria either increment your id variable or just set a new random value to test


//
// categorySelector.addEventListener('change', function() {
//   console.log(categorySelector.value);
//   if (categorySelector.value == "ANY") {
//     document.getElementById("pickAnother").addEventListener("click", getArt);
//     document.getElementById("go").addEventListener("click", getArt);
//   }
//   else if (categorySelector.value == "Fine Art") {
//     document.getElementById('category').innerHTML = "Fine Art";
//     document.getElementById('category').className = "Fine Art";
//   }
//   else if (categorySelector.value == "Logos") {
//     document.getElementById('category').innerHTML = "Logos";
//     document.getElementById('category').className = "Logos";
//   }
//   else if (categorySelector.value == "Graphic Design") {
//     document.getElementById('category').innerHTML = "Graphic Design";
//     document.getElementById('category').className = "Graphic Design";
//   }
//   else if (categorySelector.value == "Photography") {
//     document.getElementById('category').innerHTML = "Photography";
//     document.getElementById('category').className = "Photography";
//   }
//   else if (categorySelector.value == "Illustration") {
//     document.getElementById('category').innerHTML = "Illustration";
//     document.getElementById('category').className = "Illustration";
//   }
//   else {
//       document.getElementById('display').innerHTML = "Please choose a Category, Subject and Medium then click Go!.";
//   }
// });
