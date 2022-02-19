import { createStore } from 'redux';
import { Provider } from 'react-redux';
import RootReducer from './reducers/rootReducer';

export default (props) => {
    const store = createStore(RootReducer);
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}