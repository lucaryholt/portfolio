$.ajax({
    url: '/api/projects'
}).done(response => {
    response.live.map(page => {
        appendPage(page, '#live-projects-holder');
    });
    response.other.map(page => {
        appendPage(page, '#other-projects-holder');
    });
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