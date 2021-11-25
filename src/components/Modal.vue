<template>
    <div style="margin-top:10px;">
        <b-button 
            v-b-modal.modal-tall 
            :variant="btnBackgroud"
            :size="btnSize"
        >{{  btnName }}</b-button>

        <b-modal 
            id="modal-tall" 
            :title="modalTitle"
            @show="handleShow"
            @hidden="handleHidden"
            @ok="handleOk"
            @cancel="handleCancel"
            @close="handleClose"
      ></b-modal>
    </div>
</template>

<script lang="ts">
import { Options,Vue } from 'vue-class-component';
@Options({
    components: {
 
    },
    props:{
        btnSize: String,
        btnBackgroud: String,
        btnName: String,
        modalTitle: String
    },
    emits:['show','hidden','ok','cancel','close'],
})
export default class Modal extends Vue {
    btnSize?: string;
    btnBackgroud?: string;
    btnName?: string;
    modalTitle?: string;
    
    /////////////////////////////////////////////
    handleShow(evt: object){
        this.showModal(evt)
    }

    showModal(evt: object){
        return evt 
    }

    handleHidden(evt: object){
        this.hiddenModal(evt)
    }
 
    hiddenModal(evt: object){
        return evt
    }

    handleOk(evt: object){
        this.okModal(evt)
    }
 
    okModal(evt: object){
        return evt
    }

    handleCancel(evt: object){
        this.cancelModal(evt)
    }

    cancelModal(evt: object){
        return evt
    }

    handleClose(evt: object){
        this.closeModal(evt)
    }

    closeModal(evt: object){
        return evt
    }
}
</script>
