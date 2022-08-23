import './App.css';
import ImageGalley from './ImageGalley';
import { useState, useRef } from 'react';

function App() {
  const [fetchData, setFetchData] = useState([]);
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(ref.current.value);

    //APIキー
    const API_KEY = "29462107-41fb28188ef2f19f52ff03817";
    //APIURL
    const seachURL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + ref.current.value;
    //データフェッチング
    fetch(seachURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        //console.log(data.hits);
        setFetchData(data.hits);
      });
  };

  return (
    <div className="container">
      <h2>My pixabay</h2>
      <h3>WebAPI学習(Pixabayのクローンアプリ)</h3>
      <p>使い方 ①検索したい画像名を入力 ②Enter</p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder='画像を探す' ref={ref}></input>
      </form>
      <ImageGalley fetchData={fetchData} />
    </div>
  );
}

export default App;
