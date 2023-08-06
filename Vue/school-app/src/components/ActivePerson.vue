<template>
  <section>
    <h2  class="labels active" :class="memberTitle == 'Teacher' ? 'teacher' : 'student'">{{memberName}}</h2>
    <div class="images">
      <img :src="memberPicture" alt="mainPic">
    </div>    
    <h4 class="member"><strong>{{memberTitle}}</strong></h4>
    <p style="text-align:center;">{{memberText}}</p>
  </section>
</template>

<script>
export default {
  props: ['memberTitle', 'memberName', 'memberText','memberPicture'],
};
</script>