// Get the data

async function getUser() {
    let users;

    try {
        const data = await fetch("https://62a89044ec36bf40bda8ea10.mockapi.io/users", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })

        // collect response
        users = await data.json();
        console.log(users);

    } catch (error) {
        console.log(error)
    }
    return users;

}


// WRITE A FUNCTIONALITY TO DISPLAY THE DATA OF THE USER

async function displayUsers() {
    let users = await getUser()
    console.log(users)

    //to push data to display on webpage

    const usersList = document.querySelector(".user-list");
    usersList.innerHTML = "";

    users.forEach(user => {
        // console.log(user.name)

        usersList.innerHTML += `
        <div class="userContainer">
         <img class="userAvtar" src="${user.avatar}" alt="${user.name}">
          </div>
         <h3>${user.name} </h3>
         <button onClick="deleteUser(${user.id})">Delete </button>
         <button onClick="editUser(${user.id})">Edit </button>
          
          
          `




    });


}
displayUsers();

//write a functionality to delete the user data using ID

async function deleteUser(id) {
    try {
        const data = await fetch(`https://62a89044ec36bf40bda8ea10.mockapi.io/users/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        });
        const users = await data.json();
        console.log(users);
        displayUsers()

    } catch (error) {
        console.log(error)
    }

}