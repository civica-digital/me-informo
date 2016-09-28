(function() {
  'use strict';

  $(document).on('ready', function() {
    // Get file and put the selected file name in button
    $('.inputfile > label').click(function() {
      $('.inputfile > input').trigger('click');
    });
    $('.inputfile > input').change(function() {
      $('.inputfile > label').text(this.files[0].name);
    });
  });
})();
