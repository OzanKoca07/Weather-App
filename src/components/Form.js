
import React from "react";
import { Button } from 'reactstrap';

const Form = ({ getWeather, setCity }) => {
  return (
    <form onSubmit={getWeather}>
      <input
        type="text"
        placeholder="Hangi şehrin hava durumunu merak ediyosun"
        onChange={(e) => setCity(e.target.value)}
      />
        <Button
        type = "submit"
        color="primary"
        >
        Hava durumunu çek
        </Button>
    </form>
  );
};

export default Form;

