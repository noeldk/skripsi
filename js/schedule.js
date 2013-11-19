
$('#schedulepage').live('pageshow', function(event){
	var AmbilData;
	var reg_no = sessionStorage.getItem('reg_no');
	$.ajax({
		type : 'GET',
		url : 'http://119.82.227.198/~k9576440/services/get_class_schedule.php?reg_no='+ reg_no,
		async: true,
		crossDomain: true,
		dataType : 'jsonp',
		success : function(data){
				AmbilData = data.items;
				$.each(AmbilData, function(index, loaddata) {
					//$('#schedulelist').append('<li data-role="list-divider" data-theme="a" class="listview-custom">' +
						//'<a onClick="alert(\''+ loaddata.name_eng + '\');" data-ajax="false">['+ loaddata.subject_code +']  '+ loaddata.name_eng + '</a></li>');
					  $('#schedulelist').append('<div data-role="collapsible">' + 
					  					'<h4>[' + loaddata.subject_code +']  '+ loaddata.name_eng + ' / <i>' + loaddata.name_ind + '</i></h4>' +
					  					'<p>Teacher : <b>' + loaddata.name + '</b> Credit : ' + loaddata.credit + '</p>'+
										'<p>' + loaddata.day + ' On ' + loaddata.time + ' At ' + loaddata.room + '</p>'+
										'<hr></div>');
					});
					//$('#schedulelist').listview('refresh');
				}
	});
	
	$.ajax({
		type : 'GET',
		url : 'http://119.82.227.198/~k9576440/services/get_class_schedule2.php',
		async: true,
		crossDomain: true,
		dataType : 'jsonp',
		success : function(data){
					AmbilData = data.items2;
				 	$.each(AmbilData, function(index, loaddata) {
					  	$('#schedule_header').append('Class Schedule for ' + loaddata.semester_desc );
					});
				}
	});
});

	