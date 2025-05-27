function UserProfile({name, age, job, avatar}){
    return(
        <div style={{border: "1px solid #ddd", padding: "15px", borderRadius: "8px", width: "250px", textAlign: "center", margin: "10px"}}>
            <img src={avatar} alt={`${name}의 프로필`} style = {{width: "80px", height: "80px", borderRadius: "50%"}} />
            <h2>{name}</h2>
            <p>나이: {age}세</p>
            <p>직업: {job}</p>
        </div>
    );
}

export default UserProfile;
