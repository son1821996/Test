# Technical-Test

## 2.Kiến thức 

* Kể tên những thư viện CSS và JS bạn đã dùng, kể cả trong project trên, chức năng và ưu điểm của các thư viện đó:
  * Bootstrap: 
    1. Bootstrap giúp các nhà thiết kế website có thể giảm thiểu được time trong việc thiết kế website. Khi bạn sử dụng Bootstrap, các bạn có thể hạn chế được thời giờ bỏ ra để viết code cho giao diện. Vì trong thư viện của nó đã có từ trước, những đoạn mã có thể chèn vào trong website.
    2. Khi bạn sử dụng Bootstrap bạn hoàn toàn có thể tùy biến được giao diện theo ý muốn của cá nhân bạn. Với hệ thống Grid System đã mặc định bao gồm 12 bột cùng với độ rộng 940px được tích hợp sẵn ở Bootstrap.
    3. Ngày nay, khi mà xu hướng phát triển website tương thích được với các  thiết bị thì Bootstrap. Bootstrap nổi lên như một Framework có sẵn reponsive css  phù hợp với mọi thiết bị như SmartPhone, tablets, dextop…vv..
  * ReactJS: 
    1. Reactjs cực kì hiệu quả: Reactjs tạo ra cho chính nó DOM ảo – nơi mà các component thực sự tồn tại trên đó. Điều này sẽ giúp cải thiện hiệu suất rất nhiều. Reactjs cũng tính toán những thay đổi nào cần cập nhật len DOM và chỉ thực hiện chúng. Điều này giúp Reactjs tránh những thao tác cần trên DOM mà nhiều chi phí. Chúng ta có thể viết một ví dụ đơn giản về ReactJS như sau.
    2. Làm việc với vấn đề test giao diện: Nó cực kì dễ để viết các test case giao diện vì virtual DOM được cài đặt hoàn toàn bằng JS.
    3. Hiệu năng cao đối với các ứng dụng có dữ liệu thay đổi liên tục, dễ dàng cho bảo trì và sửa lỗi.
  * VueJS: 
    1. Thích hợp tạo các Single-page Application
    2. Tích hợp sẵn vào laravel
    3. Đơn giản, lõi nhỏ gọn tối đa với với khả năng tương thích cao có thể xây dựng ứng dụng ở mọi quy mô
  * jQuery: 
    1. Truy xuất các phần của trang: không cần một thư viện javascript nào, bạn có thể duyệt cây DOM (Document Object Model) và đến các vị trí đặc biệt  của cấu trúc tài liệu HTML. jQuery cung cấp một cơ chế chọn lựa hoàn hảo để lấy chính xác các thành phần của tài liệu để kiểm tra hoặc xử lý.
    2. Tạo hiệu ứng và thay đổi sự hiển thị của trang: jQuery có thể thay đổi nội dung của tài liệu như văn bản, hình ảnh, danh sách,… đồng thời thêm những hiệu ứng giao diện như làm mờ dần, kéo nhỏ các thành phần,… chỉ với vài dòng lệnh đơn giản.
    3. Lấy thông tin từ server theo cơ chế bất đồng bộ: đây chính là những hỗ trợ của jQuery để giúp các lập trình viên làm việc với Ajax dễ dàng hơn. Với jQuery bạn không còn cần phải quan tâm đến trình duyệt nào sẽ được sử dụng.
    
 * ReactJS, Jquery, Angular khác nhau như thế nào:

    * Angular: Render tại clien và server, Data binding 2 chiều, Hỗ trợ ngôn ngữ: TypeScript, CoffeeScript, Javascript
    * React: Render tại server, Data binding 1 chiều, Hỗ trợ ngôn ngữ: JSX, JavaScript, TypeScript
    * jQuery là thư viện để thao tác với DOM 
* Trình bày về Floats và cách chúng hoạt động:
   * Có ba giá trị của float hay sử dụng nhất đó là:

    1. left: Nằm phía bên trái
    2. right: Nằm phía bên phải
    3. none: Nằm tại chính vị trí của nó (trạng thái bình thường)
* Trình bày về z-index và làm thế nào để nội dung stack với nhau được định hình:
    * Thuộc tính z-index được sinh ra nhằm giải quyết cấp độ hiển thị của các thẻ HTML lên trình duyệt Browser, hay nói cách khác z-index giống như đánh số thứ tự hiển thị, thẻ nào có z-index cao thì nằm phía trên và thẻ nào có z-index thấp thì nằm phía dưới.
     1. Bạn chỉ thiết lập z-index được cho các thẻ có khai báo position:absolute.
     2. Giá trị của z-index là một con số (âm hoặc dương).
     3. Hai thẻ có cùng z-index thì sẽ tuân theo quy luật thẻ nào nằm dưới thì được hiển thị phía trên, thẻ con sẽ nằm trên thẻ cha.
     4. Giá trị z-index mặc định của các thẻ HTML là 1, vì vậy các thẻ HTML thông thường nếu nằm phía dưới thì nó sẽ đè thẻ phía trên.
* Giải thích về CSS sprites và làm thế nào để bạn thực hiện chúng trên một trang web:
  * CSS Image Sprites (hay gọi tắt là CSS Sprites) do Dave Shea đề nghị lần đầu năm 2004. Thuật ngữ “Sprites” thực ra là kỹ thuật đưa tất cả các hình ảnh trang trí như các icon hay button đặt vào một file hình duy nhất. Sau đó dùng thuộc tính background-position của CSS để hiện ra đúng vị trí cần thiết. Cách này cũng thường được áp dụng với các hiệu ứng hover, active hay focus để tạo các nút bấm động một cách mượt mà hơn hoặc để chứa các icon trang trí. Và một điều có lẽ các bạn có thể không để ý đến. Đó là mạng xã hội lớn nhất Facebook đang sử dụng kỹ thuật này để hiển thị các icon.
