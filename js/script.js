const gallery = document.getElementById("gallery");
const detail = document.getElementById("detail");

for(let index in data){
    console.log(index);
    let item = data[index];
    let p = document.createElement("div");
    p.innerHTML = `<img src="${item.images[0]}"><h2 id="name">${item.name}</h2><p> ${item.description}</p><p> ${item.author}</p><p class="price">${item.price}</p>`;
    gallery.appendChild(p);
}

document.getElementById("name").onclick = function() {popUp()};

function popUp(){

}