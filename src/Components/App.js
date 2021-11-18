import BoxLeft from "./BoxLeft/BoxLeft";
import BoxRight from "./BoxRight/BoxRight";
import data from "./Data.json";
function App() {
  return (
    <div id="wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div id="main-content">
              <div className="row">
                <BoxLeft></BoxLeft>
                <div className="col-md-8">
                  <div className="row">
                    {data.map((value, key) => (
                      <BoxRight value={value}></BoxRight>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
