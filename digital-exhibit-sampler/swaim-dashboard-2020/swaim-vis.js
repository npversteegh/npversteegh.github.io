fetch('graph_data/counts.json')
    .then(response => response.json())
    .then(function(data) {
        console.log(data);
        document.getElementById('object-count').innerHTML = data['object'];
        document.getElementById('interviewee-count').innerHTML = data['interviewee'];
        document.getElementById('interviews-count').innerHTML = data['interviews'];
        document.getElementById('broadcasts-count').innerHTML = data['broadcasts'];
    });

fetch('graph_data/dates.json')
    .then(response => response.json())
    .then(function(data) {
        Plotly.newPlot("dates",
                       data,
                       {
                           barmode: "overlay",
                           margin: {
                               l: 40,
                               r: 40,
                               t: 70,
                               b: 40
                           },
                           legend: {
                               x: 0,
                               y: 1.3
                           }
                       });
    });

fetch('graph_data/genders.json')
    .then(response => response.json())
    .then(function(data) {
        Plotly.newPlot("genders",
                       data,
                       {
                           margin: {
                               l: 40,
                               r: 40,
                               t: 70,
                               b: 40
                           },
                           legend: {
                               x: 0,
                               y: 1.3
                           }
                           // height: 400,
                           // width: 500
                       });
    });

fetch('graph_data/languages.json')
    .then(response => response.json())
    .then(function(data) {
        Plotly.newPlot("languages",
                       data,
                       {
                           margin: {
                               l: 120,
                               r: 30,
                               t: 70,
                               b: 40
                           },
                           title: "Top 20 languages spoken"
                           // height: 400,
                           // width: 500
                       });
    });

fetch('graph_data/occupations.json')
    .then(response => response.json())
    .then(function(data) {
        Plotly.newPlot("occupations",
                      data,
                      {
                          margin: {
                              l: 120,
                              r: 30,
                              t: 70,
                              b: 40
                          },
                          title: "Top 20 occupations"
                          // height: 500,
                          // width: 500
                      });
    });
