import { useState } from "react";

function Viewer({ number }) {
  return <div>{number % 2 === 0 ? <h3>짝수</h3> : <h3>홀수</h3>}</div>;
}

function Body(){

    /* console.log("Update!");

    const [count, setCount] = useState(0);

    function onIncrease() {
        setCount(count + 1);
    }; 

    const onIncrease = () => {
        setCount(count + 1);
    };

    return(
        <div>
            <h2> {count} </h2>
            <button onClick={onIncrease}>+</button>
        </div>
    ); */

    /* const [text, setText] = useState("");
    const [date, setDate] = useState("");
    const [option, setOption] = useState("");
    const [area, setArea] = useState("");

    const handleOnChange = (e) => {
        setText(e.target.value);
    };

    function handleOnChange(e) {
        setText(e.target.value);
    };

    function handleOnDate(e) {
        setDate(e.target.value);
    };

    function handleOnSelect(e) {
        setOption(e.target.value);
    };

    function handleOnArea(e) {
        setArea(e.target.value);
    };

    return (
        <div>
            <div>
                <input type="text" value={text} onChange={handleOnChange} placeholder="한 줄 입력" />
                <div> {text} </div>
            </div>

            <div>
                <input type="date" value={date} onChange={handleOnDate} />
                <div> {date} </div>
            </div>

            <div>
                <select value={option} onChange={handleOnSelect}>
                    <option key="{1번}"> 1번 </option>
                    <option key="{2번}"> 2번 </option>
                    <option key="{3번}"> 3번 </option>
                </select>
                <div> {option} </div>
            </div>

            <div>
                <textarea rows="10" cols="80" value={area} onChange={handleOnArea} />
                <div> {area} </div>
            </div>

        </div>
    ); */

    /* const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [birth, setBirth] = useState("");
    const [bio, setBio] = useState("");

    const onChangeName = (e) => {
        setName(e.target.value);
    };
    const onChangeGender = (e) => {
        setGender(e.target.value);
    };
    const onChangeBirth = (e) => {
        setBirth(e.target.value);
    };
    const onChangeBio = (e) => {
        setBio(e.target.value);
    };

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} placeholder="이름" />
                <div>{name}</div>
            </div>
            <div>
                <select value={gender} onChange={onChangeGender}>
                    <option key={""}></option>
                    <option key={"남성"}>남성</option>
                    <option key={"여성"}>여성</option>
                </select>
                <div>{gender}</div>
            </div>
            <div>
                <input type="date" value={birth} onChange={onChangeBirth} />
                <div>{birth}</div>
            </div>
            <div>
                <textarea value={bio} onChange={onChangeBio} />
                <div>{bio}</div>
            </div>
        </div>
    ); */

    /* const [state, setState] = useState({
        name: "",
        gender: "",
        birth: "",
        bio: "",
    });

    const handleOnChange = (e) => {
        console.log("현재 수정 대상:", e.target.name);
        console.log("수정값:", e.target.value);
        setState({
        ...state,
        [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            <div>
                <input name="name" value={state.name} onChange={handleOnChange} placeholder="이름" />
                <div>{state.name}</div>
            </div>
            <div>
                <select name="gender" value={state.gender} onChange={handleOnChange}>
                    <option key={""}></option>
                    <option key={"남성"}>남성</option>
                    <option key={"여성"}>여성</option>
                </select>
                <div>{state.gender}</div>
            </div>
            <div>
                <input name="birth" type="date" value={state.birth} onChange={handleOnChange}
                />
                <div>{state.birth}</div>
            </div>
            <div>
                <textarea name="bio" value={state.bio} onChange={handleOnChange} />
                <div>{state.bio}</div>
            </div>
        </div>
    ); */

    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        setNumber(number + 1);
    };

    const onDecrease = () => {
        setNumber(number - 1);
    };

    return (
        <div>
            <h2>{number}</h2>
            <Viewer number={number} />
            <div>
                <button onClick={onDecrease}>-</button>
                <button onClick={onIncrease}>+</button>
            </div>
        </div>
    );

}

export default Body;