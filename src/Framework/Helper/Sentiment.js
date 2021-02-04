const analyse = require("simple-sentiment-lib");

class Sentiment {

    static analyze(text) {
        let result = analyse(text)
        return result
    }
}

module.exports = Sentiment