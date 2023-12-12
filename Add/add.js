let savebtn = document.getElementById("savebtn");
let nameinp = document.getElementById("nameinp");
let descinp = document.getElementById("desinp");
let imginp = document.getElementById("imginp");

let saveButton = document.querySelector('#save');

let obj = {};

imginp.addEventListener('input', (e)=>{
    let file = imginp.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
       obj.image = reader.result
    }
})

savebtn.addEventListener("click",()=>{

  obj.name = nameinp.value;
  obj.description = descinp.value;

  if(!(nameinp.value && descinp.value )){
    alert("Bos buraxmaq olmaz")


  }else{

    axios
    .post("http://localhost:3000/services", {
      name: obj.name,
      description : obj.description,
      image: obj.image
    })
  }


})
