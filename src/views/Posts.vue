<template>
    <div class="posts">
        <v-list two-line>
            <template v-for="(p, i) in postsToShow">
                <v-list-tile :key="i" @click="goToPost(p.id)">
                    <v-list-tile-content>
                        <v-list-tile-title>{{p.title}}</v-list-tile-title>
                        <v-list-tile-sub-title>{{p.body}}</v-list-tile-sub-title>
                    </v-list-tile-content>
                </v-list-tile>

            </template>
        </v-list>
        <v-pagination v-model="page" :length="Math.round(posts.length / itemsOnPage)"></v-pagination>
    </div>
</template>

<script>

    export default {
        async created() {
            await this.$store.dispatch('getAllPosts');

        },
        data() {
            return {
                page: 1,
                itemsOnPage: 10
            }
        },
        methods: {
            goToPost(id) {
                this.$router.push({name: 'post', params: {id}})
            }
        },
        computed: {
            posts: {
                get() {
                    return this.$store.state.posts
                }
            },

            postsToShow: {
                get() {
                    return this.$store.state.posts.slice((this.page - 1) * this.itemsOnPage, this.itemsOnPage * this.page)
                }
            }
        }
    }
</script>
