import React, { useState } from 'react';
import "../index.css";
import Nav from "./layouts/navbar";
import Footer from "./layouts/footer";
import Question from "./layouts/question";
import { db } from "../fireBase/fireBase"
import { addDoc, collection } from 'firebase/firestore';

function CreateSurvey() {
    const [titre, setTitre] = useState('');
    const [description, setDescription] = useState('');
    const [questions, setQuestions] = useState([]);
    const [data, setData] = useState([]);

    const col = collection(db, "surveys")
    const clickdon = () => {
        
        const obj = {
            titre, description, questions
        }
        setData(e => ([...e, obj]))
       
        addDoc(col, obj);

        setTitre("");
        setDescription("");
        setQuestions([]);

    }

    const handleTitreChange = (e) => {
        setTitre(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    // Function to add a new question to the questions array
    const ajouterQuestion = () => {
        const newQuestion = {
            question: '',
            choix: ['', ''] 
        };
        setQuestions([...questions, newQuestion]);
    };

    // Function to update a specific question in the questions array
    const handleQuestionChange = (index, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].question = value;
        setQuestions(updatedQuestions);
    };

    // Function to update choices for a specific question
    const handleChoiceChange = (questionIndex, choiceIndex, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex].choix[choiceIndex] = value;
        setQuestions(updatedQuestions);
    };

    // Function to add a new choice to a specific question
    const ajouterChoix = (questionIndex) => {
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex].choix.push(''); // Add an empty choice
        setQuestions(updatedQuestions);

    };

    return (
        <div className="bg-black min-h-screen">
            <Nav />

            <div className="flex flex-col items-center justify-center">
                <div className="bg-white rounded-3xl p-10 w-[1141px] max-md:w-full mt-10">
                    <div className="text-4xl font-bold text-center text-black mb-8">
                        Créer un sondage:
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <input
                            type="text"
                            placeholder="Title"
                            value={titre}
                            onChange={handleTitreChange}
                            className="px-16 py-2 text-2xl font-bold text-center bg-gray-200 rounded-[50px] w-[521px] max-md:px-5"
                            required
                        />

                        <textarea
                            type="text"
                            placeholder="Description"
                            value={description}
                            onChange={handleDescriptionChange}
                            className="justify-center items-center px-16 py-5 mt-8 max-w-full text-2xl font-bold text-center bg-gray-200 rounded-[50px] w-[521px] max-md:px-5"
                            required
                        />
                    </div>

                    <div className=" gap-5 items-center mt-12 w-full text-2xl text-black max-w-[1141px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                        {questions.map((questionData, index) => (
                            <Question
                                key={index}
                                question={questionData.question}
                                choix={questionData.choix}
                                handleQuestionChange={(value) => handleQuestionChange(index, value)}
                                handleChoiceChange={(choiceIndex, value) => handleChoiceChange(index, choiceIndex, value)}
                                ajouterChoix={() => ajouterChoix(index)}
                            />
                        ))}
                    </div>

                    <div className="flex gap-5 items-center font-bold max-w-[1141px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full mt-5">
                        <button
                            className="justify-center px-7 py-2 bg-gray-200 rounded-[50px] max-md:px-5"
                            onClick={ajouterQuestion}
                        >
                            Ajouter une question
                        </button>
                        <button className="grow justify-center items-center px-16 py-2 whitespace-nowrap bg-green-500 rounded-[50px] w-fit max-md:px-5" onClick={clickdon}>
                            Done
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default CreateSurvey;
