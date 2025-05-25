<template>
  <Radar
    :options="chartOptions"
    :data="chartData"
  />
</template>

<script lang="ts">
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js'
import { Radar } from 'vue-chartjs'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default {
  name: 'BarChart',
  components: {
    Radar
  },
  props: {
    memberNameList: {
      type: Array,
      required: true
    },
    cardDataLength: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      chartData: {
        labels: this.memberNameList,
        datasets: [
          {
            label: '所持カード率',
            backgroundColor: 'rgba(233, 30, 99, 0.2)',
            borderColor: 'rgba(233, 30, 99, 1)',
            pointBackgroundColor: 'rgba(233, 30, 99 ,1)',
            pointBorderColor: '#fff',
            pointBorderWidth: 1,
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(233, 30, 99 ,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHoverRadius: 7,
            pointHitRadius: 10,
            data: this.cardDataLength
          }
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: { // 放射軸 (Radial Axis) の設定
            pointLabels: { // 各軸の先端に表示されるラベル (メンバー名など)
              font: {
                size: 13,
                weight: 'bold'
              }
            },
            min: 0,
            max: 100,
            ticks: {
              font: {
                size: 12
              },
              stepSize: 20
            }
          }
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: function(context) {
                let label = context.dataset.label || '';

                if (label) {
                  label += '：';
                }

                if (context.parsed.r !== null) {
                  label += `${context.parsed.r}%`;
                }

                return label;
              }
            }
          },
          legend: { // 凡例の設定
            labels: {
              font: {
                size: 16,
                weight: 'bold'
              }
            }
          }
        }
      }
    }
  }
}
</script>