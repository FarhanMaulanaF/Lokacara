<template>
  <div class="container">
    <input class="search" type="text" placeholder="Search Event" />
    <i class="fa fa-search search-icon" aria-hidden="true"></i>
    <!-- <i class="search icon"></i> -->
  </div>
</template>

<script>
export default {
    name: 'Search'
}
</script>

<style scoped>
.container{
    margin-left: 4.21%;
}

.search{
    border: 2px solid #989B9D;
    padding: 10px;
    color: #585858;
    border-radius: 4px;
}

.search-icon{
    margin-left: -3%;
    color: #c9cac8;
}
</style>