import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const [people, setPeople] = useState([]);
//   console.log(people);
  const navigate = useNavigate()

  useEffect(() => {
    const getPerson = async () => {
      const URL = "https://reqres.in/api/users";

      try {
        const res = await axios(URL);

        if (res.status !== 200) {
          throw new Error("API isteği başarısız");
        }
        const { data } = res;
        setPeople(data.data);
      } catch (err) {
        console.log(err);
        throw err;
      }
    };

    getPerson();
  }, []);
  return (
    <div className="text-center mt-5">
      <h3 className="my-5 fs-1">People</h3>
      <div className="d-flex justify-content-center align-items-center gap-5 flex-wrap">
        {people.map(({ id, avatar }) => (
          <div onClick={() => navigate(`/user/${id}`) } role="button" key={id}>
            <img src={avatar} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
