// div display toggle

function toggle(id) {
    var item = document.getElementById(id);

    if(item.style.display != "inline")
        item.style.display = "inline";
    else
        item.style.display = "none";

    return false;
}
