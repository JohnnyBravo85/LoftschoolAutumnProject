const paralax = document.querySelector(".paralax"),
      paralaxLayers = paralax.children,
      paralaxLayersLength = paralaxLayers.length,
      dataSpeedArray = ["0.3","0.7", "0.5", "0.8", "0.01", "0.01"];

for(let i = 0; i < paralaxLayersLength; ++i) {
  paralaxLayers[i].setAttribute("data-speed", dataSpeedArray[i]);
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

