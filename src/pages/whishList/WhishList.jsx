import { CiHeart } from "react-icons/ci";


function WhishList() {
  return (
    <>
      <div className="d-flex justify-content-center gap-4 align-items-center my-4 ">
        <h3 style={{ color: "#179C6C", fontSize: "30px" }}>المفضلة</h3>
        <CiHeart   size={45} color="#179C6C" />
      </div>
    </>
  );
}

export default WhishList;
