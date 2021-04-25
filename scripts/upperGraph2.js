// Build the chart
Highcharts.chart("container3", {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: "pie",
  },
  title: {
    text: "Device usage",
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
  },
  accessibility: {
    point: {
      valueSuffix: "%",
    },
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      dataLabels: {
        enabled: false,
      },
      showInLegend: true,
    },
  },
  series: [
    {
      name: "Brands",
      colorByPoint: true,
      data: [
        {
          name: "Chrome",
          y: 61.41,
          sliced: true,
          selected: true,
        },
        {
          name: "Internet Explorer",
          y: 11.84,
        },
        {
          name: "Firefox",
          y: 10.85,
        },
        {
          name: "Edge",
          y: 4.67,
        },
        {
          name: "Safari",
          y: 4.18,
        },
        {
          name: "Other",
          y: 7.05,
        },
      ],
    },
  ],
});
