let subWrapper = document.getElementsByClassName("subscription_wrapper")[0];
let sub = document.getElementsByClassName("subscription")[0];
let subContent = document.getElementsByClassName("subscription_table")[0];
setBlock(subWrapper.clientHeight, sub.offsetWidth);

function setBlock(first, second) {
    console.log(first, second)
    let maximum = Math.max(first, second);
    console.log(maximum)
    console.log(subWrapper)
    subWrapper.style.height = maximum + "px";
    sub.style.minWidth = maximum + "px";
    subContent.style.marginLeft = sub.offsetHeight + "px";
    let subPos = (sub.offsetWidth - sub.offsetHeight) / 2;
    console.log(sub.offsetWidth, sub.offsetHeight)
    sub.style.top = subPos + "px";
    sub.style.left = "-" + subPos + "px";
}