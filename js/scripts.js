
$(document).ready(function () {
    $('#count-pass').select2({
        minimumResultsForSearch: -1
    });
    $('#count-pass-2').select2({
        minimumResultsForSearch: -1
    });
    $('#first-sel').select2({
        minimumResultsForSearch: -1
    });
     $('#second-sel').select2({
        minimumResultsForSearch: -1
    });
    
    $('.date-inp-init').datepicker({
         weekStart: 1,
         format: 'dd/mm/yyyy'
        
    });

   
    $('.swipe').click(function(){
        var first = $('#first-sel').val();
        var second = $('#second-sel').val();
        
        $('#first-sel').val(second).trigger('change');
        $('#second-sel').val(first).trigger('change');
        
    });
    
    $('#checkbox-2').change(function() {
        $('.for-hide').addClass('hidden');
        if($(this).is(":checked")) {
           $('.for-hide').removeClass('hidden');
        }
        
    });
    
    $('.type-car').change(function() {
        if($('#checkbox-3').prop('checked')) {
            if($('#checkbox-4').prop('checked')) {
                $('.flex-form__side--submit .image').removeClass('image--bus').addClass('image--both');
            }
            else {
                $('.flex-form__side--submit .image').removeClass('image--both').removeClass('image--bus');
            }
        }
        else if ($('#checkbox-4').prop('checked')) {
            $('.flex-form__side--submit .image').removeClass('image--both').addClass('image--bus');
        }
        
    });

    $('.popular__flex__item__head').mouseover(function () {
        $(this).find('.popular__flex__item__price_block__vis').addClass('hid');
        $(this).find('.popular__flex__item__price_block__hid').addClass('show');
    });
    $('.popular__flex__item__head').mouseleave(function () {
        $(this).find('.popular__flex__item__price_block__hid').removeClass('show');
        $(this).find('.popular__flex__item__price_block__vis').removeClass('hid');
    });

    $('.open_book_modal').click(function(e) {
        e.preventDefault();
        $('#book').modal('show');
    });

    $('.open_agreement_modal').click(function(e) {
        e.preventDefault();
        $('#agreement-modal').modal('show');
    });
});
    

