function setPlusIcon() {
    const list = document.querySelectorAll(".menu li");

    list.forEach(listEl => {
        const subList = listEl.querySelector("ul");
        if (subList) {
            listEl.classList.add("plus");
        }
    })

    const links = document.querySelectorAll(".menu a");
    links.forEach(link => {
        link.onclick = aClick;
    }) 
}

function aClick(event) {
    const link = event.target;
    const listEl = link.closest("li");
    const subList = listEl.querySelector("ul");

    if (!subList) return true;

    if (subList.style.display === "none" || subList.style.display === "") {
        subList.style.display = "block";
        listEl.classList.remove("plus");
        listEl.classList.add("minus");
    } else {
        subList.style.display = "none";
        listEl.classList.remove("minus");
        listEl.classList.add("plus");
    }

    event.preventDefault();
}

window.onload = setPlusIcon;