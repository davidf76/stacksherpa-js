Keystone = function(url) {
	this.url = url
}
Keystone.prototype.login = function(auth, success) {
	
	$.ajax({
		type : "GET",
		url : "data/keystone/unscoped.json",
		dataType: "json",
		success : success
	})

}

Keystone.prototype.exchangeToken = function(success) {
	$.ajax({
		type : "GET",
		url : "data/keystone/scoped.json",
		dataType: "json",
		success : success
	})
}

Keystone.prototype.listTenants = function(success) {
	$.ajax({
		type : "GET",
		url : "data/keystone/tenants.json",
		dataType: "json",
		success : success
	})
}

Keystone.prototype.listUsers = function(success) {
	$.ajax({
		type : "GET",
		url : "data/keystone/users.json",
		dataType: "json",
		success : success
	})
}

Keystone.prototype.listRoles = function(success) {
	$.ajax({
		type : "GET",
		url : "data/keystone/roles.json",
		dataType: "json",
		success : success
	})
}

Keystone.prototype.listServices = function(success) {
	$.ajax({
		type : "GET",
		url : "data/keystone/services.json",
		dataType: "json",
		success : success
	})
}

Keystone.prototype.listEndpoints = function(success) {
	$.ajax({
		type : "GET",
		url : "data/keystone/endpoints.json",
		dataType: "json",
		success : success
	})
}

var keystone = new Keystone("http://192.168.1.40:5000/v2.0");