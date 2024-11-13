document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector("#container");
    const resizeButton = document.querySelector("#resizeButton");
    const clearButton = document.querySelector("#clear");

    let size = 16;
    createGrid(size);

    resizeButton.addEventListener("click", () => {
        size = parseInt(prompt("Enter the number of squares per side (max 100):"));
        if (size > 0 && size <= 100) {
            clearGrid();
            createGrid(size);
        } else {
            alert("Please enter a valid number between 1 and 100.");
        }
    });

    clearButton.addEventListener("click", () => {
        clearGrid();
        createGrid(size);
    });


    function createGrid(squaresPerSide) {
        const totalWidth = 960;
        const squareSize = totalWidth / squaresPerSide;

        container.style.width = `${totalWidth}px`;
        container.innerHTML = "";

        for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;

            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = "black";
            });

            container.appendChild(square);
        }
    }

    function clearGrid() {
        container.innerHTML = "";
    }
});
