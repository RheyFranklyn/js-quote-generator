document.querySelector(".btn").addEventListener("click", (e) => {
    const quotes = getRandomData('quote')
    
    const {quote, author} = quotes;
    document.querySelector("p").innerText = quote;
    document.querySelector("h3").innerText = author;
  });
  
  function getRandomData(type){
    return data[type][rn(data[type].length)];
  }
   
  const quote = [{
    quote: '“But that was life: Nobody got a guided tour to their own theme park. You had to hop on the rides as they presented themselves, never knowing whether you would like the one you were in line for...or if the bastard was going to make you throw up your corn dog and your cotton candy all over the place.”',
    author: 'J.R. Ward, Crave'},
   {
    quote: '“Her name badge read: Hello! My name is DIE, DEMIGOD SCUM!”',
    author: 'Rick Riordan, The Son of Neptune'},
   {
    quote: '“A musician must make music, an artist must paint, a poet must write, if he is to be ultimately at peace with himself. What a man can be, he must be”',
    author: 'Abraham Maslow'
  }, 
   {
    quote: '“Insane means fewer cameras!”',
    author: 'Ally Carter, Only the Good Spy Young'
  },
    {
    quote: '“Im about as intimidating as a butterfly.”',
    author: 'Dan Howell'
  },
     {
    quote: '“The lampshade on my head is for my bright ideas. I wont be able to convey them until Monday, when my curtain gets out of the dry cleaners.”',
    author: 'Bauvard, Some Inspiration for the Overenthusiastic'
  },
     {
    quote: '“Some quotations," said Zellaby, "are greatly improved by lack of context.”',
    author: 'John Wyndham, The Midwich Cuckoos'
  },
      {
    quote: '“Never ask an elf for help; they might decide your better off dead, eh?”',
    author: 'Christopher Paolini, Eldest'
  }];
  
  function rn(len) {
    return Math.floor(Math.random() * len);
  }
  
    const data = {
      quote
    };