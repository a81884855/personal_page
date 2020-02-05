import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';

class Mode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'Easy',
    };
  }

  handleChange(event) {
    let cols = 0;
    let rows = 0;
    let mines = 0;
    const { modeChangeHandle } = this.props;
    if (event.target.value === 'Easy') {
      cols = 10; rows = 10; mines = 10;
    } else if (event.target.value === 'Hard') {
      cols = 22; rows = 17; mines = 40;
    } else {
      cols = 30; rows = 20; mines = 99;
    }
    this.setState({
      [event.target.name]: event.target.value,
    });
    modeChangeHandle(cols, rows, mines);
  }

  render() {
    const { mode } = this.state;
    return (
      <FormControl id="mode">
        <Select
          autoWidth
          value={mode}
          onChange={this.handleChange.bind(this)}
          input={<Input name="mode" id="mode" />}
        >
          <MenuItem value="Easy">Easy</MenuItem>
          <MenuItem value="Hard">Hard</MenuItem>
          <MenuItem value="NightMare">Nightmare</MenuItem>
        </Select>
      </FormControl>
    );
  }
}

export default Mode;
