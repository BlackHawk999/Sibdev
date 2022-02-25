<template>
  <label class="favs-range">
    <input
      class="styled-slider slider-progress"
      type="range"
      :min="1"
      :max="50"
      :value="value"
      placeholder="Укажите название"
      @input="$emit('input', +$event.target.value)"
    />
    <input
      :min="1"
      :max="50"
      :value="value"
      type="number"
      disabled
      @input="$emit('input', +$event.target.value)"
    />
  </label>
</template>

<script>
export default {
  name: "range",
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.favs-range {
  display: flex;
  align-items: center;
  gap: 20px;
  
  input[type="range"] {
    width: 100%;
    background-color: transparent;
    -webkit-appearance: none;
  }
  input[type="range"]:focus {
    outline: none;
  }
  input[type="range"]::-webkit-slider-runnable-track {
    background: #1390e5;
    border: 0;
    border-radius: 25px;
    width: 100%;
    height: 6px;
    cursor: pointer;
  }
  input[type="range"]::-webkit-slider-thumb {
    margin-top: -6px;
    width: 18px;
    height: 18px;
    background: #ffffff;
    border: 2px solid #1390e5;
    border-radius: 50px;
    cursor: pointer;
    -webkit-appearance: none;
  }
  input[type="range"]:focus::-webkit-slider-runnable-track {
    background: #259ced;
  }
  input[type="range"]::-moz-range-track {
    background: #1390e5;
    border: 0;
    border-radius: 25px;
    width: 100%;
    height: 6px;
    cursor: pointer;
  }
  input[type="range"]::-moz-range-thumb {
    width: 18px;
    height: 18px;
    background: #ffffff;
    border: 2px solid #1390e5;
    border-radius: 50px;
    cursor: pointer;
  }
  input[type="range"]::-ms-track {
    background: transparent;
    border-color: transparent;
    border-width: 7px 0;
    color: transparent;
    width: 100%;
    height: 6px;
    cursor: pointer;
  }
  input[type="range"]::-ms-fill-lower {
    background: #1181cd;
    border: 0;
    border-radius: 50px;
  }
  input[type="range"]::-ms-fill-upper {
    background: #1390e5;
    border: 0;
    border-radius: 50px;
  }
  input[type="range"]::-ms-thumb {
    width: 18px;
    height: 18px;
    background: #ffffff;
    border: 2px solid #1390e5;
    border-radius: 50px;
    cursor: pointer;
    margin-top: 0px;
    /*Needed to keep the Edge thumb centred*/
  }
  input[type="range"]:focus::-ms-fill-lower {
    background: #1390e5;
  }
  input[type="range"]:focus::-ms-fill-upper {
    background: #259ced;
  }
  /*TODO: Use one of the selectors from https://stackoverflow.com/a/20541859/7077589 and figure out
  how to remove the virtical space around the range input in IE*/
  @supports (-ms-ime-align: auto) {
    /* Pre-Chromium Edge only styles, selector taken from hhttps://stackoverflow.com/a/32202953/7077589 */
    input[type="range"] {
      margin: 0;
      /*Edge starts the margin from the thumb, not the track as other browsers do*/
    }
  }
  input[type="number"] {
    font-family: Rob;
    font-size: 20px;
    line-height: 24px;
    padding: 12px 15px;
    text-align: center;
    border: 1px solid rgba(23, 23, 25, 0.2);
    box-sizing: border-box;
    border-radius: 10px;
    -moz-appearance: textfield;
    outline: none;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}
</style>
