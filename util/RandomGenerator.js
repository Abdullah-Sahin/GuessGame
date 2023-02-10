class RandomGenerator{
    
    static guessNumber(min,maxExcluded){
        return Math.floor(Math.random() * (maxExcluded - min)) + min;
    }

    static guessNumberExcept(min, maxExcluded, exception){
        let result = this.guessNumber(min, maxExcluded);
        if(result === exception){
            result = this.guessNumberExcept(min, maxExcluded);
        }
        return result;
    }
}

export default RandomGenerator;