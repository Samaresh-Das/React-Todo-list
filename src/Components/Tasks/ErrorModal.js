import classes from "./ErrorModal.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import  ReactDOM from 'react-dom'
import { Fragment } from "react";

const BackdropComponent = (props) => {
  return <div className={classes.backdrop} onClick={props.onDismiss} />;
};

const ModalComponent = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onDismiss}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackdropComponent onClick={props.onDismiss} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(<ModalComponent
        title={props.title}
        message={props.message}
        onDismiss={props.onDismiss}
      />, document.getElementById("modal"))}
    </Fragment>
  );
}; //onDismiss props comes from addUser

export default ErrorModal;
