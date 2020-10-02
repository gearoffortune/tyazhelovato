<template>
<div class="numpad">
  <button @click="sendNewNumber(1)">1</button>
  <button @click="sendNewNumber(2)">2</button>
  <button @click="sendNewNumber(3)">3</button>
  <button @click="sendNewNumber(4)">4</button>
  <button @click="sendNewNumber(5)">5</button>
  <button @click="sendNewNumber(6)">6</button>
  <button @click="sendNewNumber(7)">7</button>
  <button @click="sendNewNumber(8)">8</button>
  <button @click="sendNewNumber(9)">9</button>
  <button @click="sendNewNumber(0)">0</button>
  <button @click="del()">del</button>
</div>
</template>

<script>
import { mapMutations } from 'vuex';
import { NUMBER_CLICKED, REMOVE_LAST_NUM } from '../store/types';

export default {
  methods: mapMutations({ sendNewNumber: NUMBER_CLICKED, del: REMOVE_LAST_NUM }),
};
</script>

<style>

</style>
