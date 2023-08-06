<template>
    <div>       
       <ul>    
            <card-element
             v-for="member in members"
            :key="member.id"
            :id="member.id"
            :member-title="member.title"
            :member-name="member.fullName"
            :description="member.description"      
            ></card-element>
        </ul>
    </div>
    
  
</template>
<script>
export default {
  inject:['members']
};
</script>