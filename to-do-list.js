var removeButtons = document.body.getElementsByClassName("remove-button")

var checkboxes = document.body.getElementsByClassName("checkbox")

var addButton = document.body.getElementsByClassName("add-item")


for (i = 0; i < removeButtons.length; i++) {
    var button = removeButtons[i]
    button.addEventListener("click",remove)
}

for (i = 0; i < checkboxes.length; i++) {
    var button = checkboxes[i]
    button.addEventListener("change",push)
}

for (i = 0; i < addButton.length; i++) {
    var button = addButton[i]
    button.addEventListener("click",addRow)
    var checkboxes = document.body.getElementsByClassName("checkbox")
}

function remove(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.remove()
}

function push(event) {
    var buttonClicked = event.target
    var task = buttonClicked.parentElement
    if (this.checked) {
        remove(event)
        var completedItems = document.getElementsByClassName("completed-items")[0]

        var newtask = document.createElement('div')
        newtask.classList.add("item") // Formats according to cart-row
        newtask.classList.add("completed-item")
        console.log(task)
        newtask.innerHTML = task.innerHTML

        completedItems.append(newtask)
        
    } else {
        console.log("Unchecked!")
    }
}

function addRow(event) {
    var buttonClicked = event.target
    var pendingItems = document.getElementsByClassName("pending-items")[0]
    var newtask = document.createElement('div')
    newtask.classList.add("item") // Formats according to cart-row
    newtask.classList.add("pending-item")
    newtask.classList.add("pending-items")
    newtask.classList.add("to-do-list")

    newtask.innerHTML = `
    <div class="item pending-item">
        <input type="checkbox" class="checkbox">
        <input class="task"></label><br>
        <button class="remove-button"> Remove  </button>
    </div>
    `
    pendingItems.append(newtask)
}