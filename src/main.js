var intro_switch = Math.random()

var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ante enim, viverra at placerat eu, molestie nec magna. Mauris in tristique est, mattis venenatis leo. Duis imperdiet, nulla vitae lacinia facilisis, neque tellus tempor tortor, ut pellentesque massa ex lacinia nunc. Nam dapibus pellentesque leo, vel venenatis odio. Vestibulum ut suscipit nibh. Maecenas tristique dictum rhoncus. Mauris dignissim scelerisque lorem, id bibendum neque finibus in. Mauris tristique nunc non feugiat tristique. Nam mattis felis a est dignissim, eu lacinia ligula hendrerit.\nCurabitur euismod, nisi vel mollis gravida, velit libero rhoncus purus, vel iaculis libero velit et massa. Nulla facilisi. Morbi eros quam, cursus vel dolor sed, laoreet porttitor nulla. Ut at dolor hendrerit, maximus metus eu, auctor tortor. Duis porttitor sit amet libero vitae consequat. Mauris id lacus vel magna ultrices dictum. Mauris tristique aliquet ipsum, id dapibus quam posuere sed. Praesent et sem turpis."
text += " Pellentesque ut orci eu elit imperdiet scelerisque. In sagittis tortor et maximus malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam tempus dapibus neque, non pellentesque magna tempor vel. Aliquam vitae neque odio.\nDuis dolor neque, posuere id accumsan ut, auctor efficitur ex. Curabitur nibh lorem, eleifend eget eleifend quis, tempus id erat. Sed efficitur nisl ut felis tincidunt, quis varius lorem viverra. Pellentesque ipsum est, faucibus et consequat ut, gravida hendrerit arcu. Sed bibendum suscipit metus a tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed pretium sollicitudin erat vitae malesuada. Mauris vel quam eu turpis iaculis imperdiet."
text = text.replace(/\n/g, '\n\n')
const text_split = text.split("")
// var sp_text = text_split.map(function(x, index){return x.tagify({id:"spanned"+index})}).join("")
// d3.select("#maintext").html(text)

var introText = "In the year of our lord 1957, on the ninth day of the ninth month, "

var swText = "It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.\nDuring the battle, Rebel spies managed to steal secret plans to the Empire’s ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet.\nPursued by the Empire’s sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy…"

$(function() {
    if(intro_switch < 0.5){
        starWars(swText.split(/\n/))
    }else{
        var twHTML = "".tagify("p",{id:'"maintext"'})

        twHTML = twHTML.tagify("div", {id:'"intro"'})
        twHTML += "".tagify("div", {id:'"tasks"'})
        $("body").append(twHTML)
        showText("#maintext", text, 0 , 10);
    }
});
