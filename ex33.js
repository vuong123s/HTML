/*
Ever tried to send a secret message to someone without using the postal 
service? You could use newspapers to tell your secret. Even if someone finds 
your message, it's easy to brush them off as paranoid and as a conspiracy 
theorist. One of the simplest ways to hide a secret message is to use capital 
letters. Let's find some of these secret messages.

You are given a chunk of text. Gather all capital letters in one word in the 
order that they appear in the text.

For example: text = "How are you? Eh, ok. Low or Lower? Ohhh.", if we collect 
all of the capital letters, we get the message "HELLO".
*/

function findMessage(data) {
    var patt = /[A-Z]/g
    var a = data.match(patt)
    if(a === null){
        return ""
    }else{
        return a.join('')
    }
}
findMessage("heoll")