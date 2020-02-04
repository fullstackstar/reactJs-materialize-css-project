import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Header from './elements/header';
import M from 'materialize-css';

export default class Manifest extends Component {

  state = {
    manifests: [
      {
        isMoreVisible: false,
        members: [
          {
            name: "John Smith",
            product: "4000ft"
          },
          {
            name: "Susan",
            product: "INST-Tandem"
          },
          {
            name: "Jumperboy",
            product: "10,000ft"
          }
        ]
      },
      {
        isMoreVisible: false,
        members: [
          {
            name: "John Smith",
            product: "4000ft"
          },
          {
            name: "Susan",
            product: "INST-Tandem"
          },
          {
            name: "Jumperboy",
            product: "10,000ft"
          }
        ]
      }
    ]
  }

  componentDidMount(){
    M.Modal.init(this.modal)
  }

  showMoreProducts = (index) => {
    this.state.manifests[index] = {
      ...this.state.manifests[index],
      isMoreVisible: true
    }
    this.setState({
      manifests: this.state.manifests
    })
  }

  addMore(){
    this.state.manifests.push({
      isMoreVisible: false,
      members: [
        {
          name: "John Smith",
          product: "4000ft"
        },
        {
          name: "Susan",
          product: "INST-Tandem"
        },
        {
          name: "Jumperboy",
          product: "10,000ft"
        }
      ]
    },)
    this.setState({
      manifests: this.state.manifests
    })
  }

  render(){
    return (
      <div>
      <Header></Header>
      <div className="row">

  {/* <!-- Modal Structure --> */}
  <div id="modal1" className="modal" ref={modal => this.modal = modal}>
    <div className="modal-content">
    <h4>Products</h4>
    <div className={'col s12 m12'}>
          <ul className="collection">

            <li className="collection-item">4000ft</li>
            <li className="collection-item">10,000ft</li>
            <li className="collection-item">4000ft Renting</li>
            <li className="collection-item">10,000ft Renting</li>
            <li className="collection-item">INST-Tandem</li>
            <li className="collection-item">INST-Tandem Owns</li>
            <li className="collection-item">INST-SL/IAD</li>
            <li className="collection-item">INST-Coach</li>
            <li className="collection-item">STU-Coach</li>
            <li className="collection-item">STU-Tandem</li>
            <li className="collection-item">STU-SL/IAD</li>
          </ul>
        </div>
    </div>
    <div className="modal-footer mt">
      <a href="#!" className="modal-close waves-effect waves-light btn">Close</a>
    </div>
    <br></br>
  </div>


  <div className="col s12 m12 m6">
    <div className="card darken-1">
      <div className="card-content">
        <span className="card-title">Manifest: Flight Providers (Center name) </span>
        <div>
        <form>
          {this.state.manifests.map((manifest, index) => {
            return <div className="row" key={index}>
            <div className={'col s12 m12'}>
              <ul className="collection">
                <li className='collection-item row pb-0 bb-0'>
                <div className='col s12'>
                  <div className={'float-right'}>
                  <a className="mr-10 btn mb-10">Product1</a>
              <a className="mr-10 btn mb-10">Product2</a>
              <a className="waves-effect waves-light btn modal-trigger mr-10 btn mb-10" href="#modal1">...</a>
                  </div>

              </div>
                </li>
                {/* <li className="collection-item inverted row">
                    <div className='col s5'>Display Name</div>
                    <div className='col s5'>Product</div>
                    <div className='col s2'></div>

                </li> */}
                <li className="collection-item row pb1 bb-0">
                    <div className='col s5 f-13'>John Smith</div>
                    <div className='col s5 f-13'>4000ft</div>
                    <div className='col s2 f-13'><span className="float-right color-red"><i className="material-icons">delete</i></span></div>
                </li>
                <li className="collection-item row pb1">
                    <div className='col s5 f-13'>Susan</div>
                    <div className='col s5 f-13'>INST-Tandem</div>
                    <div className='col s2 f-13'><span className="float-right color-red"><i className="material-icons">delete</i></span></div>
                </li>
                <li className="collection-item row pb1">
                    <div className='col s5 f-13'>Jumperboy</div>
                    <div className='col s5 f-13'>10,000ft</div>
                    <div className='col s2 f-13'><span className="float-right color-red"><i className="material-icons">delete</i></span></div>
                </li>
                <li className="collection-item row pb1">
                    <div className='col s5 f-13'>Jumperboy</div>
                    <div className='col s5 f-13'>10,000ft</div>
                    <div className='col s2 f-13'><span className="float-right color-red"><i className="material-icons">delete</i></span></div>
                </li>
              </ul>
            </div>

          </div>
          })}


    </form>
    <div className={'row'}>
      <div className={'col s12'}>
      <a href="" onClick={(e) => {this.addMore(); e.preventDefault()}} ><span style={{fontSize: '22px'}}>Add +</span></a>
      </div>
    </div>
        </div>
      </div>

    </div>
  </div>

</div>
</div>
  )
  }

}