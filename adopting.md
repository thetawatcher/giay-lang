# Dùng Giấy lặng cho một sản phẩm

## Đọc bằng lời

File này nói một sản phẩm cần làm gì để theo Giấy lặng, và cách giữ phần chung tách khỏi lựa chọn riêng của sản phẩm. Triết lý ở [principles.md](principles.md) không gắn với sản phẩm nào. Mỗi sản phẩm ghim một version của repo này, ghi lựa chọn riêng ở chỗ của mình, và rà mỗi màn theo ba bước: hiểu màn, đưa phương án, rồi kiểm bằng bảng bảy nguyên tắc.

## Sáu bước

1. **Giữ nguyên bảy nguyên tắc.** Nếu muốn bỏ một nguyên tắc, ghi lý do. Đó là dấu hiệu sản phẩm cần một triết lý khác, không phải một biến thể.
2. **Chọn lại hình ảnh gốc nếu cần**, nhưng vẫn phải trả lời được: người dùng đến với tâm thế nào, và sự chú ý của họ quý ở đâu.
3. **Chọn một màu nhấn của riêng mình.** Đừng mượn màu thương hiệu của sản phẩm khác.
4. **Chọn thang màu đã được thiết kế sẵn**, có vai trò rõ cho từng bậc, và có bản tối nếu sản phẩm cần. Đừng tự đặt từng mã màu.
5. **Viết test trước khi viết màn:** không có mã màu rời, không có cỡ chữ ngoài thang, tương phản đạt AA, không có chuỗi giao diện viết cứng ngoài bảng nhãn.
6. **Viết mục "Giấy lặng trong sản phẩm này"** theo [templates/in-this-product.md](templates/in-this-product.md): ghi lựa chọn cụ thể ở repo của sản phẩm, để triết lý chung không bị sửa mỗi lần có một lựa chọn riêng.

## Rà một màn

Bảng bảy nguyên tắc kiểm một phương án; nó không nghĩ ra phương án. Bắt đầu từ bảng thì chỉ ra được đề xuất bớt. Vì vậy rà một màn đi ba bước, theo khung [templates/review-table.md](templates/review-table.md):

1. **Hiểu màn.** Ai mở màn, lúc nào, trên thiết bị gì; câu hỏi đầu tiên họ cần màn trả lời; việc chính của màn; dữ liệu thật trông ra sao (bao nhiêu mục, mục dài nhất, lúc rỗng).
2. **Đưa phương án.** Hai hoặc ba bố cục khác nhau về thứ tự khối, cách nhóm, và cái gì hiện sẵn, vẽ với dữ liệu thật. Người duyệt chọn một.
3. **Kiểm bằng bảng.** Chạy bảy nguyên tắc trên phương án được chọn. Thừa và bớt quá tay đều là lệch.

Sản phẩm có cổng tự động thì có thể bắt PR đổi giao diện có đủ ba phần này. Cổng của sản phẩm tự quyết; repo này chỉ giữ khung.

## Gắn vào repo

Cách đề xuất: thêm repo này làm git submodule, ghim vào một tag.

```bash
git submodule add <url của repo này> giay-lang
git -C giay-lang checkout v1.0.0
git add giay-lang .gitmodules
```

- Mã và cổng đọc file qua [MANIFEST.yaml](MANIFEST.yaml) (tên logic → đường dẫn), không viết cứng đường dẫn bên trong repo này.
- Bảng rà thiết kế lấy danh sách nguyên tắc từ [rubric.yaml](rubric.yaml), theo khung [templates/review-table.md](templates/review-table.md). Cổng tự động nên đọc số nguyên tắc từ file đó thay vì viết cứng con số bảy.
- Lên version mới: đọc [CHANGELOG.md](CHANGELOG.md), dời pointer submodule trong một pull request riêng, và rà lại các màn theo phần đã đổi.

## Ranh giới

| Việc | Repo này | Repo của sản phẩm |
| --- | --- | --- |
| Hình ảnh gốc, bảy nguyên tắc, lý do, ví dụ | Có | Trỏ tới, không chép lại |
| Danh sách nguyên tắc cho máy đọc | `rubric.yaml` | Đọc qua `MANIFEST.yaml` |
| Thang màu, màu nhấn, chữ, điều hướng, dấu, icon | Không | Mục "Giấy lặng trong sản phẩm này" |
| Token, thành phần, test giữ luật | Không | Có |

Muốn đổi một nguyên tắc thì mở pull request ở repo này, kèm một quyết định trong [decisions/](decisions/). Muốn đổi một lựa chọn riêng hay một mã màu thì sửa ở repo của sản phẩm.
