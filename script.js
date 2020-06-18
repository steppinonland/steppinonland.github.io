$("document").ready(function () {
    $("img").addClass("animated fadeInDown");
    $("h1").addClass("animated fadeInDown");
    $("h2").addClass("animated fadeInDown");
    $("h3").addClass("animated fadeInDown");
    $("h4").addClass("animated fadeInDown");
    $("h5").addClass("animated fadeInDown");
    $("h6").addClass("animated fadeInDown");
    $("p").addClass("animated fadeInDown");
    $("hr").addClass("animated fadeInDown");
    $("i").addClass("animated fadeInDown");
    $("section").addClass("animated fadeInDown");
    $("article").addClass("animated fadeInDown");
    $("ul").addClass("animated fadeInDown");
    
    $.scrollIt();
  });

  paper.install(window);
  paper.setup(document.getElementById("canvas"));
  /* ====================== *
   *                        *
   * ====================== */
  var wave;
  var segmentAmount = 5;
  var waveHeight = 15;
  
  initiateWave();
  
  function initiateWave() {
    wave = new Path({
      fillColor: 'black',
      strokeColor: 'black',
      strokeWidth: 5,
      closed: true,
    });
    for (var i = 0; i <= segmentAmount; i++) {
      wave.add(new Point((i / segmentAmount) * view.size.width, view.size.height));
    }
    // Complete Shape
    wave.add(new Point(view.size.width, view.size.height));
    wave.add(new Point(0, view.size.height));
  }
  
  /* ====================== *
   * Animation              *
   * ====================== */
  view.onFrame = function(event) {
      for (var i = 0; i <= segmentAmount; i++) {
          var segment = wave.segments[i];
          var sinus = Math.sin(event.time * 3 + i);
          segment.point.y = sinus * waveHeight + 25;
      }
      wave.smooth();
  }
  
  view.onResize = function() {
    wave.remove();
    initiateWave();
  };