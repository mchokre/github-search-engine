// Variables
let gitHUb = new GitHubAPI();
let ui = new UI();

document.getElementById("search-user").addEventListener("keyup", function(e) {
    if(e.target.value !== '') {
        gitHUb.getUserFromGitHub2(e.target.value).then(data => {
            if(!data.message) {
                ui.paint(data);
            } else {
                document.getElementById("user-profile-box").style.display = "none";
            }
        })
    } else {
        document.getElementById("user-profile-box").style.display = "none";
    }
})

function onFocusOutValue() {
    if(document.getElementById("search-user").value == '') {
        document.getElementById("search-user").value = "Enter here";
    }
}

function onFocusValue() {
    if(document.getElementById("search-user").value == "Enter here") {
        document.getElementById("search-user").value = '';
    }
}