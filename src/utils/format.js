class Output {
    constructor(result, data){
        this.result = result;
        this.data = data
        return {
            result: this.result,
            data: this.data
        }
    }
}

module.exports = Output