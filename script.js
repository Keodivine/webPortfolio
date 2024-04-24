
<script>
    // Function to render personal information
     function renderPersonalInfo() {
        document.getElementById("name").innerText = name + " " + surname;
        document.getElementById("bio").innerText = bio;
        document.getElementById("address").innerText = contactInfo.address;
        document.getElementById("phone").innerText = contactInfo.phone;
        document.getElementById("email").innerText = contactInfo.email;
    }

    // Function to render projects
    function renderProjects() {
        var projectsList = document.getElementById("projects");
        projects.forEach(function(project) {
            var projectItem = document.createElement("div");
            projectItem.innerHTML = `<h3>${project.title}</h3>
                                     <p>${project.description}</p>`;
            projectsList.appendChild(projectItem);
        });
    }

    // Call functions to render content

    renderPersonalInfo();
    renderProjects();

    // Personal Information

var name = "Keorapetse";
var surname = "Tsie";
var bio = "A Front-End Developer located in PRETORIA, SOUTH AFRICA. Passionate about Web/Software Development and creating dynamic user experiences.";
var contactInfo = {
    address: "331, Minnaar street, Pretoria Central",
    phone: "+27 81 852 7887",
    email: "tsiekeorapetse45@gmail.com"
};

// Projects
var projects = [
    { title: "Project 1", description: "Description of Project 1" },
    { title: "Project 2", description: "Description of Project 2" },
    // Add more projects as needed
];

</script>
