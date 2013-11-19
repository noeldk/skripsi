$('#academiccalenderpage').live('pageshow', function(event){ 
	var AmbilData1;
	$.ajax({
		type : 'GET',
		url : 'http://119.82.227.198/~k9576440/services/get_semester_calender.php',
		async: true,
		crossDomain: true,
		dataType : 'jsonp',
		success : function(data){
				AmbilData1 = data.items;
				$.each(AmbilData1, function(index, loaddata) {
					/*
					$('#academiccalenderlist').append('<li ><a onclick="navigator.app.loadUrl(\'http://119.82.227.198/~k9576440/pdf/' + loaddata.academic_calender + '\',{ openExternal:true }); return false;">' + loaddata.semester_desc + '</a>' +
					'</li>');					  
					});
					*/
					
					/*
					$('#academiccalenderlist').append('<li ><a href="http://119.82.227.198/~k9576440/pdf/' + loaddata.academic_calender + '" data-ajax="false" target="_blank">' + loaddata.semester_desc + '</a>' +
					'</li>');					  
					});
					*/
					
					
					$('#academiccalenderlist').append('<li ><a onclick="window.open(\'http://docs.google.com/viewer?url=http://119.82.227.198/~k9576440/pdf/' + loaddata.academic_calender + '\',\'_system\',\'location=yes\');">' + loaddata.semester_desc + '</a>' +
					'</li>');					  
					});
					
					
					$('#academiccalenderlist').listview('refresh');
				}
	});

});



	