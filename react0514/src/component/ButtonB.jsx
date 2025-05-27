function ButtonB({text="블로그", color = "blue", Children}){

    function handleOnClick(){
        alert(text);
    }

    function noClick(){
        alert("you left");
    }

    return(

        <button style = {{color:color}}
                onClick={handleOnClick}
                onMouseEnter={handleOnClick}
                onMouseLeave={noClick}>
            {text} : {color}
            {Children}
        </button>

    );
}

export default ButtonB;