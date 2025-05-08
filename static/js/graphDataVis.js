function createDataSubset(data, wantedCountries){
    var subset = [];

    wantedCountries = wantedCountries.map((x) => x.toLowerCase());

    for(var i = 0; i < data.length; i++){
        if(wantedCountries.includes(data[i].name.toLowerCase())){
            subset.push(data[i]);
        }
    }

    return subset
}

function sliceData(sliceAmount, data){

    var newData = []

    for(var i = 0; i < data.length; i++){
        var newEntry = {
            "name": data[i].name,
            "data": data[i].data.slice(sliceAmount)
        };

        newData.push(newEntry);
    }

    return newData
}

function createGraphs(graphData){

    // TOP POLLUTERS GRAPH MINUS CHINA
    var cumulativeSubsetTOP = createDataSubset(graphData.cumulative, ["Russia", "United States", "Japan", "Germany"]);
    var cumulativeSubsetTOPsliced = sliceData(239, cumulativeSubsetTOP)

    var cumulative1989onwards = graphData.cumulativeX.slice(239);

    const top10pollutersGraph = Highcharts.chart('emissionsDownGraph', {

        chart: {
            backgroundColor: "#d9d8d7"
        },

        title: {
            text: 'Cumulative tonnes of CO₂ emitted by some of the top polluters (Excluding China)',
            align: 'left'
        },

        yAxis: {
            title: {
                text: 'Cumulative Tonnes of CO₂',
                style: {
                    fontSize:'12px',
                    fontWeight: 'bold' 
                }
            },
            labels: {
                style: {
                    fontSize:'9px'
                }
            }
        },

        xAxis: {
            title: {
                text: 'Year',
                style: {
                    fontSize:'12px',
                    fontWeight: 'bold' 
                }
            },
            labels: {
                style: {
                    fontSize:'11px'
                }
            },
            angle: 50,
            categories: cumulative1989onwards.map((x) => x.toString())
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            itemStyle: {
                fontSize: '9px'
            }
        },

        accessibility: {
            enabled: false
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                marker: {
                    enabled: false,
                }
            }
        },

        series: cumulativeSubsetTOPsliced,

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        },

        credits: {
            enabled: false
        },

    });

    // TOP POLLUTERS GRAPH WITH CHINA
    var cumulativeSubsetTOPplusChina = createDataSubset(graphData.cumulative, ["Russia", "China",  "United States", "Japan", "Germany"]);
    var cumulativeSubsetTOPplusChinaSliced = sliceData(239, cumulativeSubsetTOPplusChina)

    const top10pollutersGraphWithChina = Highcharts.chart('emissionsDownGraphWithChina', {

        chart: {
            backgroundColor: "#d9d8d7"
        },

        title: {
            text: 'Cumulative tonnes of CO₂ emitted by some of the top polluters (Including China)',
            align: 'left'
        },

        yAxis: {
            title: {
                text: 'Cumulative Tonnes of CO₂',
                style: {
                    fontSize:'12px',
                    fontWeight: 'bold' 
                }
            },
            labels: {
                style: {
                    fontSize:'9px'
                }
            }
        },

        xAxis: {
            title: {
                text: 'Year',
                style: {
                    fontSize:'12px',
                    fontWeight: 'bold' 
                }
            },
            labels: {
                style: {
                    fontSize:'11px'
                }
            },
            angle: 50,
            categories: cumulative1989onwards.map((x) => x.toString())
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            itemStyle: {
                fontSize: '9px'
            }
        },

        accessibility: {
            enabled: false
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                marker: {
                    enabled: false,
                }
            }
        },

        series: cumulativeSubsetTOPplusChinaSliced,

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        },

        credits: {
            enabled: false
        },

    });

    // TOP POLLUTERS GRAPH WITH CHINA (PER CAPITA)
    var percapitaSubsetTOPplusChina = createDataSubset(graphData.perCapita, ["Russia", "China", "United States", "Japan", "Germany"]);

    const top10pollutersGraphWithChinaPERCAPITA = Highcharts.chart('emissionsDownGraphWithChinaPERCAPITA', {

        chart: {
            backgroundColor: "#d9d8d7"
        },

        title: {
            text: 'Tonnes of CO₂ emitted per capita by some of the top polluters (Including China)',
            align: 'left'
        },

        yAxis: {
            title: {
                text: 'Tonnes of CO₂ per Capita',
                style: {
                    fontSize:'12px',
                    fontWeight: 'bold' 
                }
            },
            labels: {
                style: {
                    fontSize:'9px'
                }
            }
        },

        xAxis: {
            title: {
                text: 'Year',
                style: {
                    fontSize:'12px',
                    fontWeight: 'bold' 
                }
            },
            labels: {
                style: {
                    fontSize:'11px'
                }
            },
            angle: 50,
            categories: graphData.perCapitaX.map((x) => x.toString())
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            itemStyle: {
                fontSize: '9px'
            }
        },

        accessibility: {
            enabled: false
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                marker: {
                    enabled: false,
                }
            }
        },

        series: percapitaSubsetTOPplusChina,

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        },

        credits: {
            enabled: false
        },

    });

};

