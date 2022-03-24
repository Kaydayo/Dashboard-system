const home = document.getElementById('home')
const chat = document.getElementById('chat')
const dashboard = document.getElementById('dashboard')
const charts = document.getElementById('charts')
const Addresses = document.getElementById('Addresses')
const library = document.getElementById('library')
const logout = document.getElementById('logout')
const table = document.getElementById("pop-table")
const classes = document.getElementById('classes')
const teacherDashboard = document.getElementById("users-tab")


const myData = [
    {
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        name: "Charles Nonna",
        ID: "SD/112",
        Class: "SS1",
        Subjects: [
            {
                subject: "Biology",
                grade: 0
            },
            {
                subject: "Mathematics",
                grade: 0
            },
            {
                subject: "English-Language",
                grade: 0
            },
            {
                subject: "Literature",
                grade: 0
            },
            {
                subject: "Physics",
                grade: 0
            },
            {
                subject: "Chemistry",
                grade: 0
            },
            {
                subject: "Further-Mathematics",
                grade: 0
            },
            {
                subject: "Yoruba",
                grade: 0
            },
            {
                subject: "Computer Studies",
                grade: 0
            }
        ],
        Age: "13",
        Email: "charlesnonna@gmail.com"
    },
    {
        img: "https://images.unsplash.com/photo-1592334873219-42ca023e48ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w3NjA4Mjc3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        name: "Andrew Nonna",
        ID: "SD/113",
        Class: "SS3",
        Subjects: [
            {
                subject: "Biology",
                grade: 0
            },
            {
                subject: "Mathematics",
                grade: 0
            },
            {
                subject: "English-Language",
                grade: 0
            },
            {
                subject: "Literature",
                grade: 0
            },
            {
                subject: "Physics",
                grade: 0
            },
            {
                subject: "Chemistry",
                grade: 0
            },
            {
                subject: "Further-Mathematics",
                grade: 0
            },
            {
                subject: "Yoruba",
                grade: 0
            },
            {
                subject: "Computer Studies",
                grade: 0
            }
        ],
        Age: "13",
        Email: "charlesnonna@gmail.com"
    },
    {
        img: "https://images.unsplash.com/photo-1585837146751-a44118595680?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTR8NzYwODI3NzR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        name: "Charles Nonna",
        ID: "SD/114",
        Class: "JSS2",
        Subjects: [
            {
                subject: "Biology",
                grade: 0
            },
            {
                subject: "Mathematics",
                grade: 0
            },
            {
                subject: "English-Language",
                grade: 0
            },
            {
                subject: "Literature",
                grade: 0
            },
            {
                subject: "Physics",
                grade: 0
            },
            {
                subject: "Chemistry",
                grade: 0
            },
            {
                subject: "Further-Mathematics",
                grade: 0
            },
            {
                subject: "Yoruba",
                grade: 0
            },
            {
                subject: "Computer Studies",
                grade: 0
            }
        ],
        Age: "13",
        Email: "charlesnonna@gmail.com"
    },
    {
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        name: "Charles Nonna",
        ID: "SD/115",
        Class: "SS1",
        Subjects: [
            {
                subject: "Biology",
                grade: 0
            },
            {
                subject: "Mathematics",
                grade: 0
            },
            {
                subject: "English-Language",
                grade: 0
            },
            {
                subject: "Literature",
                grade: 0
            },
            {
                subject: "Physics",
                grade: 0
            },
            {
                subject: "Chemistry",
                grade: 0
            },
            {
                subject: "Further-Mathematics",
                grade: 0
            },
            {
                subject: "Yoruba",
                grade: 0
            },
            {
                subject: "Computer Studies",
                grade: 0
            }
        ],
        Age: "13",
        Email: "charlesnonna@gmail.com"
    },
    {
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        name: "Charles Nonna",
        ID: "SD/116",
        Class: "JSS1",
        Subjects: [
            {
                subject: "Biology",
                grade: 0
            },
            {
                subject: "Mathematics",
                grade: 0
            },
            {
                subject: "English-Language",
                grade: 0
            },
            {
                subject: "Literature",
                grade: 0
            },
            {
                subject: "Physics",
                grade: 0
            },
            {
                subject: "Chemistry",
                grade: 0
            },
            {
                subject: "Further-Mathematics",
                grade: 0
            },
            {
                subject: "Yoruba",
                grade: 0
            },
            {
                subject: "Computer Studies",
                grade: 0
            }
        ],
        Age: "13",
        Email: "charlesnonna@gmail.com"
    },
    {
        img: "https://images.unsplash.com/photo-1592334873219-42ca023e48ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w3NjA4Mjc3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        name: "James edugbon",
        ID: "SD/117",
        Class: "JSS3",
        Subjects: [
            {
                subject: "Biology",
                grade: 0
            },
            {
                subject: "Mathematics",
                grade: 0
            },
            {
                subject: "English-Language",
                grade: 0
            },
            {
                subject: "Literature",
                grade: 0
            },
            {
                subject: "Physics",
                grade: 0
            },
            {
                subject: "Chemistry",
                grade: 0
            },
            {
                subject: "Further-Mathematics",
                grade: 0
            },
            {
                subject: "Yoruba",
                grade: 0
            },
            {
                subject: "Computer Studies",
                grade: 0
            }
        ],
        Age: "13",
        Email: "charlesnonna@gmail.com"
    },
    {
        img: "https://images.unsplash.com/photo-1581824043583-6904b080a19c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        name: "Chiamaka nna",
        ID: "SD/118",
        Class: "SS3",
        Subjects: [
            {
                subject: "Biology",
                grade: 0
            },
            {
                subject: "Mathematics",
                grade: 0
            },
            {
                subject: "English-Language",
                grade: 0
            },
            {
                subject: "Literature",
                grade: 0
            },
            {
                subject: "Physics",
                grade: 0
            },
            {
                subject: "Chemistry",
                grade: 0
            },
            {
                subject: "Further-Mathematics",
                grade: 0
            },
            {
                subject: "Yoruba",
                grade: 0
            },
            {
                subject: "Computer Studies",
                grade: 0
            }
        ],
        Age: "13",
        Email: "charlesnonna@gmail.com"
    }
]
home.addEventListener('click', () => {
    window.open("../admin/admin.html", "_self")
})
charts.addEventListener('click', () => {
    window.open("../chart/chart.html", "_self")
})
dashboard.addEventListener('click', () => {
    window.open("../dashboard/dashboard.html", "_self")
})

