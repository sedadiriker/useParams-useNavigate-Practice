import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const PersonDetail = () => {
  const[person,setPerson] = useState(null)
  const params = useParams()
  const{id} = params
  const navigate = useNavigate()

  useEffect(() => {
    const getPerson = async () => {
      const URL = `https://reqres.in/api/users/${id}`;

      try {
        const res = await axios(URL);

        if (res.status !== 200) {
          throw new Error("API isteği başarısız");
        }
        const { data } = res;
        console.log(data)
        setPerson(data.data);
      } catch (err) {
        console.log(err);
        throw err;
      }
    };

    getPerson();
  }, [id]);
  return (
    <div className="d-flex justify-content-center mt-5">
        {person && (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={person.avatar} />
                <Card.Body>
                    <Card.Title>{person["first_name"]} {person["last_name"]}</Card.Title>
                    <Card.Text>
                        {person.email}
                    </Card.Text>
                    <Button onClick={() => navigate(-1)} variant="primary">Back</Button>
                </Card.Body>
            </Card>
        )}
    </div>
);

}

export default PersonDetail
