function fadeIn(item, opFinal, opIncrease, time){
	var op = opIncrease;
	var timer = setInterval(function () {
        if (op >= opFinal){
            clearInterval(timer);
        }
        item.style.opacity = op;
        op += opIncrease;
    }, time);
}

function loading(){
	var el = document.getElementById("image1");
	var images = document.getElementById("images");
	var images2 = document.getElementById("wrapper");
	fadeIn(el, 0.5, 0.01, 20);
	fadeIn(images, 1, 0.02, 20);
	fadeIn(wrapper, 1, 0.02, 20);
}

window.addEventListener("load", loading, false);