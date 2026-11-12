# 003 — Rà một màn bắt đầu từ hiểu màn và phương án bố cục

- **status:** proposed
- **date:** 2026-11-13

## Quyết định

Rà một màn đi ba bước, đúng thứ tự:

1. **Hiểu màn.** Ghi ai mở màn, lúc nào, trên thiết bị gì; câu hỏi đầu tiên họ cần màn trả lời; việc chính của màn; dữ liệu thật trông ra sao (bao nhiêu mục, mục dài nhất, lúc rỗng). Trả lời bằng chuyện thật và số liệu thật, không bằng câu chung.
2. **Đưa phương án.** Hai hoặc ba bố cục khác nhau về thứ tự khối, cách nhóm, và cái gì hiện sẵn hay nằm sau một lần bấm, vẽ với dữ liệu thật, cả lúc nhiều và lúc rỗng. Người duyệt chọn một. Khác nhau chỉ ở màu hay chữ thì chưa phải hai phương án.
3. **Kiểm bằng bảng.** Chạy bảy nguyên tắc trên phương án được chọn. Thừa và bớt quá tay đều là lệch. Sửa nào bỏ một thứ thì nói câu hỏi đầu tiên và việc chính của màn còn được trả lời ra sao.

`templates/review-table.md` có thêm hai phần Hiểu màn và Phương án trước bảng bảy nguyên tắc. `adopting.md` có thêm mục "Rà một màn".

## Vì sao

- Bảng bảy nguyên tắc chỉ hỏi một phương án có giữ nguyên tắc không. Nó không nghĩ ra phương án. Khi rà bắt đầu từ bảng, người rà (người hay agent) chỉ có một việc là so màn đang có với bảy câu hỏi, nên đề xuất nào cũng là bỏ bớt. Ở hai sản phẩm đã dùng, các lượt rà không có đề xuất nào về bố cục hay về nội dung hợp với người đọc.
- Mục 1 của `principles.md` nói sản phẩm chỉ đòi đúng phần chú ý mà việc đang làm cần. Phần chú ý đó phụ thuộc trước hết vào việc màn trả lời câu hỏi đầu tiên của người dùng nhanh hay chậm: khối nào đứng trước, cái gì hiện sẵn. Đếm khung và màu chỉ đến sau.
- Người duyệt chọn giữa các bố cục được, còn sửa từng chi tiết của một bản duy nhất qua nhiều vòng thì không. Sửa từng chi tiết làm các màn lệch nhau theo từng vòng duyệt.

## Không chọn

- **Thêm nguyên tắc thứ tám, như "Đọc theo việc".** Đó là bản major, đổi danh sách mà cổng của repo dùng lại đọc. Điều cần đổi là thứ tự làm việc, không phải một điều kiện của bản thiết kế. Xét lại khi quy trình mới đã chạy qua vài màn mà vẫn thiếu.
- **Để mỗi sản phẩm tự quyết cách rà.** Khung dùng chung vẫn dẫn người rà vào bảng trước, và mỗi sản phẩm lại gặp lại cùng một vấn đề.
- **Một phương án, sửa qua nhiều vòng.** Người duyệt chỉ sửa được chi tiết, không so được bố cục.

## Hệ quả

- Bản minor `v1.1.0`, phát hành cùng [002](002-tieu-chi-giu-khung-va-mau.md): sửa khung, thêm một mục trong `adopting.md`. `rubric.yaml` và `MANIFEST.yaml` không đổi; bảng bảy dòng giữ nguyên tên và thứ tự, nên cổng đang đọc bảng không phải đổi.
- Hai phần mới dùng nhãn chữ đậm, không dùng tiêu đề, để sản phẩm chép khung vào một mục của PR mà không cắt mục đó.
- Sản phẩm muốn bắt buộc có đủ ba phần thì sửa cổng của mình. Repo này chỉ giữ khung.
- Rủi ro: hai phần mới bị điền cho có. Khung đòi số liệu thật và phương án khác nhau về bố cục để người duyệt nhận ra khi phần đó rỗng.
