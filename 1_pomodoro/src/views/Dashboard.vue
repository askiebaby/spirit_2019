<template>
  <section>
    <section :class="$style.finishTable">
      <div>
        <div :class="$style.finishTable__counts">4</div>
        <h3 :class="$style.finishTable__title">Today</h3>
      </div>
      <div>
        <div :class="$style.finishTable__counts">31</div>
        <h3 :class="$style.finishTable__title">7/5~7/11</h3>
      </div>
    </section>
    <section :class="$style.chart">
      <VeLine
        :class="$style.chart__graphic"
        :data="chartData"
        :extend="extend"
        :legend-visible="false"
        :tooltip-visible="false"
        :judge-width="true"
        :colors:="['#ccc', '#000']"
        height="174px"
      ></VeLine>
      <div :class="$style.chart__date">
        <div v-for="(day, index) in days" :key="index">
          <div>{{ day.date.month }}/{{ day.date.day }}</div>
          <div>{{ day.name }}</div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import VeLine from 'v-charts/lib/histogram.common';

export default {
  name: 'Dashboard',
  data() {
    this.extend = {
      series: {
        type: 'bar',
        label: {
          show: true,
          position: 'top',
          color: '#ff7f59',
          fontWeight: 'bolder',
          fontSize: 20,
        },
      },
      color: '#ffb7a2',
      barWidth: '12px',
      xAxis: { show: false },
      yAxis: { show: false },
      grid: {
        top: 50,
        left: -12,
        right: 0,
        bottom: -20,
        // x: 20,
        // y: 30,
        // x2: 0,
        // y2: 0
      },
    };
    return {
      days: [
        { date: { month: '7', day: '5' }, name: 'MON' },
        { date: { month: '7', day: '6' }, name: 'TUE' },
        { date: { month: '7', day: '7' }, name: 'WED' },
        { date: { month: '7', day: '8' }, name: 'THU' },
        { date: { month: '7', day: '9' }, name: 'FRI' },
        { date: { month: '7', day: '10' }, name: 'SAT' },
        { date: { month: '7', day: '11' }, name: 'SUN' },
      ],
      chartData: {
        columns: ['日期', 'tomatoes'],
        rows: [
          {
            日期: '7/5',
            tomatoes: 4,
          },
          {
            日期: '7/6',
            tomatoes: 5,
          },
          {
            日期: '7/7',
            tomatoes: 3,
          },
          {
            日期: '7/8',
            tomatoes: 7,
          },
          {
            日期: '7/9',
            tomatoes: 3,
          },
          {
            日期: '7/10',
            tomatoes: 2,
          },
          {
            日期: '7/11',
            tomatoes: 8,
          },
        ],
      },
    };
  },
  components: {
    VeLine,
  },
};
</script>

<style lang="scss" module>
@import "@/assets/sass/abstracts/_colors.scss";

.finishTable {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  border-radius: 5px;
  margin-bottom: 25px;
  background-color: $white;

  > div {
    flex-basis: 50%;
  }
  > div + div {
    border-left: 2px solid $light-gray;
  }
  &__counts {
    font-size: 24px;
    font-weight: 700;
    color: #ff7f59;
  }
  &__title {
    font-size: 16px;
    font-weight: 600;
    color: $deep-gray;
    text-transform: uppercase;
  }
}
.chart {
  &__graphic {
    background-color: $white;
    margin-bottom: 20px;
  }
  &__date {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 12px;
  }
}
</style>
