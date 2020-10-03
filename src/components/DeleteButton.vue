<template>
  <button class="editorbuttons__secondary__button editorbuttons__secondary__button--delete"
  @click="del()">del</button>
</template>

<script>

import { mapMutations } from 'vuex';
import { REMOVE_LAST_NUM } from '../store/types';

export default {

  methods: mapMutations({ del: REMOVE_LAST_NUM }),
};
</script>

<style>
.editorbuttons__secondary__button--delete {
  flex-basis: 100px;
  background-color: #C3C4C6;
}
</style>
