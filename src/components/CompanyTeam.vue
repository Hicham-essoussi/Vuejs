<template>

<div>
  <CompanyHeader/>
   <div class="container">

    <div class="row">

      <!-- /.col-lg-3 -->

      <div class="col">

        <div class="card mt-4">
          <div class="card-body">
            <h3 class="card-title">Nos équipes ! </h3>
            <div class="card" >
              <ul class="list-group list-group-flush text-center">

                    <li class="list-group-item" > L'équipe R&D  🧾
                        <router-link class="btn btn-secondary btn-sm" to="teamRD">Voir</router-link>
                    </li>
                    <li class="list-group-item" > L'équipe Marketing 💥
                        <router-link class="btn btn-secondary btn-sm" to="teamMA">Voir</router-link>
                    </li>
                    
              </ul>
            </div>
          </div>
        </div>
        <!-- /.card -->


        <!-- /.card -->

      </div>
      <!-- /.col-lg-9 -->

    </div>

  </div>
</div>
     
</template>

<script>
import CompanyHeader   from './CompanyHeader'
export default {
  name: 'CompanyTeam',
   components:{
      CompanyHeader,
  
  }
}
</script>