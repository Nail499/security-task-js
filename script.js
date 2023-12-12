const navbar = document.querySelector(".navbar")

window.onscroll =scrollFunction

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.classList.add("navscroll")
    } else {
        navbar.classList.remove("navscroll")
    }
}



let s2boxes = document.getElementById("s2boxes");
fetch("http://localhost:3000/services")
.then(response=>response.json())
.then(data=>{
    data.forEach(item=>{
        
        s2boxes.innerHTML+=
        `<div class="box1">
        <div class="img"><img src="${item.image}">
        </div>
        <div class="text">
            <h4>${item.name}</h4>
            <p>${item.description}</p>
                <button><a href="../Update/update.html?id=${item.id}" target ="_blank">Update</a></button>
                <button onClick='deleteItem(${item.id})'>Delete</button>
                <button><a href="../Details/details.html?id=${item.id}" target ="_blank">Details</a></button>
                <div class="heart"><i class="bi-heart"></i></div>
        </div>
    </div> `
    })
})


const deleteItem = (id) => {
    axios.delete('http://localhost:3000/services/'+id)
    .then(res=>{
      console.log(res.data);
      alert(`${id} nömrəli  uğurla silindi`)
      window.location.reload();
    })
  }