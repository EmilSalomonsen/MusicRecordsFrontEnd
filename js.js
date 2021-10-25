const baseurl = "https://danmarksradiorestserver.azurewebsites.net/api/MusicRecord"

Vue.createApp({

    data(){
        return{
            musicrecords: []
        }
    },


    methods:
    {
        getAllMusicrecords(){
            this.helperGetAndShow(baseurl)
        },

        async helperGetAndShow(url) { // helper metode: getAllCar + getByVendor are very similar
            console.log(url)
            try {
                const response = await axios.get(url)
                console.log("Efter get")
                this.musicrecords = await response.data
                console.log(this.musicrecords)
            } catch (ex) {
                alert(ex.message) // https://www.w3schools.com/js/js_popup.asp
            }
        }

    }
}).mount("#app")