class UI {
    constructor() {
        this.searchTitle = document.getElementById("title");
        this.searchBar = document.getElementById("search-user");
        this.userProfileBox = document.getElementById("user-profile-box");
        this.profileImage = document.getElementById("profile-image");
        this.loginName= document.getElementById("login-name");
        this.userName = document.getElementById("user-name");
        this.userLocation = document.getElementById("user-location");
        this.userCompany = document.getElementById("user-company");
        this.userWebsite = document.getElementById("user-website");
        this.userFollowers = document.getElementById("user-followers");
        this.userFollowing = document.getElementById("user-following");
    }

    // An alternative would have been to use template literals
    paint(userInfo) {
        this.userProfileBox.style.display = "flex";
        this.profileImage.src = userInfo.avatar_url;
        this.loginName.textContent = `Username: ${userInfo.login}`;
        this.userName.textContent = `Name: ${userInfo.name}`;
        this.userLocation.textContent = `Location: ${userInfo.location}`;
        this.userCompany.textContent = `Company: ${userInfo.company}`;
        if(userInfo.blog)
            this.userWebsite.textContent = `Website: ${userInfo.blog}`;
        else
            this.userWebsite.textContent = `Website: null`;
        this.userFollowers.textContent = `Followers: ${userInfo.followers}`;
        this.userFollowing.textContent = `Following: ${userInfo.following}`;
    }

}