const projects = [
    {
        id: 1,
        name: "contoh 1",
        description: "contoh hasil projek pertama",
        tech: ["node Js", "react Js"],
        starDate: "2020-10-10",
        endDate: "2024-01-03",
        image: ""
    }
];

// function hitungdurasi(start, end) {
//     const s = new Date(start);
//     const e = new Date(end);

//     const diff = e - s;
//     const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//     const months = Math.floor(days / 30);

//     if (months > 0) return `${months} bulan`;
//     return `${days} hari`;
// }

function renderProject() {
    const container = document.getElementById("projectList");
    let projectHtml = "";

    for (let i = 0; i < projects.length; i++) {
        const project = projects[i];

        projectHtml += `
                <div class="cardHasil">
                    <img src="${project.image}" alt="">
                    <h4>${project.name}</h4>
                    <a>${project.starDate}</a><a>${project.endDate}</a>
                    <h6>${project.description}</h6>
                    <p>${project.tech}</p>
                    <div class="ationBut">
                        <button>Edit</button>
                        <button>Delete</button>
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
    const starDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const description = document.getElementById('Description').value;

    let tech = [];

    if (document.getElementById("Node").checked) tech.push("Node Js");
    if (document.getElementById("React").checked) tech.push("React Js");
    if (document.getElementById("Next").checked) tech.push("Next Js");
    if (document.getElementById("type").checked) tech.push("typescript");

    const newProject = {
        id: projects.length + 1,
        name: name,
        starDate: starDate,
        endDate: endDate,
        description: description,
        tech,
    };

    projects.push(newProject);
    renderProject();

})

// function deletProject(id){
//     const i = projects.findIndex(p => p.id == id);
//     if(i !== -1){
//         projects.splice(index, 1);
//         renderProject();
//     }
// }