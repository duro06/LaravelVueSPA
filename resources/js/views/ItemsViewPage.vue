<template>
    <div>
        <div class="container-fluid mt-4">
            <div class="col-md-12">
                
                      	<!-- COMPONENT YANG SUDAH KITA BUAT, MENGHARAPKAN 3 BUAH PROPS, YAKNI ITEMS, FIELDS DAN META. KETIGA DATA YANG DIMINTA OLEH PROPS INI AKAN KITA KIRIMKAN -->
                        <!-- ADAPUN CARA MENGAMBIL VALUE DARI EMIT YANG SUDAH KITA BUAT ADALAH DENGAN MENAMBAHKAN @ DAN DIIKUTI DENGAN NAMA EMITNYA -->
                        <!-- DAN PARAMETER SETELAH SAMA DENGAN DARI EMIT ADALAH FUNGSI UNTUK MENERIMA VALUENYA -->
                        <app-datatable 
                            :items="items" 
                            :fields="fields" 
                            :meta="meta" 
                            @per_page="handlePerPage" 
                            @pagination="handlePagination" 
                            @search="handleSearch" 
                            @sort="handleSort"
                            @removedData="removeData"
                            @editedData="editData"
                            @createdData="addData"
                            @removedSelected="hapusDataTerseleksi"
                            @selectedId="selectedDataId"
                            :tombolAddNew="tombolAddNew"
                            :tombolEdit="tombolEdit"
                        />
                        
                   
            </div>
        </div>
        
        <!-- Edit Modal form -->
        <b-modal
            ref="editDataModal" hide-footer title="Edit Item">
            <div class="d-block">
                <form v-on:submit.prevent="updateData">
                    <div class="row">

                        <div class="col-md-6">
                            <div class="form-group-sm mb-2">
                                <label for="nama">Nama Item</label>
                                <input
                                    type="text"
                                    class="form-control form-control-sm"
                                    id="nama"
                                    placeholder="Enter Item Name"
                                    v-model="editItemData.nama"
                                />
                                <div class="invalid-feedback" v-if="errors.nama">
                                    {{ errors.nama[0] }}
                                </div>
                            </div>
                        </div> 

                        <div class="col-md-6">
                            <div class="form-group-sm">
                                <label for="harga_beli">Harga Beli </label>
                                
                                    <input-number
                                        class="form-control form-control-sm" 
                                        id="harga_beli"
                                        placeholder="Masukkan Harga Beli Item"
                                        v-model="currencyInput"
                                    >
                                
                                    </input-number>   
                                    
                                    
                                <div class="invalid-feedback" v-if="errors.harga_beli">
                                    {{ errors.harga_beli[0] }}
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="form-group-sm mb-2">
                                <label for="unit_id">Satuan</label>
                                <select 
                                    name="unit_id" id="unit_id"
                                    class="form-control form-control-sm"
                                    v-model="editItemData.unit_id"
                                >
                                    <option value="">Pilih Satuan</option>
                                    <option v-for="unit in units" :key="unit.id" 
                                        :value="unit.id"
                                        >{{ unit.nama }}
                                    </option>
                                </select>
                                <div class="invalid-feedback" v-if="errors.unit_id">
                                    {{ errors.unit_id[0] }}
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="form-group-sm">
                                <label for="stok_awal">Stok Awal</label>
                                <input 
                                    type="number"
                                    class="form-control form-control-sm"
                                    placeholder="masukkan stok awal"
                                    v-model="editItemData.stok_awal"
                                />
                                <div class="invalid-feedback" v-if="errors.stok_awal">
                                    {{ errors.stok_awal[0] }}
                                </div>
                            </div>
                        </div>

                    </div>
                    
                    <hr />
                    <div class="text-right">
                        <button
                            type="button"
                            class="btn btn-danger btn-sm"
                            v-on:click="hideEditDataModal"
                        >
                            Cancel
                        </button>
                        <button type="submit" class="btn btn-dark btn-sm">
                            <span class="fa fa-check"></span> {{textButton}}
                        </button>
                    </div>
                </form>
            </div>
        </b-modal>

    </div>
</template>



<script>
import Datatable from '../components/khusus/Datatable.vue' //IMPORT COMPONENT DATATABLENYA
// import MyCurrencyInput from '../components/khusus/MyCurrencyInput.vue'
import InputNumber from '../components/khusus/InputNumber.vue'
// import axios from 'axios';
import * as itemService from "../services/items_service";

