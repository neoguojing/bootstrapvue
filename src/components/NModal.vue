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
import { Component, Prop, Vue,Emit,Inject,Provide,Watch,Model } from 'vue-property-decorator';
import { BModal,BButton  } from 'bootstrap-vue';

@Component({
    components: {
        BModal,
        BButton
    }
})
export default class NModal extends Vue {
    @Prop(String) btnSize?: string;
    @Prop({default: "primary"}) btnBackgroud?: string;
    @Prop(String) btnName?: string;
    @Prop(String) modalTitle?: string;
    
    /////////////////////////////////////////////
    handleShow(evt: object){
        this.showModal(evt)
    }
    @Emit("show")
    showModal(evt: object){
        return evt 
    }

    handleHidden(evt: object){
        this.hiddenModal(evt)
    }
    @Emit("hidden")
    hiddenModal(evt: object){
        return evt
    }

    handleOk(evt: object){
        this.okModal(evt)
    }
    @Emit("ok")
    okModal(evt: object){
        return evt
    }

    handleCancel(evt: object){
        this.cancelModal(evt)
    }
    @Emit("cancel")
    cancelModal(evt: object){
        return evt
    }

    handleClose(evt: object){
        this.closeModal(evt)
    }
    @Emit("close")
    closeModal(evt: object){
        return evt
    }
}
</script>
