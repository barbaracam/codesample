<template>
  <li>
    <div class="labels" :class="memberTitle == 'Teacher' ? 'teacher' : 'student'"><h3>{{ memberName }}</h3></div>    
    <h4 class="member"><strong>{{memberTitle}}</strong></h4>
    <p>{{ description}}</p>
    <div style="text-align:center">
        <button @click="selectionM(id)">Learn More</button>
    </div>    
    
  </li>
</template>

<script>
export default {
  inject:['selectionM'],
  props: ['id','memberTitle' ,'memberName', 'description'], 
};
</script>