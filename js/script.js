$(function(){

	Built.initialize('blt33aa68eb3c03cee8','dummy-app');

	function sign_up(uname,fname,lname,pwd,cpwd,email){
		return {
			username : uname,
			first_name : fname,
			last_name : lname,
			password : pwd,
			password_confirmation : cpwd,
			email : email
		}
	}

	var fname,lname,pwd,cpwd,email;

	$('#submit-form').submit(function(event){
		event.preventDefault();
			uname = $(this).find().val();
			fname = $(this).find('#first_name').val();
			lname = $(this).find('#last_name').val();
			pwd = $(this).find('#password').val();
			cpwd = $(this).find('#confirm_password').val();
			email = $(this).find('#email').val();		

		var lsign_up = new sign_up(uname,fname,lname,pwd,cpwd,email);

		Built.User.register(lsign_up,{
			onSuccess: function(data,res){
				console.log(data);
			},
			onError: function(err){
				console.log(err);
			}
		});

	});
	
});