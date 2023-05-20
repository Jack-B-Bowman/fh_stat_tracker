<template>
    <div class="flex stat_box">
    <div class="flex" id="title">{{name}}</div>
    <div class="flex" id="wlkda">
        <div class="flex datum" id="winrate">
        <div>Winrate</div>
        <div>{{ ((wins / (wins + losses)) * 100).toFixed(2) }} %</div>
        </div>
        <div class="flex datum" id="kdratio">
        <div>KD Ratio</div>
        <div>{{ (kills / deaths).toFixed(2) }}</div>
        </div>
        <div class="flex datum" id="kdaratio">
        <div>KDA Ratio</div>
        <div>{{ ((kills + assists) / deaths).toFixed(2) }}</div>
        </div>
        <div class="flex datum" id="wins">
        <div>Wins</div>
        <div>{{ wins }}</div>
        </div>
        <div class="flex datum" id="losses">
        <div>Losses</div>
        <div>{{ losses }}</div>
        </div>
        <div class="flex datum" id="kills">
        <div>Kills</div>
        <div>{{ kills }}</div>
        </div>
        <div class="flex datum" id="deaths">
        <div>Deaths</div>
        <div>{{ deaths }}</div>
        </div>
        <div class="flex datum" id="assists">
        <div>Assists</div>
        <div>{{ assists }}</div>
        </div>
        <div class="flex datum" id="playtime">
        <div>Time Played</div>
        <div>{{ timePlayed }}</div>
        </div>
    </div>
    </div>
</template>
    
<script>
export default {
    name: 'stat_card',
    props: {
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
.flex {
    display: flex;
    justify-content: center;
}
.header {
    font-family: "conduit_itc_blackregular";
    font-size: x-large;
}
.segment {
    margin-bottom: 20px;
}
.datum {
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 5px;
    margin-top: 5px;
    height: 50px;
    width: 100px;
    background-color: #494949;
    border: 2px solid white;
    border-radius: 5px;
    align-items: center;
    flex-direction: column;
}
.stat_box {
    flex-direction: column;
    margin: 10px auto 10px auto;
    max-width: 700px;
    border: 4px solid white;
    border-radius: 20px;
    padding-bottom: 20px;
    padding-top: 10px;
}
#wlkda {
    flex-direction: row;
    flex-wrap: wrap;
    /* max-width: 100px; */
}

</style>
    