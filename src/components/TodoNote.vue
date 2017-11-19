<template>
    <div>
        <ul>
            <li v-for="note in notes">{{ note.text }}</li>
        </ul>
    </div>
</template>
<script>
    export default {
        props: ['notes']
    }
</script>