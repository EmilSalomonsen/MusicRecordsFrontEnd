const baseurl = "https://danmarksradiorestserver.azurewebsites.net/api/MusicRecord"

Vue.createApp({

    data(){
        return{
            musicrecords: [],
            parametersToGetBy: "",
            addData: {title: "", artist: "", duration: 0, publicationYear: 0},
            addMessage: "",
            deleteTitle: "",
            deleteMessage: "",
            updateTitle: "",
            updateData: {title: "", artist: "", duration: 0, publicationYear: 0},
            updateMessage: "" 
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
        },

        getByParameters(parameter){
            const url = baseurl + "?title=" + parameter
            this.helperGetAndShow(url)
            console.log(this.musicrecords)
        },
        async addRecord() {
            try {
                response = await axios.post(baseurl, this.addData)
                this.addMessage = "response " + response.status + " " + response.statusText
                this.getAllMusicrecords()
            } catch (ex) {
                alert(ex.message)
            }
        },
        async deleteRecord(deleteTitle) {
            const url = baseurl + "/" + deleteTitle
            try {
                response = await axios.delete(url)
                this.deleteMessage = response.status + " " + response.statusText
                this.getAllMusicrecords()
            } catch (ex) {
                alert(ex.message)
            }
        },
        async updateRecord() {
            const url = baseurl + "/" + this.updateData.title
            try {
                response = await axios.put(url, this.updateData)
                this.updateMessage = "response " + response.status + " " + response.statusText
                this.getAllMusicrecords()
            } catch (ex) {
                alert(ex.message)
            }
        }

    }
}).mount("#app")