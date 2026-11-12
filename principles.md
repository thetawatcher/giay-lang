# Giấy lặng: hình ảnh gốc và bảy nguyên tắc

## Đọc bằng lời

File này trả lời vì sao một giao diện theo Giấy lặng trông và cư xử như vậy. Ý chính: giao diện nên giống một tờ giấy tốt đặt trên một cái bàn yên tĩnh. Người dùng đến để làm một việc cần nghĩ, nên nội dung là chính và khung lùi lại phía sau. Bảy nguyên tắc bên dưới, mỗi nguyên tắc có ví dụ nên làm và nên tránh. Ví dụ dùng một ứng dụng ghi chú giả định, không phải sản phẩm thật nào. Mã màu, cỡ chữ, và thành phần cụ thể là lựa chọn của từng sản phẩm, không nằm ở đây.

## 1. Vì sao cần một triết lý

Người ta mở một sản phẩm công việc khi đang có việc chưa xong. Lúc đó sự chú ý của họ là thứ quý nhất. Mỗi khung thừa, mỗi màu không cần, mỗi thông báo chen vào đều lấy bớt sự chú ý đó.

Nếu không có triết lý chung, mỗi màn sẽ tự chọn cỡ chữ, màu và cách nhóm nội dung của riêng nó. Sau vài chục màn, sản phẩm trông như ghép từ nhiều nơi. Triết lý cho mọi người một câu hỏi chung để tự kiểm: thứ này có giúp người dùng nghĩ rõ hơn không, hay chỉ làm màn hình bận hơn?

Giấy lặng không phải phong cách trang trí. Đây là một cam kết về sự chú ý: sản phẩm chỉ đòi đúng phần chú ý mà việc đang làm cần.

## 2. Hình ảnh gốc

Hãy nghĩ tới một tờ giấy dày, màu trắng ngà, đặt trên bàn gỗ trong một căn phòng yên tĩnh. Chữ in rõ, lề rộng. Có một cây bút mực màu để đánh dấu chỗ quan trọng. Ngoài ra không còn gì khác.

Ba ý rút ra từ hình ảnh đó:

- **Giấy:** nội dung đọc được lâu mà không mỏi mắt. Nền ấm chứ không trắng lạnh. Chữ đậm vừa, dòng không quá dài.
- **Lặng:** không có gì nhấp nháy, không có gì giành lời. Giao diện chỉ lên tiếng khi có điều cần nói.
- **Một cây bút:** chỉ có một màu nhấn, dùng cho đúng chỗ cần hành động hoặc cần chú ý.

## 3. Bảy nguyên tắc

Mỗi nguyên tắc gồm phát biểu, lý do, và một ví dụ giao diện. Ví dụ vẽ bằng khung chữ để đọc được ở bất kỳ đâu. Chúng là phác thảo ý, không phải bản thiết kế. Danh sách máy đọc được (mã, tên, câu hỏi rà) nằm ở [rubric.yaml](rubric.yaml); hai nơi phải khớp nhau.

### 3.1 Chữ dẫn, khung lùi

Thứ bậc trên màn được tạo bằng cỡ chữ, độ đậm và khoảng trắng. Viền, vạch kẻ và thẻ chỉ dùng khi một nhóm thật sự phải tách khỏi phần xung quanh, và đó là ba chỗ:

- Một dãy mục cùng loại mà người dùng lướt để tìm một mục: vạch mảnh ngăn từng dòng, không có khung bọc cả dãy.
- Một nhóm ô được lưu hay bỏ cùng nhau, tách khỏi phần còn lại của form: một khung mảnh quanh nhóm, vì nhóm là một đơn vị thao tác.
- Một khối có vòng đời riêng, hiện ra rồi mất đi khi xong việc, như các bước làm quen: tách khỏi trang.

Bóng đổ chỉ dành cho lớp nổi lên trên màn, như menu hay ngăn kéo.

Lý do: mỗi đường viền là một tín hiệu mắt phải xử lý. Mười hộp lồng nhau làm màn hình ồn, dù mỗi hộp riêng lẻ trông vô hại. Nhưng bỏ cả vạch ngăn dòng hay khung của một đơn vị thao tác thì mắt mất chỗ bám: một dãy dài dính thành một khối chữ, và người dùng không biết ô nào đi cùng nút nào.

