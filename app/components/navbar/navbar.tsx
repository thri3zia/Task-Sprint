import Container from "../container";
import Form from "./Form";
import UserMenu from "./UserMenu";
import Logo from "./logo";


const Navbar = () => {
    return(
        <div className="w-full bg-red z-10 shadow-sm ">
            <div className="py-4 border-bb[1px]">
                <Container>
                   <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                    <Logo/>
                    <UserMenu/>
                   </div>
                </Container>
            </div> 
                
        </div>
    )
}
export default Navbar;