String.prototype.tagify = function(tag, tags = null){
	var tag_string = "";
	if(tags){
		tag_string += " "
		for(key of Object.keys(tags)){
			tag_string += key + "=" + tags[key] + " "
		}
	}
	return "<" + tag + tag_string.slice(0, -1) + ">" + this + "</" + tag + ">"
}

var showText = function (target, message, index) {
  if (index < message.length) {
    $(target).append(message[index++]);
	var interval = Math.ceil(Math.random()*80) + 20
    setTimeout(function () { showText(target, message, index); }, interval);
  }
}


function starWars(text){
	var sw = {class: '"star-wars"'};
	var crawl = {class: '"crawl"'};
	var title = {class: '"title"'};
	var swHTML = "Episode LX".tagify("p")

	swHTML += "It's All Downhill From Here".tagify("h1")
	swHTML = swHTML.tagify("div", title)
	swHTML = swHTML.tagify("div", crawl)
	swHTML = swHTML.tagify("section", sw)

	d3.select("#intro")
		.append("div")
		.attr("class", "fade")

	$("#intro").append(swHTML)
	d3.select(".crawl")
		.selectAll(".text")
		.data(text, function(d, i){return d;})
		.enter()
		.append("p")
		.attr("class", "text")
		.text(function(d){return d;})
		sw_audio.play()
		setTimeout(function(){
			sw_audio.pause()
		},  10000)
}

function addTasks(){
	d3.selectAll("div").remove()
	var task_div = d3.select("body")
	.append("div")
	.attr("id","tasks_div")



}


// $.getJSON('//freegeoip.net/json/?callback=?', function(data) {
//   console.log(JSON.stringify(data, null, 2));
// });
