import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  root: {
    flexGrow: 1,
    backgroundColor:"#b30b43",
    height:"80px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    flexGrow: 1,
    fontSize: '2em'
  },
  button: {
    fontSize: '1.5em'
  }
});
export default theme;