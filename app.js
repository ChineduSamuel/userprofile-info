internalUsers = JSON.parse(localStorage.getItem("internalUsers")) 
displayUsers()

function displayUsers(){
       
    usersPlaceholder =  '';
   for (i=0; i<internalUsers.length;i++)
   {

       if(internalUsers[i]!=null || internalUsers[i]!=undefined )
       {
       usersPlaceholder +=`<div>
       <img src="${internalUsers[i].profilePics}" style="max-height: 100px;"><br>
       <strong>Full Name</strong> : ${internalUsers[i].fullName}<br>
       <strong>Email</strong> : ${internalUsers[i].email}<br>
       <strong>Phone</strong> : ${internalUsers[i].phone}<br>
       <button  style="background-color:red; color:#FFF" onClick="deleteUser(${i})" >Delete</button>
       <button style="background-color:green; color:#FFF" onClick="editUser(${i})" >Edit</button>

   </div> <hr>`}


   }
   document.getElementById("users").innerHTML = usersPlaceholder
}

function deleteUser(id)
{
    if(confirm(`Are you sure you want to delete ${internalUsers[id].fullName} profile? `)){
        internalUsers.splice(id,1)
        localStorage.setItem("internalUsers", JSON.stringify(internalUsers))
        displayUsers()
    }

}


function addUser(){
    
    let newUser =
    { "fullName" : prompt("Enter your full name"),
        "email": prompt("Enter your email"),
        "phone":  prompt("Enter your phone number"),
        "profilePics":  prompt("upload your profile pics")

    }
    internalUsers.push(newUser)
    displayUsers()
    localStorage.setItem("internalUsers", JSON.stringify(internalUsers))

    if(internalUsers==null)
    {
        internalUsers=[];
    }
    
}
function editUser(id)
{
    let userDetails = 
    { "fullName" : prompt("Enter your full name", internalUsers[id].fullName),
        "email": prompt("Enter your email", internalUsers[id].email),
        "phone": prompt("Enter your phone number", internalUsers[id].phone),
        "profilePics": prompt("upload profile pics", internalUsers[id].profilePics)
    }
    internalUsers[id] = userDetails
    localStorage.setItem("internalUsers", JSON.stringify(internalUsers))
    displayUsers()

}





