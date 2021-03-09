var object = {
    id: 1,
    title: "this is a note",
    content: "This is the amazing content of the note!"
  }

  object.age = 26;


var obj_j =JSON.stringify(object);
var New_object = JSON.parse(obj_j);
console.log(New_object);
