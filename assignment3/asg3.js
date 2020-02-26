//Function 1: Random Image Application
function randImage() {
    var images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"];
    var random_index = Math.floor(Math.random() * Math.floor(images.length));
    document.querySelector('#image').src = "./images/" + images[random_index];
}

//function 2: Slide Show Application is located in script in html file

//function 3: Simple Crap Game. Note that the array is zero based and so is the dice, but we add one to compensate.
function rollDice() {
    var dice = ["dice1.jpg", "dice2.jpg", "dice3.jpg", "dice4.jpg", "dice5.jpg", "dice6.jpg"];
    var dice1 = Math.floor(Math.random() * Math.floor(dice.length));
    var dice2 = Math.floor(Math.random() * Math.floor(dice.length));

    //reset the result field
    document.querySelector('#bet_output').innerHTML = "";

    //Add two to compensate for zero based index. 
    var result = dice1+dice2+2;
    if (result == 7 || result == 11) {
        document.querySelector('#bet_output').innerHTML = "You Won!";
    } else if (result == 2 || result == 3 || result == 12) {
        var bet_amount = document.querySelector('#bet_input').value;
        document.querySelector('#bet_output').innerHTML = "You Lost " + bet_amount;
    } else {
        //Nothing happens here.
        document.querySelector('#bet_output').innerHTML = "Nothing happens.";
    }

    //Display the correct dice images 
    var dices = document.getElementsByClassName('dice_img');
    dices[0].src = "./images/" + dice[dice1];
    dices[1].src = "./images/" + dice[dice2];

}


