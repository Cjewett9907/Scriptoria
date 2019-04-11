import Header from './header'
import React from 'react'
import {openModal, closeModal} from '../../actions/modal_actions'
import { connect } from 'react-redux';

const mstp = ({ session, entities: { users } }) => {

  return {
    currentUser: session.currentUser
  };
};


const mdtp = dispatch => ({
  openModal: (modalId) => dispatch(openModal(modalId)),
  closeModal: () => dispatch(closeModal())
})






export default connect(mstp, mdtp)(Header)
