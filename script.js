var connectionRequests = document.querySelector(".connection-requests-banner > .number_count").innerText;

var request1 = document.querySelector(".request-1");
var request2 = document.querySelector(".request-2");

var connectionNumbers = 500;

console.log(connectionNumbers);

function editProfile(){
    document.querySelector(".card-body > h1").innerText = "Derek Zoolander";
}

function acceptContact(element1, element2){
    element2.remove();
    connectionRequests--;
    connectionNumbers++;
    document.querySelector(".number_count").innerText = connectionRequests;
    document.querySelector(".connection-numbers").innerText = connectionNumbers + "+";
    if (connectionRequests == 0){
        document.querySelector(".connection-requests-container").remove();
    }
}

function rejectContact(element1, element2){
    element2.remove();
    connectionRequests--;
    document.querySelector(".number_count").innerText = connectionRequests;
    if (connectionRequests == 0){
        document.querySelector(".connection-requests-container").remove();
    }
}