function solution(str){
    var i = 0
    var result = new Array()
    if(i & 2 == 0){
        str += "_"
    }
    while(i < str.length){
        result.push(str[i] + str[i+1]) 
        i += 2
    }
    return result;
}