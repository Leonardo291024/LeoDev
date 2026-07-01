const datos = [
    {titulo: "Vortex 1000R", imagen: "./imgs/imagenReadme.png", descripcion: "Landing page para la demostracion de una nueva motocicleta a la venta.", tag1: "HTML", tag2: "CSS", linkDemo: "https://leonardo291024.github.io/Landing_Page_Motocicleta_Urban_Sport/", linkCodigo: "https://github.com/Leonardo291024/Landing_Page_Motocicleta_Urban_Sport"},

    {titulo: "TecStore", imagen: "./imgs/imagenReadmeTechStore.png", descripcion: "e-comerce productos de Tecnologia", tag1: "HTML", tag2: "CSS", tag3: "JavaScrip", linkDemo: "https://leonardo291024.github.io/TechStore/", linkCodigo: "https://github.com/Leonardo291024/TechStore"},
];

const contenedor = document.getElementById('contenedor-proyectos');

datos.forEach(item => {
    const proyect = document.createElement('article');
    proyect.className = 'project-card';

    const proyectContent = document.createElement('div');
    proyectContent.className = 'project-content';
    proyect.appendChild(proyectContent);


    proyectContent.innerHTML = `
        <h3>${item.titulo}</h3>
        <img src="${item.imagen}" alt="${item.titulo}" class="imagen-proyecto style="width:100%; height:auto;">
        <p>${item.descripcion}</p>
        <div class="tags">
            <span>${item.tag1}</span>
            <span>${item.tag2}</span>
            <span>${item.tag3}</span>
        </div>
        <a href="${item.linkDemo}" target="_blank" class="btn-project">Demo Live</a>
        <a href="${item.linkCodigo}" target="_blank" class="btn-project">Ver Código</a>
    `

    contenedor.appendChild(proyect);
})