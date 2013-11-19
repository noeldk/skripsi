
$('#semesterpage').live('pageshow', function(event){ 
	var AmbilData1;
	var AmbilData2;
	var reg_no = sessionStorage.getItem('reg_no');
	$.ajax({
		type : 'GET',
		url : 'http://119.82.227.198/~k9576440/services/get_semester_list.php?reg_no='+ reg_no,
		async: true,
		crossDomain: true,
		dataType : 'jsonp',
		success : function(data){
				AmbilData1 = data.items;
				$('#semesterlist').empty();
				$.each(AmbilData1, function(index, loaddata) {
					
					$('#semesterlist').append('<li ><a href="grade_details.html?id=' + loaddata.id + '">' + loaddata.semester_desc + ' ( GPA : ' + loaddata.total_semester_gpa +  ', Major : ' + loaddata.major_semester_gpa+' )</a>' +
					'</li>');
					  
					});
					$('#semesterlist').listview('refresh');
				}
	});
	$.ajax({
		type : 'GET',
		url : 'http://119.82.227.198/~k9576440/services/get_gpa.php?reg_no='+ reg_no,
		async: true,
		crossDomain: true,
		dataType : 'jsonp',
		success : function(data){
				AmbilData2 = data.items;
				$.each(AmbilData2, function(index, loaddata) {
					
					$('#gpalist').html('<hr><h3>GPA Details</h3>' +
					'<hr><p> Accumulated GPA : <b>' + loaddata.total_gpa + '</b></p>' +
					'<p> Credit Total    : <b>' + loaddata.total_credit + '</b></p>' +
					'<p> Major GPA	     : <b>' + loaddata.major_gpa + '</b></p>' +
					'<p> Credit Major    : <b>' + loaddata.major_credit + '</b></p>' +
					'<p> Minor GPA	     : <b>' + loaddata.minor_gpa + '</b></p>');
					  
					});
				}
	});
	
	
});

$('#gradepage').live('pageshow', function(event){ 
	var id = getUrlVars()["id"];
	var reg_no = sessionStorage.getItem('reg_no');
	var AmbilData;
	$.ajax({
		type : 'GET',
		url : 'http://119.82.227.198/~k9576440/services/get_student_grade.php?id='+ id +'&reg_no=' + reg_no,
		async: true,
		crossDomain: true,
		dataType : 'jsonp',
		success : function(data){
				AmbilData = data.items;
				$('#gradelist').empty();
				$.each(AmbilData, function(index, loaddata) {
					$('#gradelist').append('<li><b>[' + loaddata.code +']  '+ loaddata.name_eng + ' / <i>' + loaddata.name_ind + '</i>'+
					'</b><br /><br />' +
					'Grade : ' + loaddata.grade + ' ( ' + loaddata.percentage + ' )' +
					'</li>');
					  
					});
					$('#gradelist').listview('refresh');
				}
	});
	$.ajax({
		type : 'GET',
		url : 'http://119.82.227.198/~k9576440/services/get_student_grade_header.php?id='+ id +'&reg_no=' + reg_no,
		async: true,
		crossDomain: true,
		dataType : 'jsonp',
		success : function(data){
				AmbilData = data.items;
				$.each(AmbilData, function(index, loaddata) {
					$('#gradepageheader').append('Grade Details for ' + loaddata.semester_desc);
					  
					});
				}
	});
	
});

function getUrlVars() {
		var vars = [], hash;
		var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
		for(var i = 0; i < hashes.length; i++)
		{
			hash = hashes[i].split('=');
			vars.push(hash[0]);
			vars[hash[0]] = hash[1];
		}
		return vars;
}

	