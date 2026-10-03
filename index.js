const board = document.querySelector(".board");
const playagain = document.querySelector(".playagain");
let gridblocks = document.querySelectorAll(".gridblock");
let Tittle = document.querySelector(".Tittle");
let playerturn = "X";
let wonornot = "no";
playagain.classList.add("hide")


gridblocks.forEach(block => {
    block.addEventListener("click", () => {
        if(playerturn === "X" && block.innerHTML === ``){
            block.innerHTML = `
            <i class="fa fa-remove"></i>
            `
            playerturn = "O"
            CalculateWinstate()
        }else if(playerturn === "O" && block.innerHTML === ``) {
            block.innerHTML = `
            <i class="fa fa-circle-o"></i>
            `
            playerturn = "X"
            CalculateWinstate()
        }
    });
});



function CalculateWinstate() {
    if(wonornot === "no"){
        let map = [];
    
        let currentstatemap = [];
    
        gridblocks.forEach(block => {
            if(block.innerHTML.includes("fa-remove")){
                currentstatemap.push("x");
            }else if(block.innerHTML.includes("fa-circle-o")){
                currentstatemap.push("o");
            }else{
                currentstatemap.push(".");
            }
        });
    
    
    
    
    
        // Mapis Sheqmna
        for (let i = 0; i < 9; i += 3) {
            let row = currentstatemap[i] + currentstatemap[i + 1] + currentstatemap[i + 2];
            map.push({row});
        }
    
    
        // Horizontal X mogebis CHECK
        for(let i = 0; i < map.length; i++){
            if(map[i].row === "xxx"){
                console.log("X WON")
                console.log(map[i].row)
                Tittle.textContent = "X Won"
                wonornot = "yes";
                playagain.classList.remove("hide")
            }
        }
    
        // Vertical X mogebis CHECK
        let col1count = 0;
        let col2count = 0;
        let col3count = 0;
        for(let i = 0; i < map.length; i++){
            for(let j = 0; j < map[i].row.length; j++){
                if(map[i].row[j] === "x"){
                    if(j === 0){
                        col1count += 1
                    }else if(j === 1){
                        col2count += 1
                    }else if(j === 2){
                        col3count += 1
                    }
                }
            }
        }
        console.log(col1count);
        console.log(col2count);
        console.log(col3count);
        if(col1count === 3){
            console.log("X WON")
            Tittle.textContent = "X Won"
            wonornot = "yes";
            playagain.classList.remove("hide")
        }
        if(col2count === 3){
            console.log("X WON")
            Tittle.textContent = "X Won"
            wonornot = "yes";
            playagain.classList.remove("hide")
        }
        if(col3count === 3){
            console.log("X WON")
            Tittle.textContent = "X Won"
            wonornot = "yes";
            playagain.classList.remove("hide")
        }
    
        
        // Diagonal X mogebis CHECK
        if(map[0].row[0] === "x" && map[1].row[1] === "x" && map[2].row[2] === "x"){
            console.log("X DIAGONAL WIN")
            Tittle.textContent = "X Won"
            wonornot = "yes";
            playagain.classList.remove("hide")
        }
        if(map[0].row[2] === "x" && map[1].row[1] === "x" && map[2].row[0] === "x"){
            console.log("X DIAGONAL WIN")
            Tittle.textContent = "X Won"
            wonornot = "yes";
            playagain.classList.remove("hide")
        }
    
    
    
    
        // Horizontal O mogebis CHECK
        for(let i = 0; i < map.length; i++){
            if(map[i].row === "ooo"){
                console.log("O WON")
                console.log(map[i].row)
                Tittle.textContent = "O Won"
                wonornot = "yes";
                playagain.classList.remove("hide")
            }
        }
    
        // Vertical O mogebis CHECK
        let colo1count = 0;
        let colo2count = 0;
        let colo3count = 0;
        for(let i = 0; i < map.length; i++){
            for(let j = 0; j < map[i].row.length; j++){
                if(map[i].row[j] === "o"){
                    if(j === 0){
                        colo1count += 1
                    }else if(j === 1){
                        colo2count += 1
                    }else if(j === 2){
                        colo3count += 1
                    }
                }
            }
        }
        console.log(colo1count);
        console.log(colo2count);
        console.log(colo3count);
        if(colo1count === 3){
            console.log("O WON")
            Tittle.textContent = "O Won"
            wonornot = "yes";
            playagain.classList.remove("hide")
        }
        if(colo2count === 3){
            console.log("O WON")
            Tittle.textContent = "O Won"
            wonornot = "yes";
            playagain.classList.remove("hide")
        }
        if(colo3count === 3){
            console.log("O WON")
            Tittle.textContent = "O Won"
            wonornot = "yes";
            playagain.classList.remove("hide")
        }
    
        // Diagonal O mogebis CHECK
        if(map[0].row[0] === "o" && map[1].row[1] === "o" && map[2].row[2] === "o"){
            console.log("O DIAGONAL WIN")
            Tittle.textContent = "O Won"
            wonornot = "yes";
            playagain.classList.remove("hide")

        }
        if(map[0].row[2] === "o" && map[1].row[1] === "o" && map[2].row[0] === "o"){
            console.log("O DIAGONAL WIN")
            Tittle.textContent = "O Won"
            wonornot = "yes";
            playagain.classList.remove("hide")
        }
    
    
    
        console.log(map)
    }
}


function reloadgame() {
    if(wonornot === "yes"){
        window.location.reload()
    }
}

