let id = new URLSearchParams(window.location.search).get("id");
let details = document.querySelector(".details");

fetch(`http://localhost:3000/services/${id}`)
.then(res=>res.json())
.then(data=>{

    
        details.innerHTML+=
        `<div class="box1">
        <div class="img"><img src="${data.image}" alt="">
       
        </div>
        <input type="file" placeholder="Enter your image url..." id="img">
        <div class="text">
            <h4> Name :<input type="text" value="${data.name}" id="name"></h4>
            <h4>Description : <input type="text" value="${data.description}" id="description"</h4>
            
            
            </div>
            <button id="save">Save</button>
    </div>  `
    let fileInp = document.querySelector('#img');
    let saveButton = document.querySelector('#save');

    let obj = {};

    fileInp.addEventListener('input', (e)=>{
        let file = fileInp.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
           obj.image = reader.result
        }
    })

    saveButton.addEventListener('click', () => {

        const nameinput = document.querySelector('#name');
        const description = document.querySelector('#description');

        obj.name= nameinput.value;
        obj.description = description.value;

        if(!(nameinput.value && description.value && img.files[0])){
            alert("Bos buraxmaq olmaz")
        }else{
            
        fetch('http://localhost:3000/services/'+id,
            {
                method: "PATCH",

                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(obj), // body data type must match "Content-Type" header
            })
            .then(res => res.json())
            .then(data => console.log(data))
    }}

    )
    })
