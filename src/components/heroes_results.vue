<template>
  <div class="segment">
    <div class="header">HEROES</div>
    <div v-for="(item,hero_name) in hero_data" v-bind:key="hero_name">
      <stat_card 
      :name="hero_name"
      :wins="item.wins" 
      :losses="item.losses" 
      :kills="item.kills"
      :deaths="item.deaths"
      :assists="item.assists"
      :timePlayed="item.timePlayed"
      />
    </div>
  </div>
</template>
  
<script>

import stat_card from "@/components/stat_card.vue";
  export default {
    name: 'overview_results',
    components: {
    stat_card,
},
    props: {
      hero_data: String, 
      name: String,
      wins : Number,
      losses : Number,
      kills : Number,
      deaths : Number,
      assists : Number,
      timePlayed : Number
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  @font-face {
    font-family: 'conduit_itc_blackregular';
    src: url('../assets/conduit-itc-black-webfont.woff2') format('woff2'),
         url('../assets/conduit-itc-black-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

  .header {
    font-family: "conduit_itc_blackregular";
    font-size: x-large;
  }
  .segment {
    margin-bottom: 20px;
  }
  </style>
  