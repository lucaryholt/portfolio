$.ajax({
    url: '/api/projects'
}).done(response => {
    response.live.map(page => {
        appendCollapse(page, '#live-projects-holder');
    });
    response.other.map(page => {
        appendCollapse(page, '#other-projects-holder');
    });
});

function appendCollapse(data, id) {
    const pageHolder = $(id);

    let linkString = '';

    if (data.links !== undefined) {
        data.links.map(link => {
            linkString = linkString + `<a class="link-holder" target="_blank" href="${link.link}"><i class="${link.icon} link-icon"></i></a>`;
        });
    }

    pageHolder.append(
        `<div class="project">
            <span>
                <a class="link-holder collapse-trigger" href="#${data.name.replaceAll(' ', '_')}" data-toggle="collapse" aria-expanded="false" aria-controls="skills-collapse">
                    <strong>${data.name}</strong>
                </a>
                 : ${data.description}
            </span>
        </div>
        <div class="collapse" id="${data.name.replaceAll(' ', '_')}">
            <div class="collapse-text">${data.text}<br>${linkString}</div>
        </div>`
    );
}