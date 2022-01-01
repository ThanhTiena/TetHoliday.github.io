const heartNum = 47;

// head
for (var i = 0; i < heartNum; i++) {
    var node = document.createElement("span");
    node.classList.add("heart");
    document.getElementById("head-border").append(node);
}
// foot
for (var i = 0; i < heartNum; i++) {
    var node = document.createElement("span");
    node.classList.add("heart");
    document.getElementById("foot-border").append(node);
}

// main
var index = 0;
const story = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // content show
const myInterval = setInterval(readStory, 3000);


function readStory() {
    var string = `<span><lord-icon src="https://cdn.lordicon.com/rjzlnunf.json" trigger="loop" colors="primary:#e8308c,secondary:#c71f16" stroke="100" style="width:50px;height:50px">
    </lord-icon> ${story[index]} <lord-icon src="https://cdn.lordicon.com/rjzlnunf.json" trigger="loop" colors="primary:#e8308c,secondary:#c71f16" stroke="100" style="width:50px;height:50px">
    </lord-icon></span>`;

    $('#list-content').html('');
    $('#list-content').append(string);

    if (++index > story.length) {
        $('#list-content').html('');
        $('#list-content').append(`<a href="###"><button class="bn632-hover bn21" onclick="fireDisplay()" id = "button">Nhấn nhẹ nhẹ</button></a>`);
        clearInterval(myInterval);
    }
}