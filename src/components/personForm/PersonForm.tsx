import { useState } from "react";

const PersonForm: React.FC<{
  onAddPersonHandler?: (firstname: string, lastname: string) => void;
}> = (props) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onAddPersonHandler?.(firstname, lastname);
    setFirstname("");
    setLastname("");
  };

  const onFirstnameChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstname(event.target.value);
  };

  const onLastnameChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLastname(event.target.value);
  };

  return (
    <div>
      <form action="submit" onSubmit={onSubmitHandler}>
        <label htmlFor="firstname">Firstname</label>
        <input
          type="text"
          id="firstname"
          value={firstname}
          onChange={onFirstnameChangeHandler}
        />
        <label htmlFor="lastname">Lastname</label>
        <input
          type="text"
          id="lastname"
          value={lastname}
          onChange={onLastnameChangeHandler}
        />
        <button type="submit">Add Person</button>
      </form>
    </div>
  );
};

export default PersonForm;
