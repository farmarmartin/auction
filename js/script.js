const gallery = document.getElementById("gallery");
const detail = document.getElementById("detail");
const body = document.getElementsByTagName("body");

for(let index in data){
    console.log(index);
    let item = data[index];
    let p = document.createElement("div");
    p.innerHTML = `<img src="${item.images[0]}" class="mini"><h2 id="name">${item.name}</h2><p> ${item.description}</p><p> ${item.author}</p><h3 class="price">${item.price}</h3>`;
    gallery.appendChild(p);

    p.onclick = () => {
        detail.innerHTML = `<div class="deta"><h2 id="name" class="name">${item.name}</h2><img src="${item.images[1]}"  class="detailPic"><img src="${item.images[2]}" class="detailPic"></div>`;
        detail.style.display = "flex";
        detail.style.backgroundColor = "rgba(56, 56, 56, 0.94)";
        detail.style.zIndex = "1";
        detail.style.overflowY= "scroll";
    }

    detail.onclick = () => {
        detail.style.display = "none";
    }
}
