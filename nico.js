function update(){
	var user_discount=document.getElementById("rank_selected").value;
	document.getElementById("user_discount").innerHTML=user_discount;
	var ticket_selected=parseInt(document.getElementById("ticket_selected").value);
	var cacha_pt_selected=parseInt(document.getElementById("cacha_pt_selected").value);
	var list=[]
	for(i=1;i<21;i++){
		// console.log(i);
		var point_inputted=i*ticket_selected;
		var point_consumed = Math.floor(point_inputted/(100-100*parseFloat(user_discount)))*100;
		var point_waste = Math.floor(point_inputted-(point_consumed-point_consumed*parseFloat(user_discount)));
		var cacha_waste = point_consumed%cacha_pt_selected;
		list[i]=[i,point_inputted,point_consumed,point_waste,cacha_waste];
	}

	list.sort(function (element_a, element_b) {
    return element_a[3] - element_b[3];
	});
	list.sort(function (element_a, element_b) {
    return element_a[4] - element_b[4];
	});
	
	document.getElementById("ad_list").innerHTML="";
	var ad_list=document.getElementById("ad_list");
	list.forEach( function show(value){
		console.log(value);
		var row = ad_list.insertRow(-1);
		var cell0 = row.insertCell(0);
  		var cell1 = row.insertCell(1);
		var cell2 = row.insertCell(2);
  		var cell3 = row.insertCell(3);
		var cell4 = row.insertCell(4);
		cell0.innerHTML=value[0];
		cell1.innerHTML=value[1];
  		cell2.innerHTML=value[2];
		cell3.innerHTML=value[3];
		cell4.innerHTML=value[4];
	});
	document.getElementById("ad_list").rows[0].style="background-color: yellow;";
	document.getElementById("ad_list").rows[1].style="background-color: yellow;";
	document.getElementById("ad_list").rows[2].style="background-color: yellow;";
}
update();