$(document).ready(function(){
var loggedin = JSON.parse(localStorage.getItem("loggedin"));
    if(loggedin[0]!=null){
        var user = loggedin[0];
        
//var exp_var = JSON.parse(localStorage.getItem("exp"));
var profile = JSON.parse(localStorage.getItem("profile"));
              for(index = 0; index < profile.length; index++) {
                  var profile_var=profile[index];
                  if(profile_var.user==user)
                     {
						
					  var nivel=profile[index].nivel;
					  var exp_var=profile[index].experienta;
					  }
					 } 


//alert(exp_var);
var new_exp=exp_var;
 
        //alert(nivel);
        if(exp_var >= nivel*100){
            new_exp = exp_var - nivel * 100;
            nivel = nivel + 1;
        }


		for(index = 0; index < profile.length; index++) {
             var profile_var=profile[index];
             if(profile_var.user==user)
                  {       
					profile[index].nivel = nivel;
					profile[index].experienta=new_exp;
				//	alert(profile[index].experienta);
					}
			}
			
} 
localStorage.setItem('profile', JSON.stringify(profile));
//localStorage.setItem('exp', JSON.stringify(new_exp));

});