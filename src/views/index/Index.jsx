import React, { Component } from 'react';
import './Index.scss'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

export default class Index extends Component {
  render() {
    return(
      <div>
        <Header />
        <Footer />
      </div>
    )
  }
}
