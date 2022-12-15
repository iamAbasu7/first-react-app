const date = new Date().getDay();
const month = new Date().getMonth();
const year = new Date().getFullYear();
const todayDate = `${date}/${month}/${year}`;
// const headingStyle={
//   backgroundColor:"Blue",
//   color:"red",
//   textAlign:"center",
//   fontSize:"3rem",
//   padding:"15px"
// }


export default function Card(props){
  const {titleText,descText} = props; //Distructuring
  return(
    <div>
      <div className="card">
          <h2 className="cardTitle">{titleText}</h2>
          <h3 className="cardDesc">{descText}</h3>
          <p className="cardFooter">{todayDate}</p>
      </div>
    </div>         
  )
}