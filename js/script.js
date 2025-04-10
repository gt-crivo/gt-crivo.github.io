// Define a lista de membros da equipe atual com suas propriedades
const teamMembers = [
    {
        name: "Bernnardo",
        role: "Graduando/Desenvolvedor",
        imageSrc: "images/people/bernnardo.png",
        socialLinks: {
            github: "https://github.com/BernnardoSBO",
            linkedin: "https://www.linkedin.com/in/bernnardosbo/",
            user: "http://lattes.cnpq.br/4176271586425703"
        },
    },
    {
        name: "Iago",
        role: "Graduando/Desenvolvedor",
        imageSrc: "images/people/iago.png",
        socialLinks: {
            github: "https://github.com/iago-r",
            linkedin: "https://www.linkedin.com/in/iago-srios/",
            user: "http://lattes.cnpq.br/8209609954020284"
        },
    },
    {
        name: "Italo",
        role: "Coordenador",
        imageSrc: "images/people/italo.jpg",
        socialLinks: {
            github: "https://github.com/cunha",
            linkedin: "https://www.linkedin.com/in/italocunha/",
            user: "http://lattes.cnpq.br/7973706384467274"
        },
    },
    {
        name: "Leonardo",
        role: "Graduando/Desenvolvedor",
        imageSrc: "images/people/leoomaia.jpg",
        socialLinks: {
            github: "https://github.com/LeoOMaia",
            linkedin: "https://www.linkedin.com/in/leonardo-oliveira-maia-5296b5231/",
            user: "https://lattes.cnpq.br/5269268117024845"
        },
    },
    {
        name: "Matheus",
        role: "Graduando/Desenvolvedor",
        imageSrc: "images/people/gimpel.png",
        socialLinks: {
            github: "https://github.com/GimpelMatheus",
            linkedin: "https://www.linkedin.com/in/matheus-gimpel/",
            user: "http://lattes.cnpq.br/7272642693090926"
        },
    },
    {
        name: "Thiago",
        role: "Mestrando/Desenvolvedor",
        imageSrc: "images/people/thiagohbs.webp",
        socialLinks: {
            github: "https://github.com/THnelso",
            linkedin: "https://www.linkedin.com/in/thiago-souza-6a0934213/",
            user: "http://lattes.cnpq.br/3928778510712888"
        },
    },
];

// Define a lista de membros da equipe anterior com suas propriedades
const previousTeamMembers = [
    {
        name: "Francisco",
        role: "Graduando/Desenvolvedor",
        imageSrc: "images/people/francisco.png",
        socialLinks: {
            github: "https://github.com/Francisco-aragao",
            linkedin: "https://www.linkedin.com/in/francisco-aragão-334b60173/",
        },
    },
    {
        name: "Gabriel",
        role: "Graduando/Desenvolvedor",
        imageSrc: "images/people/pains.jpg",
        socialLinks: {
            github: "https://github.com/probablygab",
            linkedin: "https://www.linkedin.com/in/gabriel-pains/"
        },
    },
    {
        name: "Lucas",
        role: "Graduando/Desenvolvedor",
        imageSrc: "images/people/lucas.jpg",
        socialLinks: {
            github: "https://github.com/Sacramento-20",
            linkedin: "https://www.linkedin.com/in/lucas-20-sacramento/"
        },
    },
    {
        name: "Pedro",
        role: "Graduando/Desenvolvedor",
        imageSrc: "images/people/pedro.png",
        socialLinks: {
            github: "https://github.com/Pephma",
            linkedin: "https://www.linkedin.com/in/pedro-m-952597210/"
        },
    },
];

// Função para criar o elemento do membro da equipe
function createTeamMemberElement(member) {
    const container = document.createElement("div");
    container.className = "col-lg-4 col-sm-6";

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
    const blogSectionMembers = document.querySelector(".blog_section_2 .row");
    const blogSectionPreviousMembers = document.querySelector(".blog_section_3 .row");

    teamMembers.forEach((member) => {
        const teamElement = createTeamMemberElement(member);
        blogSectionMembers.appendChild(teamElement);
    });

    previousTeamMembers.forEach((member) => {
        const teamElement = createTeamMemberElement(member);
        blogSectionPreviousMembers.appendChild(teamElement);
    });
}

// Adiciona a equipe ao carregar a página
document.addEventListener("DOMContentLoaded", addTeamToPage);
