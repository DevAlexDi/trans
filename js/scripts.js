
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
        if($('.checkbox-3').is(":checked")) {
          
        }
        if($('.checkbox-4').is(":checked")) {
          
        }
        
    });
});
    

