import React from "react";

class Detail extends React.Component {
  render() {
    const { location, history } = this.props;
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      history.push("/");
      return null;
    }
  }
}

export default Detail;
