import {Line} from 'vue-chartjs'
import axios from 'axios'

export default{
    extends:Line,
    data: () => ({
        //results:[],
        chartdata: {
          labels:[],
          datasets: []
          
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
        axios.get('https://data.gov.sg/api/action/datastore_search?resource_id=552b8662-3cbc-48c0-9fbb-abdc07fb377a').then(response=>{
        this.results=response.data.result.records
        console.log(response.data)
        var categories = {
            "Taxi": [],
            "Bus": [],
            "MRT": [],
            "LRT": []
        }
        //console.log(this.results)
        var years = [];
         for(let key in this.results){
             for (let k in categories) {
                if (this.results[key].type_of_public_transport === k) {
                    //console.log(this.results[key].type_of_public_transport + " vs " + k)
                    categories[k].push(this.results[key].average_ridership)
                    //console.log(categories[k])
                    if (!years.includes(this.results[key].year)) {
                        years.push(this.results[key].year)
                    }
                }
             }
        }

        var taxi = {
            label: "Taxi",
            data:categories["Taxi"],
            borderWidth:0.5,
            borderColor:"red",
            backgroundColor:'red',
            fill:false
        }

        var bus = {
            label: "Bus",
            data:categories["Bus"],
            borderWidth:0.5,
            borderColor:"blue",
            backgroundColor:'blue',
            fill:false
        }

        var mrt = {
            label: "MRT",
            data:categories["MRT"],
            borderWidth:0.5,
            borderColor:"green",
            backgroundColor:'green',
            fill:false
        }

        var lrt = {
            label: "LRT",
            data:categories["LRT"],
            borderWidth:0.5,
            borderColor:"grey",
            backgroundColor:'grey',
            fill:false
        }

        this.chartdata.datasets.push(taxi,bus,mrt,lrt)
        this.chartdata.labels = years
        console.log(this.chartdata.datasets)
        this.renderChart(this.chartdata,this.options)
            
    })
    
    }
    
    },
     mounted(){
        //console.log('Do I come here')
        this.fetchData()
        
     }

    
    
    
}
