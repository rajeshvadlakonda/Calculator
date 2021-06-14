function display(val){
    document.getElementById("input").value += val;
}
function calculate(){
    exp = document.getElementById("input").value;
    document.getElementById("input").value =  Number(eval(exp)).toPrecision(2);
}
function clr(){
    document.getElementById("input").value= "";
    // exp="";
}
function eval(input){
    var operators = {
        '+': function(a, b) { return a + b; },
        '-': function(a, b) { return a - b; },
        '*': function(a, b) { return a * b; },
        '/': function(a, b) { return a / b; },
    };
    var precedence = [
        ['*', '/'],
        ['+', '-']
    ]
    
    // process until we are done
    while (input.length > 1) {
        // find the first operator at the lowest level
        var reduceAt = 0;
        var found = false;
        for (var i = 0; i < precedence.length; i++) {
            for (var j = 1; j < input.length - 1; j++) {
                if (precedence[i].indexOf(input[j]) >= 0) {
                    reduceAt = j;
                    found = true;
                    break;
                }
            }
            if (found) break;
        }
    
        // if we didn't find one, bail
        if (!found) return;
    
        // otherwise, reduce that operator
        var newInput = [];
        var f = operators[input[reduceAt]];
    
        for (var i = 0; i < reduceAt - 1; i++)
            newInput.push(input[i]);
    
        newInput.push("" + f(
            parseFloat(input[reduceAt - 1]),
            parseFloat(input[reduceAt + 1])
        ));
    
        for (var i = reduceAt + 2; i < input.length; i++)
            newInput.push(input[i]);
            input = newInput;
            
    }
    return input;
}