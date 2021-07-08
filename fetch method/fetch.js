async function getUserData() {
    let url = 'data.json';
    try {
        let res = await fetch(url);
        return await res.json();
    }
    catch(error) {
        console.log(error);
    }
}

async function renderedUsers() {
    let users = await getUserData();
    console.log(users)
    let html = '';
    users.forEach(user => {
        let htmlSegment = `<div class="user">
                                <img src="${user.profieURL}" >
                                <h2>${user.firstName} ${user.lastName}</h2>
                                <div class="email"><a href="email:${user.email}">${user.email}</a></div>

                         </div>`;
        html += htmlSegment;
    });
    let container = document.querySelector('.container');
      container.innerHTML = html;
}



renderedUsers();