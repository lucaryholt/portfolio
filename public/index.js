const ip = window.location.origin;

$.ajax({
    method: "GET",
    url: ip + "/api/pages"
}).done(function (data){
    for(let i = 0; i < data.data.length; i++){
        appendPage(data.data[i]);
    }
});

function appendPage(data) {
    const pageHolder = $('#pages-holder');

    pageHolder.append(
        `<div class="project">` +
            `<span>` +
                `<a class="link-holder" target="_blank" href="${data.link}">` +
                    `<img class="project-image" src="${data.imageFile}" alt="Logo">` +
                    `<strong> ${data.name}</strong>` +
                `</a>` +
                ` : ${data.description}` +
            `</span>` +
        `</div>`
    );
}