$(document).ready(function () {
    const nameAmenity = [];
    $('input:checkbox').click(function () {
      if ($(this).is(":checked")) {
        nameAmenity.push($(this).attr('value'));
      } else {
        const nameIndex = nameAmenity.indexOf($(this).attr('value'));
        nameAmenity.splice(nameIndex, 1);
      }
      if (nameAmenity.length <= 2 && nameAmenity.length > 0) {
        $('.amenities h4').text(nameAmenity.join(', '));
      } else if (nameAmenity.length === 0) {
        $('.amenities h4').text('')
      } else {
        newArray = [];
        newArray.push(nameAmenity[0], nameAmenity[1])
        $('.amenities h4').text(newArray.join(', ') + '...');
      }
    });

  $.getJSON('http://0.0.0.0:5001/api/v1/status', content => {
    if (content.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
    $('#api_status').removeClass('available');
    }
  });
    // const apiStatus = document.getElementById('api_status');
    // fetch('http://0.0.0.0:5001/api/v1/status/')
    //     .then(response => {
    //         if (response.ok) {
    //             apiStatus.classList.add("available");
    //         } else {
    //             apiStatus.classList.remove("available");
    //         }
    //     })
    //     .catch(error => {
    //         console.error('Error fetching API status:', error);
    //         apiStatus.classList.remove("available");
    //     });
  });