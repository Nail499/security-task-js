let s2boxes = document.getElementById("favorites");
fetch("http://localhost:3000/favorites")
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
                <div class="heart"><i class="bi-heart" onclick = "addFavorite(${item.id})"></i></div>
        </div>
    </div> `
    })
})

const deleteItem = (id) => {
    axios.delete('http://localhost:3000/favorites/'+id)
    .then(res=>{
      console.log(res.data);
      alert(`${id} nömrəli  uğurla silindi`)
      window.location.reload();
    })
  }
