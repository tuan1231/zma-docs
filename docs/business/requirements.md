# Business Requirements Document (BRD)

## 1. Bối cảnh
ABC Company muốn mở kênh bán hàng trực tiếp trên Zalo để:
- Tiếp cận tệp khách hàng đang sử dụng Zalo.
- Tăng độ tương tác nhờ Mini App tích hợp trong Zalo OA.
- Giảm chi phí marketing so với phát triển app riêng.

## 2. Mục tiêu
- Mini App hoạt động ổn định, phản hồi < 2 giây.
- Hỗ trợ tối thiểu 5,000 người dùng đồng thời.
- Dễ mở rộng, dễ bảo trì.

## 3. Phạm vi chức năng
| Mã | Chức năng | Mô tả |
|----|-----------|-------|
| BR-01 | Login | Đăng nhập bằng tài khoản Zalo (OAuth2). |
| BR-02 | Product Catalog | Xem danh sách sản phẩm, tìm kiếm, lọc theo danh mục. |
| BR-03 | Cart & Checkout | Thêm/xoá sản phẩm khỏi giỏ hàng, thanh toán bằng ZaloPay. |
| BR-04 | Order Tracking | Xem trạng thái đơn hàng, nhận thông báo OA. |
| BR-05 | Support | Chat trực tiếp với nhân viên qua OA Chat. |

## 4. Rủi ro
- API rate limit của Zalo có thể ảnh hưởng tốc độ.
- Người dùng chưa quen với Mini App → cần hướng dẫn UI/UX rõ ràng.
