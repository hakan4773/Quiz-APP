import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import QuestionsCard from '../components/QuestionsCard';
import *as Api from '../Api/Api';
import Modal from '../components/Modal';

function Quiz() {
  const {difficulty,amount}=useParams();
  const [questions, setQuestions] = useState([]); //sorular için state
  const [loading, setLoading] = useState(true);  //yükleniyor yazısı için sstate
  const [error, setError] = useState(null);//hatalar için state
  const [score,setScore]=useState(0)
  const [count,setCount]=useState(0)
  const [modal,setModal]=useState(false)
  const [trueanswer,setTrueanswer]=useState([])  //CEVAPLARI TUTAN STATE
console.log(questions)
  useEffect(() => {
    Api.quizapi(difficulty, amount)
      .then(data => {
        setQuestions(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>Hata: {error}</div>;

  return (
    <div className='w-full h-screen flex overflow-hidden items-center justify-center bg-purple-600'>

      { modal ? <Modal score={score}  setTrueanswer={setTrueanswer}   trueanswer={trueanswer} /> : 
          <QuestionsCard 
          questions={questions} 
          count={count}
          setCount={setCount}
          score={score}
          setScore={setScore}
          modal={modal}
          setModal={setModal}
          loading={loading}
          error={error}
          setTrueanswer={setTrueanswer} //
          trueanswer={trueanswer} //
        />
      }
       
     
 
    
    </div>
  );
}

export default Quiz