const classSelect = document.getElementById('class-sect')
classSelect.addEventListener('click', (e) => {
    const table = document.getElementById('pop-table')
    const id = e.target.className
    let myId = id.split(' ')
    console.log(myId)
    const newId = myId.length == 2 ? myId[1] : myId[0];
    const data = myData.filter(data => data.Class === newId)
    console.log(data)
    console.log(newId)
    let classPop = ''
    console.log("**")
    data.map((el) => {
        console.log("***")
        classPop += `
    <tr class="openModal" data-id='${el.ID}'> 
    <td>
        <img src="${el.img}" alt="photo">${el.name}
    </td>
    <td>
        ${el.ID}
    </td>
    <td>
        ${el.Class}
    </td>
    <td>
        ${el.Age}
    </td>
    <td>
        ${el.Email}
    </td>
</tr>`
    })
    table.innerHTML = classPop

})

const modal = document.getElementById('myModal')
const modalDetails = document.getElementById('modal-details')
console.log(modalDetails)
table.addEventListener('click', (e) => {

    const id = e.target.parentElement.dataset.id
    modal.style.display = "block"
    const user = myData.find(user => user.ID == id)
    modalDetails.innerHTML = `
    <div id="modal-container" style="display: flex; flex-direction: column; align-items: center">
    <div><p>${user.ID}</p></div>
    <div><img style="width: auto; height: 100px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 10px #35558d78" src="${user.img}" alt=""></div>
    <div id="form" style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-top: 1rem">
    
    <div><p>Name: ${user.name}</p></div>
    <div><p>Email: ${user.Email}</p></div>
    <div><p>Age: ${user.Age}</p></div>
    <div><p>Class: ${user.Class}</p></div>
        
    
</div>

    
    
</div>
    
    `

})

const span = document.getElementsByClassName('close')[0]

span.addEventListener('click', () => {
    modal.style.display = "none";
})