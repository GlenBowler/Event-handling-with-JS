//Create a array
let myGroceries=["Aplles","Peers","Bread","Lemon"];
let ulSelector=document.querySelector('ul');

//Create function that will add items to your current array
myGroceries.forEach(function(addArr){
    ulSelector+='<li>'+addArr+'</li>';
   
});
document.getElementById('itemList').innerHTML=ulSelector;



//Adding span element to the current list and clear input once selected add item

let myNodeList=document.getElementsByTagName("li");

for (i=0;i<myNodeList.length;i++){
    let spanEl=document.createElement("span");
    let spanElTxt=document.createTextNode("\u00D7");
    spanEl.className="close";
    //Add event listerner to delete from array
    spanEl.addEventListener("click", function(ev) {
        deleteArr(i);//Call function for deleting from array
    });
    spanEl.append(spanElTxt);
    myNodeList[i].append(spanEl);
}
//A function that will update the items and add items

function addToList(){
    let newLiEl=document.createElement("li");
    let inpTxtVal=document.getElementById("input").value;
    let txt=document.createTextNode(inpTxtVal);
    newLiEl.append(txt);

    //If statement to make sure that user entered a text
    if (inpTxtVal===""){
        alert("Please enter a item ");
    }
    else{
        document.getElementById("itemList").append(newLiEl);
        myGroceries.push(inpTxtVal);
        
    }
    document.getElementById("input").value = "";

    //Adding your element and your class to your new list of items + delete items from list
    let spanEl=document.createElement("span");
    let spanElTxt=document.createTextNode("\u00D7");
    spanEl.className="close";
    //Add event listerner to delete from array
    spanEl.addEventListener("click", function(ev) {
        deleteArr(myGroceries.length -1);//Call delete functio
    });
    spanEl.append(spanElTxt);
    newLiEl.append(spanEl);
    
    //Adding blank after input have entered the list
    let fieldEmpty=document.getElementsByClassName("close");
    for (j=0; j< fieldEmpty.length; j++){
    fieldEmpty[j].onclick=function(){
        let div=this.parentElement;
        div.style.display="none";
    }
   
    
}
    console.log(myGroceries)
}
//Delete Items from array 
function deleteArr(itemIndex){
    myGroceries.splice(itemIndex);//Delete from array
}

//Toggle a check class to event element
let list = document.querySelector('ul');
list.addEventListener('click', function(ev){ 
    if (ev.target.tagName === 'LI') {   
    ev.target.classList.toggle('checked');
    }
    });



//Key up event listener
let myInpText=document.getElementById("input");
myInpText.addEventListener('keyup',function(myEvent){
    if (myEvent.keyCode==13){
        myEvent.preventDefault();
        addToList();
    }
});
console.log(myGroceries);





