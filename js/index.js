(function(window, $) {

  // シーン1
  (function(){

    //表示位置
    var c1 = [100, 90, 30];
    var c2 = [200, 120, 20];
    var carray = [c1, c2];

    var svg = d3.select("#scene2_image1 svg")
      .attr({
        width: 370,
        height: 390
      });

    var shuffle = function() {return Math.random()-.5};

    //ランダムに50色のカラーリストを作成する
    var color =d3.scale.category20b();
    var color2 = d3.scale.category20();
    //var color3 = d3.scale.category10();
    var cl = color.range();
    var colorList = cl.concat(color2.range());
    //colorList = colorList.concat(color3.range());
    colorList.sort(shuffle);

    // [x, y, 色, 初期,サイズ]
    var carry = [
      { x: 65, y: 105, start: 0, end: 30},
      { x: 15, y: 160, start: 0, end: 15},
      { x: 55, y: 235, start: 0, end: 36},
      { x: 125, y: 330, start: 0, end: 47},
      { x: 170, y: 50, start: 0, end: 50},
      { x: 260, y: 105, start: 0, end: 32},
      { x: 300, y: 200, start: 0, end: 42},
      { x: 260, y: 290, start: 0, end: 35},
      { x: 205, y: 340, start: 0, end: 15},
      { x: 340, y: 110, start: 0, end: 15}
    ]

    var draw = function(){

      // センターサークル
      svg.append("circle")
        .attr("cx", 170)
        .attr("cy", 190)
        .attr("r", 0)
        .attr("fill","red").transition().duration(1000)
        .attr({
          'r': 65
        });

      // アウターサークル
      var circles = svg.selectAll('circle').data(carry).enter().append('circle')
        .attr({
          'cx': function(d) { return d.x; },
          'cy': function(d) { return d.y; },
          'r': function(d) { return d.start; },
          'fill': function(d,i) { return colorList[i]; }
        });

      circles.data(carry).transition()
        .delay(
          function(d) { return Math.random()*(1500-500)+500})
        .duration(
          function(d) { return Math.random()*(1500-500)+500})
        .attr({
          'r': function(d) { return d.end; }
        });
    }

    $(window).scroll(function() {
      if( $(this).scrollTop() > 60 && !$(".scene2").hasClass("in_view")){
        $(".scene2").addClass("in_view");
        draw();
      }
    });
    $(window).scroll();

  })();

})(this, jQuery);