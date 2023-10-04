//alert("loading");
function addNewSKField(){
let newNode=document.createElement("textarea");
newNode.classList.add("form-control");
newNode.classList.add("skField");
newNode.classList.add("mt-2");
newNode.setAttribute("rows",3);
newNode.setAttribute("placeholder","Enter here");
let skOb=document.getElementById("sk");
let skAddButtonOb=document.getElementById("skAddButton");
skOb.insertBefore(newNode,skAddButtonOb);

}
function addNewWEField(){
//console.log("Adding new field");
let newNode=document.createElement("textarea");
newNode.classList.add("form-control");
newNode.classList.add("weField");
newNode.classList.add("mt-2");
newNode.setAttribute("rows",3);
newNode.setAttribute("placeholder","Enter here");
let weOb=document.getElementById("we");
let weAddButtonOb=document.getElementById("weAddButton");
weOb.insertBefore(newNode,weAddButtonOb);

}
function addNewAQField(){
let newNode=document.createElement("textarea");
newNode.classList.add("form-control");
newNode.classList.add("eqField");
newNode.classList.add("mt-2");
newNode.setAttribute("rows",3);
newNode.setAttribute("placeholder","Enter here");
let aqOb=document.getElementById("aq");
let aqAddButtonOb=document.getElementById("aqAddButton");
aqOb.insertBefore(newNode,aqAddButtonOb);
}
function generateCV()
{
let namefield=document.getElementById("namefield").value;
let nameT=document.getElementById("nameT");
nameT2.innerHTML=namefield;
document.getElementById("nameT").innerHTML=namefield;

document.getElementById("contactT").innerHTML=document.getElementById("contactfield").value;
document.getElementById("mailT").innerHTML=document.getElementById("mailfield").value;


document.getElementById("ageT").innerHTML=document.getElementById("agefield").value;


document.getElementById("lanT").innerHTML=document.getElementById("languagefield").value;
document.getElementById("addressT").innerHTML=document.getElementById("addressfield").value;
document.getElementById("objectiveT").innerHTML=document.getElementById("objectivefield").value;
let sks=document.getElementsByClassName("skField");
let str=" ";
for (let e of sks)
{
str=str + `<li> ${e.value} </li>`;
}
document.getElementById("skT").innerHTML=str;


let wes=document.getElementsByClassName("weField");
let str1=" ";
for (let e of wes)
{
str1=str1 + `<li> ${e.value} </li>`;
}
document.getElementById("weT").innerHTML=str1;
let aqs=document.getElementsByClassName("eqField");
let str2=" ";
for (let e of aqs)
{
str2=str2 + `<li> ${e.value} </li>`;
}
document.getElementById("aqT").innerHTML=str2;

let file=document.getElementById("imgField").files[0];
console.log(file);
let reader=new FileReader();
reader.readAsDataURL(file);
console.log(reader.result);

reader.onloadend=function(){
document.getElementById("imgTemplate").src=reader.result;
};

document.getElementById("cv-form").style.display="none";
document.getElementById("cv-template").style.display="block";


}
function printCV()
{
window.print();
}






