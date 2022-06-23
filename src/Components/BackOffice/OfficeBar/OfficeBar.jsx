import { useNavigate } from "react-router-dom";

const OfficeBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <section>
        <div>
          <h5>Back Office</h5>
          <button onClick={() => navigate("/BackOffice/Users")}>Users</button>
          <button onClick={() => navigate("/BackOffice/Events")}>Events</button>
          <button onClick={() => navigate("/BackOffice/Extra")}>Extra</button>
          <button onClick={() => navigate("/BackOffice/Signal")}>Signal</button>
        </div>
      </section>
    </>
  );
};
export default OfficeBar;
