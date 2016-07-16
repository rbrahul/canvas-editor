 (function(){
   var obj={
          textNode:'<span class="delete-node" onClick="deleteItem(event)"><i class="ion-android-close"></i></span>'+
                    '<div class="text-content" contenteditable="true">Your Text</div>',

          stripNode:function(html){
                       var tmp = document.implementation.createHTMLDocument("New").body;
                       tmp.innerHTML = html;
                       return tmp.textContent || tmp.innerText || "";
                     },

          domInitiate:function(){
            this.addTextBtn=document.querySelector(".add-text-btn");
            this.addImageToCanvasBtn=document.querySelectorAll(".add-image-btn");
            this.canvasAreaVar=document.querySelector(".canvas-draggable-area");
            this.firstcanvasItem=document.querySelector(".canvas-content-item");
            this.fileSubmitBtn=document.querySelector("#submit");
            this.imageList=document.querySelector(".image-lists");
          },

          bindEventsToDOM:function(){
           this.addTextBtn.addEventListener("click",this.addNewTextNode.bind(this),false);
           var that=this;
           this.addImageToCanvasBtn.forEach(function(imageItem){
            (imageItem).addEventListener("click",that.addNewImageNode.bind(that),false);
           });
           this.fileSubmitBtn.addEventListener("click",this.uploadFile.bind(this),false);
         },

         addNewTextNode:function(){
           var div = document.createElement('div');
           div.setAttribute('class','canvas-content-item');
           div.innerHTML=this.textNode;
           div.addEventListener('mouseover',mouseOverListener,false);
           div.addEventListener('mouseout',mouseOutListener,false);
           div.addEventListener('mousedown',mouseDownListener,false);
           this.canvasAreaVar.appendChild(div);
          },

          addNewImageNode:function(e){
            var src=e.currentTarget.children[0].getAttribute('src');
            var div = document.createElement('div');
            div.setAttribute('class','canvas-content-item');
            div.innerHTML='<span class="delete-node" onClick="deleteItem(event)"><i class="ion-android-close"></i></span><img src="'+src+'" class="canvas-image-item"/>';
            div.addEventListener('mouseover',mouseOverListener,false);
            div.addEventListener('mouseout',mouseOutListener,false);
            div.addEventListener('mousedown',mouseDownListener,false);
            this.canvasAreaVar.appendChild(div);
           },
           loadAllImages:function(){
             var that=this;
             var xhr = new XMLHttpRequest();
             xhr.open('GET', '/images', true);
             xhr.onload = function () {
                      if (xhr.status === 200) {
                      JSON.parse(xhr.response).forEach(function(url){
                        var li = document.createElement('li');
                        li.setAttribute('class','add-image-btn');
                        li.innerHTML='<img src="'+url+'" class="img-rounded" />';
                        li.addEventListener('click',that.addNewImageNode.bind(that),false);
                        that.imageList.appendChild(li);
                      });
                      }else{
                        alert("Error occurred");
                      }
                    };
                      xhr.send();;
           },

           uploadFile:function(e){
             var fileField=document.getElementById('upload').value
             if(!fileField){
               alert('Choose .jpg for .png file ');
               return false;
             }
             var that=this;
             var formData= new FormData(document.forms[0]);
             var xhr = new XMLHttpRequest();
             xhr.open('POST', '/uploads', true);
             e.target.innerHTML='Uploading';
             xhr.onload = function () {
                      if (xhr.status === 200) {
                        // File(s) uploaded.
                         e.target.innerHTML = 'Upload';
                         var fileName=JSON.parse(xhr.response).file;

                         var li = document.createElement('li');
                         li.setAttribute('class','add-image-btn');
                         li.innerHTML='<img src="'+fileName+'" class="img-rounded" />';
                         li.addEventListener('click',that.addNewImageNode.bind(that),false);
                         that.imageList.appendChild(li);

                      } else {
                        alert('An error occurred!');
                      }
                    };

                    xhr.send(formData);
           },


        init:function(){
            this.domInitiate();
            this.bindEventsToDOM();
            this.loadAllImages();
          }
    };

      obj.init();

})();
