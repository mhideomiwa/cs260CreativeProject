document.getElementById("wordSubmit").addEventListener("click",function(event){
    event.preventDefault();
    const value = document.getElementById("wordEntry").value;
    if (value ==="")
        return;
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + value
    /*global fetch*/fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(json){
            let results = "";
            results += '<div class = "definition">'
            results += '<h2>Definition of <b>' + json[0].word + '</b></h2>';
            results += "<p>"
            for (let i = 0; i < json[0].meanings.length; i++) {
                results += '<em>' + json[0].meanings[i].partOfSpeech + '</em>' + '<ol>'
                for (let j = 0; j < json[0].meanings[i].definitions.length; j++) {
                    results +=  '<li>' + json[0].meanings[i].definitions[j].definition + '</li>'
                    }
                results += '</ol>'
            }
            results += "</p>"
            results += '</div>'
            console.log(json)
            document.getElementById("wordResults").innerHTML = results;
        })
})