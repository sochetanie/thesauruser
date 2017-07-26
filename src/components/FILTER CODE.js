/**
 * Created by JP on 7/26/17.
 */
var txt;
var counts = {};
var keys = [];

function preload() {
    txt = loadStrings('text.txt');
    console.log(txt)
}


//counting and numbering
function  setup() {
    var allwords = txt.join("\n");
    var tokens = allwords.split(/\W+/);
    for(var i = 0; i < tokens.length; i++){
        var word = tokens[i].toLowerCase();
        if(counts[word] === undefined){
            counts[word] = 1;
            keys.push(word)
        } else {
            counts[word] = counts[word] + 1
        }
    }

    keys.sort(compare)


    //sorting high to low
    function compare(a,b) {
        var countA = counts[a]
        var countB = counts[b]
        return countB - countA
    }
    for (var i = 0; i < keys.length; i++){
        var key = keys[i];
        createDiv(key + " " + counts[key])
    }
    console.log(counts);
}
