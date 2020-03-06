var axios = require('axios');
// 1. Tạo một REST api server sử dụng json-server
// 2. Đọc documentation của json-server và axios, tìm hiểu các method GET, POST, PUT, PATCH, DELETE
// 3. Làm các ví dụ sử dụng axios để gửi các request lên json-server để tạo object mới, update 1 object với dữ liệu mới, xoá 1 object
// Lưu ý: đây là một bài khó nếu bạn là beginner, tuy nhiên, khi hiểu được bài này bạn sẽ có thể lên 1 level mới (beginner cao cấp).
// Hãy dành 1 ngày để đọc, tìm hiểu, thử. Sau 1 ngày nếu bạn không làm được thì có thể hỏi trên Coders.Tokyo Slack hoặc JsLand.
var url = "http://localhost:3000/item/"
var url1 = "http://localhost:3000/item/3"


axios.post(url,{
	id:3,
  nameItem:"Nokia X2-00",
  price:5
})

axios.put(url1,{
    nameItem:"Nokia X2-01",
    price:10
})

axios.delete(url1)

axios.get(url).then(function(res){
	console.log(res.data)
})