function updateListner() {
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
}


updateListner() 

function remove(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.remove()
}

function push(event) {
    var buttonClicked = event.target
    var task = buttonClicked.parentElement.getElementsByClassName("task")[0].value

    console.log(task)
    if (this.checked) {
        var completedItems = document.getElementsByClassName("completed-items")[0]
        var newtask = document.createElement('div')

        newtask.classList.add("item")
        newtask.classList.add("completed-item")

        newtask.innerHTML = `
            <input type="checkbox" class="checkbox" checked>
            <input class="task" value=${task}></label><br>
            <button class="remove-button"> Remove  </button>
        `

        buttonClicked.parentElement.remove()
        completedItems.append(newtask)
    
        updateListner() 
    } else {
        var pendingItems = document.getElementsByClassName("pending-items")[0]
        var newtask = document.createElement('div')

        newtask.classList.add("item")
        newtask.classList.add("pending-item")

        newtask.innerHTML = `
            <input type="checkbox" class="checkbox">
            <input class="task" value=${task}></label><br>
            <button class="remove-button"> Remove  </button>
        `

        buttonClicked.parentElement.remove()
        pendingItems.append(newtask)
    
        updateListner() 

    }
}

function addRow(event) {
    var buttonClicked = event.target
    var pendingItems = document.getElementsByClassName("pending-items")[0]
    var newtask = document.createElement('div')

    newtask.innerHTML = `
    <div class="item pending-item">
        <input type="checkbox" class="checkbox">
        <input class="task"></label><br>
        <button class="remove-button"> Remove  </button>
    </div>
    `
    pendingItems.append(newtask)

    updateListner() 
}