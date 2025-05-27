import './App.css'
import UserProfile from './component/UserProfile'

function App2() {
  return(
    <div style = {{display: "flex", justifyContent: "center", gap: "20px"}}>
      <UserProfile name="철수" age={25} job="개발자" avatar="/src/assets/cat1.jpg" />
      <UserProfile name="영희" age={23} job="디자이너" avatar="/src/assets/cat2.jpg" />
      <UserProfile name="민수" age={30} job="마케터" avatar="/src/assets/cat3.jpg" />
    </div>
  );
}

export default App2;
