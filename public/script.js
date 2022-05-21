 function generate() {
    var inputVal = document.getElementById("textBox").value;
    document.getElementById('grid1').innerHTML='';
    //var img = document.createElement("img");
    console.log(inputVal);
    //img.src="https://image.shutterstock.com/image-vector/gift-box-red-ribbon-isolated-600w-520434712.jpg";
    var gift=document.getElementById("grid1");
    for(var i=0;i<inputVal; i++){
       gift.innerHTML+="<img src='https://image.shutterstock.com/image-vector/gift-box-red-ribbon-isolated-600w-520434712.jpg' alt='' class='image'>";
    }

    document.getElementById("textBox").value="";
}