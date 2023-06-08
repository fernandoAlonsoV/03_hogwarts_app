import { connect } from "react-redux";

import Image from "../../atoms/Image/Image";
import Button from "../../atoms/Button/Button";
import Select from "../../atoms/Select/Select";
import {
  deleteApplicantsList,
  getApplicantsList,
} from "../../../../redux/actionCreator";

const Table = ({
  applicants,
  deleteApplicants,
  getApplicants,
}) => {

  const iterateApplicants = (applicants) =>
    applicants.map(({ id, image, name, species, house, patronus }) => (
      <tr key={id}>
        <td>
          <Image
            source={
              image
                ? image
                : "https://plus.unsplash.com/premium_photo-1667873584030-ad34ab3f0f0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80"
            }
            altName={name ? name : "Desconocido"}
          />
        </td>
        <td>{name ? name : "Desconocido"}</td>
        <td>{species ? species : "Desconocido"}</td>
        <td>{house ? house : "Desconocido"}</td>
        <td>{patronus ? patronus : "Desconocido"}</td>
        <td>
          <Button text="Ocultar" click={()=>alert('me falto implementar esta funcionalidad')}/>
        </td>
      </tr>
    ));
  
  const getAppicantsHouses = () => (
    [
      { val: "Gryffindor", content: "Gryffindor" },
      { val: "Hufflepuff", content: "Hufflepuff" },
      { val: "Ravenclaw", content: "Ravenclaw " },
      { val: "Slytherin", content: "Slytherin " },
    ]
  )


  return (
    <table>
      <caption>Lista de aspirantes a Hogwarts</caption>
      <thead>
        <tr>
          <th colSpan="2">
            <Button text="Limpiar lista" click={deleteApplicants} />
          </th>
          <th colSpan="2">
            <Button text="Lista completa" click={getApplicants} />
          </th>
          <th colSpan="2">
            <Select
              label="Casa"
              name="house"
              options={getAppicantsHouses()}
            />
          </th>
        </tr>
        <tr>
          <th>Foto</th>
          <th>Nombre</th>
          <th>Especie</th>
          <th>Casa</th>
          <th>Patronus</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>{iterateApplicants(applicants)}</tbody>
    </table>
  );
};

const mapStateToProps = (state) => ({
  applicants: state.applicants,
});

const mapDispatchToProps = (dispatch) => ({
  deleteApplicants() {
    dispatch(deleteApplicantsList());
  },
  getApplicants() {
    dispatch(getApplicantsList());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
