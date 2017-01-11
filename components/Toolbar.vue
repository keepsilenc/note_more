<template>
    <div id="toolbar">
        <i @click="addNote" class="glyphicon glyphicon-plus"></i>
        <i @click="toggleFavorite" class="glyphicon glyphicon-heart" :class="{starred: activeNote.favorite}"></i>
        <i @click="deleteNote" class="glyphicon glyphicon-trash"></i>
        <i class="glyphicon glyphicon-search" @click="change"></i>
        <i class="glyphicon glyphicon-asterisk" @click="sortByTime"></i>
    </div>
</template>
<script>
import {
    addNote,
    deleteNote,
    toggleFavorite,
    change,
    sortByTime
} from '../vuex/actions'

export default {
    vuex: {
        getters: {
            activeNote: state => state.activeNote,
        },
        actions: {
            addNote,
            deleteNote,
            toggleFavorite,
            change,
            sortByTime
        }
    }
    /*methods:{
        sortByTime:(notes)=>{
            notes.sort(function (a,b) {
                return b.changeTime-a.changeTime
            })
        }
    }*/
}
</script>
