import React from "react";

function FormField(props) {
  return (
    <div className="field">
      <div className="control">
        {props.type === "textarea" && (
          <textarea
            className="textarea is-medium"
            type={props.type}
            value={props.value}
            placeholder={props.placeholder}
            onChange={e => props.onChange(e.target.value)}
          ></textarea>
        )}

        {props.type !== "textarea" && (
          <input
            className="input is-medium"
            type={props.type}
            value={props.value}
            placeholder={props.placeholder}
            onChange={e => props.onChange(e.target.value)}
          ></input>
        )}
      </div>

      {props.error && <p className="help is-danger">{props.error.message}</p>}
    </div>
  );
}

export default FormField;
