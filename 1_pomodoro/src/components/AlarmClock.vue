<template>
  <section :class="$style.container">
    <section :class="$style.times">
      <div
        :class="$style.time"
        v-for="(reversePamodoroTime, index) in reversePamodoroTimes"
        :style="timeRotate(index)"
        :key="reversePamodoroTime.index"
      >{{ reversePamodoroTime}}</div>
    </section>
    <section :class="$style.functions">
      <div :class="[$style.function__bell, $style.function]">
        <img src="@/assets/images/alarm.png" />
      </div>
      <div :class="[$style.function__playAndPause, $style.function]">
        <img src="@/assets/images/play.png" />
      </div>
      <div :class="[$style.function__reset, $style.function]">
        <img src="@/assets/images/reset.png" />
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'AlarmClock',
  data() {
    return {
      pamodoroTimes: [5, 10, 15, 20, 25, 30, 35, 40, 45],
    };
  },
  computed: {
    reversePamodoroTimes() {
      // 冗長的寫法
      // const reversePamodoroTimes = [];
      // this.pamodoroTimes.forEach(time => reversePamodoroTimes.unshift(time));
      // return reversePamodoroTimes;
      // 精簡的寫法
      return this.pamodoroTimes.reduce((acc, result) => [result, ...acc], []);
    },
  },
  methods: {
    timeRotate(timeIndex) {
      // 計算每次旋轉的角度
      const eachAngle = 180 / (this.reversePamodoroTimes.length - 1);

      // 初始值：第一個要從 90度 開始減
      const rotateAngle = 90 - timeIndex * eachAngle;

      // 回傳 style 物件
      return { transform: `rotate(${rotateAngle}deg)` };
    },
    getIsFirstOne(timeIndex) {
      return timeIndex === 0;
  },
  },
};
</script>

<style lang="scss" module>
@import "@/assets/sass/abstracts/_colors.scss";

.container {
  position: relative;
  min-height: 450px;
  width: 40%;
  margin-left: 5%;
}

.times {
  position: absolute;
  width: 110%;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
}

.time {
  position: absolute;
  top: calc(50% - 25px);
  bottom: 0;
  right: 70px;
  width: 400px;
  height: 50px;
  width: 65%;
  text-align: left;
  transform-origin: 100% center;
  transform: translate(0, -50%);
  font-size: 32px;
  font-weight: 500;
  color: #9d9d9d;
  letter-spacing: 2px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &::after {
    content: "";
    height: 2px;
    width: 80px;
    background: $gray;
    position: relative;
    position: absolute;
    top: 50%;
    left: 20%;
    transform: translate(0px, -50%);
  }

    &--first {
      color: #666;
    }
}

.time--active {
  color: #000;
  font-size: 40px;
  font-weight: 700;
}

.functions {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(0%, -50%);
  img {
    height: auto;
    max-width: 40px;
    box-shadow: 0px 0px 5px $light-gray;
    border-radius: 50%;
  }
}
.function {
  font-size: 0;
  &__bell {
  }
  &__playAndPause {
    position: relative;
    width: 140px;
    height: 140px;
    border: 15px solid $secondary-color;
    border-radius: 50%;
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  &__reset {
  }
}
.function + .function {
  margin-top: 15px;
}
</style>
