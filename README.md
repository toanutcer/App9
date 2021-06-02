Tài liệu kết nối IOT Cloud

Domain iot dev: [https://iot-dev.truesight.asia/](https://iot-dev.truesight.asia/)
Trang thông tin API [Swagger UI (truesight.asia)](https://iot-dev.truesight.asia/rpc/iot-ebe/swagger/index.html)

1.  Luồng Login
    - Mobile thực hiện đăng nhập và trả về Token và RefreshToken : /rpc/iot-ebe/account/login
    - Mobile yêu cầu tạo mới RefreshToken cho HC: /rpc/iot-ebe/account/create-session
    - Mobile gửi RefreshToken cho HC:
    - HC tạo Token bằng RefreshToken vừa nhận và dùng Token đó để đăng nhập: /rpc/iot-ebe/account/renew-token
2.  Luồng đồng bộ bằng HTTP

HC sử dụng thời gian đồng bộ với Cloud
|Tên bảng|API| mô tả|
|--|--|--|
| Time | /rpc/iot-ebe/sync/time | Trường thời gian này sẽ được sử dụng như 1 api để heart beat |
| Renew Token | /rpc/iot-ebe/account/renew-token | lấy|

HC thực hiện push dữ liệu lên server bằng các api sau

| Tên bảng       | API                                     |
| -------------- | --------------------------------------- |
| Device         | /rpc/iot-ebe/sync/merge-device          |
| EventTrigger   | /rpc/iot-ebe/sync/merge-event-trigger   |
| Grouping       | /rpc/iot-ebe/sync/merge-grouping        |
| HomeController | /rpc/iot-ebe/sync/merge-home-controller |
| Scene          | /rpc/iot-ebe/sync/merge-scene           |
| EventTrigger   | /rpc/iot-ebe/sync/merge-event-trigger   |
| Rule           | /rpc/iot-ebe/sync/merge-rule            |

HC thực hiện pull dữ liệu từ server về bằng các API sau
|Tên bảng|API |
|--|--|
| Category |/rpc/iot-ebe/sync/list-category |
| ComparisonOperator|/rpc/iot-ebe/sync/list-comparison-operator |
| DataType|/rpc/iot-ebe/sync/list-data-type |
| Device|/rpc/iot-ebe/sync/list-device |
| DeviceType|/rpc/iot-ebe/sync/list-device-type |
| DeviceAttribute|/rpc/iot-ebe/sync/list-device-attribute |
| Dormitory|/rpc/iot-ebe/sync/list-dorminitory |
| Room|/rpc/iot-ebe/sync/list-room |
| Scene|/rpc/iot-ebe/sync/list-scene|
| Grouping|/rpc/iot-ebe/sync/list-grouping |
| HomeController|/rpc/iot-ebe/sync/list-home-controller |
| Rule | /rpc/iot-ebe/sync/list-rule |
| EventTrigger|/rpc/iot-ebe/sync/list-event-trigger |
| Icon|/rpc/iot-ebe/sync/list-icon |
| IconType|/rpc/iot-ebe/sync/list-icon-type |
| LogicalOperator|/rpc/iot-ebe/sync/list-logical-operator |
| Status| /rpc/iot-ebe/sync/list-status |

Giải thích luồng:
Mỗi HC sẽ có 1 địa chỉ MAC cho chip wifi, hệ thống sẽ lấy MAC của HC để tạo ra mã UUID là định danh duy nhất cho HC
Mỗi HC sẽ thực hiện có các thông tin cấu hình được lưu trên 1 dòng của bảng SystemConfiguration. Thời gian update cuối cùng được lưu vào các cột tương ứng trong bảng SystemConfiguration.
Mỗi lần HC bị ngắt kết nối với cloud thì sẽ phải thực hiện lại luồng đồng bộ với Cloud.
HC sẽ có 1 cronjob chạy mỗi phút 1 lần để kiểm tra trạng thái đồng bộ với cloud. Khi HC retry 3 lần mà không có lần nào thành công tức là HC đang không kết nối được với cloud và phải thực hiện đồng bộ lại khi kết nối lại được với cloud. Trạng thái đồng bộ của HC sẽ được lưu vào bảng SystemConfiguration
Luồng đồng bộ API của HC với Cloud bao gồm 2 giai đoạn. - Giai đoạn 1: HC sẽ đẩy tất cả các bản ghi mà đang có trạng thái InSync=False lên cloud - Giai đoạn 2: HC lấy tất cả các bản ghi tính từ lần đồng bộ cuối cùng theo dữ liệu trong bảng SystemConfiguration và cập nhật vào các bảng tương ứng.

Giải thích chi tiết luồng đồng bộ API

- HC sử dụng RefreshToken mà Mobile gửi cho để lấy token bằng api renew token
- Tất cả các API pull push sẽ đều phải bổ sung thêm header X-EndUserProfileId. Giá trị này là giá trị xác định EndUserProfile được nhận từ Mobile. ( có thể set 1 giá trị long bất kì để test)
- HC thực hiện push dữ liệu bằng cách lấy danh sách các bản ghi thay đổi trong database bằng bản ghi InSync=false và gửi lên database bằng các api tương ứng
- HC thực hiện pull dữ liệu bằng cách lấy thời gian cập nhật cuối cùng của từng bảng trong database với điều kiện là InSync=True và gửi lên server để nhận lại các bản ghi thay đổi mớI nhất từ Server. Sau đó HC lưu các bản ghi này lại với đánh dấu là InSync=True

Luồng đồng bộ API được thực hiện khi HC khởi động lại hoặc quá trình heartbeat của HC với Cloud gặp lỗi trên 3 lượt

API gốc của Signalr
Giải thích chi tiết luồng đồng bộ

- HC sẽ thực hiện kết nối với với signalr
- Bản tin send bao gồm 3 thông tin là EndUserProfileId, Tên thực thể(Ví dụ Device), danh sách bản ghi gửi lên
- Bản tin receive gồm 2 phần thông tin: Tên thực thể, danh sách bản ghi nhận về. Với mỗi loại thực thể nhận được thì sẽ lưu vào database với cờ InSync=True. Và việc nhận receive là realtime giống như ứng dụng chat.
