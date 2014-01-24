var users_joined = [];
var chatrooms = {'west_side':{}, 'east_side':{}};
var west = true;

window.new_user_joined = function(name) {
	users_joined.push(name);
}

//this function is only called once by the server every five seconds
window.assign_to_chatroom = function() {
	//add this element for every user assigned to a chatroom: <p><button type="button" class="btn btn-warning btn-xs">[[name]]</button></p>
    if (west) {
    	var name = users_joined.pop();
    	$('#west').append("<p><button type='button' class='btn btn-warning btn-xs'>" + name + "</button></p>");
    	west=false;
    } else {
    	var name = users_joined.pop();
    	$('#east').append("<p><button type='button' class='btn btn-warning btn-xs'>" + name + "</button></p>");
    	west=true;
    }
    console.log("assigning users to room");
 }