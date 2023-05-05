// BÀI TẬP 1 TÍNH LƯƠNG NHÂN VIÊN
var btnTinhLuong = document.getElementById('tinhLuong').onclick = function() {
    console.log('first')
    //input: number (nhập vào số ngày làm để quy đổi ra thành tiền lương), lương 1 ngày = 100.000
    //output: number (kết quả hiển thị ra là tiền lương dựa vào số ngày làm nhân cho lương 1 ngày)
    // các bước xử lý
    var nhapSoNgayLam = document.getElementById('nhapSoNgay').value * 1;
    var luong1Ngay = 100.000
    var tienLuong = nhapSoNgayLam * luong1Ngay;
    document.getElementById('hienThiLuong').innerHTML = tienLuong;
}



// BÀI TẬP 2 TÍNH GIÁ TRỊ TRUNG BÌNH CỦA 5 SỐ THỤC
var btnTinhTrungBinh = document.getElementById('tinhSoTrungBinh').onclick = function(){
    console.log('first')
    //input: number ( nhập vào 5 số thực ngẫu nhiên)
    // output: number (tính giá trị trung bình của 5 số đã nhập)
    //các bước xử lý 
    var nhapSoThuc = document.getElementById('nhapSoThuc').value * 1;
    var trungBinh5So = (nhapSoThuc + nhapSoThuc + nhapSoThuc + nhapSoThuc + nhapSoThuc ) / 5;
    document.getElementById('ketQuaSoTrungBinh').innerHTML = trungBinh5So;
};



// BÀI TẬP 3: QUY ĐỔI TỪ USD SANG VND
//input(number): biết đc 1 đô = 23500 , ng dùng nhập vào số tiền usd muốn đổi
var motUsd = 23500;
document.getElementById('quyDoi').onclick = function() {
    // các bước xử lý: lấy dữ liệu ng dùng nhập vào
    var nhapSoTienUsd = document.getElementById('nhapSoTienUsd').value * 1;
    // số đô ng dùng nhập vào sẽ nhân với 23500 (1 usd ta đổi ra tiền vnd)
    var quyDoiThanhVnd = nhapSoTienUsd * motUsd * 1;

    // output(number): quy đổi ra tiền vnd khi ng dùng nhập vào tiền usd
    document.getElementById('hienThiVnd').innerHTML = quyDoiThanhVnd;
}



// BÀI TẬP 4: TÍNH DIỆN TÍCH HOẶC CHU VI HÌNH CHỮ NHẬT
//input(number): ng dùng nhập vào kích thước của chiều dài và chiều rông
// chu vi = (dài + rộng) * 2
// diện tích = dài  * rộng
// các bước xử lý:
// đặt biến lấy dữ liệu chiều dài chiều rộng ng dùng  nhập vào
// đặt biến tính chu vi và diện tích
document.getElementById('tinhChuVi').onclick = function() {
    var chieuDai = document.getElementById('nhapChieuDai').value * 1;
    var chieuRong = document.getElementById('nhapChieuRong').value * 1;
    var chuVi = ( chieuDai + chieuRong ) * 2 * 1;

// in ra kết quả
//output(number): kết quả diện tích và chu vi đã tính
document.getElementById('hienThiKetQua').innerHTML = chuVi;
}

document.getElementById('tinhDienTich').onclick = function() {
    var chieuDai = document.getElementById('nhapChieuDai').value * 1;
    var chieuRong = document.getElementById('nhapChieuRong').value * 1;
    var dienTich = chieuDai * chieuRong * 1;

// in ra kết quả
//output(number): kết quả diện tích và chu vi đã tính
document.getElementById('hienThiKetQua').innerHTML = dienTich;
}

// BÀI TẬP 5: TÍNH TỔNG 2 KÝ SỐ
//input(number): nhập vào số có 2 chữ số
//Các bước xử lý 
document.getElementById('tinhTong').onclick = function() {
    // lấy dữ liệu ng  dùng nhập vào
    var soNhapVao = document.getElementById('nhapVaoHaiChuSo').value * 1;
    // đặt biến lấy số hàng chục và hàng đơn vị từ số mà ng dùng nhập vào
    var soHangChuc = Math.floor(soNhapVao / 10) * 1;
    var soHangDonVi = soNhapVao % 10 * 1;
    // đặt biết tính tổng 2 ký số 
    var tinhTongSo = soHangChuc + soHangDonVi;

    //xuất ra kết quả
    //output(number): tổng 2 số thực

    document.getElementById('hienThiSoTong').innerHTML = tinhTongSo;
}