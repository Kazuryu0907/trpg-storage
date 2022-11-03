<template>
  <div>
      <div class="mt-10 w-50 mx-auto">
          <p class="logfilefont">ccfoliaのログファイル(HTML)をこちらに</p>
    <b-form-file
      class="mt-4"
      @change="logfileChange($event)"
      aria-describedby="logfileInv"
    >
    </b-form-file>
    <b-form-invalid-feedback id="logfileInv"
      >htmlファイル</b-form-invalid-feedback
    >
  </div>
  <div class="mt-10 w-100 mx-auto">
    <b-table striped hover :items="items" :fields="fields"></b-table>
  </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            array:{},
            items:[],
            fields:[
                {key:"name",sortable:true},
                {key:"count",sortable:true},
                {key:"ave",sortable:true},
                {key:"sum",sortable:true},
                {key:"despersion",sortable:true},
                {key:"critical",sortable:true},
                {key:"fumble",sortable:true}
            ]
        }
    },
    methods:{
        async logfileChange(e){
            const file = e.target.files[0];
            this.items = [];
            this.array = {};
            const htmlSource = await file.text();
            let parser = new DOMParser();
            let doc = parser.parseFromString(htmlSource,"text/html");
            let p = doc.getElementsByTagName("p");
            let pattern = /\(1D100<=\d+\)/;
            let patternMe = /＞ +(\d+) +＞/;
            //let array = {};
            for(let pd of p){
                let span = pd.getElementsByTagName("span");
                // const tag = span[0].innerText;
                const name = span[1].innerText;
                const text = span[2].innerText;
                if(pattern.test(text)){//CCBの時
                    if(this.array[name] == undefined)this.array[name] = {sum:0.,i:0,ave:0.,critical:0,fumble:0,datas:[]};
                    let result = parseInt(text.match(patternMe)[1]);
                    // console.log(name+":"+result);
                    this.array[name].sum += result;
                    this.array[name].datas.push(result);
                    this.array[name].i += 1;
                    this.array[name].critical += result <= 5 ? 1 : 0;
                    this.array[name].fumble += result >= 96 ? 1 : 0;
                }
            }
            let keys = Object.keys(this.array);
            for(let key of keys){
                let average = this.array[key].sum / this.array[key].i;
                this.array[key].ave = average.toFixed(2);
                const {i,sum,ave,critical,fumble,datas} = this.array[key];
                let despersion = 0;
                for(let data of datas){
                    despersion += Math.pow(data - ave,2)
                }
                despersion = despersion / i;
                despersion = this.floorDecimal(Math.sqrt(despersion),2)
                
                this.items.push({name:key,count:i,sum:sum,ave:ave,critical:critical,fumble:fumble,despersion:despersion,_cellVariants:{}});
            }
            this.MinMax();
        },
        floorDecimal(value, n) {
            return Math.floor(value * Math.pow(10, n) ) / Math.pow(10, n);
        },
        MinMax(){
            const items = this.items;
            const searchIndex = (key,value) => {
                const f = (acc,val,index) => {
                    if(val[key] == value)acc.push(index);
                    return acc;
                }
                return f;
            }
            const c = items.map(p => p.count);
            const cMax = Math.max.apply(null,c);
            const cMaxIndex = items.reduce(searchIndex("count",cMax),[]);
            for(let i of cMaxIndex)this.items[i]._cellVariants.count = "info";
            const ave = items.map((p) => p.ave);
            const aveMin = Math.min.apply(null,ave);
            const aveMax = Math.max.apply(null,ave);
            const aveMinIndex = items.reduce(searchIndex("ave",aveMin),[]);
            const aveMaxIndex = items.reduce(searchIndex("ave",aveMax),[]);
            for(let i of aveMinIndex)this.items[i]._cellVariants.ave = "info";
            for(let i of aveMaxIndex)this.items[i]._cellVariants.ave = "danger";
            const des = items.map((p) => p.despersion);
            const desMin = Math.min.apply(null,des);
            const desMax = Math.max.apply(null,des);
            const desMinIndex = items.reduce(searchIndex("despersion",desMin),[]);
            const desMaxIndex = items.reduce(searchIndex("despersion",desMax),[]);
            for(let i of desMinIndex)this.items[i]._cellVariants.despersion = "info";
            for(let i of desMaxIndex)this.items[i]._cellVariants.despersion = "danger";
            const cri = items.map((p) => p.critical);
            const criMax = Math.max.apply(null,cri);
            const criMaxIndex = items.reduce(searchIndex("critical",criMax),[]);
            for(let i of criMaxIndex){
                this.items[i]._cellVariants.critical = "info";
                // this.items[i]._rowVariant = "info";
            }
            const fum = items.map(p => p.fumble);
            const fumMax = Math.max.apply(null,fum);
            const fumMaxIndex = items.reduce(searchIndex("fumble",fumMax),[]);
            for(let i of fumMaxIndex){
                this.items[i]._cellVariants.fumble = "danger";
                // this.items[i]._rowVariant = "danger";
            }
        }
    }
}
</script>

<style>
p{
    padding:0;
    margin: 0;
}
.logfilefont {
    font-size:2em;
    text-align:center;
    line-height:0.95em;
    font-weight:bold;
    color: transparent;
    background: repeating-linear-gradient( -45deg, #FF3D00 0% 50%, #0091EA 50%
    100% );
    -webkit-background-clip: text;
}
</style>