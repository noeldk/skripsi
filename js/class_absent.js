
$('#classabsentpage').live('pageshow', function(event){ 
	var AmbilData1;
	var AmbilData2;
	var reg_no = sessionStorage.getItem('reg_no');
	$.ajax({
		type : 'GET',
		url : 'http://119.82.227.198/~k9576440/services/get_class_absent.php?reg_no='+ reg_no,
		async: true,
		crossDomain: true,
		dataType : 'jsonp',
		success : function(data){
				AmbilData1 = data.items;
				$('#classabsentlist').empty();
				$.each(AmbilData1, function(index, loaddata) {
					
					if(loaddata.absent_type == 'absent'){
					$('#classabsentlist').append('<li ><b>[' + loaddata.subject_code +']  '+ loaddata.name_eng + '</b> /<i>' + loaddata.name_ind + '</i><br /><br />' +					
					'Absent Date : <b <b style="color:red">' + loaddata.absent_date + '</b>, Absent Type : <b style="color:red">' + loaddata.absent_type + '</b>' +
					'</li>');
					}
					else
					{
						$('#classabsentlist').append('<li ><b>[' + loaddata.subject_code +']  '+ loaddata.name_eng + '</b> /<i>' + loaddata.name_ind + '</i><br /><br />' +					
					'Absent Date : <b style="color:#f7941d">' + loaddata.absent_date + '</b>, Absent Type : <b style="color:#f7941d">' + loaddata.absent_type + '</b>' +
					'</li>');
					}
					});
					$('#classabsentlist').listview('refresh');
				}
	});
});



	