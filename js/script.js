var l = new Date();
document.getElementById("time").innerHTML=l.toLocaleString();

function aFunc() {
var n = document.getElementById('aText').value;
n = n.toString();
n = n.split("").reverse().join("");
document.getElementById('aText').value = n;
}

but.onclick = function () {
var x = input.value;
function Factorial (x) {
if (x <= 1) {
return 1
}
var result = x * Factorial(x - 1);
return result;
}
var a = Factorial(x);
output.value = a;
}
function largerint()
	{
		var val1 = (document.getElementById("value1").value);
		var val2 = (document.getElementById("value2").value);
		if (val1>val2){
      ansD=val1;
    answer.value=val1;
    }
    else{
      ansD=val2;
  answer.value=val2;
    }
	}

	var arr = new Array("Red", "Green", "White", "Black");

	         var str = arr.join();
	         document.getElementById("colors").value=(str );

	         var str = arr.join(",");
	         document.getElementById("colors").value=(str );

	         var str = arr.join(" + ");
	        document.getElementById("colors").value=(str );
					var str = arr.join(" + ");
				 document.getElementById("colors").value=(str );

	var month_name = function(dt){
	 mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
		return mlist[dt.getMonth()];
	};
				 document.getElementById("month1").value=(month_name(new Date("10/01/2009")));
				 	 document.getElementById("month2").value=(month_name(new Date("11/13/2014")));


function upper(){
		var paragraph = document.getElementById("upperC");
	 if (paragraph.innerHTML.search(/^[A-Z]/) !== -1) {
	 document.getElementById("upperANS").value=("Correct");
	 } else {
	 document.getElementById("upperANS").value=("Not correct");
	 }
}

var canvas = document.getElementById("myDrawing");

drawHappyFace(canvas, {
    fill: '#00FF00',
    lineColor: '#6F0047'
}, true);

drawHappyFace(canvas, {
    fill: '#FFFF00',
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius : 178
});

// =========================================================
// Functons
// =========================================================
function drawFace(canvas, opts) {
    var ctx = canvas.getContext("2d");
    ctx.save();
    ctx.lineWidth = opts.radius * 0.075;
    ctx.strokeStyle = opts.lineColor;
    ctx.beginPath();
    ctx.arc(opts.x, opts.y, opts.radius, opts.startAngle, opts.endAngle);
    ctx.stroke();
    ctx.fillStyle = opts.fill;
    ctx.fill();
    ctx.restore();
}

function drawSmile(canvas, opts, flipSmile) {
    var ctx = canvas.getContext("2d");
    var radius = 40 * opts.radius * 0.0125;
    var x = opts.x;
    var y, startAngle, endAngle;

    if (flipSmile) {
        y = opts.y + opts.radius * 0.7;
        startAngle = -Math.PI * 0.85; //Math.PI * 0.1;
        endAngle = -0.5; //-Math.PI * 1.1;
    } else {
        y = opts.y + opts.radius * 0.1;
        startAngle = Math.PI * 0.1;
        endAngle = -Math.PI * 1.1;
    }

    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle);
    ctx.lineWidth = opts.radius * 0.1;

    ctx.strokeStyle = opts.lineColor;
    ctx.stroke();
    ctx.restore();
}

function drawEyes(canvas, opts) {
    var xOffset = opts.radius * 0.5;
    var radius = opts.radius * 0.15;

    drawEye(canvas, opts, xOffset, 0, radius); // Left
    drawEye(canvas, opts, -xOffset, 0, radius); // Right
}

function drawEye(canvas, opts, centerX, centerY, radius) {
    var ctx = canvas.getContext("2d");

    // Save state
    ctx.save();

    // Translate context so height is 1/3'rd from top of enclosing circle
    ctx.translate(opts.x, opts.y - (opts.radius / 3));

    // Scale context horizontally by 50%
    ctx.scale(0.5, 1);

    // Draw circle which will be stretched into an oval
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

    // Apply styling
    ctx.fillStyle = opts.lineColor;
    ctx.fill();
    ctx.lineWidth = radius * 0.75;
    ctx.strokeStyle = opts.lineColor;
    ctx.stroke();

    // Restore to original state
    ctx.restore();
}

function drawHappyFace(canvas, opts, flipSmile) {
    opts = opts || {};

    var defaultRadius = 48;
    var options = {
        x: opts.x || (defaultRadius / 0.9),
        y: opts.y || (defaultRadius / 0.9),
        radius: opts.radius || defaultRadius,
        startAngle: 0,
        endAngle: 2 * Math.PI,
        fill: opts.fill || 'yellow',
        lineColor: opts.lineColor || 'black'
    };

    drawFace(canvas, options);
    drawEyes(canvas, options);
    drawSmile(canvas, options, flipSmile);
}

var mElmClass = document.getElementsByClassName('element');
for (var i=0; i<3; ++i)
  mElmClass[i].style.color='red';
	for (var i=3; i<6; ++i)
	  mElmClass[i].style.color='green';

let artic = document.getElementsByTagName('article')


for (var ptag of document.getElementsByTagName('p')) {
  var newhr = document.createElement('hr');
  ptag.insertAdjacentElement('afterend', newhr);
}

function task5(){
	document.getElementById('item2').remove();
}
function refresh(){
	var elmnt = document.createElement("div");
	var textnode = document.createTextNode("Canned Fish  x4");
	elmnt.appendChild(textnode);
	var item = document.getElementById("item5");
	item.replaceChild(elmnt, item.childNodes[0]);
	item.getElementById('qty').remove();
}
function myFunction1() {

  const name = prompt("Please enter the name of your record list:");
  const myRecords = document.getElementById("myRecords");

  myRecords.innerHTML += `<li><a>${name || ''}</a></li>`;
}
