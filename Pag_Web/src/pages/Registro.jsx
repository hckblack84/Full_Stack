import FormRegistro from "../components/Form";
import MainLoyaut from '../layouts/MainLayout';
import '../assets/styles/Registro.css';


function Registro() {
    return (
        
        <div className="inicio">
             <FormRegistro />
             <MainLoyaut/>
            
        </div>
    );
}

export default Registro;