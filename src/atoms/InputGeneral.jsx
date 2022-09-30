
function InputGeneral({type, label, label2, placeholder, type2}) {
    return ( 
        <>
        <form>
        <div id="inputGeneral">
            <p>{label2}</p>
            <p>{label}</p>
            <input type={type} placeholder={placeholder}/>
        </div>
        </form>
        </>
    );
}

export default InputGeneral;