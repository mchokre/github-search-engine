class GitHubAPI {
    constructor() {
        this.client_id = 'df796ee64a12987f6b64';
        this.client_secret = '4aabec3759bcc90bc4a968bfecc3c46b4f4bef76';
    }

    // With Async Await
    async getUserFromGitHub(userName) {
        const response = await fetch(`https://api.github.com/users/${userName}?client_id=${this.client_id}
        &client_secret=${this.client_secret}`);
        const responseData = await response.json();

        return {
            responseData
        }
    }

    // With Promises
    getUserFromGitHub2(userName) {
        return new Promise((resolve, reject) => {
            const response = fetch(`https://api.github.com/users/${userName}?client_id=${this.client_id}
            &client_secret=${this.client_secret}`)
            .then(response => resolve(response.json()));
        }) 
    }
    
    // With Ajax
    getUserFromGitHub3(userName, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `https://api.github.com/users/${userName}?client_id=${this.client_id}
        &client_secret=${this.client_secret}`);
        xhr.onload = () => {
            if(xhr.readyState === xhr.DONE) {
                if(xhr.status === 200) {
                    callback(JSON.parse(xhr.responseText));
                }
            }
        }
        xhr.send();
    }

}