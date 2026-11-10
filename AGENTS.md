# Hướng dẫn cho agent

Repo này là triết lý thiết kế Giấy lặng, dùng lại cho nhiều sản phẩm qua git submodule. Đọc [README.md](README.md) trước khi sửa.

## Luật

- Không có tên sản phẩm, tên khách hàng, hay đường dẫn tới repo khác. Ví dụ dùng ứng dụng ghi chú giả định.
- Không có mã màu, thang màu đã chọn, cỡ chữ cụ thể, hay tên thành phần của một sản phẩm. Những thứ đó là lựa chọn riêng, nằm ở repo sản phẩm theo `templates/in-this-product.md`.
- Đổi một nguyên tắc: viết quyết định trong `decisions/` trước, rồi sửa `principles.md` và `rubric.yaml` cùng pull request; hai file phải khớp.
- Mỗi pull request đổi nội dung ghi một dòng vào `CHANGELOG.md` dưới version sẽ phát hành, theo bảng semver ở README. Dời hay đổi tên file thì sửa `MANIFEST.yaml`.
- `node scripts/check.mjs` phải ra `OK` trước khi mở pull request.
- Viết tiếng Việt; thuật ngữ kỹ thuật giữ tiếng Anh. Mỗi file mở bằng mục Đọc bằng lời.
- Làm trên nhánh riêng, không commit thẳng `main`.
