let button = document.getElementById('submit')
button.addEventListener('click', function(){
    //alert("Hello")
    let task = document.getElementById('task')
    if(task.value ==''){
        alert("please Enter Something into the Field")
    }
    else{ 
        //alert("Good")
        let li =document.createElement('li')
        li.className = "item"
        let userText = document.createTextNode("Apple") 
        console.log(li)
    }
})