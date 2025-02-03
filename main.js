// let spaceForm = document.querySelector(".formSpace");
// let spaceLogin = document.querySelector(".login");
// let spaceParol = document.querySelector(".parol");
// let spaceEye = document.querySelector(".koz");
// let btn = document.querySelector(".submit");
// let errorMsg = document.querySelector(".error-msg"); 


// spaceEye.addEventListener("mousedown" , (evt)=> {
//     evt.preventDefault();
//     spaceParol.setAttribute("type" , "text")
// });

// spaceEye.addEventListener("mouseout" , (evt)=> {
//     evt.preventDefault();
//     spaceParol.setAttribute("type" , "password")
// });


// spaceForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const loginValue = Number(spaceLogin.value);
//     const passwordValue = Number(spaceParol.value);

//     let topilganStudent = null;

//     students.forEach(oquvchi => {
//         if(oquvchi.login === loginValue && oquvchi.parol === passwordValue){
//             topilganStudent = oquvchi;
//         }
//     })

//     if(topilganStudent){
//         errorMsg.style.display = "none";
//         localStorage.setItem("user", JSON.stringify(topilganStudent));
//         let user = JSON.parse(localStorage.getItem("user"));

//         if (!user) {
//             window.location.href = "index.html"; 
//         }
        

//     }else{
//         errorMsg.style.display = "block";
//         errorMsg.textContent = "Login yoki password noto'g'ri!"
//         localStorage.removeItem("user");    
//     }

//     spaceLogin.value = "";
//     spaceParol.value = "";
// });

// function turnONOFF() {
//     if(spaceLogin.value && spaceParol.value){
//         btn.style.backgroundColor = "orange";
//         btn.style.disabled = false;
//     }else{
//         btn.style.backgroundColor = "lightgray"
//         btn.disabled = true;
//     }
// }

// spaceLogin.addEventListener("input", turnONOFF);
// spaceParol.addEventListener("input", turnONOFF);


// if (spaceLogin === "1234" && spaceParol === "12345") {
//     window.location.href = "dashboard.html"; // Dashboard sahifasiga o'tkazish
// } else {
//     alert("Login yoki parol noto‘g‘ri!");
// }

// let spaceForm = document.querySelector(".formSpace");
// let spaceLogin = document.querySelector(".login");
// let spaceParol = document.querySelector(".parol");
// let spaceEye = document.querySelector(".koz");
// let btn = document.querySelector(".submit");
// let errorMsg = document.querySelector(".error-msg");

// // Ko'z ikonasi bosilganda parolni ko'rsatish
// spaceEye.addEventListener("mousedown", (evt) => {
//     evt.preventDefault();
//     spaceParol.setAttribute("type", "text");
// });
// spaceEye.addEventListener("mouseout", (evt) => {
//     evt.preventDefault();
//     spaceParol.setAttribute("type", "password");
// });

// // Login formasini jo‘natish
// spaceForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const loginValue = spaceLogin.value.trim();  // Bo'sh joylarni olib tashlaymiz
//     const passwordValue = spaceParol.value.trim();

//     let topilganStudent = students.find(oquvchi => 
//         oquvchi.login === loginValue && oquvchi.parol === passwordValue
//     );
//     if (topilganStudent) {
//         // Agar foydalanuvchi topilgan bo‘lsa
//         errorMsg.style.display = "none";
//         localStorage.setItem("user", JSON.stringify(topilganStudent));

        
//         window.location.href = "./student.html";
//     } else {
       
//         errorMsg.style.display = "block";
//         errorMsg.textContent = "Login yoki parol noto'g'ri!";
//         localStorage.removeItem("user");    
//     }

    
//     spaceLogin.value = "";
//     spaceParol.value = "";
// });


// function turnONOFF() {
//     if (spaceLogin.value && spaceParol.value) {
//         btn.style.backgroundColor = "orange";
//         btn.disabled = false;
//     } else{
//         btn.style.backgroundColor = "lightgray";
//         btn.disabled = true;
//     }
// }

// spaceLogin.addEventListener("input", turnONOFF);
// spaceParol.addEventListener("input", turnONOFF);






let spaceForm = document.querySelector(".formSpace");
let spaceLogin = document.querySelector(".login");
let spaceParol = document.querySelector(".parol");
let spaceEye = document.querySelector(".koz");
let btn = document.querySelector(".submit");
let errorMsg = document.querySelector(".error-msg");

// Ko'z ikonasi bosilganda parolni ko'rsatish/yashirish
spaceEye.addEventListener("mousedown", (evt) => {
    evt.preventDefault();
    spaceParol.setAttribute("type", "text");
});
spaceEye.addEventListener("mouseup", (evt) => {
    evt.preventDefault();
    spaceParol.setAttribute("type", "password");
});


const students = [
    { login: "1234", parol: "1111", ism: "Ibrohim", coin: 955, ustoz: "Sunnatbek Krasavchik", group: 1943, vaqt: "15:00"},
    { login: "4321", parol: "2222", ism: "Said", coin: 222, ustoz: "Sunnatbek Krasavchik", group:1943, vaqt: "15:00" },
    { login: "7689", parol: "3333", ism: "Boisxon", coin: 786, ustoz: "Sunnatbek Krasavchik", group:1943, vaqt: "15:00" },
    { login: "4567", parol: "1237", ism: "Mahmud", coin: 9873, ustoz: "Sunnatbek Krasavchik", group:1943, vaqt: "15:00" },
];


spaceForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const loginValue = spaceLogin.value.trim();
    const passwordValue = spaceParol.value.trim();

    let topilganStudent = students.find(oquvchi => 
        oquvchi.login === loginValue && oquvchi.parol === passwordValue
    );

    if (topilganStudent) {
        // Agar foydalanuvchi topilgan bo‘lsa
        errorMsg.style.display = "none";
        localStorage.setItem("user", JSON.stringify(topilganStudent));
        window.location.href = "./student.html";
    } else {
        // Login yoki parol noto'g'ri bo‘lsa
        errorMsg.style.display = "block";
        errorMsg.textContent = "Login yoki parol noto'g'ri!";
        localStorage.removeItem("user");
    }

    // Inputlarni tozalash
    spaceLogin.value = "";
    spaceParol.value = "";
});

// Tugma faolligini boshqarish
function turnONOFF() {
    if (spaceLogin.value && spaceParol.value) {
        btn.style.backgroundColor = "orange";
        btn.disabled = false;
    } else {
        btn.style.backgroundColor = "lightgray";
        btn.disabled = true;
    }
}

spaceLogin.addEventListener("input", turnONOFF);
spaceParol.addEventListener("input", turnONOFF);





   
