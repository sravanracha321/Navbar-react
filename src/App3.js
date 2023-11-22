
 function App3(){
  var categories=["All","Electronics","Fashion","Footwear"];
  return(
      <div className="container-fluid">
          <h2>Nav</h2>
          <div>
              {
                  categories.map(category=>
                      <button className="btn btn-success me-2"key={category}>{category}
                      </button>
                      )
              }
          </div>
      </div>
  )
}
export default App;