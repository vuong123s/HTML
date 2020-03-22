/*
You are given a string where you have to find its first word.

This is a simplified version of the First Word mission.

Input string consists of only english letters and spaces.
There aren’t any spaces at the beginning and the end of the string.
*/
function firstWord(a, b) {
    var x = a.split(' ')
    return x[0]
}

firstWord("Hello world")