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
            name: 'Undergraduate Students living on Campus',
            // hovertext: 'On Campus',
            // hoverinfo: 'y+text,'
            hoverlabel: {namelength: -1}
        };

        let trace2 = {
            x: unpack(rows, 'Category'),
            y: unpack(rows, "Undergraduate students living off campus"),
            type: 'scatter',
            mode: 'lines',
            name: 'Undergraduate Students living off Campus',
            // hovertext: 'Off Campus',
            // hoverinfo: 'y+text',
            hoverlabel: {namelength: -1}
        };

        let trace3 = {
            x: unpack(rows, 'Category'),
            y: unpack(rows, "Graduate and professional students living off campus"),
            type: 'scatter',
            mode: 'lines',
            name: 'Graduate and professional students living off campus',
            // hovertext: 'Off Campus',
            // hoverinfo: 'y+text',
            hoverlabel: {namelength: -1}
        };

        let layout = {
            title: 'Real-Time COVID-19 Positive Cases Tracker at Vanderbilt',
            // annotations: [{
            //     xref: 'paper',
            //     yref: 'paper',
            //     x: 0,
            //     xanchor: 'right',
            //     y: 1,
            //     yanchor: 'bottom',
            //     text: 'Positive Cases',
            //     showarrow: false
            // }, {
            //     xref: 'paper',
            //     yref: 'paper',
            //     x: 1,
            //     xanchor: 'left',
            //     y: 0,
            //     yanchor: 'top',
            //     text: 'Date',
            //     showarrow: false
            // }]
        };

        let config = {responsive: true}

        let data = [trace1, trace2, trace3];

        Plotly.newPlot('covid-vandy', data, layout, config);

    });
