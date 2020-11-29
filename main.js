var canvas = new fabric.Canvas("myCanavs");
var player_x = 10;
var player_y = 10;
var block_image_width = 30;
var block_image_height = 30;
var player_object = "";
var block_object = "";
var key_pressed;

function player_update() {
    fabric.Image.fromURL("player.png", function(img) {
        player_object = img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function block_update(get_Image) {
    fabric.Image.fromURL(get_Image, function(Img) {
        block_object = Img;
        block_object.scaleToWidth(block_image_width);
        block_object.scaleToHeight(block_image_height);
        block_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    key_pressed = e.keyCode;
    console.log(key_pressed);
    
    if(e.shiftKey == true && key_pressed == "80") {
        console.log("shift and p are pressed together");
        block_image_height = block_image_height + 10;
        block_image_width = block_image_width + 10;
        document.getElementById("current-width").innerHTML = block_image_width;
        document.getElementById("current-height").innerHTML = block_image_height;
    }

    if(e.shiftKey == true && key_pressed == "77") {
        console.log("shift and m are pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current-width").innerHTML = block_image_width;
        document.getElementById("current-height").innerHTML = block_image_height;
    }

    if(key_pressed == "37") {
        left();
        console.log("left key is pressed");
    }

    if(key_pressed == "38") {
        up();
        console.log("up key is pressed");
    }

    if(key_pressed == "39") {
        right();
        console.log("right key is pressed");
    }

    if(key_pressed == "40") {
        down();
        console.log("down key is pressed");
    }

    if(key_pressed == "87") {
        block_update("wall.jpg");
        console.log("w key is pressed");
    }

    if(key_pressed == "89") {
        block_update("yellow_wall.png");
        console.log("y key is pressed");
    }

    if(key_pressed == "85") {
        block_update("unique.png");
        console.log("u key is pressed");
    }

    if(key_pressed == "84") {
        block_update("trunk.jpg");
        console.log("t key is pressed");
    }

    if(key_pressed == "82") {
        block_update("roof.jpg");
        console.log("r key is pressed");
    }

    if(key_pressed == "76") {
        block_update("light_green.png");
        console.log("l key is pressed");
    }

    if(key_pressed == "71") {
        block_update("ground.png");
        console.log("g key is pressed");
    }

    if(key_pressed == "68") {
        block_update("dark_green.png");
        console.log("d key is pressed");
    }

    if(key_pressed == "67") {
        block_update("cloud.jpg");
        console.log("c key is pressed");

    }
}
