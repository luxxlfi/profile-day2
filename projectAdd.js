// const projects = [];

let projects = JSON.parse(localStorage.getItem("projects")) || [];


function renderProject() {
    const container = document.getElementById("projectList");
    let projectHtml = "";

    for (let i = 0; i < projects.length; i++) {
        const project = projects[i];

        projectHtml += `
                <div class="cardHasil">
                    <img src="${project.image}" alt="">
                    <h4>${project.name}</h4>
                    <h6>${project.description}</h6>
                    <p>${project.tech.join(", ")}</p>
                    <div class="ationBut">
                        <button onclick="showProject(${i})">Show</button>
                        <button onclick="deleteProject(${i})">Delete</button>
                    </div>
                </div>`
    }
    container.innerHTML = projectHtml
}
renderProject()

// from submit

const form = document.getElementById("ProjectForm")

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('NameP').value;

    const description = document.getElementById('Description').value;

    const imageInput = document.getElementById('image').files[0];

    let tech = [];

    if (document.getElementById("Node").checked) tech.push("Node Js");
    if (document.getElementById("React").checked) tech.push("React Js");
    if (document.getElementById("Next").checked) tech.push("Next Js");
    if (document.getElementById("type").checked) tech.push("typescript");

    const reader = new FileReader();

    reader.onload = function () {
        const newProject = {
            id: projects.length + 1,
            name: name,
            description: description,
            tech: tech,
            image: reader.result
        };

        projects.push(newProject);

        localStorage.setItem("projects", JSON.stringify(projects));

        renderProject();
    }

    if (imageInput) {
        reader.readAsDataURL(imageInput);
    }

    // const newProject = {
    //     id: projects.length + 1,
    //     name: name,
    //     description: description,
    //     tech,

    // };

    // projects.push(newProject);

    // renderProject();

})



function deleteProject(index) {
    projects.splice(index, 1);
    localStorage.setItem("projects", JSON.stringify(projects));
    renderProject();
}

// show alert

function showProject(index) {
    const project = projects[index];
    alert(
        "nama" + project.name + "\n" +
        "Deskripsi" + project.description + "\n" +
        "tech" + project.tech.join(", ")
    );
}

// function showProject(index) {
//     const project = projects[index];
//     const detail = document.getElementById('projectDetail');

//     detail.innerHTML = `
//         <div class="detailCard">
//              <img src="${project.image}" width="300">
//             <h2>${project.name}</h2>
//             <p>${project.description}</p>
//             <p class="techShow"><b>Tech:</b> ${project.tech.join(", ")}</p>
//              <div class="butoncon">
//                  <button onclick="closeDetail()">Close</button>
//             </div>
//          </div>
//     `;
// }

// clos di detail

