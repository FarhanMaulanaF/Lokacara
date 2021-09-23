<template>
  <v-simple-table class="table-event">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left text-title headers-no">
            No
          </th>
          <th class="text-left text-title headers-name">
            Name
          </th>
          <th class="text-left text-title headers-date">
            Date and Time
          </th>
          <th class="text-left text-title headers-sold">
            Sold
          </th>
          <th class="text-left text-title headers-status">
            Status
          </th>
          <th class="text-left text-title headers-action">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {

}
</script>

<style scoped>
.table-event{
    width: 90%;
    margin: 2% auto 0;
    border-bottom: 2px solid #A7A7A7;
}

.text-left.text-title{
    color: #0A0A0A;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    margin-left: 1.5%;
    border: 2px solid #A7A7A7;
}

.text-left.text-title.headers-no{
    width: 4%;
}

.text-left.text-title.headers-name{
    width: 2.5em;
}

.text-left.text-title.headers-date{
    width: 1.5em;
}
.text-left.text-title.headers-sold{
    width: 1.25em;
}
.text-left.text-title.headers-status{
    width: 1.15em;
}
.text-left.text-title.headers-action{
    width: 1em;
}

</style>