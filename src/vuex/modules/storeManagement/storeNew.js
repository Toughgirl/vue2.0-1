/**
 * Created by Jing on 2017/1/9.
 */

$(function() {
  $('form').validate({
    onFocus: function() {
      this.addClass('active');
      this.removeClass('error');
      return false;
    },
    onBlur: function() {
      var _status = parseInt(this.attr('data-status'));
      this.removeClass('active');
      if (!_status) {
        this.addClass('error');
        $(".form_control").css("border","0");
      }
      return false;
    }
  });
  $('form').on('submit', function(event) {
    event.preventDefault();
    var bool = $(this).validate('submitValidate'); //return boolean;
    if(!bool){
      $("submit").attr("disabled",false);
    }
  });

});






