import React, { useEffect,useState } from "react";
import './App.css';
import GetList from './components/GetList';

function App() {

  const [studentList,  setStudentList] = useState([]);
  useEffect(()=>{
    async function fetchStudentList() {
      try { 
        const requesUrl = 'https://616be81116c3fa001717181a.mockapi.io/api/student';
        const reponse = await fetch(requesUrl);
        const reponseJSON = await reponse.json();
        console.log(reponseJSON);
        setStudentList(reponseJSON);
      } catch {

      }
    }
    fetchStudentList();
  }, []);

  
  return (
   <div>
      < GetList /> 
      </div>
  );
}

export default App;
