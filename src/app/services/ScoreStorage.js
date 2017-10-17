 export function scoreStorage () {
  const scoreIncrement = 3;

  let _scores = [
    {id: 0, name: 'Dolmen en Dobo', score: 0, active: true},
    {id: 1, name: 'JIN 2000', score: 0, active: true},
    {id: 2, name: 'Kriko-m en Tereken', score: 0, active: true},
    {id: 3, name: 'Vincies en Sint-Kristoffel', score: 0, active: true},
    {id: 4, name: 'Bermijn en Martinus', score: 0, active: true},
    {id: 5, name: 'Tarci en Kriko', score: 0, active: true},
    {id: 6, name: 'Chiro', score: 0, active: true}
  ];

  function init(){
     let storedScores = JSON.parse(localStorage.getItem('scores'));

     if(storedScores){
       _scores = storedScores;
       console.log(storedScores)
     }
  }

  function addPointToScore (id) {
    _scores[id].score = _scores[id].score + scoreIncrement;
    setStoredScores();
  }

  function getScores () {
    return _scores;
  }

  function disableLast (){
    let lowestScore = {score: 99999};
    for (var i = 0; i < _scores.length; i++) {
      if( _scores[i].score < lowestScore.score && _scores[i].active === true) {
        lowestScore = _scores[i];
      }
    }
    _scores[lowestScore.id].active = false;
    localStorage.setItem('scores',JSON.stringify(_scores));
    return lowestScore.id;
  }

  function setStoredScores(){
    localStorage.setItem('scores',JSON.stringify(_scores));
  }

  init();

  return {
    addPointToScore: addPointToScore,
    getScores: getScores,
    disableLast: disableLast
  };


}
