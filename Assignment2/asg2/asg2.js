//Function 1: Style Application
function change() {
    var elements = [];
    for (var i=0; i<6; i++) {
        var next = ".style"+i;
        elements.push(document.querySelector(next));
    }
    for (var i=0; i<6; i++) {
        var next_i = ((i+1) % 6);
        console.log(next_i);
        elements[i].className = "style"+next_i;
    }
}

//Function 2: Prize Application
function randArray() {
    var prizes = ["iphone", "tv", "ipod", "headphones", "xbox"];
    for (var i=0; i<prizes.length-1; i++) {
        console.log(prizes[i]);
    }
    var random_index = Math.floor(Math.random() * Math.floor(prizes.length));
    document.querySelector('#prize').innerHTML = prizes[random_index];
}

//Function 3: Swap Text Application
function swapT() {
    var p1 = document.querySelector('#p1');
    var p2 = document.querySelector('#p2');
    var temp = p1.innerHTML;
    p1.innerHTML = p2.innerHTML; 
    p2.innerHTML = temp;
}

//Function 4: Swap Image Application
function swapI() {
    var img1 = document.querySelector('#img1');
    var img2 = document.querySelector('#img2');
    var temp = img1.src;
    img1.src = img2.src; 
    img2.src = temp;
}


//Function 5: Generate new document application
function newDoc() {


    document.open();
    document.write('<link rel="stylesheet" type="text/css" href="style.css">')
	document.write("<h1>Title: Cute pets</h1>");
    document.write("<p>Paragraph: This is a cute photo of a cat. </p>");

    var container = document.createElement('div');
    container.class = "horizontal_row";
    container.innerHTML = '<img id="cat_image" src="img2.jpg">'
    document.body.appendChild(container);

    var img = document.getElementById('cat_image');
    var width = img.clientWidth;
    var height = img.clientHeight; 

	document.write("<p>This is the image width: ");
	document.write(width);
    document.write(", and this is the height: ");
    document.write(height);
    document.write("</p>");
    
    var date = new Date();
    var weekday = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    document.write("<p>Today is : ");
    document.write(weekday[date.getDay()]);
    document.write(", ");
    document.write(month[date.getMonth()]);
    document.write(" ");
    document.write(date.getDate());
    document.write(", ");
    document.write(date.getFullYear());
    document.write("</p>");
}


//Function 6: Simple converter application
function convertTemp() {
    var f_value = document.querySelector('#f_input').value;
    var c_value = (f_value - 32) * (5/9);
    document.querySelector('#celsius').value = c_value;
}