
function onClick(y) {
    let toggle = document.querySelector(".p-popup")
    toggle.classList.toggle('active')
    let http = new XMLHttpRequest(); 
    http.open('get', 'products.json', true)
    http.send() 
    http.onload = function(){
        if (this.readyState == 4 && this.status == 200){
            let products = JSON.parse(this.responseText); 
            let output = ""; 
        for(let item of products){
            if (item.id == y) {
                output = ` 
                <img class="xicon" onclick="onClick()" src="images/x-solid.svg" alt="">
                <div class="popup-content"> 
                    <img class="popup-img" src=${item.url} alt="">
                    <div class="p-info">
                        <h2>${item.title}</h2>
                        <p>${item.artist}</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, unde nihil et voluptas aliquam fuga cupiditate quas. Accusamus optio explicabo perspiciatis consequatur accusantium a ipsa quaerat eligendi facere. Sed, natus molestias dolorem velit mollitia fuga qui. Aliquam amet neque deleniti!</p>
                    </div>
                </div>
                `
            }
        }
        document.querySelector(".p-popup").innerHTML = output; 
        }
    }
    
    
}
