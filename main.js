let container = document.querySelector(".container")

for (let i = 0; i < 100; i++) {
    let cell = document.createElement("div")
    cell.classList.add("cell")
    container.appendChild(cell)
    // console.log(cell)
    cell.addEventListener("click", () => {
        if (cell.style.backgroundColor === "white") {
            cell.style.backgroundColor = "black";
          } else {
            cell.style.backgroundColor = "white";
          }
        }) 
    
    }



    
  

