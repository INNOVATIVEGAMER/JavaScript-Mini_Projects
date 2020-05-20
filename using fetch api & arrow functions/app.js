document.getElementById("text-button").addEventListener("click", getText);
document.getElementById("json-button").addEventListener("click", getJson);
document.getElementById("external-button").addEventListener("click", getExternal);

function getText() {
    fetch("sample.txt")
        .then(res => res.text())
        .then(function (data) {
            document.getElementById("content").innerHTML = data;
        })
        .catch(function (err) {
            console.log(err);
        });
}

function getJson() {
    fetch("sample.json")
        .then(res => res.json())
        .then(function (data) {
            let output = `<ul>`;
            data.forEach(function (obj) {
                output += `<li>${obj.name}<ul><li>${obj.id}</li></ul></li>`;
            });
            output += `</ul>`;
            document.getElementById("content").innerHTML = output;
        })
        .catch(function (err) {
            console.log(err);
        })
}

function getExternal() {
    const id = document.getElementById("idofGitHub");
    fetch(`https://api.github.com/users/${id.value}/repos`)
        .then(res => res.json())
        .then(function (data) {
            let output = ``;
            data.forEach(function (obj) {
                output += `<li>${obj.name}</li>`;
            });
            document.getElementById("content").innerHTML = output;
        })
        .catch(function (err) {
            console.log(err);
        });
}