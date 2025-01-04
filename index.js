const form = document.getElementById("userForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const order = document.querySelector('input[name="order"]:checked')?.value;

    if (`!username!age  gender === "Select" || !order`) {
    alert("Please fill out all fields correctly.");
    return;
}


const parentElement = document.getElementById("parentDiv");
parentElement.textContent = `Name: ${ username }, Age: ${ age }, Gender: ${ gender }`;


const orderedList = document.createElement("ol");
[
    "Name: " + username,
    "Age: " + age,
    "Gender: " + gender,
    "Order: " + order,
].forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    orderedList.appendChild(listItem);
});

const listContainer = document.getElementById("list-container");
listContainer.innerHTML = "" ; 
listContainer.appendChild(orderedList);

console.log(`Name: ${ username }`);
console.log(`Age: ${ age }`);
console.log(`Gender: ${ gender }`);
console.log(`Order: ${ order }`);
});