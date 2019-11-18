$("#Surprise").click(function (){
     $("body").css("cursor", "wait");
     $("#Surprise:hover").css("cursor", "wait");
}) 

function submitForm() {
     var frm = document.getElementsByName('contact-form')[0];
     frm.reset();  // Reset all form data
     $("#appended_confirm").append("Thank you, your request has been submitted and we will get in touch shortly.");   
     return false; // Prevent page refresh
}