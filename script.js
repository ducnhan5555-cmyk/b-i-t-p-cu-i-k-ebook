/* ==========================================================================
   CHỨC NĂNG CHUYỂN ĐỔI GIAO DIỆN SÁNG/TỐI (DARK MODE) TRÊN WEBSITE
   ========================================================================== */

// 1. Lấy phần tử nút bấm và thẻ html chính từ DOM
const themeToggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// 2. Kiểm tra xem người dùng trước đó đã từng chọn chế độ nào chưa
if (currentTheme) {
    // Nếu có, áp dụng chế độ đó cho toàn bộ trang web
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Cập nhật lại biểu tượng và chữ trên nút bấm cho phù hợp
    if (currentTheme === 'dark') {
        themeToggleBtn.innerHTML = '☀️ Chế độ sáng';
    } else {
        themeToggleBtn.innerHTML = '🌙 Chế độ tối';
    }
}

// 3. Lắng nghe sự kiện click chuột vào nút chuyển đổi
themeToggleBtn.addEventListener('click', function() {
    // Lấy trạng thái giao diện hiện tại
    let theme = document.documentElement.getAttribute('data-theme');
    
    // Logic chuyển đổi qua lại
    if (theme === 'dark') {
        // Nếu đang tối -> chuyển thành sáng
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggleBtn.innerHTML = '🌙 Chế độ tối';
        localStorage.setItem('theme', 'light'); // Lưu lại vào bộ nhớ trình duyệt
    } else {
        // Nếu đang sáng (hoặc chưa có thuộc tính) -> chuyển thành tối
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggleBtn.innerHTML = '☀️ Chế độ sáng';
        localStorage.setItem('theme', 'dark'); // Lưu lại vào bộ nhớ trình duyệt
    }
});
