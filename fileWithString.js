exports.readString = function(str){
    var str = str.toLowerCase();
    let arr = str.split('');
    let result = '';
    let count;
    for (let i = 0; i < arr.length; i++) {
        count = 0;
        for (let j = 0; j < arr.length; j++)
        {
          if (arr[i] === arr[j]) {
            count+= 1;
          }
        }
        if (count == 1) {
          result = arr[i];
          break;
        }
    }
    return result;
  };
