# 002 — Tiêu chí giữ khung, vạch kẻ và màu nhấn

- **status:** accepted
- **date:** 2026-11-13

## Quyết định

Ba nguyên tắc 3.1, 3.2, 3.3 nói thêm khi nào **giữ**, không chỉ khi nào bỏ. Câu hỏi rà của ba nguyên tắc này hỏi cả hai chiều: còn thừa không, và bớt có quá tay không.

1. **Chữ dẫn, khung lùi.** Khung hay vạch kẻ là "thật cần" ở ba chỗ:
   - Dãy mục cùng loại mà người dùng lướt để tìm một mục: vạch mảnh ngăn từng dòng. Khung bọc quanh cả dãy vẫn bỏ.
   - Nhóm ô được lưu hay bỏ cùng nhau, tách khỏi phần còn lại của form: một khung mảnh quanh nhóm, vì nhóm là một đơn vị thao tác.
   - Khối có vòng đời riêng, hiện ra rồi mất đi khi xong việc (các bước làm quen, việc đang chờ xử lý): tách khỏi trang.

   Ngoài ba chỗ đó, thứ bậc vẫn đến từ cỡ chữ, độ đậm và khoảng trắng. Bóng đổ vẫn chỉ dành cho lớp nổi.
2. **Một màu nhấn, dùng tiết kiệm.** "Tiết kiệm" nghĩa là không tô màu chỗ không bấm được, không có nghĩa là bớt màu ở chỗ bấm được. Mọi chỗ bấm được (nút chính, liên kết, dòng mở ra một màn khác) mang màu nhấn; chữ không bấm được thì không. Màu nhấn vẫn không dùng cho trạng thái.
3. **Mỗi màn một việc.** Hành động chính là việc người dùng mở màn này để làm. Một nút chỉ lùi xuống vai phụ khi nó không phải việc đó. Hành động lặp lại trên mỗi dòng của danh sách không tính là hành động chính của màn.

Câu hỏi rà mới trong `rubric.yaml`:

| id | check |
| --- | --- |
| `chu-dan-khung-lui` | Thứ bậc đến từ cỡ chữ, độ đậm, khoảng trắng; khung, vạch kẻ chỉ ở dãy để lướt, nhóm lưu cùng nhau, khối có vòng đời riêng; bóng đổ chỉ ở lớp nổi; bỏ khung có làm mất nhóm hay mất chỗ lướt không? |
| `mot-mau-nhan` | Chỉ một màu nhấn, cho chỗ bấm được, focus và câu không được lướt; bỏ màu có làm chỗ bấm được trông như chữ thường không; màu trạng thái luôn có chữ? |
| `moi-man-mot-viec` | Một tiêu đề, một dòng phụ, một hành động chính là việc người dùng mở màn để làm; hành động phụ lùi lại, nhưng việc chính không bị lùi? |

## Vì sao

- Bảy nguyên tắc của v1.0.0 chỉ nói bớt. "Thật cần" và "tiết kiệm" không có tiêu chí, nên người rà (người hay agent) hiểu là càng bỏ nhiều càng đạt. Ở hai sản phẩm đã dùng, bản sau khi rà trông bị cắt giảm và khó lướt hơn bản trước.
- Ở một sản phẩm, qua mười vòng duyệt trên ba nhóm màn, người duyệt lần nào cũng giữ lại đúng mấy thứ này: vạch kẻ của danh sách, khung quanh nhóm ô lưu cùng nhau, khối các bước làm quen, màu nhấn ở tên dòng mở được, nút chính cho việc chính của màn. Mỗi lần giữ được ghi như một ngoại lệ của màn đó, nên các màn lệch nhau. Lý do giữ lại không thuộc riêng sản phẩm nào: lướt một dãy, giữ một đơn vị thao tác, tách một khối có vòng đời riêng, nhận ra chỗ bấm được.
- 3.2 của v1.0.0 đã cho màu nhấn ở liên kết. Tiêu chí mới viết rõ điều đó, không nới thêm.

## Không chọn

- **Ghi ngoại lệ ở từng sản phẩm.** Mỗi sản phẩm phải tự tìm lại, và người rà vẫn đề xuất bỏ trước rồi bị sửa lại qua từng vòng.
- **Thêm nguyên tắc mới.** Đó là bản major, đổi danh sách mà cổng của repo dùng lại đọc. Ba lý do trên nằm trọn trong ba nguyên tắc có sẵn. Nguyên tắc về bố cục và nội dung, nếu cần, là một quyết định riêng.
- **Cho màu nhấn dùng cho trạng thái.** Chỗ bấm được và trạng thái sẽ trông như nhau. Sản phẩm cần thì ghi ở mục "Nguyên tắc nào không theo" của mình.
- **Bỏ hẳn "khung lùi".** Nguyên tắc vẫn đúng với hộp trong hộp và thẻ quanh từng đoạn văn.

## Hệ quả

- Bản minor `v1.1.0`: sửa phát biểu và ví dụ của 3.1–3.3 trong `principles.md`, sửa câu `check` của ba dòng trong `rubric.yaml`. Id, tên và thứ tự giữ nguyên, nên cổng của repo dùng lại không phải đổi.
- Ví dụ của 3.1 và 3.2 thêm một cột "Tránh" cho chiều quá tay: danh sách không có vạch ngăn dòng, liên kết trông như chữ thường.
- Khi dời pointer lên `v1.1.0`, sản phẩm rà lại các màn đã rà theo v1.0.0 bằng tiêu chí mới, rồi rút khỏi mục "Nguyên tắc nào không theo" những ngoại lệ mà tiêu chí mới đã bao.
