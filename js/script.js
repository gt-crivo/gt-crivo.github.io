// Define a lista de membros da equipe com suas propriedades
const teamMembers = [
    {
        name: "Francisco",
        role: "Graduando/Desenvolvedor",
        imageSrc: "images/francisco.png",
        socialLinks: {
            github: "https://github.com/Francisco-aragao",
            linkedin: "https://www.linkedin.com/in/francisco-aragão-334b60173/",
        },
    },
    {
        name: "Gabriel",
        role: "Graduando/Desenvolvedor",
        imageSrc: "images/pains.jpg",
        socialLinks: {
            github: "https://github.com/probablygab",
            linkedin: "https://www.linkedin.com/in/gabriel-pains/"
        },
    },
    {
        name: "Lucas",
        role: "Graduando/Desenvolvedor",
        imageSrc: "images/lucas.jpg",
        socialLinks: {
            github: "https://github.com/Sacramento-20",
            linkedin: "https://www.linkedin.com/in/lucas-20-sacramento/"
        },
    },
    {
        name: "Pedro",
        role: "Graduando/Desenvolvedor",
        imageSrc: "images/pedro.png",
        socialLinks: {
            github: "https://github.com/Pephma",
            linkedin: "https://www.linkedin.com/in/pedro-m-952597210/"
        },
    },
    {
        name: "Leonardo",
        role: "Graduando/Desenvolvedor",
        imageSrc: "images/leoomaia.jpg",
        socialLinks: {
            github: "https://github.com/LeoOMaia",
            linkedin: "https://www.linkedin.com/in/leonardo-oliveira-maia-5296b5231/",
            user: "https://lattes.cnpq.br/5269268117024845"
        },
    },
    {
        name: "Thiago",
        role: "Mestrando/Desenvolvedor",
        imageSrc: "images/thiagohbs.webp",
        socialLinks: {
            github: "https://github.com/THnelso",
            linkedin: "https://www.linkedin.com/in/thiago-souza-6a0934213/",
            user: "http://lattes.cnpq.br/3928778510712888"
        },
    },
    {
        name: "Italo",
        role: "Coordenador",
        imageSrc: "images/italo.jpg",
        socialLinks: {
            github: "https://github.com/cunha",
            linkedin: "https://www.linkedin.com/in/italocunha/",
            user: "http://lattes.cnpq.br/7973706384467274"
        },
    },
];

// Função para criar o elemento do membro da equipe
function createTeamMemberElement(member, isCoordinator = false) {
    const container = document.createElement("div");
    container.className = isCoordinator ? "coordinator-container" : "col-lg-4 col-sm-6";

    const blogImg = document.createElement("div");
    blogImg.className = "blog_img";
    const img = document.createElement("img");
    img.src = member.imageSrc;
    blogImg.appendChild(img);

    const name = document.createElement("h3");
    name.className = "jonmork_text";
    name.textContent = member.name;

    const role = document.createElement("p");
    role.className = "worker_text";
    role.textContent = member.role;

    const followText = document.createElement("p");
    followText.className = "follow_text";

    const socialIcon = document.createElement("div");
    socialIcon.className = "social_icon";
    const ul = document.createElement("ul");

    // Cria os ícones de redes sociais
    for (const key in member.socialLinks) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        const i = document.createElement("i");

        a.href = member.socialLinks[key];
        i.className = `fa fa-${key}`;
        i.setAttribute("aria-hidden", "true");

        a.appendChild(i);
        li.appendChild(a);
        ul.appendChild(li);
    }

    socialIcon.appendChild(ul);

    container.appendChild(blogImg);
    container.appendChild(name);
    container.appendChild(role);
    container.appendChild(followText);
    container.appendChild(socialIcon);

    return container;
}

// Função para adicionar os membros da equipe ao DOM
function addTeamToPage() {
    const blogSection = document.querySelector(".blog_section_2 .row");

    // Encontra o Coordenador e remove da lista original
    const coordinator = teamMembers.find(member => member.role === "Coordenador");
    const otherMembers = teamMembers.filter(member => member.role !== "Coordenador");

    // Adiciona o Coordenador ao topo
    if (coordinator) {
        const coordinatorElement = createTeamMemberElement(coordinator, true);
        const coordinatorContainer = document.createElement("div");
        coordinatorContainer.className = "col-12 text-center"; // Linha inteira
        coordinatorContainer.appendChild(coordinatorElement);
        blogSection.appendChild(coordinatorContainer);
    }

    // Adiciona os demais membros
    otherMembers.forEach((member) => {
        const teamElement = createTeamMemberElement(member);
        blogSection.appendChild(teamElement);
    });
}

// Adiciona a equipe ao carregar a página
document.addEventListener("DOMContentLoaded", addTeamToPage);
