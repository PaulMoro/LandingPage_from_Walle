fetch(' https://rickandmortyapi.com/api/character')
  .then(res => res.json())
  .then(data => {
    for (let i = 0; i < data.results.length; i++) {
      console.log(data.results[i])
    }
  })