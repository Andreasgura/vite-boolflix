<template>
    <div class="container" v-if="list.length > 0">
        <h2>{{ listTitle }}</h2>
        <div class="carosellBox">
            <div class="dflex " ref="carosel">
                <div class="lefttbtn" @click="playCarosellLeft()">
                    <i class="fa-solid fa-angle-left"></i>
                </div>
                <div class="mycol" v-for="(card) in list">
                    <CardComponent :item="card" />
                </div>
                <div class="rightbtn" @click="playCarosellRight()">
                    <i class="fa-solid fa-angle-right"></i>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../../store.js';
import CardComponent from './CardComponent.vue';
export default {
    name: 'CardList',
    components: {
        CardComponent
    },
    data() {
        return {
            store,
        }
    },
    props: {
        listTitle: String,
        list: Array
    },
    methods: {
        playCarosellRight() {
            this.$refs.carosel.scrollBy({
                left: 900,
                behavior: "smooth",
            });
        },
        playCarosellLeft() {
            this.$refs.carosel.scrollBy({
                left: -900,
                behavior: "smooth",
            });
        },
        
    }
}
</script>

<style lang="scss" scoped>
.carosellBox {
    position: relative;
}

.dflex {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;


    &::-webkit-scrollbar {
        display: none;

    }
}

.rightbtn {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    font-size: 5rem;
    color: white;

    &:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.5);
        
        
    }
}

.lefttbtn {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    font-size: 5rem;
    color: white;
    &:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.5);
    }
}
</style>