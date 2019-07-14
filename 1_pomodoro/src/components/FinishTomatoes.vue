<template>
  <section :class="$style.countArea">
    <h3>Finished</h3>
    <div>
      <span v-for="datetime of datetimes" :key="datetime" :class="$style.tomato">
        <img src="@/assets/images/tomato.png" />
      </span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FinishTomatoes',
  data() {
    return {
      datetimes: ['2019-07-05 20:10:05', '2019-07-06 18:20:30'],
    };
  },
};
</script>

<style lang="scss" module>
@import "@/assets/sass/abstracts/_colors.scss";

.countArea {
  text-align: left;
  h3 {
    color: $gray;
    margin-bottom: 0.25em;
  }

  .tomato {
    img {
      max-width: 35px;
    }
  }

  .tomato + .tomato {
    margin-left: 10px;
  }
}
</style>
