// SIDEBAR TOGGLE

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
    if (!sidebarOpen) {
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = true;
    }
}

function closeSidebar() {
    if (sidebarOpen) {
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen = false;
    }
}



// ---------- CHARTS ----------

// BAR CHART
var barChartOptions = {
    series: [{
        data: [10, 8, 6, 4, 2],
        name: "Ürünler",
    }],
    chart: {
        type: "bar",
        background: "transparent",
        height: 350,
        toolbar: {
            show: false,
        },
    },
    colors: [
        "#2962ff",
        "#d50000",
        "#2e7d32",
        "#ff6d00",
        "#583cb3",
    ],
    plotOptions: {
        bar: {
            distributed: true,
            borderRadius: 4,
            horizontal: false,
            columnWidth: "40%",
        }
    },
    dataLabels: {
        enabled: false,
    },
    fill: {
        opacity: 1,
    },
    grid: {
        borderColor: "#55596e",
        yaxis: {
            lines: {
                show: true,
            },
        },
        xaxis: {
            lines: {
                show: true,
            },
        },
    },
    legend: {
        labels: {
            colors: "#f5f7ff",
        },
        show: true,
        position: "top",
    },
    stroke: {
        colors: ["transparent"],
        show: true,
        width: 2
    },
    tooltip: {
        shared: true,
        intersect: false,
        theme: "dark",
    },
    xaxis: {
        categories: ["Laptop", "Telefon", "Monitor", "Kulaklık", "Kamera"],
        title: {
            style: {
                color: "#f5f7ff",
            },
        },
        axisBorder: {
            show: true,
            color: "#55596e",
        },
        axisTicks: {
            show: true,
            color: "#55596e",
        },
        labels: {
            style: {
                colors: "#f5f7ff",
            },
        },
    },
    yaxis: {
        title: {
            text: "Sayı",
            style: {
                color: "#f5f7ff",
            },
        },
        axisBorder: {
            color: "#55596e",
            show: true,
        },
        axisTicks: {
            color: "#55596e",
            show: true,
        },
        labels: {
            style: {
                colors: "#f5f7ff",
            },
        },
    }
};

var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
barChart.render();


// AREA CHART-alan grafik(birden fazla markanı grafiğini tutacağım)
var areaChartOptions = {
    series: [{
        name: "Nike",
        data: [66, 40, 28, 51, 42, 109, 100,12,14,56,18,20],
    }, {
        name: "Adidas",
        data: [11, 32, 45, 32, 34, 52, 41,22,24,66,28,30],

        }, {
        name: "Sketchers",
        data: [18, 64, 57, 77, 11, 71, 55,6,8,70,44,36],
        }],

    chart: {
        type: "area",
        background: "transparent",
        height: 350,
        stacked: false,
        toolbar: {
            show: false,
        },
    },
    colors: ["#00ab57", "#d50000", "#0000ff"],
    labels: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],
    dataLabels: {
        enabled: false,
    },
    fill: {
        gradient: {
            opacityFrom: 0.4,
            opacityTo: 0.1,
            shadeIntensity: 1,
            stops: [0, 100],
            type: "vertical",
        },
        type: "gradient",
    },
    grid: {
        borderColor: "#55596e",
        yaxis: {
            lines: {
                show: true,
            },
        },
        xaxis: {
            lines: {
                show: true,
            },
        },
    },
    legend: {
        labels: {
            colors: "#f5f7ff",
        },
        show: true,
        position: "top",
    },
    markers: {
        size: 6,
        size: 6,
        strokeColors: "#1b2635",
        strokeWidth: 3,
    },
    stroke: {
        curve: "smooth",
    },
    xaxis: {
        axisBorder: {
            color: "#55596e",
            show: true,
        },
        axisTicks: {
            color: "#55596e",
            show: true,
        },
        labels: {
            offsetY: 5,
            style: {
                colors: "#f5f7ff",
            },
        },
    },
    yaxis:
        [
            {
                title: {
                    text: "Satın Alım",
                    style: {
                        color: "#f5f7ff",
                    },
                },
                labels: {
                    style: {
                        colors: ["#f5f7ff"],
                    },
                },
            },
            {
                opposite: true,
                title: {
                    text: "Satış Siparişleri",
                    style: {
                        color: "#f5f7ff",
                    },
                },
                labels: {
                    style: {
                        colors: ["#f5f7ff"],
                    },
                },
            },
        ],
    tooltip: {
        shared: true,
        intersect: false,
        theme: "dark",
    }
};

var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
areaChart.render();

//Pie chart-pasta

