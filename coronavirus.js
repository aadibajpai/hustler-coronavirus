Plotly.d3.csv("https://cors.aadibajpai.workers.dev/?https://docs.google.com/spreadsheets/d/1QorVReLcwOEsqDEgWhVAlIlU3zJRNwu8m975aQ8MXpE/gviz/tq?tqx=out:csv&range=A:D",
    function (err, rows) {

        function unpack(rows, key) {
            return rows.map(function (row) {
                return row[key];
            });
        }

        let trace1 = {
            x: unpack(rows, ''),
            y: unpack(rows, "Undergrad - On Campus"),
            type: 'scatter',
            mode: 'lines',
            name: 'Undergrad - On Campus',
            // hovertext: 'On Campus',
            // hoverinfo: 'y+text,'
            hoverlabel: {namelength: -1}
        };

        let trace2 = {
            x: unpack(rows, ''),
            y: unpack(rows, "Undergrad - Off Campus"),
            type: 'scatter',
            mode: 'lines',
            name: 'Undergrad - Off Campus',
            // hovertext: 'Off Campus',
            // hoverinfo: 'y+text',
            hoverlabel: {namelength: -1}
        };

        let trace3 = {
            x: unpack(rows, ''),
            y: unpack(rows, "Graduate/Professional"),
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
                "orientation": "h",
                yref: 'paper',
                y: -0.2,
                yanchor: 'top',
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
                x: 1.01,
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
