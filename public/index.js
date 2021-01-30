$.ajax({
    url: '/api/projects'
}).done(response => {
    response.live.map(page => {
        appendPage(page, '#live-projects-holder');
    });
    response.other.map(page => {
        if (page.type === 'link') appendPage(page, '#other-projects-holder');
        else appendModal(page, '#other-projects-holder');
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

function appendModal(data, id) {
    const pageHolder = $(id);

    pageHolder.append(
        `<div class="project">
            <span>
                <a class="link-holder" data-toggle="modal" data-target="#exampleModal"><strong>${data.name}</strong></a>
                 : ${data.description}
            </span>
        </div>

        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel"><strong>${data.name}</strong></h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        ${data.text}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>`
    );
}