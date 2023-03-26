function uniqueWords(text){
    const words = text.toLowerCase().split(" ");
    const words_set = {};
    for(const word of words){
      if(words_set[word]){
        words_set[word] += 1;
      }else{
        words_set[word] = 1;
      }
    }
  
    const sortedSet = Object.fromEntries(
      Object.entries(words_set).sort((a, b) => b[1] - a[1])
    );
    return Object.keys(sortedSet);
  }