const holidays = {}
holidays[new Date(2019, 09, 2).getTime()] = "labor";
holidays[new Date(2019, 10, 14).getTime()] = "fall";
holidays[new Date(2019, 11, 27).getTime()] = "thanksgiving";
holidays[new Date(2019, 11, 28).getTime()] = "thanksgiving";
holidays[new Date(2019, 11, 29).getTime()] = "thanksgiving";
holidays[new Date(2019, 12, 21).getTime()] = "winter";
holidays[new Date(2019, 12, 22).getTime()] = "winter";
holidays[new Date(2019, 12, 23).getTime()] = "winter";
holidays[new Date(2019, 12, 24).getTime()] = "winter";
holidays[new Date(2019, 12, 25).getTime()] = "winter";
holidays[new Date(2019, 12, 26).getTime()] = "winter";
holidays[new Date(2019, 12, 27).getTime()] = "winter";
holidays[new Date(2019, 12, 28).getTime()] = "winter";
holidays[new Date(2019, 12, 29).getTime()] = "winter";
holidays[new Date(2019, 12, 30).getTime()] = "winter";
holidays[new Date(2019, 12, 31).getTime()] = "winter";
holidays[new Date(2020, 01, 1).getTime()] = "winter";
holidays[new Date(2020, 01, 2).getTime()] = "winter";
holidays[new Date(2020, 01, 3).getTime()] = "winter";
holidays[new Date(2020, 01, 4).getTime()] = "winter";
holidays[new Date(2020, 01, 5).getTime()] = "winter";
holidays[new Date(2020, 02, 17).getTime()] = "president";
holidays[new Date(2020, 03, 16).getTime()] = "spring";
holidays[new Date(2020, 03, 17).getTime()] = "spring";
holidays[new Date(2020, 03, 18).getTime()] = "spring";
holidays[new Date(2020, 03, 19).getTime()] = "spring";
holidays[new Date(2020, 03, 20).getTime()] = "spring";
holidays[new Date(2020, 03, 21).getTime()] = "spring";
holidays[new Date(2020, 03, 22).getTime()] = "spring";
holidays[new Date(2020, 05, 25).getTime()] = "memorial";
holidays[new Date(2020, 07, 3).getTime()] = "independence";
holidays[new Date(2020, 07, 4).getTime()] = "independence";

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//function 4: NYU Holiday date 
function check_holiday() {
    var date_input = document.querySelector('#date_input').value.split("-");
    var date = new Date(date_input[0], date_input[1], date_input[2]);
    var month = months[date.getMonth()];
    if (date.getTime() in holidays) {
        var image = document.createElement("img");
        var image_src = holidays[date.getTime()] + ".jpg"
        image.setAttribute("src", "./images/" + image_src);
        image.setAttribute("class", "img_container");
        var title = null;
        var credits_begin = null;
        var credits_link = null;
        var credits_title = null;

        switch (holidays[date.getTime()]) {
            case "labor":
                title = month + " " + date.getDate() + ", " + date.getFullYear() + " is Labor day. This is an NYU Holiday."
                credits_begin = "[Photo obtained from Frank Leslie's Weekly Illustrated Newspaper via ";
                credits_link = "https://commons.wikimedia.org/wiki/File:First_United_States_Labor_Day_Parade,_September_5,_1882_in_New_York_City.jpg";
                credits_title = "Wikimedia Commons";
                break;
            case "fall":
                title = month + " " + date.getDate() + ", " + date.getFullYear() + " is Fall Recess. This is an NYU Holiday."
                credits_begin = "[Photo obtained from NYU Events Page via ";
                credits_link = "https://events.nyu.edu/#!view/event/event_id/173989";
                credits_title = "NYU Events";
                break;
            case "thanksgiving":
                title = month + " " + date.getDate() + ", " + date.getFullYear() + " is Thanksgiving day. This is an NYU Holiday."
                credits_begin = "[Photo obtained from Wikimedia Commons via ";
                credits_link = "https://en.wikipedia.org/wiki/Thanksgiving#/media/File:Our_(Almost_Traditional)_Thanksgiving_Dinner.jpg";
                credits_title = "Wikimedia Commons";
                break;
            case "winter":
                title = month + " " + date.getDate() + ", " + date.getFullYear() + " is Winter Recess. This is an NYU Holiday."
                credits_begin = "[Photo obtained from Elmroad Schools via ";
                credits_link = "https://elmroad.phmschools.org/sites/elmroad.phmschools.org/files/styles/large/public/Winter%20Break1.jpg?itok=y4rdeQbA";
                credits_title = "PHM Schools";
                break;
            case "president":
                title = month + " " + date.getDate() + ", " + date.getFullYear() + " is Presidents' Day. This is an NYU Holiday."
                credits_begin = "[Photo obtained from Gilbert Stuart Williamstown via ";
                credits_link = "https://commons.wikimedia.org/wiki/File:Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg";
                credits_title = "Wikimedia Commons";
                break;
            case "spring":
                title = month + " " + date.getDate() + ", " + date.getFullYear() + " is Spring Recess. This is an NYU Holiday."
                credits_begin = "[Photo obtained from UNIVERSITY OF NEVADA, LAS VEGAS via ";
                credits_link = "https://www.unlv.edu/sites/default/files/styles/850_width/public/event_images/D69655_12.jpg?itok=d3TSCA_w";
                credits_title = "unlv.edu";
                break;
            case "memorial":
                title = month + " " + date.getDate() + ", " + date.getFullYear() + " is Memorial Day. This is an NYU Holiday."
                credits_begin = "[Photo obtained from Graves at Arlington via ";
                credits_link = "https://commons.wikimedia.org/wiki/File:Graves_at_Arlington_on_Memorial_Day.JPG";
                credits_title = "Wikimedia Commons";
                break;
            case "independence":
                title = month + " " + date.getDate() + ", " + date.getFullYear() + " is Independence day. This is an NYU Holiday."
                credits_begin = "[Photo obtained from National Archives and Records Administration via ";
                credits_link = "https://commons.wikimedia.org/wiki/File:Fourth_of_July_fireworks_behind_the_Washington_Monument,_1986.jpg";
                credits_title = "Wikimedia Commons";
                break;
        }

        document.getElementById("output").innerHTML = title;
        var image_container = document.createElement("img_box");
        image_container.appendChild(image)
        document.getElementById("output").appendChild(image_container);

        document.getElementById("output").innerHTML += credits_begin;

        var anchor = document.createElement('a');
        anchor.setAttribute('href', credits_link);
        anchor.innerText = credits_title;
        document.getElementById("output").appendChild(anchor);

        document.getElementById("output").innerHTML += " // Public Domain]";
        
    } else {
        //check if out of range or just not a holiday 
        var min_date = new Date(2019, 09, 1); 
        var max_date = new Date(2020, 08, 31); 
        if (date.getTime() < min_date.getTime() || date.getTime() > max_date.getTime()) {
            var error = month + " " + date.getDate() + ", " + date.getFullYear() + " falls outside the range of dates for which data is available.";
            document.getElementById("output").innerHTML = error;
        } else {
            var no_holiday = month + " " + date.getDate() + ", " + date.getFullYear() + " is not a school holiday at NYU.";
            document.getElementById("output").innerHTML = no_holiday;
        }
    }
}