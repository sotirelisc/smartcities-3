import React from 'react';
import { connect } from 'react-redux';
import {
  fetchUser,
  withdrawTokens
} from '../../actions';

class UserProfile extends React.Component {
  state = {
    amount: '',
    address: '0xf9a034532b994125493FbAfCd8D186AB81387c97'
  }

  componentDidMount() {
    this.props.fetchUser('5cd7e176a48c5b8480c3dd82');
  }

  onButtonClick = () => {
    this.props.withdrawTokens(this.props.user._id, this.state.address, this.state.amount);
  };

  renderTokenMessage() {
    if (this.props.tokens) {
      return (
        <div className="ui positive message">
          <div className="header">
            Done!
          </div>
          <p>
            {this.props.tokens.message}
          </p>
        </div>
      );
    }
  }

  render() {
    console.log(this.props);
    if (!this.props.user) {
      return 'Loading...';
    }

    return (
      <div className="container">
        <div className="ui segment">
          <div className="ui icon header">
            Hello, {this.props.user.name}!
          </div>
          <div className="ui positive message">
            <div className="header">
              You have {this.props.user.tokens} reward tokens!
            </div>
            <br />
            <p>Total donated amount: {this.props.user.donated}€.</p>
          </div>
        </div>
        <table className="ui celled padded table">
          <thead>
            <tr><th className="single line">Service</th>
            <th>Tokens Required</th>
            <th></th>
          </tr></thead>
          <tbody>
            <tr>
              <td>
                <h3 className="ui center aligned header">Lime</h3>
              </td>
              <td className="center aligned">100</td>
              <td className="center aligned"><button className="ui button primary">Redeem</button></td>
            </tr>
            <tr>
              <td>
                <h3 className="ui center aligned header">Parking</h3>
              </td>
              <td className="center aligned">300</td>
              <td className="center aligned"><button className="ui button primary">Redeem</button></td>
            </tr>
            <tr>
              <td>
                <h3 className="ui center aligned header">Uber</h3>
              </td>
              <td className="center aligned">300</td>
              <td className="center aligned"><button className="ui button primary">Redeem</button></td>
            </tr>
          </tbody>
        </table>
        <div className="ui segment">
          <div className="ui icon header">
            Advanced Settings
          </div>
          {this.renderTokenMessage()}
          <h4>Withdraw tokens</h4>
          <small>Your tokens are represented as an ERC20 Ethereum Token.</small>
          <div style={{ marginTop: '2em' }}>
            <div className="ui input">
              <input value={this.state.amount} onChange={e => this.setState({ amount: e.target.value })} type="text" placeholder="Place amount" />
            </div><br /><br />
            <div className="ui input">
              <input value={this.state.address}  onChange={e => this.setState({ address: e.target.value })} type="text" placeholder="Your Ethereum address" />
            </div><br /><br />
            <div onClick={() => this.onButtonClick()} className={`ui ${this.props.tokensLoading ? 'loading' : ''} button primary`}>
              Withdraw
            </div><br /><br />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.auth.user,
    tokens: state.auth.tokens,
    tokensLoading: state.auth.tokensLoading
  };
};

export default connect(mapStateToProps, {
  fetchUser,
  withdrawTokens
})(UserProfile);