// const botlar = JSON.parse(localStorage.getItem("user"));
// const studentBox = document.querySelector(".student__wrapper");
// const logOutBtn = document.querySelector(".reset");


// function renderStudent (){
//     if(botlar){
//         const userName = document.createElement("h2");
//         const userCoin = document.createElement("span");
//         const userUstoz = document.createElement("p");
//         const userGroup = document.createElement("p");
//         const userVaqt = document.createElement("p");


//         userName.classname = "ism"

//         userName.textContent = `Ismi:${botlar.ism}`
//         userCoin.textContent = `Coin:${botlar.coin}`
//         userUstoz.textContent = `teacher:${botlar.ustoz}`
//         userGroup.textContent = `Group:${botlar.group}`

//         studentBox.append(userName,userCoin,userUstoz,userGroup,userVaqt)
//     }

//  logOutBtn.addEventListener("click", () => {
//     localStorage.removeItem("user");
//     window.location.href = "./index.html"
//  })

    
// }
// renderStudent()

const botlar = JSON.parse(localStorage.getItem("user"));
const studentBox = document.querySelector(".student__wrapper");
const logOutBtn = document.querySelector(".reset");

function renderStudent() {
    if (botlar) {
        const userName = document.createElement("h2");
        const userCoin = document.createElement("span");
        const userUstoz = document.createElement("p");
        const userGroup = document.createElement("p");
        const userVaqt = document.createElement("h3");

        userName.className = "ism";
        userCoin.className = "coin";
        userUstoz.className = "ustoz";
        userGroup.className = "group";

        userName.textContent = `Ismi: ${botlar.ism}`;
        userCoin.textContent = `Coin: ${botlar.coin}`;
        userUstoz.textContent = `Ustoz: ${botlar.ustoz}`;
        userGroup.textContent = `Guruh: ${botlar.group}`;
        userVaqt.textContent = `Vaqt:${botlar.vaqt}`

        studentBox.append(userName, userCoin, userUstoz, userGroup);
    }

    logOutBtn.addEventListener("click", () => {
        localStorage.removeItem("user");
        window.location.href = "./index.html";
    });
}

renderStudent();


