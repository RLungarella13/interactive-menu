<template>
    <div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Category } from '../model'

export default defineComponent({
    props: {
        category: {
            type: Object as () => Category
        }
    },
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

</style>