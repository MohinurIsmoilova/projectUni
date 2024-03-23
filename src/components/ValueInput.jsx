import React, { useState } from "react";

export const ValueInput = () => {
  const [inputValue, setInputValue] = useState(""); // State to manage input value
  const [sentences, setSentences] = useState([]); // State to manage displayed sentences
  const [renameIndex, setRenameIndex] = useState(null); // State to manage index of sentence being renamed
  const [newName, setNewName] = useState(""); // State to manage new name for the sentence being renamed

  // Function to handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Function to handle button click
  const handleButtonClick = () => {
    if (inputValue.trim()) {
      // Check if the input value is not empty or whitespace
      setSentences((prevSentences) => [...prevSentences, inputValue.trim()]); // Add new sentence to the array of sentences
      setInputValue(""); // Clear the input field
    }
  };

  // Function to handle renaming
  const handleRename = (index) => {
    setRenameIndex(index); // Set the index of the sentence being renamed
    setNewName(sentences[index]); // Set the initial value for the input field to the current name of the sentence
  };

  // Function to confirm renaming
  const confirmRename = () => {
    if (newName.trim()) {
      // Check if the new name is not empty or whitespace
      setSentences((prevSentences) => {
        const updatedSentences = [...prevSentences];
        updatedSentences[renameIndex] = newName.trim(); // Update the name of the sentence at the specified index
        return updatedSentences;
      });
      setRenameIndex(null); // Reset the rename index
      setNewName(""); // Clear the input field
    }
  };

  // Function to handle sentence deletion
  const handleDelete = (index) => {
    setSentences((prevSentences) => {
      const updatedSentences = [...prevSentences];
      updatedSentences.splice(index, 1); // Remove the sentence at the specified index
      return updatedSentences;
    });
  };

  return (
    <>
      <div className="container">
        <div className="mt-16 p-4">
          <h1 className="text-2xl">Значение</h1>

          <div className="flex space-x-20 mt-6">
            <div>
              <form>
                <label htmlFor="text">
                  <input
                    type="text"
                    placeholder="Write something"
                    className="w-[300px] h-[40px] shadow-2xl p-4 rounded-lg"
                    value={inputValue} // Bind input value to state
                    onChange={handleInputChange} // Handle input change
                  />
                </label>
              </form>
              <button
                className="w-[100px] h-[30px] bg-blue-500 text-white rounded-xl mt-5 ml-20"
                onClick={handleButtonClick} // Handle button click
              >
                Click
              </button>
            </div>

            <div className="shadow-2xl">
              {/* Display each sentence separately with rename, delete functionality */}
              {sentences.map((sentence, index) => (
                <div key={index} className="p-4 flex items-center">
                  <p>
                    {index + 1}. {sentence}
                  </p>
                  {renameIndex === index ? ( // Render input field for renaming if the current index matches the rename index
                    <>
                      <input
                        type="text"
                        placeholder="New name"
                        className="w-[200px] h-[30px] shadow-2xl p-2 ml-4 rounded-lg"
                        value={newName} // Bind new name value to state
                        onChange={(e) => setNewName(e.target.value)} // Handle new name input change
                      />
                      <button
                        className="ml-2 bg-green-500 text-white px-3 py-1 rounded-md"
                        onClick={confirmRename} // Handle rename confirmation
                      >
                        Confirm
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="ml-4 bg-blue-500 text-white px-3 py-1 rounded-md"
                        onClick={() => handleRename(index)} // Handle rename button click
                      >
                        Rename
                      </button>
                      <button
                        className="ml-4 bg-red-500 text-white px-3 py-1 rounded-md"
                        onClick={() => handleDelete(index)} // Handle delete button click
                      >
                        Delete
                      </button>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
