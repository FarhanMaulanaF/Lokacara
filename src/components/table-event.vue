<template>
  <v-simple-table class="table-event">
    <template v-slot:default>
      <thead>
        <tr>
          <th style="color: #0A0A0A;" class="text-left text-title headers-no">
            No
          </th>
          <th style="color: #0A0A0A;" class="text-left text-title headers-name">
            Name
          </th>
          <th style="color: #0A0A0A;" class="text-left text-title headers-date">
            Date and Time
          </th>
          <th style="color: #0A0A0A;" class="text-left text-title headers-sold">
            Sold
          </th>
          <th style="color: #0A0A0A;" class="text-left text-title headers-status">
            Status
          </th>
          <th style="color: #0A0A0A;" class="text-left text-title headers-action">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(data, index) in dataTable"
          :key="data.event_id"
          class="table-row"
        >
        
          <td style="color: #0A0A0A;" class="table-items no">{{ index + 1}}</td>
          <td class="table-items">{{ data.event_name }}</td>
          <td class="table-items">{{ changeDate(data.event_start)}}</td>
          <td class="table-items">{{ data.ticketing.ticket_name }}</td>
          <td class="table-items">
            <button class="btn-status">
                {{ data.event_status }}
            </button>
          </td>
          <td class="table-items">
            <b-button variant="outline-primary">Detail</b-button>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
    name: 'Table',
    data(){
        return{
            dataTable: []
        }
    },
    mounted() {
        fetch('https://api-lokacara.herokuapp.com/api/v1/event')
        .then(res => res.json())
        .then(data => this.dataTable = data)
        .catch(err => console.log(err.message))
    },
    methods: {
        changeDate (tanggal){
            let isoDate = tanggal;
            var d= new Date(isoDate);
            d.toLocaleDateString('en-GB'); // dd/mm/yyyy
            return d
        }
    }
}
</script>

<style scoped>
.table-event{
    width: 90%;
    margin: 2% auto 0;
    border-bottom: 2px solid #A7A7A7;
}

.text-left.text-title{
    
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    margin-left: 1.5%;
    border: 2px solid #A7A7A7;
}

.text-left.text-title.headers-no{
    width: 5%;
}

.text-left.text-title.headers-name{
    width: 28%;
}

.text-left.text-title.headers-date{
    width: 25%;
}
.text-left.text-title.headers-sold{
    width: 15%;
}
.text-left.text-title.headers-status{
    width: 15%;
}
.text-left.text-title.headers-action{
    width: 10%;
}

.table-items{
    border: 2px solid #A7A7A7;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    font-family: 'Inter';
    color: #5D5F61;
}

tr.table-row{
    border: 2px solid #A7A7A7;
}

.btn-status{
    background-color: #EBF0F4;
    border-radius: 5px;
    padding: 4px 8px;
    font-style: normal;
    font-weight: bold;;
    color: #5D5F61;
}



</style>