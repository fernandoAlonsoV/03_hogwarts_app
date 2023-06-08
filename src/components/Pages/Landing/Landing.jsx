import { connect } from "react-redux";

import Loader from "../../UI/atoms/Loader/Loader";
import Table from "../../UI/organisms/Table/Table";

const Landing = ({showLoading}) => {

    return (
       <>
        {
          showLoading ? <Loader /> : <Table  />
        }
       </>
    );
}
 

const mapStateToProps= state =>{
    return {
      showLoading: state.showLoading
    }
}
  

   
export default connect(mapStateToProps)(Landing);