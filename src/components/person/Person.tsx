import { IPerson } from "../../model/IPerson";
import styles from "./Person.module.css";

const Person: React.FC<{ person: IPerson }> = (props) => {
  return (
    <div className={styles.person}>
      <h2>{props.person.id}</h2>
      {props.person.firstname} {props.person.lastname}
    </div>
  );
};

export default Person;