```text
Nên                                    Tránh
──────────────────────────────         ┌────────────────────────────┐
Tóm tắt                                │ ┌ TÓM TẮT ───────────────┐ │
                                       │ │ ┌────────────────────┐ │ │
Dời buổi họp sang thứ Năm và           │ │ │ Dời buổi họp sang  │ │ │
gửi tài liệu trước một ngày.           │ │ │ thứ Năm…           │ │ │
                                       │ │ └────────────────────┘ │ │
Ghi chú liên quan                      │ └────────────────────────┘ │
                                       │ ┌ GHI CHÚ ───────────────┐ │
Ba người vắng tuần này…                │ │ …                      │ │
──────────────────────────────         └────────────────────────────┘
Tiêu đề nhỏ và khoảng trắng            Hộp trong hộp, nhãn viết hoa,
đã đủ để chia phần.                    mỗi phần một khung.
```

```text
Nên                                    Tránh (bớt quá tay)
──────────────────────────────         ──────────────────────────────
Ghi chú gần đây                        Ghi chú gần đây
Họp nhóm thứ Năm             12/10     Họp nhóm thứ Năm 12/10
──────────────────────────────         Danh sách đọc 11/10
Danh sách đọc                11/10     Ý tưởng bài viết 09/10
──────────────────────────────
Ý tưởng bài viết             09/10     Nhắc lại
                                       Ngày  [ 14/10 ]
┌ Nhắc lại ──────────────────┐         Giờ   [ 08:00 ]   Bỏ nhắc
│ Ngày  [ 14/10 ]            │
│ Giờ   [ 08:00 ]   Bỏ nhắc  │
└────────────────────────────┘
Vạch ngăn dòng cho dãy để lướt,        Dãy dính thành một khối; không
khung cho nhóm ô đi cùng nhau.         thấy Bỏ nhắc bỏ cả ngày lẫn giờ.
```

### 3.2 Một màu nhấn, dùng tiết kiệm

Nền và chữ dùng các tông trung tính ấm. Chỉ có một màu nhấn, dùng cho chỗ bấm được (hành động chính, liên kết, dòng mở ra một màn khác), viền focus, và những câu người dùng không được đọc lướt qua (ví dụ điều kiện đi kèm một đề xuất). Tiết kiệm nghĩa là không tô màu chỗ không bấm được, không có nghĩa là bớt màu ở chỗ bấm được: chữ không bấm được thì không mang màu nhấn, chỗ bấm được thì luôn mang. Màu trạng thái (cảnh báo, đạt, mới) chỉ dùng cho đúng trạng thái đó, và luôn có chữ đi kèm, không để màu tự nói một mình. Màu nhấn không làm màu trạng thái.

Lý do: khi chỉ một thứ có màu, mắt biết ngay phải nhìn đâu. Khi mọi thứ đều có màu, không thứ gì nổi lên. Khi chỗ bấm được trông như chữ thường, người dùng phải chạm thử mới biết.

```text
Nên                                    Tránh
──────────────────────────────         ──────────────────────────────
Dời buổi họp sang thứ Năm.             [Xanh] Dời buổi họp…
▌ Chỉ khi cả nhóm xác nhận lịch.       [Cam]  Rủi ro: …
  (một vạch màu nhấn bên trái)         [Tím]  Nguồn: …
                                       [Đỏ]   Chú ý! …
         [ Lưu ]  ← màu nhấn           Mỗi loại thông tin một màu,
                                       không loại nào nổi lên.
```

```text
Nên                                    Tránh (bớt quá tay)
──────────────────────────────         ──────────────────────────────
Ghi chú gần đây                        Ghi chú gần đây
Họp nhóm thứ Năm   ← màu nhấn          Họp nhóm thứ Năm
Sửa lúc 12/10      ← chữ phụ           Sửa lúc 12/10
Danh sách đọc                          Danh sách đọc
Sửa lúc 11/10                          Sửa lúc 11/10
                                       Tên ghi chú mở được nhưng trông
                                       như chữ thường; phải chạm thử.
```

### 3.3 Mỗi màn một việc

Mỗi màn có một tiêu đề, một dòng phụ, và một hành động chính. Hành động chính là việc người dùng mở màn này để làm; nó giữ vai chính dù màn còn nhiều nút khác. Hành động phụ dùng nút viền hoặc chữ thường. Hành động lặp lại trên từng dòng của một danh sách không tính là hành động chính của màn, nên là nút phụ. Nếu một màn cần hai hành động chính, có lẽ đó là hai màn.

Lý do: người đang bận nghĩ ra quyết định kém khi phải chọn giữa nhiều nút trông như nhau. Khi chính việc họ đến để làm cũng lùi lại, họ phải đi tìm nó.

