AFRAME.registerComponent("paintball", {
    init: function () {
      this.shootPaintball();
    },
    shootPaintball: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "z") {
          var paintball = document.createElement("a-entity");
  
          paintball.setAttribute("geometry", {
            primitive: "sphere",
            radius: 0.1,
          });
  
          paintball.setAttribute("material", "color", "purple");
  
          var cam = document.querySelector("#camera");
  
          pos = cam.getAttribute("position");
  
          paintball.setAttribute("position", {
            x: pos.x,
            y: pos.y,
            z: pos.z,
          });
  
          var camera = document.querySelector("#camera").object3D;
  
          //get the camera direction as Three.js Vector
          var direction = new THREE.Vector3();
          camera.getWorldDirection(direction);
  
          //set the velocity and it's direction
          paintball.setAttribute("velocity", direction.multiplyScalar(-10));
  
          var scene = document.querySelector("#scene");
  
          //set the paintball as the dynamic entity
          paintball.setAttribute("dynamic-body", {
            shape: "sphere",
            mass: "0",
          });
  
          //add the collide event listener to the paintball
          paintball.addEventListener("collide", this.removePaintball);
  
          scene.appendChild(paintball);
  
          //shooting sound
          this.shootSound();
        }
      });
    },
    removePaintball: function (e) {
      //paintball element
      var element = e.detail.target.el;
  
      //element which is hit
      var elementHit = e.detail.body.el;
  
      if (elementHit.id.includes("carboard")) {
        elementHit.setAttribute("material", {
          opacity: 1,
          transparent: true,
          color:"purple"
        });
  
        //impulse and point vector
        var impulse = new CANNON.Vec3(-2, 2, 1);
        var worldPoint = new CANNON.Vec3().copy(
          elementHit.getAttribute("position")
        );
  
        elementHit.body.applyImpulse(impulse, worldPoint);
  
        //remove event listener
        element.removeEventListener("collide", this.removePaintball);
  
        //remove the paintball from the scene
        var scene = document.querySelector("#scene");
        scene.removeChild(element);
      }
    },
    shootSound: function () {
      var entity = document.querySelector("#sound1");
      entity.components.sound.playSound();
    },
  });
  
  