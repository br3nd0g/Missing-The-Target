
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

    // CUMULATIVE WORLD EMISSIONS GRAPH
    var worldSubset = createDataSubset(graphData.cumulative, ["World"]);

    const worldEmissions = Highcharts.chart('worldEmissions', {

        chart: {
            backgroundColor: "#d9d8d7"
        },

        title: {
            text: 'Cumulative CO₂ World Emissions',
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
            categories: graphData.cumulativeX.map((x) => x.toString())
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
            }
        },

        series: worldSubset,

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

    // TOP 10 POLLUTERS GRAPH
    var cumulativeSubsetTOP10 = createDataSubset(graphData.cumulative, ["Russia", "China", "India", "United States", "Japan", "Indonesia", "Iran", "Germany", "Saudi Arabia", "South Korea"]);
    var cumulativeSubsetTOP10sliced = sliceData(100, cumulativeSubsetTOP10)

    var cumulative1850onwards = graphData.cumulativeX.slice(100);

    const top10pollutersGraph = Highcharts.chart('generalEmissionsGraph', {

        chart: {
            backgroundColor: "#d9d8d7"
        },

        title: {
            text: 'Cumulative tonnes of CO₂ emitted by the top 10 polluting countries',
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
            categories: cumulative1850onwards.map((x) => x.toString())
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
            }
        },

        series: cumulativeSubsetTOP10sliced,

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

    // PARIS AGREEMENT GRAPH
    var cumulativeSubsetTOP10sliced2005 = sliceData(265, cumulativeSubsetTOP10);

    var cumulative2005onwards = graphData.cumulativeX.slice(265);

    const parisAgreementGraph = Highcharts.chart('parisGraph', {

        chart: {
            backgroundColor: "#d9d8d7"
        },

        title: {
            text: 'Cumulative tonnes of CO₂ emitted by the top 10 polluting countries from 2015-2022',
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
            categories: cumulative2005onwards.map((x) => x.toString())
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

        series: cumulativeSubsetTOP10sliced2005,

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

    // USA 'MEETING GOALS' GRAPH
    var perCapitaSubsetUSA = createDataSubset(graphData.perCapita, ["United States"]);
    perCapitaSubsetUSA = sliceData(14, perCapitaSubsetUSA);

    var perCapita2004onwards = graphData.perCapitaX.slice(14);

    const usaMeetingGraph = Highcharts.chart('usaGraph', {

        chart: {
            backgroundColor: "#d9d8d7"
        },

        title: {
            text: 'Tonnes of CO₂ per capita emitted by the USA',
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
            categories: perCapita2004onwards.map((x) => x.toString())
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
            }
        },

        series: perCapitaSubsetUSA,

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

