
    // let table = document.getElementById("myTable");
    // let index = table.row.getItem(cell1);
    // let name = table.row.getItem(cell2);
    // let cate = table.row.getItem(cell3);
    // let act = table.row.getItem(cell4);
    // let obj ={
    //     i = index,
    //     n = name,
    //     c = cate,
    //     a = act
    // };
    // localStorage.setItem("obj"+localStorage.length, JSON.stringify(obj));
    // let retrieveObject = localStorage.getItem("object"+localStorage.length);


    document.querySelector("#chooseFile").addEventListener("change",function (){

        const reader = new FileReader();
        // if(localStorage.length == 0){
        //     reader.addEventListener("load", () =>{
        //         localStorage.setItem("image0", reader.result);
        //     }); 
        // }
        // else{
        //     reader.addEventListener("load", () =>{
        //         localStorage.setItem("image"+localStorage.length, reader.result);
        //     });
        // }
        reader.addEventListener("load", () =>{
            localStorage.setItem("img"+localStorage.length,reader.result);
        });
        
        reader.readAsDataURL(this.files[0]);
    });
    
        document.addEventListener("DOMContentLoaded", () =>{
            const recentImgDataUrl = localStorage.getItem("image"+localStorage.length-1);

            if(recentImgDataUrl){
                document.querySelector("#imgPreview").setAttribute("src", recentImgDataUrl);
            }
        });


function checkNameInput(){

    const x = document.forms["myForm"]["fname"].value;
    if(x[0] >= 0 && x[0] <= 9){
        alert("Name field must not start with a number");
        return false;
    }
    if(x.length >= 10){
        alert("Name field length must be under 10 characters");
        return false;
    }
    return;
}
function ValidateForm(){
    checkNameInput();
}
function addData(){
    let table = document.getElementById("myTable");
    let row = table.insertRow(table.rows.length);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    cell1.innerHTML = table.rows.length - 1;
    cell2.innerHTML = document.getElementById("nameInput").value;
    cell3.innerHTML = document.getElementById("Category").value;
    cell4.innerHTML = "four";
    cell5.innerHTML = "five";
}
let btn = document.getElementById("btn");
// if(document.getElementById("nameInput").value != "" && document.getElementById("Category").value != ""){
//     btn.addEventListener("click",addData);
// // }
btn.addEventListener("click",addData);