import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  rootNav: {
    flexGrow: 1,
    backgroundColor:"#b30b43",
    height:"80px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  titleNav: {
    flexGrow: 1,
    fontSize: '2em'
  },
  buttonNav: {
    fontSize: '1.5em'
  },
  rootHome: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'space-between',
    alignItems: 'center'
  }
});
export default theme;