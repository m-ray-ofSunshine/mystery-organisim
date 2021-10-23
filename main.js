// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, arr) => {
  return {
    specimenNum: num,
    dna: arr,
    mutate: function () {
      let randomBase = Math.floor(Math.random() * 15)
      let newBase = returnRandBase()
      if(newBase != this.dna[randomBase]){
      this.dna[randomBase] = newBase
      } else {
        this.mutate()
      }
    },
    compareDNA: function (pAequor) {
      let sameCount = 0
      for(let i = 0; i < this.dna.length; i++){
        if(this.dna[i] === pAequor.dna[i]) {
          sameCount++
        }
      }
      let percent = sameCount/15
      return `Specimen #1 and specimen #2 have ${percent}% in common.`
    }
  }
}






