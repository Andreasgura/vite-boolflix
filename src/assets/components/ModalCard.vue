<template>
    <button @click="open = true">More info</button>

    <Teleport to="body">
        <div class="modal fade " :class="open ? 'show' : ''" :style="open ? 'display: block' : ''" id="modal" tabindex="-1"
            aria-labelledby="exampleModalLongTitle" aria-modal="true" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLongTitle">Modal title</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                            @click="open = false"></button>
                    </div>
                    <div class="modal-body">
                        <p>This is some placeholder content to show the scrolling behavior for modals. Instead of
                            repeating the text in the modal, we use an inline style to set a minimum height, thereby
                            extending the length of the overall modal and demonstrating the overflow scrolling. When
                            content becomes longer than the height of the viewport, scrolling will move the modal as
                            needed.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                            @click="open = false">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </Teleport>



</template>

<script>
export default {
    name: 'ModalCard',
    data() {
        return {
            open: false
        }
    }
}
</script>

<style lang="scss" scoped>
#modal {

    background-color: rgba(0, 0, 0, 0.049);

}

</style>