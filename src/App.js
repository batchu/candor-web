import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import routes from 'src/routes';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from './redux/actions'

function mapStateToProps(state){
  console.log(`state is ${state}`)
  return {
    user: state.user,
    settings:state.settings
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actions, dispatch)
}


const Main = () => {
  const routing = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {routing}
    </ThemeProvider>
  );
};
const App = connect(mapStateToProps, mapDispatchToProps)(Main)

export default App
