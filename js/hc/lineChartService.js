app.service('LineChartService',function(){
  this.createChart = function(dataYearArray,dataContribMoney,dataCashFlow,dataInvestReturn,dataPortBalance){

    $('#container').highcharts({
         chart: {
            events: {
                beforePrint: function () {
                    this.oldhasUserSize = this.hasUserSize;
                    this.resetParams = [this.chartWidth, this.chartHeight, false];
                    this.setSize(600, 400, false);
                },
                afterPrint: function () {
                    this.setSize.apply(this, this.resetParams);
                    this.hasUserSize = this.oldhasUserSize;
                }
            }
        },
        title: {
            text: 'School Fee and Portfolio Analysis',
            margin:30,
            x: -20 //center
        },
        // subtitle: {
        //     text: 'Source: WorldClimate.com',
        //     x: -20
        // },
        xAxis: {
            categories: dataYearArray
        },
        yAxis: {
            title: {
                text: 'Amount($)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        credits: {
            enabled: false
        },
        exporting:{
            enabled:false
        },
        plotOptions:{
            series:{
                marker:{
                    enabled:false
                }
            }
        },
        // tooltip: {
        //     valueSuffix: '°C'
        // },
        tooltip: {
            headerFormat: '<span style="font-weight:700;font-size:14px;">{point.key}</span><br>',
            pointFormat: '<b>{series.name} $ {point.y:.2f}</b><br/>'
            // pointFormatter: function(){
                // return '<span>{point.key}</span>' + Highcharts.numberFormat((((this.y)).toFixed(2)),2,'.')+'</b>';

            // }
        },
        legend: {
            layout: 'horizontal',
            align: 'left',
            verticalAlign: 'bottom',
            borderWidth: 0,
            width:700,
            x:12
            // x: -12
            // floating:true,
        },
        series: [{
            name: 'Contributions In',
            data: dataContribMoney
        }, {
            name: 'Cash Outflow',
            data: dataCashFlow
        }, {
            name: 'Investment Return',
            data: dataInvestReturn
        }, {
            name: 'Portfolio Balance',
            data: dataPortBalance
        }]
    });

}});