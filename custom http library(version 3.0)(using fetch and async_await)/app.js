const obj = new http();
const div = document.getElementById("content");

const ourData = {
    name: "prasad",
    rollNo : "37"
}
/*  //for get
obj.get("https://jsonplaceholder.typicode.com/users")
    .then(data => setdata(data))
    .catch(err => console.log(err));*/

/* //for post
obj.post("https://jsonplaceholder.typicode.com/users", ourData)
    .then(data => setdata2(data))
    .catch(err => console.log(err));*/

/* //for put
obj.put("https://jsonplaceholder.typicode.com/users/1", ourData)
    .then(data => setdata2(data))
    .catch(err => console.log(err));*/

/* //for delete
obj.delete("https://jsonplaceholder.typicode.com/users/1")
    .then(data => div.innerHTML = data)
    .catch(err => console.log(err));*/

function setdata(data) {
    //console.log(data);
    let output = `<ul>`;
    data.forEach(function (user) {
        output += `<li>${user.name}</li>`;
    });
    output += `</ul>`;
    div.innerHTML = output;
}

function setdata2(data) {
    let output = `<ul>`;
    output += `<ul><li>${data.name}</li>`;
    output += `<li>${data.id}</li></ul>`;
    output += `</ul>`;
    div.innerHTML = output;
}