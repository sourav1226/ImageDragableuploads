var images=[];
function image_select(){
    var image= document.getElementById('image').files;
    for(i=0; i<image.length; i++){
        images.push({
            "name" : image[i].name,
            "url"  : URL.createObjectURL(image[i]),
            "file" : image[i],

        })
    }
    document.getElementById('form').reset();
    document.getElementById('container').innerHTML = image_show();

}
function image_show(){
    var image= "";
    images.forEach((i) => {
        image += '<div class="d-grid">\
        <img src="'+ i.url +'" alt="">\
        <span onclick="delete_image('+ images.indexOf(i) +')">&times</span>\
    </div>';
    })
    return image;
}
function delete_image(e){
    images.splice(e, 1);
    document.getElementById('container').innerHTML = image_show();
}

const dragArea = document.querySelector('.images');
new Sortable(dragArea, {
    animation: 350
});