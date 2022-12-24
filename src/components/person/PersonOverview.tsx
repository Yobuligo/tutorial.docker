import { useState } from "react";
import { IPerson } from "../../model/IPerson";
import PersonForm from "../personForm/PersonForm";
import Person from "./Person";
import styles from "./PersonOverview.module.css";

const PersonOverview: React.FC<{
  persons: IPerson[];
  onAddPersonHandler: (firstname: string, lastname: string) => void;
}> = (props) => {
  const [showAddPerson, setShowAddPerson] = useState(false);
  const items = props.persons.map((person) => {
    return <Person key={person.id} person={person} />;
  });

  const onAddPersonButtonHandler = () => {
    setShowAddPerson(!showAddPerson);
  };

  const onAddPersonHandler = (firstname: string, lastname: string): void => {
    props.onAddPersonHandler(firstname, lastname);
  };

  return (
    <div className={styles.personOverview}>
      {showAddPerson ? (
        <PersonForm onAddPersonHandler={onAddPersonHandler} />
      ) : (
        ""
      )}
      {showAddPerson ? (
        ""
      ) : (
        <button onClick={onAddPersonButtonHandler}>Add Person</button>
      )}
      {items}
    </div>
  );
};

export default PersonOverview;
