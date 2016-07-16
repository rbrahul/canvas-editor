var canvasItemCurrentPosition={left:0,top:0};
var dragging=false;
var canvasItem = document.querySelectorAll(".canvas-content-item");
var draggableArea= document.querySelector(".canvas-draggable-area");
var currentTarget;
var topZindex=1;

function mouseOverListener(e){
    var classes=e.currentTarget.getAttribute('class').split(" ");
    if(classes && classes.indexOf('dragging-element')<0){
      classes.push('dragging-element');
      e.currentTarget.setAttribute('class',classes.join(" "));
    }
}
function mouseOutListener(e){
    var classes=e.currentTarget.getAttribute('class').split(" ");
    if(classes && classes.indexOf('dragging-element')>=0 && dragging==false){
      var position=classes.indexOf('dragging-element');
      var newClasses=classes.splice(position-1,1);
      e.currentTarget.setAttribute('class',newClasses.join(" "));
    }
}

function mouseDownListener(e){
  dragging=true;
  currentTarget=e.target;
  var canvasItems = document.querySelectorAll(".canvas-content-item");
  console.log(canvasItems);
  for(var j=0;j<canvasItems.length;j++){
    var currentZindex=canvasItems[j].style.zIndex;
    if(currentZindex>topZindex){
      topZindex=currentZindex;
    }
  }
  topZindex++;

}


for(var i=0;i<canvasItem.length;i++){
  canvasItem[i].addEventListener("mouseover",mouseOverListener,false);
  canvasItem[i].addEventListener("mouseout",mouseOutListener,false);
  canvasItem[i].addEventListener("mousedown",mouseDownListener,false);
}// end for

document.addEventListener("mouseup",function(e){
  dragging=false;
  canvasItemCurrentPosition.left=0;
  canvasItemCurrentPosition.top=0;
},false);

draggableArea.addEventListener('mousemove',function(e){
  if(dragging==true){
    var canvasOffsetLeft= document.querySelector('.canvas').offsetLeft;
    var parentOffsetLeft=draggableArea.offsetLeft;
    var leftOffset=canvasOffsetLeft+parentOffsetLeft;
    var leftPos=(e.pageX-leftOffset+10);
    var topPos=(e.pageY-10);
    if(leftPos>0&&topPos>0){
      currentTarget.style.top=topPos+'px';
      currentTarget.style.left=leftPos+'px';
      currentTarget.style.zIndex=topZindex;
    }

  }
},false);

function deleteItem(e){
  var item=e.currentTarget.parentNode.parentNode.removeChild(e.currentTarget.parentNode);
}
