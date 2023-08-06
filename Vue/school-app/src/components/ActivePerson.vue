<template>
  <section>
    <h2  class="labels active" :class="memberTitle == 'Teacher' ? 'teacher' : 'student'">{{memberName}}</h2>
    <h4 class="member"><strong>{{memberTitle}}</strong></h4>
    <p>{{memberText}}</p>
  </section>
</template>

<script>
export default {
  props: ['memberTitle', 'memberName', 'memberText'],
};
</script>