import FormCard from 'components/FormCard';
import { useParams } from 'react-router-dom';

function Form() {

    //pega o número do parametro que esta sendo enviado na requisição
    const params = useParams();

    return (
        <FormCard movieId = {`${params.movieId}`}/>
    )
}

export default Form;