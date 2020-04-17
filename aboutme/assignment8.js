$(document).ready(function(){
    $("#btn1").click(function(){
        alert("Kumon was fun at times but super stressful. Kids can be a handful!");
    });
    $("#btn2").click(function(){
        alert("This job was a lot of work but it gave me so much experience for the future! I got to drive around all of new jersey and interact with a lot of clients.");
    });
    $("#btn3").click(function(){
        alert("This is pretty boring and I didn't get much out of it, but atleast I got some extra cash. It was convenient to be able to make money without leaving my dorm.");
    });
    $("#btn4").click(function(){
        alert("This job has provided me with a lot of actually applicable experience. However, I work there roughly 12 hours a week and only get about 4 hours of work. So I have a lot of downtime to complete homework and catch up on my studies.");
    });
    $("#btncolor").click(function(){
        $(".title4").css("background-color", "yellow");
    });
    $("#btnremove").click(function(){
        $(".jobremove").hide();
        $("#btn3").hide();
        $("#btn1").hide();
    });
    $("form[name='contact']").validate({
    // Specify validation rules
    rules: {
        firstname: "required",
        lastname: "required",
        yourmessage: "required",
        email: {
            required: true,
            email: true
        },
    },
    messages: {
        firstname: "Please enter your first name",
        lastname: "Please enter your last name",
        email: "Please enter a real email address",
        yourmessage: "Please enter a message"
        
    },

    submitHandler: function(form) {
        form.submit();
    }
  });
});



