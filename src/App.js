import logo from './logo.svg';
import './App.scss';
import TextField from './TextFields';
import TranslateButton from './TranslateButton';
import CustomTextField from './CustomTextField';
import { Configuration, OpenAIApi } from 'openai';
import { useState } from 'react';

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration);



function App() {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  const handleClick = async () => {
  console.log(`the key is ${process.env.REACT_APP_OPENAI_API_KEY}`)
  console.log("clicked in App Component");
  const response = await openai.createCompletion({
    model: "text-babbage-001",
    prompt: `You are a chatbot whose job is to translate casual, colloquial, slang filled text into text that is formal and professional .\n\n${inputValue}\n\nTranslation:`,
    temperature: 0.65,
    max_tokens: 159,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  console.log(response);
  let output = response.data.choices[0].text.replace(/(\r\n|\n|\r)/gm,""); 
  output = '\n' + output;
  console.log(output);
  setOutputValue(output);
  console.log(inputValue);
  localStorage.setItem(inputValue, outputValue);
  console.log(Object.keys(localStorage));
  console.log(Object.values(localStorage))
}

  return (
    <div className="app">
      <div className="heading">
        <h1><span className='keyword'> Formal to Informal </span>Translator</h1>
        <h3>This tool takes in a casual, colloquial, and possibly slang-filled input text, then translates it into text written in a formal and professional manner</h3>
      </div>
      <div className="container">
        <div className="quote">
          <CustomTextField readOnly={false} label="Informal" onChange={(value) => setInputValue(value)}/>
        </div>
        <div className="button">
          <TranslateButton onClick={() => handleClick()}/>
        </div>
        <div className="quote">
          <CustomTextField readOnly={true} label="Formal" defaultValue={outputValue}/>
        </div>
      </div>
    </div>
  );
}

export default App;
