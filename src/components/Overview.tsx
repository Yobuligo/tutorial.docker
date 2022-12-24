import { useState } from "react";
import { IPerson } from "../model/IPerson";
import { PersonDAO } from "../model/PersonDAO";
import styles from "./Overview.module.css";
import PersonOverview from "./person/PersonOverview";

const Overview: React.FC = () => {
  const [persons, setPersons] = useState<IPerson[]>(PersonDAO.findAll());

  const onAddPersonHandler = (firstname: string, lastname: string): void => {
    PersonDAO.create(firstname, lastname);
    console.log(`New person ${firstname} ${lastname} was added.`);
    setPersons([...PersonDAO.findAll()]);
  };

  return (
    <div className={styles.overview}>
      <h2>Person Overview</h2>
      <PersonOverview
        persons={persons}
        onAddPersonHandler={onAddPersonHandler}
      />
    </div>
  );
};

export default Overview;
