import {Bar} from 'vue-chartjs'
import axios from 'axios'

export default{
    extends:Bar,
    data: () => ({
        results:[],
        chartdata: {
          labels:[],
          datasets: [
            {
              label: 'Covid Cases in United States',
               data:[],
              //backgroundColor:['aqua','lightgreen','red','orange'],
              //borderWidth:0.5,
              //borderColor:"orange",
              backgroundColor:'orange',
              fill:false
            }
          ]
          
        },
        options: {
           
            scales:{
                yAxes:[{
                    ticks:{
                        min:0
                    }

                }]
            }
        }
      }),
    methods:{
    
    fetchData : function(){
        axios.get('http://covid19.soficoop.com/country/us').then(response=>{
        this.results=response.data.snapshots
        //console.log(response.data)
        //console.log(this.results)
        for(let key in this.results){
            this.chartdata.datasets[0].data.push(this.results[key].cases)
            this.chartdata.labels.push(this.results[key].timestamp)
            
        }
        this.renderChart(this.chartdata,this.options)
            
    })
    
    }
    
    },
     mounted(){
        //console.log('Do I come here')
        this.fetchData()
        
     }

    
    
    
}
