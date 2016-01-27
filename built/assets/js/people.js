
  window.onload = function() { init() };

  var public_spreadsheet_url = 'https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key=1pxA8TOXolXcsVmjOl6MCJRRjDTgeAQwLVyPb_hC_9FU&output=html';

  function init() {
      Tabletop.init( { key: public_spreadsheet_url,
                       callback: showInfo,
                       simpleSheet: false } )
  }

  function showInfo(data, tabletop) {
    var tableNames = tabletop.sheets("people").elements;
    var names = Object.keys(tableNames);

    function getName(d) {
      var name = d['full_name'];
      return name;
    }

    var combined = [];
    tableNames.forEach(function(d) {
       var c = {
        name: getName(d),
        department: d['Department or Organization']
       };
       combined.push(c);

      render(combined);
    });
    // console.log(combined);

    d3.select("#media-list")
      .data(combined)
    .enter().append("div");
  }

  function render(combined) {
      var peoples = d3.select("#peoples").selectAll("div.people")
        .data(combined);

      var people_enter = peoples.enter().append("div")
        .classed("people-block", true)
        .text(function(d) { return d.name; })

      var denter = people_enter.append("p")
        .classed("department", true)
        .text(function(d) { return d.department;})

 }
