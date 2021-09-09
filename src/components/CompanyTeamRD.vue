<template>
    <div>
 <CompanyHeaderTeam/>

       <div class="container">

    <div class="row">

 

      <div class="col">
        <div class="card mt-4">
          <h3 class="card-title">Oh la belle équipe de R&D </h3>
          <div v-for ="recipientsGroup in localrecipientsGroup" :key ="recipientsGroup.id"  class="card-body">
            
            <h5 class="card-title">{{localrecipientsGroup.title}}</h5>

                <div class="media mb-2" >
                  <img class="mr-3 rounded" style='height:120px' src="https://pbs.twimg.com/media/EhpTpCJXcAMCZ-p.jpg" alt="Generic placeholder image">
                  <div class="media-body">
                    <h5 class="mt-0">{{localrecipientsGroup.lastName}} & {{localrecipientsGroup.lastName}}</h5>
                    <span class="badge badge-info">allonsbon@queltalent.org</span>
                  </div>
                </div>

          </div>
        </div>

      </div>
      

    </div>

  </div>
    </div>
</template>

<script>
import CompanyHeaderTeam   from './CompanyHeaderTeam'
import {recipientsGroup} from  "@/assets/js/recipientsGroup.js"
export default {
  name: 'CompanyTeamRD',
   components:{
      CompanyHeaderTeam
      },

  data : ()=>({
    localrecipientsGroup:recipientsGroup,
 
  }),
  created() {
this.localrecipientsGroup =this.localrecipientsGroup.filter(recipientsGroup=>recipientsGroup.title==='R&D'),
console.log(this.localrecipientsGroup)
  }
  
  }
  

</script>