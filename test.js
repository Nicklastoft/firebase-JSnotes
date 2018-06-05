let myObj = {
    header: "template-tag",
    description: "such an awesome feature"
}
//copy below to push variable myObj to database
database.ref("notes/").push(myObj);

//copy below to push to database
database.ref("users/").push({
    name: "Jonas",
    hobbies: ["JS", "Beer"]
})