(function(){
  var el, tags;
  el = document.querySelector("div.container");
  tags = ["all", "beginner", "intermediate", "advanced"];
  tags.forEach(function(x){
    return document.querySelector(".click-" + x).onclick = function(){
      tags.forEach(function(y){
        return el.classList.remove(y);
      });
      return el.classList.add(x);
    };
  });
}).call(this);
