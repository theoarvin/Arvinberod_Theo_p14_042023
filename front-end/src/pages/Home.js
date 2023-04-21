import React, { useState, useRef } from "react";
import Header from "../components/Header";
import Modal from "../components/Modal"
import { Link } from "react-router-dom";
import Form from "../components/Form";
//import { Modal } from "modal-theoab"

function Home() {
  const [openModal, setOpenModal] = useState(false)
  
  return (
    <div>
      <Header />
      <div className="container">
        <Link to='/employee'>View Current Employees</Link>
        <h2>Create Employee</h2>
        <Form setOpenModal={setOpenModal}/>
      </div>
      <Modal openModal={openModal} setOpenModal={setOpenModal}/>
    </div>
  );
}

export default Home;
