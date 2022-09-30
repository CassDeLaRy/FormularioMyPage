import InputGeneral from "../atoms/InputGeneral";
import '../assets/style/body.css';

function Formulario() {
    const dataObject = [
      {
        type: "text",
        label: "Name(s):",
        placeholder: "Name(s)"
      },
      { 
        type: "text",
        label: "First Last Name:",
        placeholder: "Type your first last name" 
      },
      { 
        type:"text",
        label: "Second Last Name:",
        placeholder: "Type your second last name"
      },
      { type:"range",
        label: "Age:",
        placeholder: "", 
        minAge: "0",
        maxAge: "100",
        step: "1"
      },
      { type: "email",
        label: "E-mail:",
        placeholder: "Preferred e-mail" 
      },
      { 
        type: "radio",
        label2: "Sex:",
        label: "Female",
        placeholder: "" 
      },
      { 
        type: "radio",
        label: "Male",
        placeholder: "" 
      },
      { 
        type: "tel",
        label: "Telephone:",
        placeholder: "Where do we call you?" 
      },
      { 
        type: "date",
        label: "Birthday:",
        placeholder: "Get into birthday"
      },
      { 
        type: "password",
        label: "Create a password:",
        placeholder: "Type your own password here" 
      },
      { 
        type: "submit",
        label: "Upload: ",
        placeholder: ""
      }
    ];
    return ( 
        dataObject.map((info)=>(
            <InputGeneral
            type={info.type}
            label={info.label}
            placeholder={info.placeholder}
            label2={info.label2}
            type2={info.type2}
            />
        ))
    );
}

export default Formulario;