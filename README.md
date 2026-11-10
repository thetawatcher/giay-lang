# Giấy lặng

## Đọc bằng lời

Repo này giữ Giấy lặng, một triết lý thiết kế giao diện dùng lại được cho nhiều sản phẩm. Ý chính: giao diện nên giống một tờ giấy tốt đặt trên một cái bàn yên tĩnh. Nội dung là chính, khung lùi lại, và sản phẩm chỉ đòi đúng phần chú ý mà việc đang làm cần. Repo không gắn với sản phẩm nào: không có mã màu, không có thang màu, không có tên sản phẩm. Mỗi sản phẩm ghim một version qua git submodule và ghi lựa chọn riêng ở repo của mình.

## Đọc gì

| File | Nội dung |
| --- | --- |
| [principles.md](principles.md) | Vì sao, hình ảnh gốc, bảy nguyên tắc có ví dụ nên và tránh |
| [rubric.yaml](rubric.yaml) | Bảy nguyên tắc cho máy đọc: mã, tên, câu hỏi rà |
| [adopting.md](adopting.md) | Sáu bước để một sản phẩm dùng Giấy lặng; ranh giới với repo sản phẩm |
| [sources.md](sources.md) | Nguồn gốc của từng phần |
| [templates/](templates/) | Khung mục "Giấy lặng trong sản phẩm này" và bảng rà thiết kế |
| [decisions/](decisions/) | Quyết định về chính triết lý |
| [MANIFEST.yaml](MANIFEST.yaml) | Tên logic → đường dẫn, cho mã và cổng của repo dùng lại |
| [CHANGELOG.md](CHANGELOG.md) | Các version và phần đã đổi |

## Version

Repo gắn tag theo semver, vì cổng của các repo dùng lại đọc danh sách nguyên tắc.

| Bản | Khi nào |
| --- | --- |
| major | Thêm, bỏ, hay đổi tên hoặc mã một nguyên tắc; đổi hay xoá một tên logic trong `MANIFEST.yaml` |
| minor | Sửa phát biểu, lý do, ví dụ, câu hỏi rà; thêm tên logic hay khung mới |
| patch | Sửa chính tả, link, câu chữ không đổi nghĩa |

Mỗi tag có một dòng trong [CHANGELOG.md](CHANGELOG.md). Repo dùng lại dời pointer submodule trong một pull request riêng.

## Kiểm

`node scripts/check.mjs` (không cần cài gì) chặn khi `rubric.yaml` lệch các mục 3.x của `principles.md`, khi `MANIFEST.yaml` trỏ tới file không có, hay khi văn ngoài khối mã có mã màu hex. CI chạy lại lệnh này.
