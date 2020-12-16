const ip = window.location.origin;

$.ajax({
    method: "GET",
    url: ip + "/api/live-projects"
}).done(function (data){
    for(let i = 0; i < data.data.length; i++){
        appendPage(data.data[i], '#live-projects-holder');
    }
});

$.ajax({
    method: "GET",
    url: ip + "/api/other-projects"
}).done(function (data){
    for(let i = 0; i < data.data.length; i++){
        appendPage(data.data[i], '#other-projects-holder');
    }
});

function appendPage(data, id) {
    const pageHolder = $(id);

    pageHolder.append(
        `<div class="project">` +
            `<span>` +
                `<a class="link-holder" target="_blank" href="${data.link}">` +
                    `<strong> ${data.name}</strong>` +
                `</a>` +
                ` : ${data.description}` +
            `</span>` +
        `</div>`
    );
}