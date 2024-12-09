/*Analytics_JS*/


// BAR CHART

const barChartOptions = {
  series: [
    {
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: 'Revenue',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: 'Free Cash Flow',
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ],
  chart: {
    type: 'bar',
    height: 400,
    toolbar: {
      show: false,
    },
  },
  colors: ['#2e7d32', '#211970', '#d50000'],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded',
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent'],
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    labels: {
      style: {
        colors: '#000000',
      },
    },
  },
  yaxis: {
    title: {
      text: 'Rs. (thousands)',
      style: {
        color: '#000000',
      },
    },
    labels: {
      style: {
        colors: '#000000',
      },
    },
  },
  fill: {
    opacity: 1,
  },
  grid: {
    borderColor: '#000000',
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
      colors: '#000000',
    },
    show: true,
    position: 'bottom',
    
  },
  tooltip: {
    theme: 'dark',
    y: {
      formatter: function (val) {
        return 'Rs. ' + val + ',000';
      },
    },
  },
};

const barChart = new ApexCharts(
  document.querySelector('#bar-chart'),
  barChartOptions
);
barChart.render();

// AREA CHART

const areaChartOptions = {
  series: [
    {
      name: 'Recieved',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: 'Transfer',
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  chart: {
    type: 'area',
    background: 'transparent',
    height: 400,
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  colors: ['#00ab57', '#d50000'],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  
  
  dataLabels: {
    enabled: false,
  },
  fill: {
    gradient: {
      opacityFrom: 0.6,
      opacityTo: 0.1,
      shadeIntensity: 2,
      stops: [0, 100],
      type: 'vertical',
    },
    type: 'gradient',
  },
  grid: {
    borderColor: '#55596e',
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
      colors: '#000000',
    },
    show: true,
    position: 'bottom',
    offsetY: 10,
    
    
  },
  markers: {
    size: 4,
    strokeColors: '#1b2635',
    strokeWidth: 1,
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    axisBorder: {
      color: '#000000',
      show: true,
    },
    axisTicks: {
      color: '#000000',
      show: true,
    },
    labels: {
      offsetY: 5,
      style: {
        colors: '#000000',
      },
    },
  },
  yaxis: [
    {
      title: {
        text: 'Recieved Amount (Rs.)',
        style: {
          color: '#000000',
        },
      },
      labels: {
        style: {
          colors: ['#000000'],
        },
      },
    },
    {
      opposite: true,
      title: {
        text: 'Transfered Amount (Rs.)',
        style: {
          color: '#000000',
        },
      },
      labels: {
        style: {
          colors: ['#000000'],
        },
      },
    },
  ],
  tooltip: {
    theme: 'dark',
    y: {
      formatter: function (val) {
        return 'Rs. ' + val + ',000';
      },
    },
  },
};

const areaChart = new ApexCharts(
  document.querySelector('#area-chart'),
  areaChartOptions
);
areaChart.render();


/*end*/