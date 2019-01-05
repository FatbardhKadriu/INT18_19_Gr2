	$(document).ready(function(){
  $("input").focus(function(){
    $(this).css("background-color","#660033");
  });
  $("input").focus(function(){
    $(this).css("color","white");
  });
  $("input").blur(function()
  {
    $(this).css("background-color","#ededed");
  });
  $("textarea").focus(function(){
    $(this).css("background-color","black")
  });
  $("textarea").focus(function(){
    $(this).css("color","white")
  });
  $("textarea").blur(function(){
    $(this).css("background-color","#660033")
  });
  $("textarea").blur(function(){
    $(this).css("color","white")
  });
});
 
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

function openKyqu(){
			window.open("Menu-1/kyqu.html","_blank","top=40,bottom=400,left=600,height=450,width=600");
		}
		function openRegjistrohu(){
			window.open("Menu-1/signup.html","_blank","top=0,left=200,height=700,width=1000");
		}
	