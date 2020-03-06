

var myList = [
    'Take shower',
    'Have a walk',
    'Go to bed'
];

var htmlList = document.getElementById('list')
var content = myList.map(function(item) {
    return '<li>' + item + '</li>';
});

htmlList.innerHTML = content.join('');