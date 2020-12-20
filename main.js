
function create_GUI(){
	
div = document.getElementById("content_value").getElementsByClassName("vis")[4];
div.insertAdjacentHTML("afterend",   '<div class="farmscript"> <table> <tbody> <tr> <td>Amount of farms=</td> <td><input id="amount_id" value="100"></td> </tr> <tr>auto farmer</tr> <tr> <td>smart farming </td> <td><input id="smart_farming_checkbox_id" type="checkbox" checked="true"></td> </tr> <tr> <td>LA enhancer active</td> <td><input id="LA_enhancer_active_checkbox_id" type="checkbox"></td> </tr> <tr> <td><button id="button_start_farm" onclick="start()">start </button></td> </tr> </tbody> </table></div>');
 
}
create_GUI();
