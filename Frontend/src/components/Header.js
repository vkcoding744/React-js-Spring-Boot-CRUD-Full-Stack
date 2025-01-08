import { Card,CardBody } from "reactstrap";
function Header()
{
    return (
      <div style={{textAlign:"center"}}>    
      <Card className="my-3">
        <CardBody>
            <h2 style={{color:'red'}}>Welcome to Course Application</h2>
            <h5 style={{textAlign:'center',color:'grey'}}>React Js + Backend Spring Boot</h5>
        </CardBody>
      </Card>

      </div>
    )
}
export default Header;