```text
Nên                                    Tránh
──────────────────────────────         ──────────────────────────────
Ghi chú mới                            Ghi chú mới
Viết điều đang nghĩ.                   [Lưu nháp] [Lưu] [Xuất]
                                       [Mẫu có sẵn] [Trợ giúp]
┌────────────────────────────┐         ┌────────────────────────────┐
│ Tuần này nhóm cần…         │         │                            │
└────────────────────────────┘         └────────────────────────────┘
Tự lưu                    [ Lưu ]      Năm nút cùng cỡ, cùng màu.
```

### 3.4 Im lặng mặc định

Trạng thái, lỗi, và gợi ý chỉ hiện khi chúng có ích lúc đó. Không có banner thường trực, không có đếm số đỏ để kéo người dùng quay lại. Khi một vùng trống, viết một câu nói vì sao nó trống, thay vì để trắng hay nhét hình minh hoạ vào.

Lý do: sản phẩm giúp người ta nghĩ thì không nên chen vào lúc họ đang nghĩ. Một thông báo hiếm khi xuất hiện sẽ được đọc. Thông báo xuất hiện thường xuyên sẽ bị bỏ qua.

Im lặng không có nghĩa là giấu. Thông tin sản phẩm bắt buộc phải hiện, như độ tin cậy của một kết quả hay dấu dữ liệu đã cũ, vẫn luôn hiện, nhưng hiện lặng: nhãn nhỏ, chữ phụ, nằm cạnh nội dung nó nói tới, không thành banner.

```text
Nên                                    Tránh
──────────────────────────────         ──────────────────────────────
Ghi chú đã lưu                         🔔 3   ✨ Mới: thử tính năng X!
                                       ────────────────────────────
Chưa có ghi chú nào. Bản bạn           ⚠ Hồ sơ của bạn mới 60%
lưu ở màn Ghi chú mới sẽ               ────────────────────────────
nằm ở đây.                             (danh sách trống, không nói gì)
```

### 3.5 Chữ ngắn

Nhãn ngắn, ngày gọn, mỗi dòng phụ chỉ một câu. Gọi đúng tên thứ người dùng đang làm, không dùng tên nội bộ. Mọi câu chữ trên giao diện nằm trong một bảng nhãn chung, để đổi giọng văn hay thêm ngôn ngữ chỉ phải sửa một chỗ.

Lý do: chữ trên giao diện là chữ phải đọc nhiều lần. Bớt được một từ là bớt được một nhịp mỗi lần đọc.

```text
Nên                                    Tránh
──────────────────────────────         ──────────────────────────────
Đã lưu · 12/10                         Bản ghi chú note_v2 đã
~1 phút                                được lưu thành công vào ngày
Xác nhận                               12 tháng 10 năm 2026
                                       Quá trình xử lý có thể
                                       mất khoảng một phút…
```

### 3.6 Chuyển động nhỏ

Chuyển động chỉ dùng để phản hồi một thao tác (mở thanh bên, đổi trang, mở một mục), và kết thúc trong khoảng một phần mười giây. Không có chuyển động trang trí. Khi người dùng đã bật chế độ giảm chuyển động trong hệ điều hành, tắt hẳn chuyển động.

Lý do: phản hồi trong khoảng 0.1 giây được cảm nhận là tức thì. Chuyển động dài hơn bắt người dùng phải chờ giao diện.

```text
Nên                                    Tránh
──────────────────────────────         ──────────────────────────────
Bấm ☰ → thanh bên trượt ra, ~0.1 s     Thẻ bay vào lần lượt từng cái
Đổi trang → thanh bên đứng yên,        Chữ gõ ra từng ký tự
nội dung đổi tại chỗ                   Logo xoay trong lúc chờ
```

### 3.7 Mọi giá trị đi qua token

Màu, cỡ chữ, khoảng cách, bo góc đều lấy từ một bộ biến dùng chung (token), không viết số rời trong từng màn. Sản phẩm có bản tối thì mỗi token có giá trị cho cả hai bản. Mọi cặp chữ trên nền đạt mức tương phản AA của chuẩn khả năng tiếp cận WCAG. Mọi thao tác dùng được bằng bàn phím, và focus luôn nhìn thấy được.

Lý do: triết lý chỉ sống được khi phá nó khó hơn giữ nó. Khi mọi giá trị đều đi qua token, một test tự động có thể bắt những chỗ lệch mà không cần người nhớ.

```text
Nên                                    Tránh
──────────────────────────────         ──────────────────────────────
color: var(--ink);                     color: #1c1917;
font-size: var(--text-sm);             font-size: 0.9rem;
border-radius: var(--radius-md);       border-radius: 7px;
→ test chặn merge khi có số rời        → mỗi màn lệch nhau một chút
```
