document.querySelector(".get-jokes").addEventListener("click",getJokes);

function getJokes(e) {
    const numberOfJokes = document.querySelector("input[type='number']").value;
    //console.log(numberOfJokes);
    var xhr = new XMLHttpRequest();

    xhr.open("GET", `http://api.icndb.com/jokes/random/${numberOfJokes}`, true);

    xhr.onload = function () {
        if (this.status === 200) {
            const jokes = JSON.parse(this.responseText);
            let result = ``;
            if (jokes.type === "success") {
                jokes.value.forEach(function (joke) {
                    result += `<li>${joke.joke}</li>`;
                });
            }
            else {
                result += `<li>Something Went Wrong</li>`;
            }

            document.querySelector(".jokes").innerHTML = result;
        }
    }

    xhr.send();
    e.preventDefault();
}