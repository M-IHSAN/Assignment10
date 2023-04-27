
function cal() {

    let task = document.getElementById("task").value;
    let parentDiv = document.getElementById("dataDiv");
    let newParagraph = document.createElement("p");
    let t = document.createTextNode(task);
    newParagraph.appendChild(t);
    parentDiv.appendChild(newParagraph);
    paragraph1 = parentDiv.firstChild;
    parentDiv.insertBefore(newParagraph, paragraph1);
    para1 = JSON.stringify(t);
    localStorage.setItem("task", task);
    let element = localStorage.getItem("task");
  
}

function remove() {
    let parentDiv = document.getElementById("dataDiv");
    let nodeToRemove = parentDiv;
    parentDiv.innerHTML = "";
    let element = localStorage.getItem("task");
    document.getElementById("lastvalue").innerHTML = "Last remainder was  " + element;
}




