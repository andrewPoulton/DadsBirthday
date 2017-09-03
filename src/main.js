var intro_switch = Math.random()
var empty_tasks = d3.range(27)
                    .map(function(x){
                        return {chosen_by: "empty",
                                task: "Choose a task for John to do. Be as creative as possible!",
                                done: "no"}
                    })
var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ante enim, viverra at placerat eu, molestie nec magna. Mauris in tristique est, mattis venenatis leo. Duis imperdiet, nulla vitae lacinia facilisis, neque tellus tempor tortor, ut pellentesque massa ex lacinia nunc. Nam dapibus pellentesque leo, vel venenatis odio. Vestibulum ut suscipit nibh. Maecenas tristique dictum rhoncus. Mauris dignissim scelerisque lorem, id bibendum neque finibus in. Mauris tristique nunc non feugiat tristique. Nam mattis felis a est dignissim, eu lacinia ligula hendrerit.\nCurabitur euismod, nisi vel mollis gravida, velit libero rhoncus purus, vel iaculis libero velit et massa. Nulla facilisi. Morbi eros quam, cursus vel dolor sed, laoreet porttitor nulla. Ut at dolor hendrerit, maximus metus eu, auctor tortor. Duis porttitor sit amet libero vitae consequat. Mauris id lacus vel magna ultrices dictum. Mauris tristique aliquet ipsum, id dapibus quam posuere sed. Praesent et sem turpis."

text = text.replace(/\n/g, '\n\n')
const text_split = text.split("")
// var sp_text = text_split.map(function(x, index){return x.tagify({id:"spanned"+index})}).join("")
// d3.select("#maintext").html(text)
const user = $.getJSON('https://ipapi.co/json/', function(data) {
  console.log(JSON.stringify(data, null, 2));
});

var introText = "In the year of our lord 1957, on the ninth day of the ninth month, "

var lla = "A long time ago"
var lla2 = "(like, literally aaaages ago)"
var lla3 = ",\nnot particulary far away..."

var swText = "It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.\nDuring the battle, Rebel spies managed to steal secret plans to the Empire’s ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet.\nPursued by the Empire’s sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy…"

$(function() {
    if(intro_switch < 0.5){
        // document.getElementsByTagName("body")[0].style = "black";
        starWars(swText.split(/\n/))
    }else{
        d3.select("#intro").remove()
        var twHTML = "".tagify("p",{id:'"maintext"'})

        twHTML = twHTML.tagify("div", {id:'"intro2"'})
        twHTML += "".tagify("div", {id:'"tasks"'})
        $("body").append(twHTML)
        showText("#maintext", text, 0 , 10);
    }
});


// d3.js drop shadow example
// put together by http://charlbotha.com/

var items = [
    {x : 50, y : 10},
    {x : 100, y: 170},
    {x : 320, y: 70}
];

// we can increase this, everything will scale up with us
var w=960,h=500,
    svg=d3.select("#chart")
        .append("svg")
        .attr("width",w)
        .attr("height",h);

// filter chain comes from:
// https://github.com/wbzyl/d3-notes/blob/master/hello-drop-shadow.html
// cpbotha added explanatory comments
// read more about SVG filter effects here: http://www.w3.org/TR/SVG/filters.html

// filters go in defs element
var defs = svg.append("defs");

// create filter with id #drop-shadow
// height=130% so that the shadow is not clipped
var filter = defs.append("filter")
    .attr("id", "drop-shadow")
    .attr("height", "130%");

// SourceAlpha refers to opacity of graphic that this filter will be applied to
// convolve that with a Gaussian with standard deviation 3 and store result
// in blur
filter.append("feGaussianBlur")
    .attr("in", "SourceAlpha")
    .attr("stdDeviation", 5)
    .attr("result", "blur");

// translate output of Gaussian blur to the right and downwards with 2px
// store result in offsetBlur
filter.append("feOffset")
    .attr("in", "blur")
    .attr("dx", 5)
    .attr("dy", 5)
    .attr("result", "offsetBlur");

// overlay original SourceGraphic over translated blurred opacity by using
// feMerge filter. Order of specifying inputs is important!
var feMerge = filter.append("feMerge");

feMerge.append("feMergeNode")
    .attr("in", "offsetBlur")
feMerge.append("feMergeNode")
    .attr("in", "SourceGraphic");

// for each rendered node, apply #drop-shadow filter
// var item = svg.selectAll("rect")
//     .data(items)
//   .enter().append("rect")
//     .attr("width", 170)
//     .attr("height", 100)
//     .attr("fill", "steelblue")
//     .attr("stroke-width", 2)
//     .style("filter", "url(#drop-shadow)")
//     .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
