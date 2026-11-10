# 001 — Giấy lặng thành repo riêng, có version

- **status:** accepted
- **date:** 2026-11-10

## Quyết định

Giấy lặng nằm ở một repo riêng, không gắn với sản phẩm nào. Repo giữ hình ảnh gốc, bảy nguyên tắc, danh sách nguyên tắc cho máy đọc, cách dùng, nguồn gốc, và khung. Lựa chọn riêng (thang màu, màu nhấn, chữ, điều hướng, dấu, icon), token, và test giữ luật nằm ở repo của từng sản phẩm. Sản phẩm dùng lại bằng git submodule ghim vào tag semver.

## Vì sao

- Triết lý vốn viết đủ chung để dùng lại, nhưng nằm trong bộ mô tả của một sản phẩm, cạnh lựa chọn riêng và ví dụ riêng của sản phẩm đó. Muốn đổi triết lý thì phải đi qua quy trình của sản phẩm đó.
- Tag semver cho mỗi sản phẩm tự chọn lúc lên version, và cho cổng tự động biết khi nào danh sách nguyên tắc đổi.
- Submodule cho agent và cổng đọc file ngay trên máy, điều mà chỉ dán link không làm được.

## Không chọn

- **Gói npm.** Nặng hơn cần thiết khi nội dung là markdown. Xét lại khi có mã kiểm dùng chung, như lint token hay kiểm tương phản.
- **Chỉ dán link.** Agent và cổng không đọc được file khi làm việc ngoại tuyến hay trong CI.
- **Giữ trong bộ mô tả của một sản phẩm.** Không phải dựng repo mới, nhưng sản phẩm khác phải lấy cả bộ mô tả không liên quan, và ví dụ mang chữ của một sản phẩm.

## Hệ quả

- Ví dụ trong `principles.md` dùng một ứng dụng ghi chú giả định.
- Đổi một nguyên tắc cần một quyết định mới trong thư mục này và một bản major.
