import axios from 'axios';

const shuffleArray=(array)=>{
  return [...array].sort(()=>Math.random()-0.5) 
}

export  const quizapi=async (difficulty,amount)=>{
  try {
  const url=`https://opentdb.com/api.php?${difficulty}&amount=${amount}`
  const response = await axios.get(url);
  const data = response.data; // API'den gelen veriye buradan erişiyoruz
 return data.results.map((question)=>
({...question,answers: shuffleArray([...question.incorrect_answers,question.correct_answer])

}))
  }
  catch (error) {
    console.error("API request failed:", error);
    throw error;
  }
};





/* 
 return axios.get(url)

.catch(error => {
  console.error("API request failed:", error);
  throw error;  

  
}); */