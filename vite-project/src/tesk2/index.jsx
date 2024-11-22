// import { createRoot } from 'react-dom/client'
// import { Component} from "react"
// import "./index.css";

// const root = document.getElementById("root")

// class App extends Component{
//   render(){
//     return <p className='badimcan'>tdgsyfhujkasfhbadsdAdnc</p>;
//   }
// }
// createRoot(root).render(<App />)

import React, { Component } from 'react';

class PersonalInfo extends Component {
  render() {
    const { ad, yas, yasayisYeri } = this.props;
    return (
      <div>
        <h1>Şəxsi Məlumatlar</h1>
        <p><strong>Ad:</strong> {ad}</p>
        <p><strong>Yaş:</strong> {yas}</p>
        <p><strong>Yaşayış Yeri:</strong> {yasayisYeri}</p>
      </div>
    );
  }
}

export default PersonalInfo;

