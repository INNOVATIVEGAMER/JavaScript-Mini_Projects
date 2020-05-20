const obj = new http();
const div = document.getElementById("content");

const ourData = {
    name: "prasad",
    username: "ig",
    email: "ig39@gmail.com"
};

//for get
/*obj.get("https://jsonplaceholder.typicode.com/users")
    .then(data => setdata(data))
    .catch(err => console.log(err));*/

//for post
/*obj.post("https://jsonplaceholder.typicode.com/users", ourData)
    .then(data => setdata2(data))
    .catch(err => console.log(err));*/

//for put
obj.put("https://jsonplaceholder.typicode.com/users/3", ourData)
    .then(data => setdata2(data))
    .catch(err => console.log(err));

function setdata(data) {
    console.log(data);
    let output = `<ul>`;
    data.forEach(function (obj) {
        output += `<li>${obj.name}</li>`;
    })
    output += `</ul>`;
    div.innerHTML = output;
}

function setdata2(data) {
    console.log(data);
    let output = `<ul>`;
    output += `<li>${data.name}</li>`;
    output += `</ul>`;
    div.innerHTML = output;
}