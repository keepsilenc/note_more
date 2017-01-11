<template>
    <div id="notes-list">
        <div id="list-header">
            <h2>笔记本来了</h2>
            <!-- 笔记本列表filter -->
            <div class="btn-group btn-group-justified" role="group">
                <!-- all 全部笔记 -->
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-default" @click="show = 'all'" :class="{active: show === 'all'}">
                        全部笔记
                    </button>
                </div>
                <!-- Favorites 收藏笔记 -->
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-default" @click="show = 'favorites'" :class="{active: show === 'favorites'}">
                        收藏笔记
                    </button>
                </div>
            </div>
        </div>
        <!-- 搜索框 -->
        <div class="middle">
            <input type="search" class="search" v-if="appear" v-model="message" @keyup.enter="show='searching'">
        </div>
        <!-- 笔记本列表 -->
        <div class="container">
            <div class="list-group" id="haha">
                <a v-for="note in filteredNotes" class="list-group-item" href="#" :class="{active: activeNote === note}" @click="updateActiveNote(note)">
                    <h5 class="list-group-item-heading">
                        {{note.title}}
                    </h5>
                    <p>{{note.text}}</p>
                    <p>{{time}}</p>
                </a>
            </div>
        </div>
</template>
<script>
import {
    updateActiveNote
} from '../vuex/actions'
import {setFormatTime} from '../API.js'

export default {
    data() {
            return {
                show: 'all',
                message: ''
            }
        },
        vuex: {
            getters: {
                notes: state => state.notes,
                activeNote: state => state.activeNote,
                appear: state => state.appear
            },
            actions: {
                updateActiveNote
            }
        },
        computed: {
            filteredNotes() {
                if (this.show === 'all') {
                    return this.notes
                } else if (this.show === 'favorites') {
                    return this.notes.filter(note => note.favorite)
                } else if (this.show === 'searching') {
                    return this.notes.filter(note => {
                        return note.text.indexOf(this.message) > -1;
                    })
                }
            },
            time(){
              return setFormatTime(Date.now(),'yyyy-MM-dd');
              // return 
            }
        },
        methods: {
            // searching(){
            //    for (var i = 0; i < this.notes.length; i++) {
            //      if (this.notes[i].text.indexOf(this.message)>-1) {
            //        // this.notes[i].searching=true;
            //        this.notes[i].text+="999";
            //      }
            //    }
            //    console.log(this)
            //  }
        }
}
</script>
<style lang="less">
#notes-list {
    float: left;
    width: 300px;
    height: 100%;
    background-color: #F5F5F5;
    #list-header {
        h2 {
            text-align: center;
        }
    }
    .container {
      width: 300px;
        .list-group-item {
            // padding: 10px;
            h5 {
                margin: 0;
                padding: 5px 10px;
            }
            p {
                margin: 0;
                padding: 0 10px;
                opacity: 0.7;
            }
        }
    }
}


/*  #notes-list {
 float: left;
 width: 300px;
 height: 100%;
 background-color: #F5F5F5;
 }
 
 #list-header {
 //padding: 5px 25px 25px 25px;
 }
 
 #list-header h2 {
 font-weight: 300;
 text-transform: uppercase;
 text-align: center;
 font-size: 22px;
 padding-bottom: 8px;
 }
 
 #notes-list .container {
 // height: calc(100% - 137px);
 // max-height: calc(100% - 137px);
 overflow: auto;
 padding: 5px;
 }
 
 #notes-list .container .list-group-item {
 border: 0;
 border-radius: 0;
 }
 
 .list-group-item-heading {
 fon t-size: 15px;
}*/
</style>
