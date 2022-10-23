class Anime {
    constructor(name, title, completed) {
        this.name = name,
        this.title = title,
        this.completed = completed,
    };

    watchedNewAnime() {
        this.completed++;
    }
}