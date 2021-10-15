var users = [];


class user {
  constructor({text, id,}) {
      this.text = text;
      this.id = id;
  }

}


readStorage();


function createUser(event) {
  let userForm = new FormData(event.currentTarget);
  let data = Object.fromEntries(userForm);

  data.id = Date.now();

  userObject = new user(data);

  users.push(userObject);

  updateStorage(users);

  console.log(users);

  event.preventDefault();

}





function readStorage() {

  let jsonString = localStorage.getItem("task")
  let result = JSON.parse(jsonString) || [];
  result = result.map(taskData => new Task(taskData));


}






function updateStorage(newData) {

  localStorage.setItem("userArray", JSON.stringify(newData));

  readStorage();
}
