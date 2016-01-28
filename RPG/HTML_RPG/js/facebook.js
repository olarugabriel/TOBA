window.fbAsyncInit = function() {
		    FB.init({
		      appId      : '906108362818264',
		      xfbml      : true,
		      version    : 'v2.5'
		    });
		    FB.getLoginStatus(function(response) {
		    	if (response.status === 'connected') {
		    		//document.getElementById('status').innerHTML = 'We are connected.';
		    		document.getElementById('login').style.visibility = 'hidden';
					
						
						
						
						
						
						
			
						
		    	} else if (response.status === 'not_authorized') {
		    		//document.getElementById('status').innerHTML = 'We are not logged in.'
		    	} else {
		    		//document.getElementById('status').innerHTML = 'You are not logged into Facebook.';
		    	}
		    });
		};
		(function(d, s, id){
		    var js, fjs = d.getElementsByTagName(s)[0];
		    if (d.getElementById(id)) {return;}
		    js = d.createElement(s); js.id = id;
		    js.src = "//connect.facebook.net/en_US/sdk.js";
		    fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
		
		// login with facebook with extra permissions
		function login() {
			FB.login(function(response) {
				if (response.status === 'connected') {
				
			

				
		    		//document.getElementById('status').innerHTML = 'We are connected.';
		    		document.getElementById('login').style.visibility = 'hidden';
					
					
				
					
		    	} else if (response.status === 'not_authorized') {
		    		//document.getElementById('status').innerHTML = 'We are not logged in.'
		    	} else {
		    		//document.getElementById('status').innerHTML = 'You are not logged into Facebook.';
		    	}
			}, {scope: 'email'});
		}
		
		// getting basic user info
		function getInfo() {
			FB.api('/me', 'GET', {fields: 'first_name,last_name,name,id,cover,picture,email'}, function(response) {
				//document.getElementById('status').innerHTML = response.id;
				//document.getElementById('first_name').innerHTML = response.first_name;
				//document.getElementById('last_name').innerHTML = response.last_name;
				//document.getElementById('email').innerHTML = response.email;
				//document.getElementById('link').src=response.cover.source;
				//document.getElementById('photo').src=response.picture.data.url;
				
				 var datbase = JSON.parse(localStorage.getItem("datbase"));
	   if(datbase==null)
	   datbase=[];
		
		  
		   var obj={user:$(response.first_name).val(), password:$(response.first_name).val(),email:$(response.email).val()};
		   datbase[datbase.length] =obj;
		   localStorage.setItem('datbase', JSON.stringify(datbase));
		   
		    var profile = JSON.parse(localStorage.getItem("profile"));
			if(profile==null)
			profile=[];
			var objj={user:$(response.first_name).val(),viata:10,bani:100,nivel:1,energie:10,rasa:"necunoscut",putere:1,dexteritate:1,inteligenta:1,stamina:1,rezistenta:1,armura:0,harta:1,experienta:0,quest:0};
		    profile[profile.length] =objj;
			localStorage.setItem('profile', JSON.stringify(profile));
			 window.location.href = "profil.html";
				
				
			
			});
			
			
			
			
		  
		}