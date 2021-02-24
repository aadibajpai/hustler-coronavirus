Plotly.d3.csv("https://cors.aadibajpai.workers.dev/?https://docs.google.com/spreadsheets/d/1QorVReLcwOEsqDEgWhVAlIlU3zJRNwu8m975aQ8MXpE/gviz/tq?tqx=out:csv&range=A:D",
    function (err, rows) {

        function unpack(rows, key) {
            return rows.map(function (row) {
                return row[key];
            });
        }

        onc = unpack(rows, "Undergrad - On Campus Asymptomatic").reverse()
        offc = unpack(rows, "Undergrad - Off Campus Asymptomatic").reverse()
        grad = unpack(rows, "Graduate/Professional Asymptomatic").reverse()
        dates = unpack(rows, '').reverse()
        // avg = grad.map((val, i) => (Number(val) + Number(onc[i]) + Number(offc[i])) / 3)

        // console.log(avg);

        let trace1 = {
            x: dates,
            y: onc,
            type: 'scatter',
            mode: 'lines',
            name: 'Undergrad - On Campus Asymptomatic',
            // hovertext: 'On Campus',
            // hoverinfo: 'y+text,'
            hoverlabel: {namelength: -1}
        };

        let trace2 = {
            x: dates,
            y: offc,
            type: 'scatter',
            mode: 'lines',
            name: 'Undergrad - Off Campus Asymptomatic',
            // hovertext: 'Off Campus',
            // hoverinfo: 'y+text',
            hoverlabel: {namelength: -1}
        };

        let trace3 = {
            x: dates,
            y: grad,
            type: 'scatter',
            mode: 'lines',
            name: 'Graduate/Professional Asymptomatic',
            // hovertext: 'Off Campus',
            // hoverinfo: 'y+text',
            hoverlabel: {namelength: -1}
        };

        // let trace4 = {
        //     x: unpack(rows, ''),
        //     y: avg,
        //     type: 'scatter',
        //     mode: 'lines',
        //     name: 'Average',
        //     // hovertext: 'Off Campus',
        //     // hoverinfo: 'y+text',
        //     hoverlabel: {namelength: -1}
        // };

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
