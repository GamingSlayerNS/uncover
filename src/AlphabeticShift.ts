class Alphabetizer {
    alphabetize(input: string[]): string[] {
        let sentences = input;
        
        return sentences.sort(function (a, b) {
            return a.toLowerCase().localeCompare(b.toLowerCase())
        })
    }
}

// class LineStorage {
//     storeLine() {return null}
// }

export default Alphabetizer;
