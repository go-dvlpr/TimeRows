function SendTimeRow(){
    var ValueFromRowField = $('.timeRowField').val();

    var array = [];
    var count = 0;
    var number = "";

    for (var i = 0; i < ValueFromRowField.length; i++) {
        var ch = ValueFromRowField.charAt(i);
        if(ch != " "){
            number = number + ch;
        } else {
            if(number != ""){
                array[count] = number;
                count++;
                var number = "";
            }
        }
    }
    if(number != ""){
        array[count] = number;
    } 
    $('.timeRowField').val("");
  
    var obj = new Object();
    obj.array = array;
    obj.len = array.length;

    var jsonArray = JSON.stringify(obj);
    console.log(jsonArray);

    $.ajax({
       url: "http://localhost:80/average",
        method: "POST",
        data : { sendedData: jsonArray}
    });

    return false
}