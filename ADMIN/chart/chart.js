const home = document.getElementById('home')
const chat = document.getElementById('chat')
const dashboard = document.getElementById('dashboard')
const charts = document.getElementById('charts')
const Addresses = document.getElementById('Addresses')
const library = document.getElementById('library')
const logout = document.getElementById('logout')
const table = document.getElementById("pop-table")
const classes = document.getElementById('classes')
const teacherDashboard = document.getElementById("users-tab")





let ctx = document.getElementById("population-barchart").getContext('2d');
let popChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['JSS1', 'JSS2', 'JSS3', 'SSS1', 'SSS2', 'SSS3'],
        datasets: [{
            label: '',
            data: [500, 396, 172, 300, 321, 443],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                'rgb(75, 192, 192)',
                'rgb(153, 102, 255)',
                'rgb(255, 159, 64)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                'rgb(75, 192, 192)',
                'rgb(153, 102, 255)',
                'rgb(255, 159, 64)'
            ],
            borderWidth: 1
        }]

    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'F.M.S Population by class'
            },
            scales: {
                xAxes: {
                    gridLines: { display: false }
                },
                yAxes: {
                    gridLines: { display: false }
                }
            }
        }

    },

});

let ctp = document.getElementById('pie').getContext('2d')
let pChart = new Chart(ctp, {
    type: 'doughnut',
    data: {
        labels: ['JSS1', 'JSS2', 'JSS3', 'SSS1', 'SSS2', 'SSS3'],
        datasets: [{
            data: [20, 9, 32, 33, 24],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                'rgb(75, 192, 192)',
                'rgb(153, 102, 255)',
                'rgb(255, 159, 64)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                'rgb(75, 192, 192)',
                'rgb(153, 102, 255)',
                'rgb(255, 159, 64)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Admissions by class'
            },
            scales: {
                xAxes: {
                    gridLines: { display: false }
                },
                yAxes: {
                    gridLines: { display: false }
                }
            }
        }

    },
})

let ctl = document.getElementById('lines').getContext('2d')
let lChart = new Chart(ctl, {
    type: 'line',
    data: {
        labels: ['2017', '2018', '2019', '2020', '2021', '2022'],
        datasets: [{
            data: [1120, 1109, 1032, 1133, 1104, 1167],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                'rgb(75, 192, 192)',
                'rgb(153, 102, 255)',
                'rgb(255, 159, 64)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                'rgb(75, 192, 192)',
                'rgb(153, 102, 255)',
                'rgb(255, 159, 64)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Total population in recent years'
            },
            scales: {
                xAxes: {
                    gridLines: { display: false }
                },
                yAxes: {
                    gridLines: { display: false }
                }
            }
        }

    },
})

let cte = document.getElementById('exp').getContext('2d')
let eChart = new Chart(cte, {
    type: 'scatter',
    data: {
        labels: ['2017', '2018', '2019', '2020', '2021', '2022'],
        datasets: [{
            data: [200000, 300000, 103220, 245000, 200000, 300000],
            backgroundColor: [
                'rgb(255, 99, 132)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Financial Expenses'
            },
            scales: {
                xAxes: {
                    gridLines: { display: false }
                },
                yAxes: {
                    gridLines: { display: false }
                }
            }
        }

    },
})


home.addEventListener('click', () => {
    window.open("../admin/admin.html", "_self")
})
dashboard.addEventListener('click', () => {
    window.open("../dashboard/dashboard.html", "_self")
})
classes.addEventListener('click', () => {
    window.open("../classes/classes.html", "_self")
})