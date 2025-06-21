import SentimentAnalyzer from "./Components/SentimentAnalyzer";
// import bgVideo from './assets/emoji.mp4';
// import bgImage from './assets/bg/full-shot-smiley-woman-with-smartphone.jpg'

function App() {
  return (
    <div className="h-[100vh] w-[100vw] bg-[url('./assets/bg/full-shot-smiley-woman-with-smartphone.jpg')] bg-cover">


      <div className="">
        <SentimentAnalyzer />
      </div>
    </div>
  );
}

export default App;
