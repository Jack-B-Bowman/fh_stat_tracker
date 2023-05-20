<template>
  <div class="segment">
    <div class="header">OVERVIEW</div>
    <stat_card 
    :name="player_data.name"
    :wins="player_data.wins" 
    :losses="player_data.losses" 
    :kills="player_data.kills"
    :deaths="player_data.deaths"
    :assists="player_data.assists"
    :timePlayed="player_data.timePlayed"
    />
  </div>
</template>
  
  <script>
  import stat_card from "@/components/stat_card.vue";
  export default {
    name: 'overview_results',
    components: {
      stat_card
    },
    props: {
      player_data: String,
      wins : Number,
      losses : Number,
      kills : Number,
      deaths : Number,
      assists : Number,
      timePlayed : Number,
    },

    // data() {
    // return {
    //   player_data: sessionStorage.getItem("player_data")
    // }
  // },
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

  </style>
  