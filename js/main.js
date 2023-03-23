



/* tạo kí 3 chấm cho tiêu đề khi quá dài */
// Sau khi đã tạo hàm thì phải gọi hàm
// bởi vì đang chỉnh sửa code bên trong của 1 thư viện, nên phải cho thư viện khởi động trước thì mới load file này
// truncateCardTitle(); // Khởi động ngay từ đầu, sự kiện ready
window.addEventListener("load",function(){
    truncateCardTitle();
});

// khai báo hàm là function, đặt tên hàm dùng động từ miêu tả
// khai báo Biến là var
function truncateCardTitle(){
    // tạo mảng, tạo một cái danh sách những chỗ cần xử lý
    var cardlist = document.getElementsByClassName("card-title"); // đặt tên biến là cardlist, lấy tất cả các class nào tên là card-title

    // sau khi tạo mảng thì sử dụng vòng lặp forr để quét mảng, mục đích để lấy từng thành phần trong mảng
    // cardlist.length là chiều dài của cardlist
    for (var i=0; i < cardlist.length; i++){
        // lấy nội dung cần lấy ra để xử lý
        var text = cardlist[i].innerHTML;  // cardlist[i] là thẻ thứ i, innerHTML là lấy nội dung của thẻ HTML, phải khai báo thêm biến text để chứa nội dung được lấy ra đó

        // Sau khi tạo hàm xử lý chuỗi bên dưới thì sẽ gọi ra 
        var newtext = truncateString(text,30);  // 30 kí tự này bao gồm khoảng trắng, bởi vì có giá trị trả về mới nên phải khai báo thêm biến newtext để hứng giá trị mới

        // gắn nội dung mới xử lý lại vị trí ban đầu khi chưa xử lý của nó 
        cardlist[i].innerHTML = newtext;
    }
}

// bên trên là đã lấy nội dung cần xử lý, sau khi lấy xong thì phải có hàm xử lý các chuỗi
function truncateString(str,num) {// truyền 2 tham số, tham số str là chuỗi muốn đem đi xử lý, num là kí tự cho phép nó hiện 

    if ( str.length > num ){
        return str.slice(0,num) + "..."; // slice dùng để cắt, có tham số 1 là vị trí bắt đầu, tham số 2 là vị tría kết thúc, nghĩa là chỉ hiển thị từ 0 đến num kí tự, còn cụm kí tự còn lại đằng sau sẽ bị xóa đi, thế nên sẽ nối chuỗi với "..."
    }  // độ dài của chuỗi phải lớn hơn num mới thực hiện sử lý

    else{
        return str;
    }  // nếu không thì quay lại chuỗi ban đầu
}



/* Tạo sidebar */
var sidebarBtn = document.querySelector('#sidebarCollapse');
var sidebar = document.querySelector('#sidebar');
var overlay = document.querySelector('.overlay-sidebar');

// click btn mở sidebar
sidebarBtn.addEventListener('click',function(){
    overlay.classList.toggle('active');
    sidebar.classList.toggle('active');
});


// click vào overlay thì thoát sidebar
overlay.addEventListener('click',function(){
    overlay.classList.remove('active');
    sidebar.classList.remove('active');
});




/* Tạo sidebar darkmode */

// Đầu tiên cần tìm tới button để gắn sự kiện click, khi tìm tới thì gắn nó vô 1 biến mới để chứa nó
var toggleBtn = document.querySelector('.sidebarmini__button');
// Lấy thẻ sidebar để hiện ra
var sidebarMini = document.querySelector('.sidebarmini');


// Thêm sự kiện click
toggleBtn.addEventListener('click',function(){
    // xử lý add và remove class active 
    // add class thì dùng classlist, nó sẽ không dè class có sẵn mà chỉ thêm vô
    // toggle là khi class này đã có sẵn class active thì sẽ remove đi, còn chưa có thì nó sẽ thêm vô
    sidebarMini.classList.toggle('active');
});




/* Dark theme */
var switchBtn = document.querySelector('#checkbox');

switchBtn.addEventListener('click',function(){
    document.querySelector('body').classList.toggle('darkmode');
});