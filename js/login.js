
$('#loginpage').live('pageshow', function(event){ 		
			$('#login').click(function(){
			var reg_no =  $("#username").val();
			var datalogin = {
				username: $("#username").val(),
				password: $("#password").val()
			};
			$.ajax({
				type: "GET",
				url: "http://119.82.227.198/~k9576440/services/proses.php",
				//url: "http://localhost/services/proses.php",
				async: true,
				crossDomain: true,		
				dataType : 'jsonp',				
				data: datalogin,
				success:function(aksi){
					if(aksi == '1'){
						//Load home.hmtl
						$.mobile.changePage( "home.html", {
									transition : "pop" });
						sessionStorage.setItem('reg_no', reg_no); //simpan reg_no dalam session
					}
					else{
						$("#error").append("<p align='center'>Wrong username or Password !!</p>");
						
					}

				}						
			});
		});
	});	
			
