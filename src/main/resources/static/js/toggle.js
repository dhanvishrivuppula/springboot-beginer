currentUserIndex=1;
var userArray=[
    {
        name:"John Doe", "designation":"Software Engineer", "img":"/imgs/john_doe.png"
    },
    {
        name:"Jane Doe", "designation":"Software Analyst", "img":"/imgs/jane_doe.png"
    }
];
function toggleUser(){
    currentUserIndex = 1-currentUserIndex;
    var nextUser = userArray[currentUserIndex];
displayUser(nextUser);
}
function displayUser(user){
    //console.log(user);
    document.getElementById("userImage").src = user.img;
    document.getElementById("userName").innerText = user.name;
    document.getElementById("userDesignation").innerText = user.designation;
    
}