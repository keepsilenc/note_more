<template>
  <div id="note-editor">
  <input type="text" class="form-control" v-model='tittle' @keyup.enter='setTittle(tittle)'>
    <textarea
      :value="activeNoteText"
      @input="editNote"
      class="form-control">
    </textarea>
  </div>
</template>

<script>
import { editNote } from '../vuex/actions'
import { setTittle } from '../vuex/actions'

export default {
  data () {
    return {
      tittle:''
    }
  },
  vuex: {
    getters: {
      activeNoteText: state => state.activeNote.text
    },
    actions: {
      editNote,
      setTittle
    }
  }
}
</script>