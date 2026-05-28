function getAndDisplayrandomUser() {
    fetch("https://randomuser.me/api")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var userData = data.results[0];
            var myuser = {};
                myuser.img = userData.picture.medium;
                myuser.name = userData.name.title+" "+userData.name.first+" "+userData.name.last;
                myuser.designation = userData.email;

            displayUser(myuser);
        })
        .catch(function(err) {
            console.log("Error "+err);
        });
}

function displayUser(user){
    //console.log(user);
    document.getElementById("userImage").src = user.img;
    document.getElementById("userName").innerText = user.name;
    document.getElementById("userDesignation").innerText = user.designation;
    
}