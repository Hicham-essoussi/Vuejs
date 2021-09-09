<template>
    <div>
      <CompanyHeaderTeam/>
       <div class="container">

    <div class="row">

 

      <div class="col">
        <div class="card mt-4">
          <div class="card-body">
            <h3 class="card-title">Oh la belle équipe de R&D </h3>
            <h5 class="card-title">Composée de x membres</h5>

                <div class="media mb-2" >
                  <img class="mr-3 rounded" style='height:120px' src="https://pbs.twimg.com/media/EhpTpCJXcAMCZ-p.jpg" alt="Generic placeholder image">
                  <div class="media-body">
                    <h5 class="mt-0">SonPrénom & SonNom ?</h5>
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
export default {
  name: 'CompanyTeamMA',
   components:{
      CompanyHeaderTeam,
  
  }
  
}
</script>