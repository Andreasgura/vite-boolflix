<template>
   <button @click="open = true">Apri modale</button>

<Teleport to="body">
  
    <p>Ciao dalla Modale!</p>
    
 
</Teleport>
</template>

<script>
export default {
    name: 'ModalCard',
    data() {
        return {
            open: true
        }
    }
}
</script>

<style lang="scss" >
.modal {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  
}
</style>