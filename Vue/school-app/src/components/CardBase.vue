<template>
    <div>       
       <ul>    
            <card-element
             v-for="member in members"
            :key="member.id"
            :id="member.id"
            :member-picture="member.pic"
            :member-title="member.title"
            :member-name="member.fullName"
            :description="member.description"      
            ></card-element>
        </ul>
    </div>
    
  
</template>
<script>
import CardElement from '../components/CardElement.vue';
export default {
  components:{
    'card-element': CardElement
  },
  inject:['members']
};
</script>