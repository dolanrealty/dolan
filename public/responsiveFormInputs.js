$(document).ready(() => {
  if (window.innerWidth <= 550) {
    $('.form-field').each(function() {
      const labelText = $(this).find('label').first().text().replace(/\s{2,}/g, "")
      $(this).find('input').first().attr('placeholder', labelText)
    })
  }
})
