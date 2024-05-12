import React, { useState } from 'react';

function QuestionComponent({ question,choices }) {
   // Initialize state for selected choices and click counts of each choice
   const [clickCounts, setClickCounts] = useState(choices.map(() => 0));
   const [selectedChoices, setSelectedChoices] = useState(choices.map(() => false)); // Keeps track of selected choices

   // State to track the total number of clicks
   const [totalClicks, setTotalClicks] = useState(0);

   // Function to handle click events
   const handleChoiceClick = (index) => {
       // Toggle the selection state of the clicked choice
       setSelectedChoices((prevSelected) => {
           const newSelected = [...prevSelected];
           newSelected[index] = !prevSelected[index]; // Toggle selection

           // Update the click counts based on the new selection state
           setClickCounts((prevCounts) => {
               const newCounts = [...prevCounts];

               // Increase or decrease the count based on whether the choice was selected or deselected
               if (newSelected[index]) {
                   newCounts[index]++;
                   setTotalClicks((prevTotal) => prevTotal + 1);
               } else {
                   newCounts[index]--;
                   setTotalClicks((prevTotal) => prevTotal - 1);
               }

               return newCounts;
           });

           return newSelected;
       });
   };

   return (
       <div className="grid">
           <div className="flex flex-col items-center mt-3 gap-4">
               {/* Display the question at the top */}
               <h3 className="text-lg font-bold mb-4">{question}</h3>
               
               {choices.map((choice, index) => {
                   // Calculate the percentage of clicks for each choice
                   const percentage = totalClicks > 0 ? (clickCounts[index] / totalClicks) * 100 : 0;

                   return (
                       <div
                           key={index}
                           onClick={() => handleChoiceClick(index)}
                           className={`flex justify-between items-center w-[200px] h-6 text-white px-10 py-2 bg-black rounded-full max-md:px-5 max-md:max-w-full cursor-pointer ${selectedChoices[index] ? 'bg-gray-700' : 'bg-black'}`}
                       >
                           {/* Display the percentage before each choice */}
                           <span className="text-sm pr-2">({percentage.toFixed(1)}%)</span>
                           <span>{choice}</span>
                           {/* Display the click count next to each choice */}
                           <span>({clickCounts[index]})</span>
                       </div>
                   );
               })}
           </div>
       </div>
   );
}

export default QuestionComponent;
