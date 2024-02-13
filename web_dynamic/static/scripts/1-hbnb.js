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
    //   $('.amenities h4').text(nameAmenity.join(', '));
    });
  });