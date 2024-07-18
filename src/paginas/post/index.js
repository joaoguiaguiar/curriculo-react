import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import './post.css';
import posts from '../../json/posts.json';
import PostModelo from '../../componentes/PostModelo';
import fotoBanner from '../../assets/Foto-banner-1.png'

const Post = () => {
    const parametros = useParams();

    // Encontra o objeto no array 'posts' cujo ID corresponde ao 'parametros.id'
    const post = posts.find((p) => p.id === Number(parametros.id));

    if (!post) {
        return <p>Post não encontrado!</p>; 
    }

    return (
        <PostModelo
           fotoCapa={fotoBanner}
            // fotoCapa={`/IMG/posts/${post.id}/capa.png`}
            titulo={post.titulo}>

            <div className='container__elementos'>
                <div className="post-markdown-container">
                    <ReactMarkdown className='texto'>{post.texto}</ReactMarkdown>
                </div>
            </div>

        </PostModelo>
    );
};

export default Post;
