AFRAME.registerComponent("wire-fence", {
    init: function () {
      //starting x position
      posX = -25;
      //starting z-position
      posZ = 80;
  
      for (var i = 0; i < 10; i++) {
        //create wire-fence entity
        var cardboard1 = document.createElement("a-entity");
        var cardboard2 = document.createElement("a-entity");
        var cardboard3 = document.createElement("a-entity");
        var cardboard4 = document.createElement("a-entity");
        var cardboard5 = document.createElement("a-entity");
        var cardboard6 = document.createElement("a-entity");
        var cardboard7 = document.createElement("a-entity");
        var cardboard8 = document.createElement("a-entity");
  
  
        //set x, y and z position
        posX = posX + 5;
        posY = 2.5;
        posZ = posZ - 10;
  
        //scale 
        var scale = { x: 2, y: 2, z: 2 };
  
        //set the id
        cardboard1.setAttribute("id", "cardboard1" + i);
        cardboard2.setAttribute("id", "cardboard2" + i);
        cardboard3.setAttribute("id", "cardboard3" + i);
        cardboard4.setAttribute("id", "cardboard4" + i);
        cardboard5.setAttribute("id", "cardboard5" + i);
        cardboard6.setAttribute("id", "cardboard6" + i);
        cardboard7.setAttribute("id", "cardboard7" + i);
        cardboard8.setAttribute("id", "cardboard8" + i);
  
        //set the position
        cardboard1.setAttribute("position", { x: posX, y: 2.5, z: -35 });
        cardboard2.setAttribute("position", { x: posX, y: 2.5, z: 85 });
        cardboard3.setAttribute("position", { x: -30, y: 2.5, z: posZ });
        cardboard4.setAttribute("position", { x: 50, y: 2.5, z: posZ });
        cardboard5.setAttribute("position", { x: posX, y: 2.5, z: 105 });
        cardboard6.setAttribute("position", { x: 30, y: 2.5, z: posZ });
        cardboard7.setAttribute("position", { x: posX, y: 2.5, z: -85 });
        cardboard8.setAttribute("position", { x: -50, y: 2.5, z: posZ });

  
        //set the scale
        cardboard1.setAttribute("scale", scale);
        cardboard2.setAttribute("scale", scale);
        cardboard3.setAttribute("scale", scale);
        cardboard4.setAttribute("scale", scale);
        cardboard5.setAttribute("scale", scale);
        cardboard6.setAttribute("scale", scale);
        cardboard7.setAttribute("scale", scale);
        cardboard8.setAttribute("scale", scale);
  
        //set the model
        cardboard1.setAttribute(
            "images",
            "./images/dowload1.png"
        );
  
        cardboard2.setAttribute(
            "images",
            "./images/dowload2.png"
        );
  
        cardboard3.setAttribute(
            "images",
            "./images/dowload3.png"
        );
  
        cardboard4.setAttribute(
            "images",
            "./images/dowload4.png"
        );

        cardboard5.setAttribute(
            "images",
            "./images/dowload5.png"
        );

        cardboard6.setAttribute(
            "images",
            "./images/dowload6.png"
        );

        cardboard7.setAttribute(
            "images",
            "./images/dowload7.png"
        );

        cardboard8.setAttribute(
            "images",
            "./images/dowload8.png"
        );
  
        //set the rotation
        cardboard3.setAttribute("rotation", { x: 0, y: 90, z: 0 });
        cardboard4.setAttribute("rotation", { x: 0, y: 90, z: 0 });
        cardboard7.setAttribute("rotation", { x: 0, y: 90, z: 0 });
        cardboard8.setAttribute("rotation", { x: 0, y: 90, z: 0 });
  
        //set the physics body
        cardboard1.setAttribute("static-body", {});
        cardboard2.setAttribute("static-body", {});
        cardboard3.setAttribute("static-body", {});
        cardboard4.setAttribute("static-body", {});
        cardboard5.setAttribute("static-body", {});
        cardboard6.setAttribute("static-body", {});
        cardboard7.setAttribute("static-body", {});
        cardboard8.setAttribute("static-body", {});
  
        var sceneEl = document.querySelector("#scene");
        //attach the entity to the scene
        sceneEl.appendChild(cardboard1);
        sceneEl.appendChild(cardboard2);
        sceneEl.appendChild(cardboard3);
        sceneEl.appendChild(cardboard4);
        sceneEl.appendChild(cardboard5);
        sceneEl.appendChild(cardboard6);
        sceneEl.appendChild(cardboard7);
        sceneEl.appendChild(cardboard8);
  
      }
    },
  });
  
  //cardboards
  //Add the component code here