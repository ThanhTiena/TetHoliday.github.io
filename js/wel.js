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
const story = ["Hé Lu Em Iu", "Nay Ngày Cuối Cùng Của Năm Rồi Á!", "Mới đó mà vèo cái là hết năm", "Nhanh Thiệt Sự", "Mà tụi mình chưa có nhiều thời gian cho nhau", "Đôi lúc anh làm em buồn nữa", "Xin lỗi em nha", "Sang năm với anh sẽ vất vả", "Mà hum sao anh lo được hết", "Em iu dui 1 là anh dui mười", "hết mệt lun kakak", "Anh hông biết nói gì hơn nữa", "Yêu em moaaa!!!", "Chúc em iu năm mới luôn hạnh phúc", "Gặp nhiều điều may mắn na", "Mọi sự đều như ý", "Kiếm được việc khỏe re na kkk", "Moaaa bà xã cái nữa"];
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