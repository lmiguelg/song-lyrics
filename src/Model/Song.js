class Song{
    constructor(title, artist){

        this.title = title;
        this.artist = artist;

    }
    getTitle(){
        return this.title;
    }
    setTitle(newTitle){
        this.title = newTitle;
    }
    getArtist(){
        return this.artist;
    }
    setArtist(newArtist){
        this.artist = newArtist;
    }
}
export default Song