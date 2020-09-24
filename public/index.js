const ip = window.location.origin;

$.ajax({
    method: "GET",
    url: ip + "/api/pages"
}).done(function (data){
    for(let i = 0; i < data.data.length; i++){
        appendPage(data.data[i]);
    }
});

function appendPage(data){
    const pageHolder = $('#pages-holder');

    pageHolder.append(
        '<a href="' + data.link + '" class="link-holder">' +
            '<div class="page-holder">' +
                '<div class="card page-card">' +
                    '<div class="card-body page-card-body">' +
                        '<img class="page-image" src="' + data.imageFile + '" alt="' + data.title + '">' +
                        '<h3 class="title">' + data.name + '</h3>' +
                        '<p>' + data.description + '</p>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</a>');
}