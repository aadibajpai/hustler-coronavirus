Plotly.d3.csv("https://raw.githubusercontent.com/aadibajpai/hustler-coronavirus/master/daily-student-cases.csv",
    function (err, rows) {

        function unpack(rows, key) {
            return rows.map(function (row) {
                return row[key];
            });
        }

        let trace1 = {
            x: unpack(rows, 'Category'),
            y: unpack(rows, "Undergraduate students living on campus"),
            type: 'scatter',
            mode: 'lines',
            name: 'Undergrad - On Campus',
            // hovertext: 'On Campus',
            // hoverinfo: 'y+text,'
            hoverlabel: {namelength: -1}
        };

        let trace2 = {
            x: unpack(rows, 'Category'),
            y: unpack(rows, "Undergraduate students living off campus"),
            type: 'scatter',
            mode: 'lines',
            name: 'Undergrad - Off Campus',
            // hovertext: 'Off Campus',
            // hoverinfo: 'y+text',
            hoverlabel: {namelength: -1}
        };

        let trace3 = {
            x: unpack(rows, 'Category'),
            y: unpack(rows, "Graduate and professional students living off campus"),
            type: 'scatter',
            mode: 'lines',
            name: 'Graduate/Professional',
            // hovertext: 'Off Campus',
            // hoverinfo: 'y+text',
            hoverlabel: {namelength: -1}
        };

        let layout = {
            title: 'COVID-19 Tracker at Vanderbilt',
            showlegend: true,
            legend: {
                x: 2,
                xanchor: 'right',
                y: 1
            },
            annotations: [{
                xref: 'paper',
                yref: 'paper',
                x: 0.03,
                xanchor: 'right',
                y: 1,
                yanchor: 'bottom',
                text: 'Positive Cases',
                showarrow: false
            }, {
                xref: 'paper',
                yref: 'paper',
                x: 1.02,
                xanchor: 'left',
                y: 0.1,
                yanchor: 'top',
                text: 'Date',
                showarrow: false
            }]
        };

        let config = {responsive: true}

        let data = [trace1, trace2, trace3];

        Plotly.newPlot('covid-vandy', data, layout, config);

    });
