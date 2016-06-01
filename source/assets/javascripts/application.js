//= require_tree .

function print_bar(max_width, max_height, font_size_param, fill_bar, name, container_name){
    var data = [1000, fill_bar*10]; // here are the data values; v1 = total, v2 = current value
    var chart = d3.select(container_name).append("svg") // creating the svg object inside the container div
      .attr("class", "chart")
      .attr("width", max_width) // bar has a fixed width
      .attr("height", max_height);

    var x = d3.scale.linear() // takes the fixed width and creates the percentage from the data values
      .domain([0, d3.max(data)])
      .range([0, max_width*0.8]);

    chart.selectAll("rect") // this is what actually creates the bars
      .data(data)
    .enter().append("rect")
      .attr("width", x)
      .attr("height", max_height*0.5)
      .attr("x",max_width*.01)
      .attr("y",0)

    chart.append("rect")
      .attr("width", max_width*.01*2)
      .attr("height", max_height*0.5)
      .attr("rx",max_width*.02*2)
      .attr("ry",max_width*.02*2)
      .style("fill","#8A9CBF");

    chart.append("rect")
      .attr("width", max_width*.01*2)
      .attr("height", max_height*0.5)
      .attr("rx",max_width*.02*2)
      .attr("ry",max_width*.02*2)
      .attr("x", max_width*.8)
      .style("fill",function(){
        if(fill_bar == 100){
          return "#8A9CBF"
        } else {
          return "#F1F5F6"
        }});

    chart.selectAll("text") // adding the text labels to the bar
      .data(data)
    .enter().append("text")
      .attr("x", function(d){
          if(x(d)==max_width*0.8 && fill_bar !=100){
            return max_width*0.05
          } else if (fill_bar > 90 && fill_bar <= 100) {
            return x(d)
          } else {
            return x(d)+max_width*.09
          }
        })
      .attr("y", max_height*0.25) // y position of the text inside bar
      .attr("dx", -3) // padding-right
      .attr("dy", ".35em") // vertical-align: middle
      .attr("text-anchor", function(d){
        if(x(d)==max_width*0.8 && fill_bar !=100){
          return "left"
        } else {
          return "end"
        }
      })// text-align: right
      .attr("font-size", font_size_param)
      .style("fill", function(d) {
        if (x(d)==max_width*0.8 && fill_bar !=100) {
          return "#F1F5F6";
        } else if (fill_bar > 90 && fill_bar <=100) {
          return "#fff"
        } else {
          return "#8A9CBF"
        }
      })
      .text(function(d){
        if(x(d)==max_width*0.8 && fill_bar !=100){
          return name
        } else {
          return String(fill_bar) + "%"
        }
      });

      if (fill_bar == 100) {
        chart.append("text")
          .attr("x", max_width*0.05)
          .attr("y", max_height*0.25) // y position of the text inside bar
          .attr("dx", -3) // padding-right
          .attr("dy", ".35em") // vertical-align: middle
          .attr("text-anchor", "left")// text-align: right
          .attr("font-size", font_size_param)
          .style("fill", "#F1F5F6")
          .text(name);
      }
    return null
  };

//print_bar(Width px -int , Height px - int, fontsize-string, fill % - int, title -str, container)
print_bar(1080, 60, "18px", 62, "","#progressbar");
print_bar(450, 45, "12px", 65, "Sindicatos","#r1");
print_bar(450, 45, "12px", 49, "Partido Político","#r2");
print_bar(450, 45, "12px", 39, "Municipios","#r3");
print_bar(450, 45, "12px", 39, "Fondos","#r4");
print_bar(450, 45, "12px", 31, "Ejecutivo","#r5");
print_bar(450, 45, "12px", 100, "Jalisco","#r6");
print_bar(450, 45, "12px", 76, "Oaxaca","#r7");
print_bar(450, 45, "12px", 71, "Puebla","#r8");
print_bar(450, 45, "12px", 70, "Querétaro","#r9");
print_bar(450, 45, "12px", 64, "Hidalgo","#r10");