export default {

    
    
    components: {
        'app-datatable': Datatable, //REGISTER COMPONENT DATATABLE
        // 'my-currency-input': MyCurrencyInput, //REGISTER COMPONENT DATATABLE
        'input-number' : InputNumber    
    },
    //KETIKA COMPONENT INI DILOAD
    created() {
        //MAKA AKAN MENJALANKAN FUNGSI BERIKUT
        this.loadItemsData()
        this.kosongkanForm()
        // this.handleLoading(true)
    },
    
    data() {
        return {
            //UNTUK VARIABLE FIELDS, DEFINISIKAN KEY UNTUK MASING-MASING DATA DAN SORTABLE BERNILAI TRUE JIKA INGIN MENAKTIFKAN FITUR SORTING DAN FALSE JIKA TIDAK INGIN MENGAKTIFKAN
            // input:"10000",
            methodForms: "Add",
            // labelButton: "",
            fields: [
                {key: 'index', label:'index'},
                {key: 'nama', sortable: true},
                // {key: 'unit.nama', label:'Satuan'},
                {key: 'harga_beli', label:'Harga', formatter: (value, key, item) => {
                            return "Rp " + new Intl.NumberFormat().format(item.harga_beli) + " / "+ item.unit.nama
                            }, sortable: true, class:'text-right'},
                {key: 'stok_awal', sortable: true, class:'text-right'},
                {key: 'actions', label: 'Actions', class:'text-right'}

            ],
            items: [], //DEFAULT VALUE DARI ITEMS ADALAH KOSONG
            units: [], //DATA UNIT
            meta: [], //JUGA BERLAKU UNTUK META
            current_page: 1, //DEFAULT PAGE YANG AKTIF ADA PAGE 1
            per_page: 5, //DEFAULT LOAD PERPAGE ADALAH 5
            search: '',
            sortBy: 'created_at', //DEFAULT SORTNYA ADALAH CREATED_AT
            sortByDesc: false, //ASCEDING

            editItemData: {},
            errors:[],
            currencyInput: '', // husus input angka
            isInputActive: false,

            selectedRowsId:[],

            // pengaturan tombol
            tombolAddNew: true,
            tombolEdit:true,
        }
    },
    
    computed: {
        textButton: function() {
           return this.methodForms == "Add"? "Save":"Update"
        },
    },

    methods: {

        selectedDataId: function(item){
            // console.log('ok')

        },
        // remove select
       hapusDataTerseleksi: async function(val) {
            if (!window.confirm(`Are you sure you want to delete this selection data ?` )) {
                return;
            }
           const params = {'items': val}
            try {
                await itemService.deleteAllSelected(params);

                val.map(val => {
                    const index = this.items.indexOf(val)
                    this.items.splice(index,1)
                });

                // this.loadItemsData(); //DAN LOAD DATA BARU BERDASARKAN SORT
                this.flashMessage.success({
                    message: "Item DELETED successfully!",
                    time: 5000
                });
            } catch (error) {
                this.flashMessage.error({
                    message: error.response.data.message,
                    time: 5000
                });
            }
       },
        
        //METHOD INI AKAN MENGHANDLE REQUEST DATA KE API
        loadItemsData: async function() {
            this.isBusy = true;
            // this.handleLoading(true);
            let current_page = this.search == ''? this.current_page:1;
            let sorting = this.sortByDesc? 'DESC':'ASC';
            // let
            let params = { params : {
                page: current_page,
                per_page: this.per_page,
                q: this.search,
                sortby: this.sortBy,
                sortbydesc: sorting
            }};

            try {
                const response = await itemService.loadData(params); 
                console.dir(response);
                let getData = response.data.data
                this.items = getData.data //MAKA ASSIGN DATA POSTINGAN KE DALAM VARIABLE ITEMS
                this.units = response.data.data_unit
                console.log(response)
                // console.log(this.items[0].nama);
                //DAN ASSIGN INFORMASI LAINNYA KE DALAM VARIABLE META
                this.meta = {
                    total: getData.total,
                    current_page: getData.current_page,
                    per_page: getData.per_page,
                    from: getData.from,
                    to: getData.to 
                }
            } catch (error) {
                    console.log(''+error)
                    this.flashMessage.error({
                    message: "Some error occured, Please Refresh!",
                    time: 5000
                });
            }
        },
        
        //JIKA ADA EMIT TERKAIT LOAD PERPAGE, MAKA FUNGSI INI AKAN DIJALANKAN
        handlePerPage(val) {
            this.per_page = val //SET PER_PAGE DENGAN VALUE YANG DIKIRIM DARI EMIT
            this.loadItemsData() //DAN REQUEST DATA BARU KE SERVER
        },
        //JIKA ADA EMIT PAGINATION YANG DIKIRIM, MAKA FUNGSI INI AKAN DIEKSEKUSI
        handlePagination(val) {
            this.current_page = val //SET CURRENT PAGE YANG AKTIF
            this.loadItemsData()
        },
        //JIKA ADA DATA PENCARIAN
        handleSearch(val) {
            this.search = val //SET VALUE PENCARIAN KE VARIABLE SEARCH
            this.loadItemsData() //REQUEST DATA BARU
        },

        // handleLoading(val) {
        //     console.log(val);
        // },
        //JIKA ADA EMIT SORT
        handleSort(val) {
            //MAKA SET SORT-NYA
            this.sortBy = val.sortBy
            this.sortByDesc = val.sortDesc

            this.loadItemsData() //DAN LOAD DATA BARU BERDASARKAN SORT
        },

        removeData: async function(item) {
            
            if (!window.confirm(`Are you sure you want to delete ${item.nama} ?` )) {
                return;
            }

            try {
                await itemService.deleteItem(item.id);

                // this.items = this.items.filter(obj => {
                //     return obj.id != item.id;
                // });
                this.loadItemsData(); //DAN LOAD DATA BARU BERDASARKAN SORT

                this.flashMessage.success({
                    message: "Item DELETED successfully!",
                    time: 5000
                });
            } catch (error) {
                this.flashMessage.error({
                    message: error.response.data.message,
                    time: 5000
                });
            }
        },

        editData(item) {
            this.editItemData = {...item};
            // this.currencyInput = this.editItemData.harga_beli;
            this.currencyInput = String(this.editItemData.harga_beli);
            this.methodForms = "Edit";
            this.showEditDataModal();
        },

         addData() {        
            this.methodForms = "Add";
            this.kosongkanForm();
            this.showEditDataModal();
        },

        showEditDataModal() {
            this.$refs.editDataModal.show();
        },

        hideEditDataModal() {
            this.$refs.editDataModal.hide();
        },

        kosongkanForm() {
            this.editItemData.nama = "";
            this.editItemData.unit_id = "";
            this.editItemData.harga_beli = "";
            this.editItemData.stok_awal = "";
            this.currencyInput ="";
        },

        // create dan update data
        updateData: async function(item){

            const formData = new FormData();
            formData.append("nama", this.editItemData.nama);
            formData.append("harga_beli", this.currencyInput);
            formData.append("unit_id", this.editItemData.unit_id);
            formData.append("stok_awal", this.editItemData.stok_awal);
            
            if (this.methodForms == 'Add') {
                // ini untuk Add data
                try {
                   const response = await itemService.createItem(formData) 
                //    jika sukses
                //    this.items.unshift(response.data);
                    this.loadItemsData();
                   this.hideEditDataModal();
                   this.kosongkanForm();
                   this.flashMessage.success({
                        message: "Category stored successfully!",
                        time: 5000
                    });
                } catch (error) {
                    switch (error.response.status) {
                    case 422:
                        this.errors = error.response.data.errors;
                        break;

                    default:
                        this.flashMessage.error({
                            message: "Some error occured, Please Try Again!",
                            time: 5000
                        });
                        break;
                }
                }
            }else{
                // ini untuk edit data
                formData.append('_method', 'put');
                try {
                    const response = await itemService.updateItem(this.editItemData.id, formData)
                    this.items.map(item => {
                        if (item.id === response.data.id) {
                            for (let key in response.data) {
                                item[key] = response.data[key];
                            }
                        }
                    })

                    // jika success tutup modal dan munculkan pesan
                    this.hideEditDataModal();
                    this.flashMessage.success({
                        message: "Item Updated successfully!",
                        time: 5000
                    });
                } catch (error) {
                    this.flashMessage.error({
                        message: error.response.data.message,
                        time: 5000
                    });
                }
            }
            
            
        },
    }
}

</script>