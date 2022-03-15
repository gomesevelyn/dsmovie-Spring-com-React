import FormCard from 'components/FormCard';
import { Link, useParams } from 'react-router-dom';
import { Movie } from 'types/movie';

function Form() {

    //pega o número do parametro que esta sendo enviado na requisição
    const params = useParams();

    return (
        <FormCard movieId = {`${params.movieId}`}/>
    )
}

export default Form;