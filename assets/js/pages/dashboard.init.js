!(function (e) {
  "use strict";
  var r = function () {
    this.$body = e("body");
  };
  (r.prototype.init = function () {
    Morris.Line({
      element: "morris-line-example",
      data: [
        { y: "19", a: 75, b: 65 },
        { y: "20", a: 50, b: 40 },
        { y: "21", a: 75, b: 65 },
        { y: "22", a: 100, b: 90 },
      ],
      xkey: "y",
      gridLineColor: "rgba(108, 120, 151, 0.1)",
      ykeys: ["a", "b"],
      labels: ["Series A", "Series B"],
      resize: !0,
      hideHover: "auto",
      lineColors: ["#1a2942", "#3bc0c3"],
    }),
      Morris.Bar({
        element: "morris-bar-example",
        data: [
          { y: "Sunday", a: 75, b: 65, c: 20 },
          { y: "Monday", a: 50, b: 40, c: 50 },
          { y: "Tuesday", a: 75, b: 65, c: 95 },
          { y: "Wednesday", a: 50, b: 40, c: 22 },
          { y: "Thursday", a: 75, b: 65, c: 56 },
          { y: "Friday", a: 100, b: 90, c: 60 },
          { y: "Saturday", a: 100, b: 90, c: 60 },
        ],
        xkey: "y",
        ykeys: ["a", "b", "c"],
        gridLineColor: "rgba(108, 120, 151, 0.1)",
        hideHover: "auto",
        resize: !0,
        labels: ["Series A", "Series B", "Series c"],
        barColors: ["#3bc0c3", "#1a2942", "#dcdcdc"],
      }),
      e.ChatApp.init();
  }),
    (e.Dashboard = new r()),
    (e.Dashboard.Constructor = r);
})(window.jQuery),
  (function (e) {
    "use strict";
    window.jQuery.Dashboard.init();
  })(),
  $(".sparkpie-big").sparkline([3, 4, 1, 2], {
    type: "pie",
    width: "100%",
    height: "50",
    sliceColors: ["#1a2942", "#f13c6e", "#3bc0c3", "#dcdcdc"],
    offset: 0,
    borderWidth: 0,
    borderColor: "#00007f",
  });
