document.getElementById("send-btn").addEventListener("click", function() {
     if (document.getElementById("firstName").value == "" || document.getElementById("phoneNumber").value == "") {
        window.location.assign("error.html");
    } else {
        window.location.assign("success.html");
    }
});