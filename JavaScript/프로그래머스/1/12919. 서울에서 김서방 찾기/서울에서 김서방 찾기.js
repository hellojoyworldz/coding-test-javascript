function solution(seoul) {
    var answer = '';
    
    seoul.forEach((val,x) => {
        if(val === "Kim") {
            answer = `김서방은 ${x}에 있다`;
            return;
        }
    })
    
    
    return answer;
}