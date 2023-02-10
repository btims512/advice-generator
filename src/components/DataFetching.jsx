import React, { useEffect, useState } from "react";

function DataFetching() {

  function loadActivity() {
    setIsLoading(true)
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data.slip.advice)
        setAdviceId(data.slip.id)
        setIsLoading(false)
      }
      );
  }

  const [advice, setAdvice] = useState([]);
  const [adviceId, setAdviceId] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    loadActivity();
  }, []);

  if(isLoading) {
    return <p className="loading">Loading...</p>
  }

  return (
    <div className="body">
      <div className="card-body">
      <div className="id-text">
      <h5>Advice #{adviceId}</h5>
      </div>
      <div className="quote-text">
      <p>"{advice}"</p>
      </div>
      <div className="line">
            <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
          </div>
          <div className="mobile-line">
          <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
          </div>
      </div>
          <div className="icon">
          <svg onClick={loadActivity} width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/> </svg>
          </div>
    </div>
    
  );
}

export default DataFetching;
