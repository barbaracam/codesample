v<template>
  <div>
    <active-person      
      :member-name="activeMember && activeMember.fullName"
      :member-title="activeMember && activeMember.title" 
      :member-text="activeMember && activeMember.description"     
    ></active-person>
    <h2>Members</h2>    
    <card-base></card-base>
  </div>
</template>

<script>
export default {  
  data() {
    return {
      members: [
        {
          id: '0001',
          title: 'Teacher',
          fullName: 'Pete Johnson',
          description: 'Pete Johnson is An Inspiring Mentor, dedicated Educator, lifelong learner, passionate about fostering curiosity  and making Education an Adventure  ',
          
        },
        {
          id: '0002',
          title: 'Student',
          fullName:'Mary Robertson',
          description:
            'Mary Robertson: Curious learner navigating the realms of knowledge, blending creativity and intellect to shape a unique educational journey.'
        },
         {
          id: '0003',
          title: 'Student',
          fullName:'Luis Perez',
          description:
            'Luis Perez, dedicated student pursuing passions in science and literature, aspiring to make meaningful contributions in both fields.'
        },
         {
          id: '0004',
          title: 'Student',
          fullName:'Julia Smith',
          description:
            '"Julia Smith is an aspiring biologist, curious explorer of literature, and advocate for sustainable living. Passionate about learning and growth."'
        },
        
      ],
      activeMember: null,
    };
  },
  provide(){
    return {
      // this come from the data(), in order to inject
      members:this.members,
      //selectionT is provide in knowledge element as a method
      selectionM: this.activateMember
    }
  },
  methods: {
    activateMember(memberId) {
      this.activeMember = this.members.find((member) => member.id === memberId);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;  
}
body {
  margin: 0;
}
section {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 2rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

li {
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
  width: 15rem;
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

h2 {  
  margin: 0.75rem 0;
  text-align: center;
}
.member {
  margin-bottom: 0;
}

button {
  font: inherit;
  border: 1px solid #676767;
  background-color: #676767;
  color: white;
  padding: 0.5rem 0.5rem;
  border-radius: 5px;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #808080;
  border-color: #808080;
  color:black;
}
.labels {  
  border-radius: 15px;  
  text-align: center; 
  color:white; 
}

.teacher {
  background-color: #1e2f97;
}
.student {
  background-color: #57a0d3;
}
.active {
  border-radius: 10px;
  padding: 10px;
}
.member{
  text-align:center
}
</style>