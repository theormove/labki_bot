let list = document.getElementById('listMenu');
let block = document.getElementById('blockMenu');
let news = document.getElementById('news_wrapper');
let filterList = document.getElementById('filters').querySelectorAll('.filter'),
    index, button;
list.onclick = function() {
    if (news_wrapper.classList.contains("not-list") == 1) {
        news_wrapper.classList.remove("not-list");
    }
}
block.onclick = function() {
    if (news_wrapper.classList.contains("not-list") == 0) {
        news_wrapper.classList.add("not-list");
    }
}
for (index = 0; index < filterList.length; index++) {
    button = filterList[index].getElementsByTagName('h4')[0];
    button.addEventListener('click', function(event) {
    	this.parentNode.classList.toggle("selected");
    });
}