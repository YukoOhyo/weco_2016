// http://jsbin.com/zoxekirupa/edit?html,js,output
//JS Bin
//***HTML**********************************************

<!DOCTYPE html>
<html>
<head>
<script src="//fb.me/react-with-addons-0.14.3.js"></script>
<script src="//fb.me/react-dom-0.14.3.js"></script>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>React.js</title>
</head>
<body>
<div id="where">
  </div>
</body>
</html>

//***HTML**********************************************

//***JSX**********************************************

var AddThing = React.createClass({
  // 這元件包含了input、button，用來增加新的必修課程
  getInitialState: function(){
    return {
      newThing: ''
    }
  },
  updateNewThing: function(e){
    //每次輸入更新值
    this.setState({
      newThing: e.target.value
    })
  },
  handleAddNew: function(){
    // 按下button時，將資料更新到父層
    this.props.addNew(this.state.newThing);
    this.setState({
      newThing: ''
    })
  },
  render: function(){
    return(
      <div>
        <input type="text" value={this.state.newThing} onChange={this.updateNewThing} />
        <button onClick={this.handleAddNew}>Add +</button>
      </div>
    )
  }
});

var ThingList = React.createClass({
  render: function(){
    // 透過 this.props 讀取父層得值
    var listItems = this.props.Things.map(function(item){
      console.log({item});
      return <li>{item}</li>;
    });
    return (
      <div>
        <h2>必修</h2>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
});

var HelloFJU = React.createClass({
  getInitialState: function(){
    return {
      Thing: "資工系",
      allThings: ['程式語言', '資料結構', '演算法'] 
      //要給內層用的陣列
    }
  },
  addNewThing: function(newThing){
    console.log(newThing);
    // 更新allThings資料
    this.state.allThings.push(newThing);
    this.setState({
      allThings: this.state.allThings
    })
  },
  render: function(){  
    return (
      // 模組子層addNew更新時，觸發addNewThing
      <div>
        <h1>輔仁大學 _  {this.state.Thing}！</h1>
        <AddThing addNew={this.addNewThing} />
        <ThingList Things={this.state.allThings} />
      </div>
    )
  }
});

React.render(<HelloFJU />,
document.getElementById('where'));

//***JSX**********************************************
