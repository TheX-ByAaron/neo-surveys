import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {services, Get, Post} from "../services/crud.services";
import QuestionCard from "../components/QuestionCard";

const Survey = ()=>{
    let urlParams = useParams();
    const [survey, setSurvey] = useState({});
    
    useEffect(()=>{
        Get(services.LIST_SURVEYS, urlParams.idSurvey)
        .then((result)=>{
            setSurvey(result.data);
            console.log(result.data);
        });
    },[urlParams.idSurvey]);

    return (
        <div className="min-h-screen grid content-center justify-items-center">
            <p className="w-4/5 m-2 font-bold text-3xl text-center">
                You are now taking the survey
            </p>
            <p className="m-2 text-xl font-bold">
                {survey?.name}
            </p>
            <div className="my-4 mb-6 w-full mx-auto text-center">
                {
                    survey?.questions?.map( (question, index) => (
                        <QuestionCard 
                            statement={question.statement} 
                            key={index}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default Survey;