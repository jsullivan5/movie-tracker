import { connect } from 'react-redux';
import Login from '../components/Login/Login';
import { usersFetchData, addUser } from '../actions';

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserData: (url, email, password) => dispatch(usersFetchData(url, email, password)),
    fetchNewUser: (url, email, password, name) => dispatch(addUser(url, email, password, name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
