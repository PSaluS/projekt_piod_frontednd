import Chart from 'chart.js';

export default class Times {

    constructor(inputData) {

        this.data = [];
        this.order = {
            date: false,
            value: true
        }
    }

    fill(inputData) {

        for (let i=0; i< inputData.value.length; i++ ) {
            this.data.push(
                {
                    date: inputData.date[i],
                    value: inputData.value[i].toFixed(2)
                }
            )
        }
        this.buildTable();
        this.buildChart();
    }

    buildTable() {

        const root = document.getElementById('data');

        let newTab= `<table id='table'>
            <tr>
            <td id="Date" class='Sort'>Date</td>
            <td id="Value" class='Sort'>Value</td>
            </tr>`;

            this.data.forEach((element, index)=>{
                newTab += `<tr>
                <td><input id='date_${index}' class='date' name='date' type="date" value='${element.date}'></td>
                <td><input id='value_${index}' class='value' name='value' type="number" value='${element.value}'></td>
                </tr>`;
            })
            newTab += '</table>';
            root.innerHTML = newTab;

            document.getElementById('Date').onclick = ()=> this.sortDate();
            document.getElementById('Value').onclick = ()=> this.sortValue();
    }

    buildChart() {

        const root = document.getElementById('chart');
        const chartValues = [];
        const chartData = [];
        this.data.forEach((element)=>{
            chartValues.push(Number(element.value));
            chartData.push(new Date(element.date));
        })
        console.log(chartData);
        root.innerHTML =
            `<canvas id="myChart" class="ChartT" width="1250" height="600"></canvas>`;
            root.setAttribute("style", "left: 200px;");;

        this.ctx = document.getElementById('myChart').getContext('2d');
        this.myChart = new Chart(this.ctx, {
                type: 'line',
                data: {
                    labels: chartData,
                    datasets: [{
                        label: 'Amazon stock prices',
                        data: chartValues,
                        backgroundColor: "rgba(255,0,0,0.1)",
                        borderColor:"rgb(255, 0, 0)",
                        pointRadius: 1
                    }],
                },
                options: {
                        scales: {
                            xAxes: [{
                                type: 'time',
                                time: {
                                    displayFormats: {
                                        month: 'YYYY MM'
                                    }
                                }
                            }],
                            yAxes: [{
                                ticks: {
                                    max: 3200,
                                    min: 0,
                                    stepSize: 100
                                }
                            }]
                        },
                        responsive: false
                }
            });
            console.log(this.myChart)
}

    sortDate() {
        if(this.order.date == true)
        {
            this.data.sort((a,b)=>{
                if (a.date < b.date) {
                    return -1;
                  }
                if (a.date > b.date) {
                    return 1;
                  }
                return 0;
            });
        } else {
            this.data.sort((a,b)=>{
                if (a.date < b.date) {
                    return 1;
                  }
                if (a.date > b.date) {
                    return -1;
                  }
                return 0;
            });
        }
        this.order.date = !this.order.date;
        this.buildTable();
    }

    sortValue() {
        if(this.order.value == true)
        {
            this.data.sort((a,b)=>{
                if (a.value < b.value) {
                    return -1;
                  }
                if (a.value > b.value) {
                    return 1;
                  }
                return 0;
            });
        } else {
            this.data.sort((a,b)=>{
                if (a.value < b.value) {
                    return 1;
                  }
                if (a.value > b.value) {
                    return -1;
                  }
                return 0;
            });
        }
        this.order.value = !this.order.value;
        this.buildTable();
    }
}