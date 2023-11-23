
 function Button7(){
    var categories=["All","Electronics","Fashion","Footwear","Homeneeds"];
    return(
        <div className="container-fluid">
            <h2>Nav</h2>
            <div>
                {
                    categories.map(category=>
                        <button className="btn btn-info me-2"key={category}>{category}
                        </button>
                        )
                }
            </div>
        </div>
    )
  }
  export default Button7;