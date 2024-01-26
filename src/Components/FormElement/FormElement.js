import React from "react";
import classes from "../FormElement/FormElement.module.scss";
import FormComponent from "../FormComponent/Form";

const FormElement = () => {
    return (
        <div className={classes.formBox} >
        <div>
        <div  className={classes.formTxt}>Connect with us today!</div>
        <div className={classes.formtxt2}>Share your details and we will get in touch with soon.</div>
</div>
        <FormComponent/>
        </div>
    );
};

export default FormElement;