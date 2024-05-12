import React from 'react';

function Question({ question, choix, handleQuestionChange, handleChoiceChange, ajouterChoix }) {
    return (
        <div className="flex flex-col w-full p-4 bg-gray-200 rounded-[50px] mt-4">
            {/* Input for the question */}
            <input
                type="text"
                placeholder="Question"
                value={question}
                onChange={(e) => handleQuestionChange(e.target.value)}
                className="px-4 py-2 mb-4 text-2xl bg-white rounded-md w-full"
                required
            />

            {/* Loop through the choices and render inputs for each */}
            {choix.map((choice, index) => (
                <div key={index} className="mb-2">
                    <input
                        type="text"
                        placeholder={`Choice ${index + 1}`}
                        value={choice}
                        onChange={(e) => handleChoiceChange(index, e.target.value)}
                        className="px-4 py-2 bg-white rounded-md w-full"
                        required
                    />
                </div>
            ))}

            {/* Button to add a new choice */}
            <button
                onClick={ajouterChoix}
                className="px-4 py-2 mt-2 bg-black text-white rounded-md"
            >
                Ajouter choix
            </button>
        </div>
    );
}

export default Question;
