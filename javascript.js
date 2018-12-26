function checkforblank(){
			if(document.getElementById('EmriMbiemri').value == ""){
				alert('Ju lutem jepni Emri dhe Mbiemrin tuaj');
				document.getElementById('EmriMbiemri').style.borderColor = "red";
				return false;
			}
			else if(document.getElementById('email').value == ""){
				alert('Ju lutem jepni emailin tuaj');
				document.getElementById('email').style.borderColor = "red";
				return false;
			}
		}