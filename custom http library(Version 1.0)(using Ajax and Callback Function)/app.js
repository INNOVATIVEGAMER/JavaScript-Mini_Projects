const myobj = new httprequests();
/* //for get 
myobj.get("https://jsonplaceholder.typicode.com/posts", function (err,posts) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(posts);
    }
});*/
/* //for single get
myobj.get("https://jsonplaceholder.typicode.com/posts/24", function (err, post) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(post);
    }
});*/

const data = {
    title: "bahot faltu topics hai",
    body: "fir bhi padhna padhta hai"
}
/* //for post
myobj.post("https://jsonplaceholder.typicode.com/posts", data, function (err, post) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(post);
    }
});*/

/* //for update(put)
myobj.put("https://jsonplaceholder.typicode.com/posts/1", data, function (err,post) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(post);
    }
});*/

myobj.delete("https://jsonplaceholder.typicode.com/posts/1", function (err,response) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(response);
    }
});