AFRAME.registerComponent("home", {
  schema: {
    state: { type: "string", default: "places-list" },
    selectedCard: { type: "string", default: "#card1" },
    zoomAspectRatio: { type: "number", default: 1 }
  },
  init: function() {
    this.placesContainer = this.el;
    this.cameraEl = document.querySelector("#camera");
    this.createCards();
  },
  createPlace: function(){
    const details={
      home:{
        position:{x:-9 ,y:34,z:-100},
        rotation:{x:0 ,y:0,z:0},
        src:"./assets/360_images/home/Home.jpg",
        title:"My Home",
        id:"home"
      },
      houseInterior:{
        position:{x:4.6 ,y:-5.5,z:25},
        rotation:{x:180 ,y:0,z:0},
        src:"./assets/360_images/home/HouseInterior.jpg",
        title:"My House",
        id:"houseInterior"
      }
    };
    for (var key in details) {
      const item= details[key];
      const thumbNail=this.createthumbNail(item);
      const title=this.createTitleEl(item);
      thumbNail.appendChild(title);
      this.placesContainer.appendChild(thumbNail);

    }
  },
  createthumbNail:function(item){
   const entityEl = document.createElement("a-entity")
   const id= `place${item.id}`;
   entityEl.setAttribute("visible", true);
   entityEl.setAttribute("id",id);
   entityEl.setAttribute("geometry",{
    primitive:"circle",
    radius:3
   });
   entityEl.setAttribute("position",item.position)
   entityEl.setAttribute("rotation",item.rotation)
   entityEl.setAttribute("material",{src:item.src,opacity:0.6});
   entityEl.setAttribute("cursor-listener",{});
   return entityEl;

  },
}
)