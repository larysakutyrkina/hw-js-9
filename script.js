let ul = document.querySelector(".tabs" );
ul.addEventListener("click", function (e) {
 let data = e.target.dataset.tab;
     document.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
    document.querySelector(".active-li").classList.remove("active-li");
    document.querySelector(`[data-content = ${data}]`).classList.add("active-li");
});
