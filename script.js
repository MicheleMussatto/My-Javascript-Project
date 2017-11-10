'use strict';

//This function called getArt pulls data randomly upon page refresh then returns the results in the HTML. It also returns data when you click Go and filters the result by category, subject and/or medium if any of the dropdown menu selections are chosen.
getArt();
let globalData;
document.getElementById("go").addEventListener("click", getArt);
function getArt (){
  let ajaxRequest = new XMLHttpRequest();
  ajaxRequest.onreadystatechange = function() {
    console.log(ajaxRequest.readyState);
    if(ajaxRequest.readyState == 4) {
      if(ajaxRequest.status == 200) {

        let id = Math.floor(Math.random() * 25);
        console.log(id);

        let data = JSON.parse(ajaxRequest.responseText);
        globalData = data[id];
        let categorySelector = document.getElementById('categorySelector');
        let subjectSelector = document.getElementById('subjectSelector');
        let mediumSelector = document.getElementById('mediumSelector');

        if (
          (categorySelector.value == data[id].category || categorySelector.value == "ANY" || categorySelector.value == "")
         &&
          (subjectSelector.value == data[id].subject || subjectSelector.value == "ANY" || subjectSelector.value == "")
         &&
          (mediumSelector.value == data[id].medium || mediumSelector.value == "ANY" || mediumSelector.value == "")
        )
        {
            document.getElementById('name').innerHTML = data[id].name;
            document.getElementById('category').innerHTML = data[id].category;
            document.getElementById('subject').innerHTML = data[id].subject;
            document.getElementById('medium').innerHTML = data[id].medium;
            document.getElementById('image').src = data[id].image;
            document.getElementById('imageLink').href = data[id].image;
          }
        else {
        console.log("didn't find one");
        getArt();
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

 //This function called copyFaves causes clicking the Faves button to add up to 6 thumbnails of favorite art into the Faves window.
 let thumbnail = document.getElementById("thumbnail");
 document.getElementById("addFave").addEventListener("click",
   copyFaves);

function copyFaves (){
console.log("clicked");
  if (thumbnail.src == "") {
  document.getElementById('thumbnail').src = globalData.image;
  }
  else if (thumbnail2.src == "") {
    document.getElementById('thumbnail2').src = globalData.image;
  }
  else if (thumbnail3.src == "") {
    document.getElementById('thumbnail3').src = globalData.image;
  }
  else if (thumbnail4.src == "") {
    document.getElementById('thumbnail4').src = globalData.image;
  }
  else if (thumbnail5.src == "") {
    document.getElementById('thumbnail5').src = globalData.image;
  }
  else if (thumbnail6.src == "") {
    document.getElementById('thumbnail6').src = globalData.image;
  }
  else {
    console.log("full");
  }
}

 //This event listener causes the pulldown menus to reset.
  document.getElementById("reset").addEventListener("click", resetSelectors);
  function resetSelectors () {
    categorySelector.value = "";
    subjectSelector.value = "";
    mediumSelector.value = "";
  }
