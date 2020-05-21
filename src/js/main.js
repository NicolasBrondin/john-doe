var positions = [
    { male: "Développeur fullstack", female: "Développeuse fullstack"}
]

function init(){
    fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
        var user = data.results[0];
        user.position = positions[Math.floor(Math.random() * (positions.length-1))][user.gender];
        console.log(user);
         renderFromUser(user);
    });
}

function renderFromUser(user) {
    document.querySelector("#person-picture").src = user.picture.large; 
    document.querySelector("#person-fullname").innerHTML = user.name.first + " " + user.name.last;
    document.querySelector("#person-firstname").innerHTML = user.name.first;
    document.querySelector("#person-job").innerHTML = user.position;
}

init();