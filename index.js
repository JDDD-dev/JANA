function addNote(){
    var text = document.getElementById("noteText").value;
    if (text === ''){
        alert("Empty Note?... :C")
    }else{
        var newDiv = document.createElement("div");
        newDiv.className = "note";
        var pNote = document.createElement("p");
        var newNote = document.createTextNode(text);
        pNote.appendChild(newNote);
        var deleteButton = document.createElement("p");
        deleteButton.textContent = "X";
        deleteButton.id = "deleteNote";
        deleteButton.addEventListener('click', () => {
            newDiv.parentElement.removeChild(newDiv);
        });
        var time = new Date();
        var pTime = document.createElement("p");
        var timeText = document.createTextNode(time);
        pTime.appendChild(timeText);
        newDiv.appendChild(pTime);
        newDiv.appendChild(pNote);
        newDiv.appendChild(deleteButton);
        var noteDiv = document.getElementById("noteDiv");
        noteDiv.insertBefore(newDiv, noteDiv.firstChild);
    }
}
