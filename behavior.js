document.addEventListener("DOMContentLoaded", function(event) {

  let thumbnailElement = document.getElementById("smart_thumbnail");
  let switchClass = thumbnailElement.className;

  thumbnailElement.addEventListener("click", function() {
    console.log('in click ',switchClass)
    if(switchClass == "small"){
      switchClass = "big";
    }
    else{
      switchClass = "small";
    }
    thumbnailElement.className = switchClass;

  });

});
