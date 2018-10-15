

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
                event.preventDefault();
                $(this).ekkoLightbox();
            });




$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});



$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})