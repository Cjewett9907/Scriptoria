import { connect } from 'react-redux';
import SplashIndex from './splash_index';


// import searchFrom from '../search/search_form'

const mapStateToProps = ({session, entities }, ownProps) => {


  return {
    ownProps: ownProps
  };
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashIndex);
