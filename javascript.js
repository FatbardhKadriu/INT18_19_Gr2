function checkforblank(){
			if(document.getElementById('EmriMbiemri').value == ""){
				alert('Ju lutem jepni Emri dhe Mbiemrin tuaj');
				document.getElementById('EmriMbiemri').style.borderColor = "red";
				document.getElementById('EmriMbiemri').style.color = "white";
				document.getElementById('EmriMbiemri').style.background = "red";
				
				return false;
			}
			else if(document.getElementById('email').value == ""){
				alert('Ju lutem jepni emailin tuaj');
				document.getElementById('email').style.borderColor = "red";
				document.getElementById('email').style.color = "white";
				document.getElementById('email').style.background = "red";
				return false;
			}
		}