const box = document.querySelector("div");

btn.addEventListener('click', () => {
    let size = 0;
    size = Number(prompt("Please enter the number of squares per side for your canvas: ", 10));
    if ((size < 0) || (size > 100)) {
        alert("Please enter a number between 1 and 100.");
    } else {
        if (box !== null) {
            while (box.hasChildNodes()) {
                box.removeChild(box.firstChild);
            }
        }
    }

    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        for (let j = 0; j < size; j++) {
            const grid = document.createElement("div");
            grid.classList.add("grid");
            row.appendChild(grid);
            grid.setAttribute("style", "width: 10px; height: 10px;");
            grid.addEventListener('mouseover', () => {
                grid.style.backgroundColor = "black";
            });
            grid.addEventListener('mouseout', () => {
                grid.style.backgroundColor = 'black';
            });
        }
        box.appendChild(row);
    }
});



