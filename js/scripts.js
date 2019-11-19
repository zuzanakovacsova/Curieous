//$("#Surprise").click(function (){
     //$("body").css("cursor", "wait");
     //$("#Surprise:hover").css("cursor", "wait");
//}) 

function submitForm() {
     var frm = document.getElementsByName('contact-form')[0];
     frm.reset();  
     $("#appended_confirm").append("Thank you, your request has been submitted and we will get in touch shortly.");   
     return false; 
}

function submitForm_short() {
     var frm = document.getElementsByName('mailing_list')[0];
     frm.reset();  
     return false; 
}