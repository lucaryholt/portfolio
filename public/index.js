$.ajax({
    url: '/api/projects'
}).done(response => {
    response.live.map(page => {
        appendPage(page, '#live-projects-holder');
    });
    response.other.map(page => {
        if (page.type === 'link') appendPage(page, '#other-projects-holder');
        else appendCollapse(page, '#other-projects-holder');
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

function appendCollapse(data, id) {
    const pageHolder = $(id);

    pageHolder.append(
        `<div class="project">
            <span>
                <a class="link-holder collapse-trigger" href="#${data.name}" data-toggle="collapse" aria-expanded="false" aria-controls="skills-collapse">
                    <strong>${data.name}</strong>
                </a>
                 : ${data.description}
            </span>
        </div>
        <div class="collapse" id="${data.name}">
            <div class="collapse-text">${data.text}</div>
        </div>`
    );
}