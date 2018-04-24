import { isAuthenticated } from '../actions/index';

const log = ({ getState, dispatch }) => next => action => {
  console.log('middleware running.....');
  // dispatch(isAuthenticated());
  next(action);
};

export default log;
