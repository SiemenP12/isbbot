const YouTube = require('youtubei');
/**
 * Represents a playlist.
 */
class Playlist {
    /**
     * @param {Object} playlist The Youtube playlist
     * @param {Queue} queue The queue in which the playlist
     * @param {String} requestedBy The request user
     */
    constructor(playlist, queue, requestedBy) {
        /**
         * Playlist name.
         * @type {String}
         */
        this.name = playlist.title;
        /**
         * Author channel of the playlist.
         * @type {String}
         */
        this.author = playlist.channel.name;
        /**
         * Youtube playlist URL.
         * @type {String}
         */
        this.url = playlist.url;
        /**
         * Array of Playlist songs.
         * @type {Song[]}
         */
        this.videos = playlist.videos;
        /**
         * Playlist video count.
         * @type {Number}
         */
        this.videoCount = playlist.videoCount;
        const circularReplacer = () => {
            const seen = new WeakSet();
            return (key, value) => {
                if (typeof(value) === "object" && value !== null) {
                if (seen.has(value)) {
                         return;
                     }
                     seen.add(value);
               }
               return value;
           };
        };
        this.toString = () => {
            return JSON.stringify(this,circularReplacer())
        }
    }
}

module.exports = Playlist;