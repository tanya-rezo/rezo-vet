let send_btn = document.getElementById("send-btn");
if (send_btn != null) {
    send_btn.addEventListener("click", function() {
        if (document.getElementById("firstName").value == "" || document.getElementById("phoneNumber").value == "") {
            window.location.assign("error.html");
        } else {
            window.location.assign("success.html");
        }
    });
}


let age_btn_minus = document.getElementById("age-btn-minus");
if (age_btn_minus != null) {
    age_btn_minus.addEventListener("click", function() {
        let input = document.getElementById("age-input");

        let age = +input.value;
        age = age - 1;
        if (age >= 0) {
            input.value = age;
        }
    });
}

let age_btn_plus = document.getElementById("age-btn-plus");
if (age_btn_plus != null) {
    age_btn_plus.addEventListener("click", function() {
        let input = document.getElementById("age-input");

        let age = +input.value;
        age = age + 1;
        input.value = age;
    });
}

let dropdowns = document.getElementsByClassName("dropdown");
for (let dropdown of dropdowns) {
    let button = dropdown.children[0];
    let items = dropdown.children[1].children;
    for (let item of items) {
        item.addEventListener("click", function() {
            button.innerHTML = this.innerHTML;
        });
    }
}
