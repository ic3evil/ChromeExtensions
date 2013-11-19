var URL = '';
function md5cr4ck(){
	URL = "http://md5.darkbyte.ru/api.php?q=" + document.getElementById('x').value;
	//document.write(URL);
	var xhr = new XMLHttpRequest();
	xhr.open("GET",URL,true);
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4) {
			document.getElementById("y").value = xhr.responseText;
		}
	}
	xhr.send();
}	

document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('exec_btn').addEventListener('click', md5cr4ck);
}); 
