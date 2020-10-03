<template>
<div class="numpad">
  <button class="numpad__button numpad__button--num" @click="sendNewNumber(1)">1</button>
  <button class="numpad__button numpad__button--num" @click="sendNewNumber(2)">2</button>
  <button class="numpad__button numpad__button--num" @click="sendNewNumber(3)">3</button>
  <button class="numpad__button numpad__button--num" @click="sendNewNumber(4)">4</button>
  <button class="numpad__button numpad__button--num" @click="sendNewNumber(5)">5</button>
  <button class="numpad__button numpad__button--num" @click="sendNewNumber(6)">6</button>
  <button class="numpad__button numpad__button--num" @click="sendNewNumber(7)">7</button>
  <button class="numpad__button numpad__button--num" @click="sendNewNumber(8)">8</button>
  <button class="numpad__button numpad__button--num" @click="sendNewNumber(9)">9</button>
  <button class="numpad__button numpad__button--num numpad__button--nil"
  @click="sendNewNumber(0)">0</button>
  <button class="numpad__button numpad__button--coma" @click="sendNewNumber('.')">.</button>
</div>
</template>

<script>
import { mapMutations } from 'vuex';
import { NUMBER_CLICKED } from '../store/types';

export default {
  methods: mapMutations({ sendNewNumber: NUMBER_CLICKED }),
};
</script>

<style>
:root {
  --maingrey: #DBDDDC;
  --textblack: #191B1A;
  --del-grey: #C3C4C6;
}
  .numpad {
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  .numpad__button {
    height: 25%;
    flex-basis: 33%;
    flex-grow: 1;
    flex-shrink: 1;
    border-radius: 0;
    border-width: 0;
    font-size: 24px;
    box-shadow: inset 1px 1px 0px #C5C7C6;
    background: var(--maingrey);
    color: var(--textblack);
  }
  .numpad__button--nil {
    flex-basis: 66%;
    flex-shrink: 0;
  }
</style>
