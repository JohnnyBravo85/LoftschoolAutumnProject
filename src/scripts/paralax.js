const viewport = 992,
      paralax = document.querySelector(".paralax"),
      paralaxLayers = paralax.children,
      paralaxLayersLength = paralaxLayers.length,
      paralaxImg = document.querySelectorAll(".paralax__img"),
      paralaxImgLenght = paralaxImg.length,
      dataSpeedArray = ["0.3","0.7", "0.5", "0.8", "0.01", "0.01"],
      pathArray = [
        "paralax-layer-01.png",
        "paralax-layer-02.png",
        "paralax-layer-03.png",
        "paralax-layer-04.png",
        "paralax-layer-05.png",
        "paralax-layer-06.png"
      ];

let makePathArrayRequire = [];

pathArray.map(function(path, i) {
  const requirePath = require(`images/content/${path}`);
  makePathArrayRequire[i] = requirePath;
  return makePathArrayRequire;
});


if(screen.width >= viewport) {

  for(let i = 0; i < paralaxLayersLength; ++i) {
  paralaxLayers[i].setAttribute("data-speed", dataSpeedArray[i]);
  paralaxLayers[i].setAttribute("src", makePathArrayRequire[i]);
  };

  for(let i = 0; i < paralaxImgLenght; ++i) {
    paralaxImg[i].setAttribute("src", makePathArrayRequire[i]);
  };

  function paralaxScroll (scroll) {
    Array.from(paralaxLayers).forEach(function(layer) {
      const dataSpeed = layer.getAttribute("data-speed"); //element.dataset.atrName метод получения атрибута
      const change = scroll * dataSpeed/10;
      layer.style.transform = `translateY(-${change}%)`;
    });
  };

  window.addEventListener('scroll', function(e) {
    const scroll = window.pageYOffset;
    paralaxScroll(scroll);
  });
}

