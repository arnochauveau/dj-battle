 export function scoreStorage () {
  // 21u – 22u: KLJ
  // 22u – 23u: JIN '99
  // 23u – 0u: Kriko-m, Tereken, Akabe
  // 0u– 01u: Bermijn, D’olmen, Dobo
  // 1u- 2u: Chiro Gewest Rondom
  // 2u-3u: Vincies, Kristoffel, Martinus
  // 3u-4u: Kriko & Tarsicius

  let _scores = [
    {id: 0, name: 'KLJ', score: 0, active: true},
    {id: 1, name: 'JIN \'99', score: 0, active: true},
    {id: 2, name: 'Kriko-m, Tereken, Akabe', score: 1, active: true},
    {id: 3, name: 'Bermijn, D\'olmen, Dobo', score: 0, active: true},
    {id: 4, name: 'Chiro Gewest Rondom', score: 0, active: true},
    {id: 5, name: 'Vincies, Kristoffel, Martinus', score: 3, active: true},
    {id: 6, name: 'Kriko & Tarsicius', score: 2, active: true}
  ];

  function addPointToScore (id) {
    _scores[id].score = _scores[id].score + 1;
  }

  function getScores () {
    return _scores;
  }

  function disableLast (){
    let lowestScore = {score: 99999};
    for (var i = 0; i < _scores.length; i++) {
      if( _scores[i].score < lowestScore.score) {
        lowestScore = _scores[i];
      }
    }
    _scores[lowestScore.id].active = false;

  }

  return {
    addPointToScore: addPointToScore,
    getScores: getScores,
    disableLast: disableLast
  };
}
