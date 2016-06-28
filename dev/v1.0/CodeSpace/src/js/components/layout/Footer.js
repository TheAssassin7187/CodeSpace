import React from "react";


export default class Footer extends React.Component {
  render() {
	  const style = {
		  position: "relative",
		  display: "block"
	  }
    return (
      <footer style={style}>
        <div >
          <div class="col-lg-12">
            <p>Copyright &copy; KillerNews.net</p>
          </div>
        </div>
      </footer>
    );
  }
}
