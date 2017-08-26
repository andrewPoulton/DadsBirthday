String.prototype.spanify = function(tags){
	var tag_string = "";
	for(key of Object.keys(tags)){
		tag_string += key + "=" + tags[key] + " " 
	}
	return "<span " + tag_string.slice(0, -1) + ">" + this + "</span>"
}