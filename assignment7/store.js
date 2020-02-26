jQuery(document).ready(function() {
    function update_total() {
        var amount1 = $('#amount1').val();
        var amount2 = $('#amount2').val();
        var amount3 = $('#amount3').val();

        $("#subtotal1").val("$" + (amount1 * 30).toString() + ".00");
        $("#subtotal2").val("$" + (amount2 * 20).toString() + ".00");
        $("#subtotal3").val("$" + (amount3 * 5).toString() + ".00");

        $("#grand_total").html("$" + (amount1*30 + amount2*20 + amount3*5).toString() + ".00");
    }
    $("#amount1").change(update_total);
    $("#amount2").change(update_total);
    $("#amount3").change(update_total);

    function validate_input(e) {
        var first_name = $.trim($('#first_name').val());
        var last_name = $.trim($('#last_name').val());
        var email = $.trim($('#email').val());
        var card = $.trim($('#card').val());
        var zipcode = $.trim($('#zipcode').val());

        if(first_name == "") {
            alert("Please enter your first name");
            $('#first_name').focus();
            $('#first_name').select();
            e.preventDefault();
            return;
        } if(last_name == "") {
            alert("Please enter your last name");
            $('#last_name').focus();
            $('#last_name').select();
            e.preventDefault();
            return;
        } if(email == "") {
            alert("Please enter your email");
            $('#email').focus();
            $('#email').select();
            e.preventDefault();
            return;
        } if(card == "") {
            alert("Please enter your credit card");
            $('#card').focus();
            $('#card').select();
            e.preventDefault();
            return;
        } if(zipcode == "") {
            alert("Please enter your zipcode");
            $('#zipcode').focus();
            $('#zipcode').select();
            e.preventDefault();
            return;
        }
    }
    $("form").submit(validate_input(event));

});